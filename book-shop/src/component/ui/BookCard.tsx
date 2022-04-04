import Paper from '@mui/material/Paper'
import { Grid } from "@mui/material"
import React from 'react'
import { Typography, Box, Rating } from '@mui/material'
import  {AccessTime} from '@mui/icons-material'
 
type BookA = {
     name: string;
     img: string;
     quantity: number;
     price: number;

}
const BookCard:React.FC<BookA> = (props) => {

    return <Grid item xs={3}> 
              <Paper elevation={3} >

                  <img style={{ 
                      width: '100%',
                      height: '5rem'

}
} src={props.img} />
                 <Box paddingX={1}>
                    <Typography variant='subtitle1' component="h2" >
                        {props.name}
                    </Typography>

                    <Box
                 sx={{
                     display: "flex",
                     alignItems: "center"
                 }}>
                     {/* <AccessTime /> */}
                    <Typography variant='body2' component="p" >
                        {props.quantity} left
                    </Typography>

                 </Box>
                 <Box  sx={{
                     display: "flex",
                     alignItems: "center"
                 }}>
                     <Typography variant='body2' component="p" >
                        ${props.price}
                    </Typography>                 </Box>
                 </Box>
          
                      
              </Paper>
           </Grid>
    
}



export default BookCard