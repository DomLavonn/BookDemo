import Paper from '@mui/material/Paper'
import { Grid } from "@mui/material"

const BookCard:React.FC<{}> = (props) => {

    return <Grid item xs={3}> 
              <Paper elevation={3} >{props.children} </Paper>
           </Grid>
    
}



export default BookCard