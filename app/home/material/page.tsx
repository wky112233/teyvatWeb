"use client";
import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import MaterialCard from "@/app/ui/material/materialCard";
import { getMaterials } from "@/api/axios";
import { CircularProgress } from "@mui/material";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [materials, setMaterials] = useState([]);

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

  return (
    <div>
      <h5 className={"font-serif text-3xl text-amber-100 mx-2"}>Material</h5>
      <Divider className={"bg-gray-500 my-2"}></Divider>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={"flex flex-wrap  overflow-y-auto"}>
          {materials.map((material: Material, index) => (
            <MaterialCard key={index} material={material} />
          ))}
        </div>
      )}
    </div>
  );
}
