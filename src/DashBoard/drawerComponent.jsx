// import React, { Component } from "react";
// import { SwipeableDrawer } from "@material-ui/core";
// // import PropTypes from "prop-types";
// // import AppBar from "@material-ui/core/AppBar";
// // import CssBaseline from "@material-ui/core/CssBaseline";
// // import Divider from "@material-ui/core/Divider";
// //import Drawer from "@material-ui/core/Drawer";
// // import {
// // //   Drawer as MUIDrawer,
// // //   Drawer,
// // //   Toolbar,
// // //   IconButton,
// // SwipeableDrawer
// // } from "@material-ui/core";
// // import Hidden from "@material-ui/core/Hidden";
// // import List from "@material-ui/core/List";
// // import ListItem from "@material-ui/core/ListItem";
// // import ListItemIcon from "@material-ui/core/ListItemIcon";
// // import ListItemText from "@material-ui/core/ListItemText";
// // import MenuIcon from "@material-ui/icons/Menu";
// // import { makeStyles, useTheme } from "@material-ui/core/styles";
// // import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
// // import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
// // import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
// // import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
// // import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
// // import { Icon } from "@material-ui/core";

// // const drawerWidth = 240;

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     display: "flex",
// //   },
// //   drawer: {
// //     [theme.breakpoints.up("sm")]: {
// //       width: drawerWidth,
// //       flexShrink: 0,
// //     },
// //   },
// //   appBar: {
// //     [theme.breakpoints.up("sm")]: {
// //       width: `calc(100% - ${drawerWidth}px)`,
// //       marginLeft: drawerWidth,
// //     },
// //   },
// //   menuButton: {
// //     marginRight: theme.spacing(2),
// //     [theme.breakpoints.up("sm")]: {
// //       display: "none",
// //     },
// //   },
// //   // necessary for content to be below app bar
// //   toolbar: theme.mixins.toolbar,
// //   drawerPaper: {
// //     width: drawerWidth,
// //   },
// //   content: {
// //     flexGrow: 1,
// //     padding: theme.spacing(3),
// //   },
// // }));
// // class sideDrawer extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       anchorEl: null, 
// //       open: false,
// //     };
// //   }
// //
// // const DrawerComponent = React.forwardRef((props, ref) => {
// //   const classes = useStyles();
// //   const theme = useTheme();
// //   //const [mobileOpen, setMobileOpen] = React.useState(false);
// //   const handleDrawerToggle = (event) => {
// //     // setMobileOpen(!mobileOpen);
// //     this.setState({anchorEl:event.currentTarget,open:true})
// //   };
// //   const handleCloseDrawerToggle=(event)=>{
// //       this.setState({anchorEl:event.currentTarget,open:false})
// //   }

//   let messageWord = ["Notes", "Reminders", "edit Labels", "Archieve", "Trash"];
//   let messageIcon = [
//     <EmojiObjectsOutlinedIcon />,
//     <NotificationsNoneOutlinedIcon />,
//     <EditOutlinedIcon />,
//     <ArchiveOutlinedIcon />,
//     <DeleteOutlineOutlinedIcon />,
//   ];
//   <div>
//     <div className={classes.toolbar} />
//     <List>
//       {messageWord.map((text, index) => (
//         <ListItem button key={text}>
//           <ListItemIcon>
//             {index % 2 === 0 ? messageIcon[index] : messageIcon[index]}
//           </ListItemIcon>
//           <ListItemText primary={text} />
//         </ListItem>
//       ))}
//     </List>
//   </div>;

// //   return (
// //     // <MUIDrawer variant="permanent" className={classes.drawer}>
// //     <div>
// //       <div className={classes.toolbar} />
// //       <div className={classes.root}>
// //         <List>
// //           {messageWord.map((text, index) => (
// //             <ListItem button key={text}>
// //               <ListItemIcon>
// //                 {index % 2 === 0 ? messageIcon[index] : messageIcon[index]}
// //               </ListItemIcon>
// //               <ListItemText primary={text} />
// //             </ListItem>
// //           ))}
// //         </List>
// //       </div>
// //       <CssBaseline />
// //       <AppBar position="fixed" className={classes.appBar}>
// //         <Toolbar>
// //           <IconButton
// //             color="inherit"
// //             aria-label="open drawer"
// //             edge="start"
// //             onClick={handleDrawerToggle}
// //             className={classes.menuButton}
// //             ref={ref}
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //         </Toolbar>
// //       </AppBar>
// //       <nav className={classes.drawer} aria-label="mailbox folders">
// //         <Hidden smUp implementation="css">
// //           <Drawer
// //             //container={container}
// //             variant="permanent"
// //             anchor={theme.direction === "rtl" ? "right" : "left"}
// //             open={this.State.open}
// //             onClose={handleCloseDrawerToggle}
// //             classes={{
// //               paper: classes.drawerPaper,
// //             }}
// //             ModalProps={{
// //               keepMounted: true, // Better open performance on mobile.
// //             }}
// //           >
// //             {DrawerComponent}
// //           </Drawer>
// //         </Hidden>
// //       </nav>
// //     </div>
// //     // </MUIDrawer>
// //   );
// // });
// // export default sideDrawer;
// class SideDrawer extends Component{
//     constructor(props){
//         super(props)
    
//     }
//     render(){
//         return(

//         //    <SwipeableDrawer
//         //    //open={this.props.open}
//         //    //anchor={'left'}
//         //    ><div>hello</div></SwipeableDrawer>           
//         <SwipeableDrawer></SwipeableDrawer>
//         )
//     }
// }
// export default SideDrawer;