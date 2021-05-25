// import React, { useState } from "react";
// import { FaGem, FaHeart, FaList, FaRegHeart } from "react-icons/fa";
// import { RiPencilLine } from "react-icons/ri";
// import { BiCog } from "react-icons/bi";
// import {
//   FiHome,
//   FiLogOut,
//   FiArrowLeftCircle,
//   FiArrowRightCircle,
// } from "react-icons/fi";
// import {
//   ProSidebar,
//   Menu,
//   MenuItem,
//   SubMenu,
//   SidebarHeader,
//   SidebarFooter,
//   SidebarContent,
// } from "react-pro-sidebar";

// const SideBar = () => {
//   const [menuCollapse, setMenuCollapse] = useState(false);
//   const menuIconClick = () => {
//     menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
//   };

//   return (
//     <>
//       <div id="sidebar">
//         <ProSidebar collapsed={menuCollapse}>
//           <SidebarHeader>
//             <div className="close-menu" onClick={menuIconClick}>
//               {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
//             </div>
//             <div className="logo-text">
//               <p>{menuCollapse ? "Small" : "Expanded sidebar menu"}</p>
//             </div>
//           </SidebarHeader>
//           <SidebarContent>
//             <Menu iconShape="square">
//               <MenuItem active={true} icon={<FiHome />}>Home</MenuItem>
//               <MenuItem icon={<FaList />}>Order History</MenuItem>
//               <MenuItem icon={<FaRegHeart />}>Favorite Cars</MenuItem>
//               <SubMenu icon={<RiPencilLine />} title="Admin">
//                 <MenuItem icon={<RiPencilLine />}>Create New Login</MenuItem>
//                 <MenuItem icon={<RiPencilLine />}>Edit Flow</MenuItem>
//                 <MenuItem icon={<RiPencilLine />}>
//                   Delete a previous order
//                 </MenuItem>
//               </SubMenu>
//               <MenuItem icon={<BiCog />}>Settings</MenuItem>
//             </Menu>
//           </SidebarContent>
//           <SidebarFooter>
//             <Menu iconShape="square">
//               <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
//             </Menu>
//           </SidebarFooter>
//         </ProSidebar>
//       </div>
//     </>
//   );
// };

// export default SideBar;
