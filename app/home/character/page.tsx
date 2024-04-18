"use client";
import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import CharacterCard from "@/app/ui/character/characterCard";
import CheckBoxSelect from "@/app/ui/checkBoxSelect";
import { Regions } from "@/public/data/selectData";
import { getAffiliations, getAllCharacters } from "@/api/axios";
import { CircularProgress } from "@mui/material";
import { useSnackbar } from "@/contexts/SnackbarContext";

export default function Page() {
  const { showMessage } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [affiliations, setAffiliations] = useState<Affiliation[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  // 获取角色数据
  const fetchCharacters = async () => {
    setLoading(true);
    getAllCharacters()
      .then((response) => {
        setCharacters(response.data);
        return getAffiliations();
      })
      .then((response) => {
        setAffiliations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        showMessage("Failed to fetch characters or affiliations", "error");
        setLoading(false);
      });
  };

  // 当选中区域改变时，重新获取数据
  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleRegionChange = (regions: string[]) => {
    console.log("handleRegionChange:", regions); // 显示设置前的值
    if (characters.length > 0 && affiliations.length > 0) {
      if (regions.length > 0) {
        const filtered = characters.filter((character) =>
          affiliations.some(
            (affiliation) =>
              affiliation.affiliation_id === character.affiliation_id &&
              regions.includes(affiliation.nation),
          ),
        );
        setFilteredCharacters(filtered);
      } else {
        setFilteredCharacters(characters);
      }
    }
  };

  return (
    <div>
      <h5 className={"font-serif text-3xl text-amber-100 mx-2"}>Character</h5>
      <Divider className={"bg-gray-500 my-2"}></Divider>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <div className={"flex w-1/2 h-16 items-center"}>
            <h5
              className={
                "font-serif text-base text-amber-100 ml-2 justify-center"
              }
            >
              filter
            </h5>
            <div className={"items-center w-full"}>
              <CheckBoxSelect
                selectSize={"small"}
                items={Regions}
                onSelect={handleRegionChange}
              />
            </div>
          </div>
          <div className={"flex flex-wrap overflow-y-auto"}>
            {filteredCharacters.length > 0 ? (
              <div className={"flex flex-wrap overflow-y-auto"}>
                {filteredCharacters.map((character: Character) => (
                  <CharacterCard
                    key={character.character_name}
                    character={character}
                  />
                ))}
              </div>
            ) : (
              <p className="text-amber-100 text-xl center">
                No characters found for this region.
              </p> // 提示没有找到角色
            )}
          </div>
        </div>
      )}
    </div>
  );
}
