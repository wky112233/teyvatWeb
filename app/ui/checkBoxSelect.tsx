"use client";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { InputLabel } from "@mui/material";
import { useEffect } from "react";

interface CheckBoxSelectProps {
  selectSize: "small" | "medium";
  items: string[];
  onSelect: (item: string[]) => void;
}

export default function CheckBoxSelect({
  selectSize,
  items,
  onSelect,
}: CheckBoxSelectProps) {
  const [selectedRegions, setSelectedRegions] = React.useState<string[]>([]);

  useEffect(() => {
    onSelect(selectedRegions); // 调用外部传入的onSelect函数，将选中的区域数组传出
  }, [selectedRegions]);

  const handleChange = (event: SelectChangeEvent<typeof selectedRegions>) => {
    const {
      target: { value },
    } = event;
    const selectedValues = typeof value === "string" ? value.split(",") : value;
    setSelectedRegions(selectedValues);
  };

  return (
    <div className={"w-full h-full px-3"}>
      <FormControl
        size={selectSize}
        className={"w-full h-full"}
        sx={{
          maxHeight: "100%", // 限制最大高度，防止超出视口
          // 覆盖内部OutlinedInput的样式
          "& .MuiOutlinedInput-root": {
            // 悬停状态的样式
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fcf3cc", // 悬停时的颜色
            },
            // 聚焦状态的样式
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fcd34d", // 聚焦时的颜色
            },
          },
        }}
      >
        <InputLabel className={"text-amber-50"}>Nation</InputLabel>
        <Select
          multiple
          value={selectedRegions}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          className={"border border-gray-500 bg-transparent text-gray-200 "}
          MenuProps={{
            sx: {
              backgroundColor: "transparent",
              // 覆盖下拉菜单项的样式
              "& .MuiMenu-paper": {
                backgroundColor: "rgba(0, 0, 10, 0.9)", // 可以为下拉菜单设置半透明背景
              },
              "& .MuiMenuItem-root": {
                // 悬停状态的样式
                "&:hover": {
                  backgroundColor: "rgba(207, 189, 148, 0.5)", // 悬停时的颜色（半透明的橙色）
                },
                // 聚焦状态的样式
                "&.Mui-focused": {
                  backgroundColor: "rgba(207, 189, 148, 0.5)", // 聚焦时的颜色（半透明的橙色）
                },
                // 选中状态的样式
                "&.Mui-selected": {
                  backgroundColor: "rgba(207, 189, 148)", // 选中时的颜色（不透明的橙色）
                  "&:hover": {
                    backgroundColor: "rgba(207, 189, 148, 0.7)", // 选中项的悬停颜色（深一点的橙色）
                  },
                },
              },
            },
          }}
        >
          {items.map((name) => (
            <MenuItem
              key={name}
              value={name}
              className={"bg-slate-800 bg-transparent text-amber-50"}
            >
              <Checkbox
                checked={selectedRegions.indexOf(name) > -1}
                sx={{
                  color: "rgba(255, 255, 255, 0.8)", // 未选中时的颜色
                  "&.Mui-checked": {
                    color: "rgba(255, 255, 255)", // 选中时的颜色
                  },
                }}
              />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
