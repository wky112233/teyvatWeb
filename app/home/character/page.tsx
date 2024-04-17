"use client"
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CharacterCard from "@/app/ui/character/characterCard";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxSelect from "@/app/ui/search/checkBoxSelect";
import {Regions} from "@/public/data/selectData";
import axios from 'axios';

function fetchCharacters(region: string) {
    axios.get(`http://127.0.0.1:8000/characters?region=${region}`)
        .then(response => {
            console.log(response.data);  // 打印响应数据到控制台
        })
        .catch(error => {
            console.error('Error fetching characters:', error);
        });
}

const characters:CharacterCardProps[] = [
        {
            Name: "Navia",
            location: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2023/12/18/35428890/3fc7580c01a9e622692402889706c4db_8301615651200775487.png?x-oss-process=image%2Fformat%2Cwebp",
            Birthday: "8/16",
            Title: "Helm of the Radiant Rose",
            Vision: "Geo",
            Version_Released: "4.3",
            Constellation: "Rosa Multiflora",
            Affiliation: "Spina di Rosula",
            Region: "Fontaine",
        },
        {
            Name: "Furina",
            Birthday: "10/13",
            Title: "Endless Solo of Solitude",
            Vision: "Hydro",
            Version_Released: "4.2",
            Constellation: "Animula Choragi",
            Affiliation: "Court of Fontaine",
            Region: "Fontaine",
            location: "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/11/06/35428890/263e5ea0784d182b393f67a7e24146a5_2961704185113948066.png?x-oss-process=image%2Fformat%2Cwebp"
        },
    ]

export default function Page() {
    // const [characters, setCharacters] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('Fontaine');


    // // 当选中区域改变时，重新获取数据
    // useEffect(() => {
    //     fetchCharacters(selectedRegion);
    // }, [selectedRegion]);  // 只有当 selectedRegion 改变时才运行

    // 处理选择框变化的函数
    const handleRegionChange = (region: string) => {
        setSelectedRegion(region);
    };

    return (
        <div>
            <h5 className={"font-serif text-3xl text-amber-100 mx-2"}>
                Character
            </h5>
            <Divider className={"bg-gray-500 my-2"}></Divider>
            <div className={"flex w-1/2 h-16 items-center"}>
                <h5 className={"font-serif text-base text-amber-100 ml-2 justify-center"}> filter </h5>
                <div className={"items-center w-full"}>
                    <CheckBoxSelect selectSize={"small"} items={Regions} onSelect={handleRegionChange}></CheckBoxSelect>
                </div>
                <button
                    className={"bg-gray-600 px-3 p-2 text-amber-50 rounded-md text-base hover:bg-gray-700"}>Confirm
                </button>
            </div>
            <div className={"flex flex-wrap  overflow-y-auto"}>
                {/*CharacterCardList*/}
                {characters.map((character: CharacterCardProps, index) => (
                    <CharacterCard key={index} {...character}/>
                ))}
            </div>
        </div>);
}