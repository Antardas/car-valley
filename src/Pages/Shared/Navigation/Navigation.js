import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../images/120x60logo.png'
import { Link } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import { blue } from '@mui/material/colors';
/* -------*/
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const SecondNav = () => {
    const { singInGoogle, user, logOut } = useAuth();

    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: 'white',
            [theme.breakpoints.down('sm')]: {
               color: blue[500]
            },
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none'
            },
        },
        navLogo: {
            textAlign: 'left',
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            },

        },
        navItemContainer: {
            display: 'flex',
            alignItems: 'center',

            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
        }
    })
    const { navItem, navIcon, navItemContainer, navLogo } = useStyle();

    /* ------------ */
    const [state, setState] = React.useState(false);


    const list = (
        <Box
            sx={{ width: 250, }}
            role="presentation"
        >
            <List>


                <ListItem button >
                    <ListItemText ><Link className={navItem} to="/allProducts">Explore</Link></ListItemText>
                </ListItem>

                {
                    user?.email ? <Box>
                        <ListItem color={blue[500]} button>
                            <ListItemText color='black'>
                                {user?.displayName}
                            </ListItemText>
                        </ListItem>

                        <ListItem button>
                            <ListItemText>
                                <Link className={navItem} to="/dashboard">Dashboard</Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText>
                                <Link className={navItem} to="/dashboard">Dashboard</Link>
                            </ListItemText>
                        </ListItem>
                        <Button onClick={logOut} color="inherit">Logout</Button>
                    </Box> : <Typography variant="button" color='white' component="div">
                        <Link className={navItem} to="/login" >Login</Link>
                    </Typography>
                }


            </List>

        </Box>
    );
    return (

        <><Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        className={navIcon}
                        onClick={() => setState(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src={logo} alt="" />
                    </Typography>
                    <Box className={navItemContainer}>
                        <Typography variant="button" sx={{ mx: '0.3rem' }} color='white' component="span">
                            <Link className={navItem} to="/allProducts">Explore</Link>
                        </Typography>
                        {
                            user?.email ? <Box style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="button" sx={{ mx: '0.4rem' }} color='white' component="div">
                                    {user?.displayName}
                                </Typography>
                                <Typography variant="button" color='white' component="div">
                                    <Link className={navItem} to="/dashboard">Dashboard</Link>
                                </Typography>
                                <Typography sx={{mx:5, display: 'block'}} variant="button" color='white' component="div">
                                    <Button onClick={logOut} color="inherit">Logout</Button>
                                </Typography>
                                
                            </Box> : <Typography variant="button" color='white' component="div">
                                <Link className={navItem} to="/login" >Login</Link>
                            </Typography>
                        }

                    </Box>

                </Toolbar>
            </AppBar>
        </Box >
            {/* ----------- */}
            <div>

                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </>
    );
};

export default SecondNav;