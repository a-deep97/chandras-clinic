import React from 'react';
import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TopNavbar = () => {

    const navigate = useNavigate()
    const handleLink = (route) =>{
        navigate(route);
    }
    return (
        <div className='top=navbar'>
            <AppBar style={{ 'height':'100px' ,'padding-left':'100px'}} position='relative' color=''>
                <Toolbar>
                    <Button  variant='text' size='large' onClick={() =>{handleLink('/home')}}>
                        <Typography variant='h6'>Home</Typography>
                    </Button>
                    <Button variant='text' size='large' onClick={() =>{handleLink('/book')}}>
                        <Typography variant='h6'>Book Appointment</Typography>
                    </Button>
                    <Button variant='text' size='large' onClick={() =>{handleLink('/about')}}>
                        <Typography variant='h6'>About</Typography>
                    </Button>
                    <Button variant='text' size='large' onClick={() =>{handleLink('/contact')}}>
                        <Typography variant='h6'>Contact Us</Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default TopNavbar;