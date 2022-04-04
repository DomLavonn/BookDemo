import React, {useContext} from "react"
import { Link,  } from "react-router-dom"
import { Typography, Button, ButtonGroup, Container } from "@mui/material"
import {makeStyles} from "@material-ui/core"
import BookStore from "../../store/BookStore"
// Make styles
// Returns a hook 
const useStyles = makeStyles({
   btn: {
       fontSize: 60,
       backgroundColor: 'violet'
   }
})


const Home = () => {
     
    let bookCtx = useContext(BookStore)
    // Returns an object with all classes on it
    let classes = useStyles()
  
    let isLoggedIn = bookCtx.isLoggedIn

    if (isLoggedIn) {
        return  <>
        <Typography 
            variant="h2"
            component="h1"
            color="primary"
            align="center"
            gutterBottom>
    Book Demo Home Page!
    </Typography>

    <Link to="/books" style={{"textDecoration": "none"}}>
        <Button size="large"  color="primary" variant="contained"> Books</Button>
    </Link>
    </>
    }

     return <div>

        <h1>Not Logged In</h1>
        <button onClick={bookCtx.changeLogin}>LogIn</button>

     </div> 

    
}

export default Home