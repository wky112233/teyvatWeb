"use client"
import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from "@mui/material";
import {getMaterialsByFoodId} from "@/api/axios";
import MaterialCard from "@/app/ui/material/materialCard";

interface FoodContentProps {
    open: boolean;
    toggleDrawer: (open: boolean) => void;
    food: Food;
}

export default function FoodContent({
                                             open,
                                             toggleDrawer,
                                             food,
                                         }: FoodContentProps) {
    const [materials, setMaterials] = useState<Material[]>([]);
    const [loading, setLoading] = useState(false);
    const fetchMaterials = async () => {
        setLoading(true);
        try {
            const response = await getMaterialsByFoodId(food.food_id);
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
    const attributes = [
        {
            label: "Name",
            value: food.food_name,
            label2: "Utility",
            value2: food.food_utility,
        },

    ];
    return (
        <React.Fragment>
            {food && (
                <Dialog
                    fullScreen
                    open={open}
                    onClose={() => toggleDrawer(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className={`font-serif overflow-y-auto bg-gray-900 h-full w-full px-40 bg-transparent`}
                >
                    <DialogTitle
                        id="alert-dialog-title"
                        className={`font-serif bg-gray-900 text-amber-100`}
                    >
                        {"INFORMATION"}
                    </DialogTitle>
                    <DialogContent
                        className={"font-serif bg-gray-900 text-amber-100 px-24"}
                    >
                        <div className={"flex py-12"}>
                            <Image
                                src={food.food_icon_img}
                                alt={food.food_name}
                                className={"rounded-md bg-[#995f2c]"}
                                width={320}
                                height={160}
                            ></Image>
                            <div className={"flex-col px-5"}>
                                <h2 className={"text-3xl font-serif"}>
                                    {food.food_name}
                                </h2>
                                <h2 className={"text-2xl font-serif"}>
                                    {food.food_description}
                                </h2>
                            </div>
                        </div>
                        <Divider className={"bg-gray-500 h-[1.5px] my-2"}></Divider>
                        <DialogContentText
                            id="alert-dialog-description"
                            className={"font-serif bg-gray-900 text-amber-100"}
                        >
                            {/*content*/}
                            <div className={"border border-gray-500 rounded-md"}>
                                <Typography
                                    variant={"h5"}
                                    className={"py-2 px-4 border-b border-b-gray-500 font-serif"}
                                >
                                    Attributes
                                </Typography>
                                <TableContainer
                                    component={Paper}
                                    className={"font-serif bg-transparent text-amber-50"}
                                >
                                    <Table sx={{minWidth: 650}} aria-label="customized table">
                                        <TableBody>
                                            {attributes.map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell
                                                        component="th"
                                                        scope="row"
                                                        className={
                                                            "text-gray-400 font-bold font-serif border-y border-gray-500"
                                                        }
                                                    >
                                                        {row.label}
                                                    </TableCell>
                                                    <TableCell
                                                        className={
                                                            "text-amber-50 border-y border-gray-500 font-serif"
                                                        }
                                                    >
                                                        {row.value}
                                                    </TableCell>
                                                    <TableCell
                                                        component="th"
                                                        scope="row"
                                                        className={
                                                            "text-gray-400 font-bold font-serif border-y border-gray-500"
                                                        }
                                                    >
                                                        {row.label2}
                                                    </TableCell>
                                                    <TableCell
                                                        className={
                                                            "text-amber-50 border-y font-serif border-gray-500"
                                                        }
                                                    >
                                                        {row.value2}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                            {materials.length > 0 && (
                                <>
                                    <Typography
                                        variant={"h5"}
                                        className={"py-2 px-4 border-b border-b-gray-500 font-serif"}
                                    >
                                        Materials
                                    </Typography>
                                    <div className={"flex flex-wrap overflow-y-auto"}>
                                        {materials.map((material: Material, index: number) => (
                                            <MaterialCard key={index} material={material}/>
                                        ))}
                                    </div>
                                </>
                            )}

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions
                        className={"bg-gray-700 font-serif text-amber-100 h-[40px]"}
                    >
                        <Button onClick={() => toggleDrawer(false)} autoFocus>
                            Finished
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </React.Fragment>
    );
}
