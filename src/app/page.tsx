'use client'
import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';
import Products from '@/app/products/page';


function MenuIcon() {
    return null;
}

export default function Home() {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const token = localStorage.getItem('authToken');
    useEffect(() => {
        const checkAuth = async () => {

            if (!token) {
                try {
                    await router.push('/auth');
                    console.log('Успешное перенаправление на страницу авторизации');
                } catch (error) {
                    console.error('Ошибка перенаправления:', error);
                }
            }
        };

        checkAuth();
    }, [router]);


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // setAuth(event.target.checked);
    };

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Photos
                    </Typography>
                    {token && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Box sx={{flexGrow: 1, p: 2}}>
                <Products/>
            </Box>
        </Box>


    );
}
