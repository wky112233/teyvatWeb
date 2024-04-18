import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Image from "next/image";

interface LivingContentProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
  living: LivingBeing;
}

export default function LivingContent({
  open,
  toggleDrawer,
  living,
}: LivingContentProps) {
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={() => toggleDrawer(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={
          "overflow-y-auto bg-gray-900 h-full w-full px-40 bg-transparent"
        }
      >
        <DialogTitle
          id="alert-dialog-title"
          className="font-serif bg-gray-900 text-amber-100"
        >
          {"INFORMATION"}
        </DialogTitle>
        <DialogContent className={" bg-gray-900 text-amber-100 px-24"}>
          <div className={"flex py-12"}>
            <Image
              src={living.living_being_icon_img}
              alt={living.living_being_icon_img}
              className={"rounded-md bg-[#995f2c]"}
              width={128}
              height={128}
            ></Image>
            <div className={"flex-col px-5"}>
              <h4 className={"text-3xl font-serif"}>
                {living.living_being_name}
              </h4>
              <h5 className={"text-xl font-serif"}>
                {living.living_being_description}
              </h5>
            </div>
          </div>
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
