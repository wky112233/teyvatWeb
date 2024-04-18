import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { lusitana } from "@/app/ui/fonts";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface CharacterContentProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
  character: Character;
}

export default function CharacterContent({
  open,
  toggleDrawer,
  character,
}: CharacterContentProps) {
  const attributes = [
    {
      label: "Name",
      value: character.character_name,
      label2: "Birthday",
      value2: `${character.birthday_month}/${character.birthday_date}`,
    },
    {
      label: "Constellation",
      value: character.constellation,
      label2: "Title",
      value2: character.title,
    },
    
  ];
  return (
    <React.Fragment>
      {character && (
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
                src={character.avatar_img}
                alt={character.character_name}
                className={"rounded-md bg-[#995f2c]"}
                width={320}
                height={160}
              ></Image>
              <div className={"flex-col px-5"}>
                <h2 className={"text-3xl font-serif"}>
                  {character.character_name}
                </h2>
                <Image
                  src={character.namecard_img}
                  alt={character.character_name}
                  className={"rounded-md bg-[#995f2c]"}
                  width={320}
                  height={160}
                ></Image>
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
                  <Table sx={{ minWidth: 650 }} aria-label="customized table">
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
