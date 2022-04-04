import React, {useContext} from "react"
import { Container, Grid } from "@mui/material"
import BookCard from "./ui/BookCard"
import NavBar from "./layout/NavBar"
import classes from "./MainLayout.module.css"
import BookStore from "../store/BookStore"

const MainLayout:React.FC<{}> = (props) => {


  let bookCtx = useContext(BookStore)
  
    return(<>
    
        <Container>
          <Grid    container spacing={5}>
            {bookCtx.arr.map(item => {
              return <BookCard  name={item.getName()}  quantity={item.getQuantity()}  price={item.getPrice()}  img={item.getImg()}/>
            })}
          </Grid>
        </Container>
        </>

    )
}
export default MainLayout