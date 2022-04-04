import Paper from '@mui/material/Paper'
import { Grid } from "@mui/material"
import React, { MouseEventHandler } from 'react'
import { Typography, Box, Rating } from '@mui/material'
import  {AccessTime} from '@mui/icons-material'
 
type BookA = {
     id: number
     name: string;
     img: string;
     quantity: number;
     price: number;
     onClicks:  (id:number) => void

}
const BookCard:React.FC<BookA> = (props) => {

    const callMe = (  id:number ) => {
          console.log(props.id)
          props.onClicks(props.id)
    }

    return <div >

{/* onClick={ () => callMe(props.id)} */}

    <Grid item xs={3} > 
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
           </div>
}



export default BookCard