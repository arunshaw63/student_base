
import React from 'react'
import Navbar from './components/layout/Navbar';
import Students from './components/students/Students';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./styles/App.scss"
import Student from './components/students/Student';
import StudentForm from './components/students/StudentForm';
import {Provider} from 'react-redux';
import store,{rrfProps} from './store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import Login from './components/pages/Login';
import PrivateRoute from "./components/routes/PrivateRoute";
export default function App() {
    return (
       
           <Provider store={store}>
           <ReactReduxFirebaseProvider {...rrfProps}>
           <Router>        
            <PrivateRoute component={Navbar} />
            <Switch>
                <PrivateRoute exact path="/" component={Students} />
                <PrivateRoute exact path="/student/:id" component={Student} />
                <PrivateRoute exact path="/studentForm/:id?" component={StudentForm} />
                <Route exact path="/login" component={Login} />

            </Switch>
            </Router>
           </ReactReduxFirebaseProvider>
           </Provider>
    )
}
