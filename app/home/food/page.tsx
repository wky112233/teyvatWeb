"use client";
import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import FoodCard from "@/app/ui/food/foodCard";
import {getFoods} from "@/api/axios";
import CheckBoxSelect from "@/app/ui/checkBoxSelect";
import {Regions} from "@/public/data/selectData";

export default function Page() {
    const [loading, setLoading] = useState(false);
    const [foods, setFoods] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState("Fontaine");

    // 获取角色数据
    const fetchFoods= async () => {
        setLoading(true);
        try {
            const response = await getFoods();
            setFoods(response.data); // 假设响应的数据在data字段中
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch foods", error);
            setLoading(false);
        }
    };

    // 当选中区域改变时，重新获取数据
    useEffect(() => {
        fetchFoods();
    }, []);

    // 处理选择框变化的函数
    const handleRegionChange = (region: string) => {
        setSelectedRegion(region);
    };

    return (
        <div>
            <h5 className={"font-serif text-3xl text-amber-100 mx-2"}>Character</h5>
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
                {foods.map((food: Food, index) => (
                    <FoodCard key={index} food={food} />
                ))}
            </div>
        </div>
    );
}
