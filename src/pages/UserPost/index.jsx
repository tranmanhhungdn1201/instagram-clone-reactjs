import React, { useEffect } from 'react';
import Header from '../../components/Header';
import InfoUser from '../../components/InfoUser';
import ImagePostGallery from '../../components/ImagePostGallery';
import post from '../../actions/post';
import auth from '../../actions/auth';
import { useState } from 'react';
import CommentContext from '../../contexts/CommentContext';

function UserPost(props) {
    const [posts, setPosts] = useState([]);
    const [info, setInfo] = useState({});

    useEffect(() => {
        const userName = props.match.params.username;
        post.getPostByUser(userName).then(posts => {
            setPosts(posts);
        });
        auth.getUserByUserName(userName).then(info => {
            setInfo(info);
        });
    }, []);

    function onCommentPost(data){
        const idPost = data.idPost
        console.log(data);
        post.commentPost(data).then(comment => {
          let indexPost = posts.findIndex(post => post._id === idPost);
          let post = JSON.stringify(posts[indexPost]);
          post = JSON.parse(post);
          post.comments.push(comment);
          setPosts(
            [...posts.slice(0, indexPost), post, ...posts.slice(indexPost + 1)]
          );
        });
    }

    return (
        <>
        <Header />
        <InfoUser info={info}/>
        <CommentContext.Provider
            value={{
                onCommentPost: onCommentPost
            }}
        >
            <ImagePostGallery posts={posts} />
        </CommentContext.Provider>
        </>
    );
}

export default UserPost;