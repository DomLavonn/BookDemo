import React, {useContext} from "react"
import { Container, Grid } from "@mui/material"
import BookCard from "./ui/BookCard"
import NavBar from "./layout/NavBar"
import classes from "./MainLayout.module.css"
import BookStore from "../store/BookStore"
import { Link } from "react-router-dom"
const MainLayout:React.FC<{}> = (props) => {


  let bookCtx = useContext(BookStore)
  
    return(<>
    
        <Container>
          <Grid    container spacing={5}>
            {bookCtx.arr.map(item => {
              return <Link to={`/books/${item.getId()}`}  >
                <BookCard  id={item.getId()} onClicks={bookCtx.changeBookName} name={item.getName()}  quantity={item.getQuantity()}  price={item.getPrice()}  img={item.getImg()}/>
                </Link>
            })}
          </Grid>
        </Container>
        </>

    )
}
export default MainLayout