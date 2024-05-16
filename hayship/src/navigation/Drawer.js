// Drawer.js
import React from "react";
import NavItem from "./NavItem";
import classes from "./Drawer.module.css";

const Drawer = ({ isOpen, closeDrawer }) => {
  const navigationData = [
    {
      title: "Freight Forwarding",
      children: [
        {
          title: "User Details",
          children: [
            { title: "UserInformation", path: "/UserInformation" },
            { title: "UserAccess", path: "/UserAccess" },
            { title: "Users", path: "/Users" },
          ],
        },
        {
          title: "Masters",
          children: [
            { title: "Commodity", path: "/Commodity" },
            { title: "Location", path: "/Location" },
            { title: "Packages", path: "/Packages" },
            { title: "Vessel", path: "/Vessel" },
          ],
        },
        {
          title: "Ice giants",
          children: [
            { title: "Home", path: "/Home" },
            { title: "Neptune", path: "/Neptune" },
          ],
        },
      ],
    },
    { title: "Neptune", path: "/Neptune" },
  ];

  return (
    <div className={isOpen ? `${classes.drawer} ${classes["drawer-open"]}` : classes.drawer}>
      <nav>
        <ul className={classes.tree}>
          {navigationData.map((item, index) => (
            <NavItem key={index} item={item} closeDrawer={closeDrawer} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Drawer;
