import { Container, Grid } from "@mui/material"
import BookCard from "./ui/BookCard"
const MainLayout:React.FC<{}> = (props) => {

    return(
        <Container>
            <Grid container spacing={5}>
            <BookCard> 
                Hello
            </BookCard>
            </Grid>
        </Container>

    )
}
export default MainLayout