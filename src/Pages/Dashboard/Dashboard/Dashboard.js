import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../Myorders/MyOrders';
import Pay from '../Pay/Pay';
import AddReview from '../AddReview/AddReview';
import AddProduct from '../AddProduct/AddProduct';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import ManageOrders from '../ManageOrders/ManageOrder';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../AdminRoute/AdminRoute';
const drawerWidth = 200;

function Dashboard(props) {
    const { logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {/* Side Menu  */}
                
                {
                    admin ? <Box>
                        <Typography variant="button" sx={{ mt: '1rem' }} color='white' component="div">
                            <Link to={`${url}/addProduct`} style={{
                                color: blue[500]
                            }}>Add Product</Link>
                        </Typography>
                        <Typography variant="button" sx={{ mt: '1rem' }} color='white' component="div">
                            <Link to={`${url}/manageOrder`} style={{
                                color: blue[500]
                            }}>Manage Order</Link>
                        </Typography>
                        <Typography variant="button" sx={{ mt: '1rem' }} color='white' component="div">
                            <Link to={`${url}/makeAdmin`} style={{
                                color: blue[500]
                            }}>Make Admin</Link>
                        </Typography>
                    </Box> : <Box>                <Typography variant="button" sx={{ mt: '1rem' }} color='white' component="div">
                        <Link to={`${url}/myOrders`} style={{
                            color: blue[500]
                        }}>My Orders</Link>
                    </Typography>
                        <Typography variant="button" sx={{ mt: '1rem' }} color='white' component="div">
                            <Link to={`${url}/addReview`} style={{
                                color: blue[500]
                            }}>Review</Link>
                        </Typography>
                        <Typography variant="button" sx={{ mt: '1rem' }} color='white' component="div">
                            <Link to={`${url}/pay`} style={{
                                color: blue[500]
                            }}>Pay</Link>
                        </Typography></Box>
                }
                <Button variant="contained" onClick={logOut}>
                    Log Out
                </Button>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    
                    <Route path={`${path}/myOrders`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview />
                    </Route>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrder`}>
                        <ManageOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>

                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
