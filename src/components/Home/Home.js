import React from "react";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Post from "../Post/Post";

export const Home = () => {
    return (
        <Container>
            <CssBaseline />
            <Post />
        </Container>
    )
}