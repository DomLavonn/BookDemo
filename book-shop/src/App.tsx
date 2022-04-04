import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookCard from './component/ui/BookCard';
import Home from './component/pages/Home';
import MainLayout from './component/MainLayout';
import  {Route, Switch} from 'react-router-dom'
import BookList from './component/pages/BookList';
import NavBar from './component/layout/NavBar';
import {makeStyles} from "@material-ui/core"
import { Theme } from '@mui/material';
import { Container } from '@material-ui/core';
import BookStore, { BookStoreProvider }  from './store/BookStore'; 

const useStyles = makeStyles((theme) => ({
   root: {
     color: theme.palette.primary.main,
   },
   toolbar: theme.mixins.toolbar
 }));


function App() {

 const classes = useStyles()

  return (
     <BookStoreProvider >
     <React.Fragment> 
        <NavBar />
        <div className={classes.toolbar}></div>
        <Container>
         <Switch>
         <Route path="/"  exact={true}>      
               <Home />  
         </Route>
            <Route path="/books"  exact={true}>      
               <BookList />
            </Route>
         </Switch>
        </Container>
    </React.Fragment>
    </BookStoreProvider>

 

  );
}

export default App;
