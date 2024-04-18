"use client";
import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import FoodCard from "@/app/ui/food/foodCard";
import { getFoods } from "@/api/axios";
import { CircularProgress } from "@mui/material";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [foods, setFoods] = useState([]);

  // 获取角色数据
  const fetchFoods = async () => {
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

  return (
    <div>
      <h5 className={"font-serif text-3xl text-amber-100 mx-2"}>Food</h5>
      <Divider className={"bg-gray-500 my-2"}></Divider>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={"flex flex-wrap  overflow-y-auto"}>
          {foods.map((food: Food, index) => (
            <FoodCard key={index} food={food} />
          ))}
        </div>
      )}
    </div>
  );
}
