import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Image from "next/image";
import Divider from '@mui/material/Divider';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
interface BookContentProps {
    open: boolean;
    toggleDrawer: (open: boolean) => void;
}

export default function CharacterContent({ open, toggleDrawer }:BookContentProps) {
    const attributes = [
        { label: 'Name', value: 'Furina', label2: 'Birthday', value2: '10/13' },
        { label: 'Constellation', value: 'Animula Choragi', label2: 'Title', value2: 'Endless Solo of Solitude' },
        // 其他属性...
    ];
    return (
        <React.Fragment >
            <Dialog
                fullScreen
                open={open}
                onClose={() => toggleDrawer(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className={"overflow-y-auto bg-gray-900 px-8"}
            >
                <DialogTitle id="alert-dialog-title" className ="bg-gray-900 text-amber-100">
                    {"Character"}
                </DialogTitle>
                <DialogContent className={"bg-gray-900 text-amber-100 px-44"}>
                    <div className={"flex py-12"}>
                        <Image src={"/Furina.webp"} alt={"time_trekker"} className={"rounded-md bg-[#995f2c]"} width={128} height={128}></Image>
                        <div className={"flex-col px-5"}>
                            <Typography variant={"h4"}>
                                {/*name*/}
                                Furina
                            </Typography>
                            <Typography variant={"body2"}>
                                {/*description*/}
                                The absolute focus of the stage of judgment, until the final applause sounds.
                            </Typography>
                        </div>
                    </div>
                    <Divider className={"bg-gray-500 h-[1.5px] my-2"}></Divider>
                    <DialogContentText id="alert-dialog-description" className={"bg-gray-900 text-amber-100"}>
                        {/*content*/}
                        <div className={"border border-gray-500 rounded-md"}>
                            <Typography variant={'h5'} className={"py-2 px-4 border-b border-b-gray-500"}>
                                Attributes
                            </Typography>
                            <TableContainer component={Paper} className={"bg-transparent text-amber-50"} >
                                <Table sx={{ minWidth: 650 }} aria-label="customized table">
                                    <TableBody>
                                        {attributes.map((row, index) => (
                                            <TableRow key={index}>
                                                <TableCell component="th" scope="row" className={"text-gray-400 font-bold font-serif"}>
                                                    {row.label}
                                                </TableCell>
                                                <TableCell  className={"text-amber-50"}>{row.value}</TableCell>
                                                <TableCell component="th" scope="row" className={"text-gray-400 font-bold font-serif"}>
                                                    {row.label2}
                                                </TableCell>
                                                <TableCell  className={"text-amber-50"}>{row.value2}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={"bg-gray-700 text-amber-100 h-[40px]"}>
                    <Button onClick={() => toggleDrawer(false)} autoFocus>
                        Finished
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}