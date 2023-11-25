import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom'
import { logoutUser } from "../../features/user/logoutActions";
import { useDispatch, useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { red } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import './Post.css';
import { posts } from "../../mockData/posts";
import useComment from "../../hooks/useComment";
import Comment from "../common/Comment";
import { addEditComment } from "../../features/comment/addCommentActions";
import { getComment } from "../../features/comment/commentActions";

const Post = () => {

    const [userDetail, setUserDetail] = useState({
        name: "",
        email: ""
    })
    const [commentsData, setCommentsData] = useState(posts.comments);
    const { insertComment, editComment, deleteComment } = useComment();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const store = useSelector((state) => state)
    const { comments } = store.comment
    const { loading, success } = store.logout

    useEffect(() => {
        if(success) navigate("/");
    }, [navigate, loading, success]);

    const handleLogout = () => {
        dispatch(logoutUser());
    }
    const handleLogin = () => {
        navigate("/login");
    }

    const handleInsertComment = (folderId, item) => {
        const comments = JSON.parse(JSON.stringify(commentsData));
        const finalStructure = insertComment(comments, folderId, item);
        dispatch(addEditComment(JSON.stringify(finalStructure)));
        dispatch(getComment());
    };

    const handleEditComment = (folderId, value) => {
        const comments = JSON.parse(JSON.stringify(commentsData));
        const finalStructure = editComment(comments, folderId, value);
        dispatch(addEditComment(JSON.stringify(finalStructure)));
        dispatch(getComment());
    };

    const handleDeleteComment = (folderId) => {
        const comments = JSON.parse(JSON.stringify(commentsData));
        const finalStructure = deleteComment(comments, folderId);
        const temp = { ...finalStructure };
        dispatch(addEditComment(JSON.stringify(temp)));
        dispatch(getComment());
    };

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUserDetail(userInfo);
        dispatch(getComment());
    }, [dispatch]);

    useEffect(() => {
        console.log(comments)
        setCommentsData(comments);
    }, [comments]);

    return (
        <Container fixed>
            <CssBaseline />
            {localStorage.getItem("isUserLoggedIn") && <Grid 
                container
                mt={4}
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Grid item mr={6}>
                    <Button variant="outlined" onClick={()=> handleLogout()}>Logout</Button>
                </Grid>
            </Grid>}
            {!localStorage.getItem("isUserLoggedIn") && <Grid 
                container
                mt={4}
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Grid item mr={6}>
                    <Button variant="outlined" onClick={()=> handleLogin()}>Login</Button>
                </Grid>
            </Grid>}
            <Card sx={{ maxWidth: 600 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {userDetail?.name?.charAt(0)}
                    </Avatar>
                    }
                    title={userDetail?.name}
                    subheader="2d"
                    titleTypographyProps={{ textAlign: "left" }}
                    subheaderTypographyProps={{ textAlign: "left" }}
                />
                <CardContent>
                    <Typography variant="h6" align="left">
                        {posts.postHeading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="left" mb={2}>
                        {posts.postBody}
                    </Typography>
                    <Divider />
                    <Typography variant="body2" align="left" mt={2} mb={2}>
                        Comments
                    </Typography>
                    <Divider light />
                    {localStorage.getItem("isUserLoggedIn") && <Comment
                        handleInsertComment={handleInsertComment}
                        handleEditComment={handleEditComment}
                        handleDeleteComment={handleDeleteComment}
                        comment={commentsData}
                        userDetail={userDetail}
                    />}
                </CardContent>
            </Card>
        </Container>
    )
}

export default Post;