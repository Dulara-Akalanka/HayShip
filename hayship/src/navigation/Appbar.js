// // AppBar.js
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Drawer from "./Drawer";
// import NavItem from "./NavItem";
// // import classes from "./AppBar.module.css";
// // import Home from "../../Pages/Home";
// // import Location from "../../Pages/Locations/Location";
// // import Vessels from "../../Pages/Vessels/Vessel";
// // import Commodity from "../../Pages/Commodity/Commodity";
// // import Packages from "../../Pages/Packs/Package";
// // import UserInformation from "../../Pages/User/UserInformation";
// // import UserAccess from "../../Pages/User/UserAccess";
// // import Users from "../../Pages/User/Users";

// const AppBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <div className={classes.appbar}>
//         <div className={classes.menubtn} onClick={toggleDrawer}>
//           &#9776;
//         </div>
//       </div>
//       <Drawer isOpen={isOpen} closeDrawer={() => setIsOpen(false)} />
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/Location" element={<Location />} />
//           <Route exact path="/Vessel" element={<Vessels />} />
//           <Route exact path="/Commodity" element={<Commodity />} />
//           <Route exact path="/Packages" element={<Packages />} />
//           <Route exact path="/UserInformation" element={<UserInformation />} />
//           <Route exact path="/UserAccess" element={<UserAccess />} />
//           <Route exact path="/Users" element={<Users />} />
//           <Route path="*" element={<h1>Not Found</h1>} />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default AppBar;
