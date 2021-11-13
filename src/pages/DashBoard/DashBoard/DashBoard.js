import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import {Switch, Route, Link, useRouteMatch} from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import { Button } from 'react-bootstrap';
import Main from '../Main/Main';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddUser from '../AddUser/AddUser';
import useAuth from '../../../Hooks/useAuth';
import Payment from '../Payment/Payment';
import Reviews from '../Reviews/Reviews';


const drawerWidth = 240;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const{admin} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to={`${url}`} ><Button>Order</Button></Link>
      <br />
      <br />
      <Link to={`${url}/payment`} ><Button>Payment</Button></Link><br /> <br />
      <Link to={`${url}/reviews`} ><Button>Reviews</Button></Link><br /> <br />
      {admin && <Box>
        <Link to={`${url}/makeAdmin`} ><Button>Make Admin</Button></Link>
      <br />
      <br />
      <Link to={`${url}/addUser`} ><Button>Add User</Button></Link>
      </Box>}
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
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
        <Route exact path={path}>
          <Main></Main>
        </Route>
        <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/reviews`}>
            <Reviews></Reviews>
        </Route>
        <Route path={`${path}/payment`}>
            <Payment></Payment>
        </Route>
        <Route path={`${path}/`}>
          <AddUser></AddUser>
        </Route>
      </Switch>
      </Box>
    </Box>
  ); 
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
