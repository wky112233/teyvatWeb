import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import Button from '@mui/material/Button';
import CheckBoxSelect from "@/app/ui/search/checkBoxSelect";
import DropDown from "@/app/ui/search/dropDown";

const items = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
];

export default function Page() {
    return (
        <div>
            <h5 className={"font-serif text-3xl text-amber-100 mx-2"}>
                Search
            </h5>
            <Divider className={"border-[0.5px] border-gray-500"}></Divider>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                noValidate
                className={"flex p-2 items-center"}
                autoComplete="off"
            >
                <div className={"flex p-2 items-center"}>
                    <h5 className={"font-serif text-base text-amber-100 justify-center"}> filter </h5>
                    <CheckBoxSelect selectSize={"medium"} items={items}/>
                </div>
                <TextField className={"text-amber-50 border-amber-50 flex-grow px-2"}
                           InputProps={{
                               style: {
                                   color: "#fcf3cc"
                               }
                           }}
                           sx={{
                               '& .MuiOutlinedInput-root': {
                                   '& fieldset': {
                                       borderColor: '#6c727f',
                                   },
                                   '&:hover fieldset': {
                                       borderColor: '#fcf3cc',
                                   },
                                   '&.Mui-focused fieldset': {
                                       borderColor: '#fcd34d',
                                   },
                               },
                           }}
                           variant="outlined"/>
                <Button variant="contained"
                        className={"bg-slate-600 text-amber-50 py-4 hover:bg-slate-400"}> SEARCH </Button>
            </Box>
            {/*<div className={"w-1/3"}>*/}
            {/*    <DropDown></DropDown>*/}
            {/*</div>*/}
        </div>

    );
}