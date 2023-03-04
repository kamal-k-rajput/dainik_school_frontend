import React from "react";
import { NavbarLinks } from "./Navbar/Navbar";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import { Gap } from "../Tools/Gap";

export const Header = () => {
  return (
    <div fixed="top">
      <NavbarLinks />
      <Gap />
    </div>
  );
};
