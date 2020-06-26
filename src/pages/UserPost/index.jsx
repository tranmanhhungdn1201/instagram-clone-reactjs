import React, { useEffect } from 'react';
import Header from '../../components/Header';
import InfoUser from '../../components/InfoUser';
import ImagePostGallery from '../../components/ImagePostGallery';
import post from '../../actions/post';
import auth from '../../actions/auth';
import { useState } from 'react';

function UserPost(props) {
    const [posts, setPosts] = useState([]);
    const [info, setInfo] = useState({});

    useEffect(() => {
        const userName = props.match.params.username;
        post.getPostByUser(userName).then(posts => {
            setPosts(posts);
        });
        auth.getUserByUserName(userName).then(info => {
            console.log(info.user.username);
            setInfo(info);
        });
    }, []);

    return (
        <>
        {/* <Header /> */}
        <InfoUser info={info}/>
        <ImagePostGallery posts={posts} />
        </>
    );
}

export default UserPost;