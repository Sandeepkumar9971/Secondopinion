// DialogDefault.jsx

import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
// import { NotificationContainer, NotificationManager } from 'react-notifications';

const DialogDefault = ({ dialogTitle, children, isOpen, handleOpen, handleClose, handleConfirm, contentClass, buttonRequired }) => {
  
  return (
    <>
      <Dialog open={isOpen} handler={handleClose} className="justify-center  inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <span>{dialogTitle}</span>
            {/* <CloseIcon className="cursor-pointer" onClick={handleClose} /> */}
          </div>
        </DialogHeader>
        <DialogBody className={`flex-2 ${contentClass}`} style={{ maxHeight: '60vh', overflowY: 'auto' }}>
    {children}
  </DialogBody>
        {buttonRequired && (
          <DialogFooter className="flex gap-2">
            <Button  variant="gradient" 
            color="red"
            onClick={handleClose} 
            className="tracking-wider border-2 mr-1 cursor-pointer"
            >
              
              <span>Close</span>
            </Button>
            
            <Button variant="gradient"
             color="blue"
              onClick={handleConfirm} className="cursor-pointer ">
              <span>Apply</span>
            </Button>
          </DialogFooter>
        )}
      </Dialog>
    
    </>
  );
};

export default DialogDefault;
