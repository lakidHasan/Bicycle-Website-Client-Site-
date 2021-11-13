import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Services from './pages/Home/Services/Services';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Booking from './pages/Booking/Booking/Booking';
import AddBycicle from './pages/AddBycicles/AddBycicle';
import MoreItems from './pages/Home/MoreItems/MoreItems';
import AddTotal from './pages/AddTotal/AddTotal';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';
import Footer from './pages/Shared/Footer/Footer';




function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Router>
       <Header></Header>
       <Switch>
       <Route exact path='/'>
           <Home></Home>
         </Route>
         <Route path='/home'>
           <Home></Home>
         </Route>
         <Route path='/moreItems'>
           <MoreItems></MoreItems>
         </Route>
         <PrivateRoute path='/booking/:serviceId'>
           <Booking></Booking>
         </PrivateRoute>
         <PrivateRoute path='/dashboard'>
           <DashBoard></DashBoard>
         </PrivateRoute>
         <Route path='/services'>
           <Services></Services>
         </Route>
         <Route path='/addTotal'>
           <AddTotal></AddTotal>
         </Route> 
         <Route path='/addBycicle'>
           <AddBycicle></AddBycicle>
         </Route> 
        <Route path='/login'>
           <Login></Login>
         </Route>
         <Route path='/register'>
           <Register></Register>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
