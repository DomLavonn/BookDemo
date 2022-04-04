import React, {useContext} from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router';
import BookStore from '../../store/BookStore';
import { BookTwoTone } from '@mui/icons-material';
import { render } from '@testing-library/react';
import { Route, useRouteMatch, Switch, Link } from 'react-router-dom';
import TestRoute from './testRoute';

const BookItem:React.FC = (props) => {

    let {path, url} = useRouteMatch()

    console.log(path)
    console.log(url)

    let bookCtx = useContext(BookStore)
    type TParam = {
        id: string
    }
    const { id }:TParam = useParams()

    let bookItem = bookCtx.arr.filter(item => item.getId() == +id)
    console.log(bookItem)
    let renderBook = bookItem[0]
   

    return <div>
         <Typography 
            variant="h2"
            component="h1"
            color="primary"
            align="center"
            gutterBottom>
    Book Item
    </Typography>

    <Typography 
            variant="h2"
            component="h1"
            color="primary"
            align="center"
            gutterBottom>
                {id}
    </Typography>

       <p>{ renderBook.getName() }</p>
       <p>{renderBook.getQuantity()}</p>
       <p>{renderBook.getPrice()}</p>

        

      
       <Link to={`${url}/props-v-state`}>Props v. State</Link>

<Switch>
    <Route  exact path={path}     >
            <h1> This is landing page </h1>
    </Route>
        
    <Route path={`${path}/:topicId`}     >
                <TestRoute />
    </Route>
        
</Switch>
      

</div>
        
}

export default BookItem