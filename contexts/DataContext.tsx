// contexts/DataContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import {getAffiliations, getFoods, getMaterials} from "@/api/axios";

const service = axios.create({
  baseURL: "https://your.api.url/api/", // 设置你的API基础路径
});

type DataContextType = {
  affiliations: Affiliation[];
  foods: Food[];
  materials: Material[];
  fetchAffiliations: () => void;
  fetchFoods: () => void;
  fetchMaterials: () => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [affiliations, setAffiliations] = useState<Affiliation[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);

  const fetchAffiliations = async () => {
    getAffiliations().then((response) => {
      setAffiliations(response.data);
    });
  };

  const fetchFoods = async () => {
    getFoods().then((response) => {
      setFoods(response.data);
    });
  };

  const fetchMaterials = async () => {
    getMaterials().then((response) => {
      setMaterials(response.data);
    });
  };

  useEffect(() => {
    // console.log("DataProvider useEffect executed");
    fetchAffiliations();
    fetchFoods();
    fetchMaterials();
  }, []);

  return (
    <DataContext.Provider
      value={{ affiliations, foods, materials, fetchAffiliations, fetchFoods, fetchMaterials }}
    >
      {children}
    </DataContext.Provider>
  );
};
