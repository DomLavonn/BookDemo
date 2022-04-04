import React from 'react';
import MainLayout from '../MainLayout';
import { Typography } from '@mui/material';
const BookList = () => {

    return <div>
         <Typography 
            variant="h2"
            component="h1"
            color="primary"
            align="center"
            gutterBottom>
    List of Items
    </Typography>

        <MainLayout />


        </div>
}

export default BookList