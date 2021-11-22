import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from "@material-ui/core";
export default function AppDetailToolBar() {
  return (
      <div style={{padding:'3px  8px'}}>
          <Checkbox size="small" style={{color:'#caccce',padding:'5px'}}/>
          <IconButton style={{padding:'10px 0px'}}>
            <ArrowDropDownIcon style={{color:'#caccce'}} />
          </IconButton>
          <IconButton  >
            <RefreshIcon fontSize="small" style={{color:'#caccce'}} />
          </IconButton>
          <IconButton  >
            <MoreVertIcon fontSize="small" style={{color:'#caccce'}} />
          </IconButton>
      </div>
    );
}
