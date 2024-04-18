// contexts/DataContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { getAffiliations, getFoods } from "@/api/axios";

const service = axios.create({
  baseURL: "https://your.api.url/api/", // 设置你的API基础路径
});

type DataContextType = {
  affiliations: Affiliation[];
  foods: Food[];
  fetchAffiliations: () => void;
  fetchFoods: () => void;
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
  const [affiliations, setAffiliations] = useState<any[]>([]);
  const [foods, setFoods] = useState<any[]>([]);

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

  useEffect(() => {
    // console.log("DataProvider useEffect executed");
    fetchAffiliations();
    fetchFoods();
  }, []);

  return (
    <DataContext.Provider
      value={{ affiliations, foods, fetchAffiliations, fetchFoods }}
    >
      {children}
    </DataContext.Provider>
  );
};
