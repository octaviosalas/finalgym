import * as React from 'react';
import lupa from "../icons/lupa.png"
import { useState } from 'react';
import axios from 'axios'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';//home
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';//miembros
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';//cargar miembro
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';//ingresos
import PaidIcon from '@mui/icons-material/Paid';//gastos
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';//clases
import HailIcon from '@mui/icons-material/Hail';//staff
import CoPresentIcon from '@mui/icons-material/CoPresent';//provedores
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';//config
import Person2Icon from '@mui/icons-material/Person2';//profile
import { useNavigate } from 'react-router-dom';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const [dniUserSearched, setDniUserSearched] = useState("")

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const redirectSide = (text) => { 
     if(text === "Inicio") { 
       navigate("/main")
     } else if(text === "Miembros") { 
      navigate("/members")
     } else if(text === "Cargar Miembro") { 
      navigate("/addNewMember")
     } else if (text === "Ingresos") { 
       navigate("/incomes")
     } else if(text === "Gastos") { 
      navigate("/expenses")
     } else if(text === "Clases") { 
      navigate("/classes")
     } else if(text === "Staff") { 
      navigate("/staff")
     }else if(text === "Proveedores") { 
      navigate("/providers")
     } else if(text === "Configuracion") { 
      navigate("/config")
     } else if(text === "Perfil") { 
      navigate("/profile")
     }
  }

  const searchUserByDni = () => { 
    axios.get(`http://localhost:4000/getMemberByDni/${dniUserSearched}`)
         .then((res) => { 
          console.log(res.data)
          navigate(`/memberData/${dniUserSearched}`)

         })
         .catch((err) => console.log(err))
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton  color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}  edge="start"
            sx={{ marginRight: 5, ...(open && { display: 'none' }), }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Recepcion Gym
          </Typography>
          <Box sx={{ marginLeft: 'auto', display:"flex" }}>
              <input placeholder='Dni..' className='border rounded-xl text-center text-black' onChange={(e) => setDniUserSearched(e.target.value)}></input>
              <img className='h-8 ml-2 cursor-pointer' title='Search' src={lupa} onClick={() => searchUserByDni()}></img>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inicio', 'Miembros', 'Cargar Miembro', 'Ingresos'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{ minHeight: 48, cursor: "pointer", fontWeight: "bold", justifyContent: open ? 'initial' : 'center', px: 2.5, }} >
                <ListItemIcon
                  sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }} >
                  {index  === 0 ? <HomeIcon /> : index === 1 ? <PeopleAltIcon/> : index === 2 ? <PersonAddAlt1Icon/> : index === 3 ?  <ProductionQuantityLimitsIcon /> : null}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} onClick={() => redirectSide(text)}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Gastos', "Clases", "Staff", "Proveedores", 'Configuracion', 'Perfil'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{  minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} >
                <ListItemIcon
                  sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                  {index === 0 ? <PaidIcon /> : index === 1 ? <FitnessCenterIcon /> : index === 2 ? < HailIcon/> : index === 3 ? < CoPresentIcon/> : index === 4 ? <FilterTiltShiftIcon/> : index === 5 ? <Person2Icon/> : null}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} onClick={() => redirectSide(text)}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
     
      </Box>
    </Box>
  );
}
