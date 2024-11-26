import React from 'react';
import {CircularProgress} from '@mui/material';

export const Loader = () => {
    return <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
        }}
    >
        <CircularProgress/>
    </div>
};
