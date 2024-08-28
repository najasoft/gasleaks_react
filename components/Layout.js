import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Gasleaks Monitoring</Typography>
                </Toolbar>
            </AppBar>
            <Outlet />
        </Container>
    );
}

export default Layout;
