"use client";
import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import MaterialCard from "@/app/ui/material/materialCard";
import CheckBoxSelect from "@/app/ui/checkBoxSelect";
import { Regions } from "@/public/data/selectData";
import { getMaterials } from "@/api/axios";

export default function Page() {
    const [loading, setLoading] = useState(false);
    const [materials, setMaterials] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState("Fontaine");

    // 获取角色数据
    const fetchMaterials = async () => {
        setLoading(true);
        try {
            const response = await getMaterials();
            setMaterials(response.data); // 假设响应的数据在data字段中
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch materials", error);
            setLoading(false);
        }
    };

    // 当选中区域改变时，重新获取数据
    useEffect(() => {
        fetchMaterials();
    }, []);

    // 处理选择框变化的函数
    const handleRegionChange = (region: string) => {
        setSelectedRegion(region);
    };

    return (
        <div>
            <h5 className={"font-serif text-3xl text-amber-100 mx-2"}>Material</h5>
            <Divider className={"bg-gray-500 my-2"}></Divider>
            <div className={"flex w-1/2 h-16 items-center"}>
                <h5
                    className={"font-serif text-base text-amber-100 ml-2 justify-center"}
                >
                    filter
                </h5>
                <div className={"items-center w-full"}>
                    <CheckBoxSelect
                        selectSize={"small"}
                        items={Regions}
                        onSelect={handleRegionChange}
                    ></CheckBoxSelect>
                </div>
                <button
                    className={
                        "bg-gray-600 px-3 p-2 text-amber-50 rounded-md text-base hover:bg-gray-700"
                    }
                >
                    Confirm
                </button>
            </div>
            <div className={"flex flex-wrap  overflow-y-auto"}>
                {/*CharacterCardList*/}
                {materials.map((material: Material, index) => (
                    <MaterialCard key={index} material={material} />
                ))}
            </div>
        </div>
    );
}
