import React from "react";
import compose from "./assets/compose.jpg";
import Fab from "@material-ui/core/Fab";
export default function AppSideBar() {
  return (
      <div>
           <Fab style={{ backgroundColor: "white" }} aria-label="add">
            <img
              src={compose}
              style={{ height: "54px", borderRadius: "50%" }}
            />
          </Fab>
      </div>
    );
}
