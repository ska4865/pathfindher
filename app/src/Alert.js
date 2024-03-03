import React from "react";
import Alert from '@mui/material/Alert';

 
export default function App() {
    return (
        <div>
            <Alert severity="success">Sample Success Message</Alert>
            <Alert severity="error">Sample Error Message</Alert>
        </div>
    );
}