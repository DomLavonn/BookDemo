import React from "react"
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material"
import { Link } from "react-router-dom"

const NavBar = () => {
   return <AppBar elevation={0} >
         <Toolbar>
           <Typography>
               BookDemo
           </Typography>
           <Box sx={{ paddingLeft: 5,  flexGrow: 1, display: { xs: 'flex', md: 'flex' }}}>
              <Link to="/" style={{ textDecoration: 'none'  }}>
                <Button
                    key={"page"}
                    sx={{ my: 2, color: 'white', flexGrow: 0 , display: 'block' }}>
                  Home
            </Button>
            </Link> 

            <Link to="/books" style={{ textDecoration: 'none'  }}>
                <Button
                    key={"page"}
                    sx={{ my: 2, color: 'white', flexGrow: 0 , display: 'block' }}
                >
                  Books
            </Button>
            </Link> 
       </Box>
       </Toolbar>
   </AppBar>

}

export default NavBar