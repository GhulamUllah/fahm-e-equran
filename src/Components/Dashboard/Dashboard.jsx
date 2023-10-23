import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import image from "../../dashboard.png";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, CircularProgress, Paper, Tooltip } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../HomePage/Login";
import {Storage} from '../../firebase'
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'
import { update_user } from "../../Redux/Action/userAction";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const theme = useTheme();
  const [uploadLoading,setuploadLoading] = React.useState(false)
  const navigate = useNavigate();
  const [isLogin, setisLogin] = React.useState(false);
  const [profile_image, setprofile_image] = React.useState();
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state) => state.User.user);
  const disptach = useDispatch()
  const handleUpload = (file) =>{
    setuploadLoading(true)
    const location = ref(Storage,"Profile"+"/"+user.name+"/"+file.name)
    const upload = uploadBytesResumable(location,file)
    upload.on(
      "state_chaged",
      (snapshot)=>{
        const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100
        console.log(progress)
      },
      (err)=>{
        console.log(err)
        setuploadLoading(false)
      },
      async()=>{
        const url =await getDownloadURL(location)
        setprofile_image(url)
        disptach(update_user({profile:url}))
        setuploadLoading(false)
      }

    )
  }



  React.useEffect(() => {
    if (!user?.name) setisLogin(true);
  }, [user.name]);
  return (
    <Box sx={{ display: "flex" }}>
      {isLogin && <Login isLogin={isLogin} setisLogin={setisLogin} />}
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: 2,
          }}
        >
          <input hidden id="changeProfile" type="file" onChange={(e)=>handleUpload(e.target.files[0])}/>
         <Tooltip title="Click to Change">
         <Avatar
            component={'label'}
            htmlFor="changeProfile"
            src={uploadLoading ? "" : profile_image ? profile_image : user.profile}
            sx={{
              height: open ? "100px" : "35px",
              width: open ? "100px" : "35px",
              cursor:'pointer',
              mb: 1,
              transition: open ? "all .5s ease-in-out" : "all .2s ease-in-out",
            }}
          >
            <CircularProgress size={open ? 40 : 20} />
          </Avatar>
         </Tooltip>
          <Typography paragraph>{user?.name ? user?.name : "Name"}</Typography>
          <Typography paragraph>{user.email ? user.email : "Email"}</Typography>
          <Typography paragraph>
            {user?.course ? user?.course : "Course"}
          </Typography>
        </Box>
        <Divider />
        <List>
          {["Class Schedule", "Analytics", "Profile Details"].map(
            (text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Paper elevation={2} sx={{ p: 2 }}>
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              "&:after": {
                content: '"Merilyn Lynchk"',
                color: "secondary.main",
                ml: 1,
              },
            }}
          >
            Hello,
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            doloremque, beatae repellat, itaque magni doloribus possimus quam
            culpa perspiciatis consectetur facilis iure repudiandae modi sunt
            laudantium. Quasi, fugiat! Voluptate, accusamus?
          </Typography>
          <Box>
            <Typography paragraph>Member Since</Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <CalendarMonth />
              <Typography paragraph>24-dec-2020</Typography>
            </Box>
          </Box>
          <img src={image} />
        </Paper>

        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}
