"use client";
import * as React from "react";
import Divider from "@mui/material/Divider";
import LivingCard from "@/app/ui/living/livingCard";
import { useEffect, useState } from "react";
import { getLivingBeings } from "@/api/axios";
import { CircularProgress } from "@mui/material";

export default function Page() {
  const [livings, setLivings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLivings = async () => {
    setLoading(true);
    try {
      const response = await getLivingBeings();
      setLivings(response.data); // 假设响应的数据在data字段中
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch livings", error);
      setLoading(false);
    }
  };

  // 当选中区域改变时，重新获取数据
  useEffect(() => {
    fetchLivings();
  }, []);

  return (
    <div>
      <h5 className="font-serif text-3xl text-amber-100 mx-2">Living Beings</h5>
      <Divider className="bg-gray-500 my-2" />
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="flex flex-wrap overflow-y-auto">
          {livings.map((living, index) => (
            <LivingCard key={index} living={living} />
          ))}
        </div>
      )}
    </div>
  );
}
