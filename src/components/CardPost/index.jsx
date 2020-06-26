import React from 'react';
import {
    Container,
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Row, Col, CardHeader
  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Comment from '../Comment/';
import './CardPost.scss';
import ImageUser from '../ImageUser';
import PropTypes from 'prop-types';

CardPost.propTypes = {
    post: PropTypes.object,
    likes: PropTypes.array,
    userLikes: PropTypes.array,
    onUnLikePost: PropTypes.func,
    onLikePost: PropTypes.func,
};

CardPost.defaultProps = {
    post: [],
    likes: [],
    userLikes: [],
    onUnLikePost: null,
    onLikePost: null
}

function CardPost(props) {
    const { post, likes, userLikes, onUnLikePost, onLikePost} = props;

    function handleClickUnLike(idPost){
        if(onUnLikePost){
            onUnLikePost(idPost);
        }
    }

    function handleClickLike(idPost){
        if(onLikePost){
            onLikePost(idPost);
        }
    }

    return (
        <Card className="card-post mt-5">
            <CardHeader className="title">
                <ImageUser
                    srcImg="https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-19/s320x320/101398119_727257868032169_1713471211259822080_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_ohc=Rudj3Hl3y50AX9a35XT&oh=80981382c327f5c3f36fcbb6ab9a8c54&oe=5F19FEA6"
                    altImg={post.user.username}
                    width={40}
                    height={40}
                />
                <span>{post.user.username}</span>
            </CardHeader>
            <CardImg
                top
                width="100%"
                src={ post.imageUrl}
                alt="Card image cap"
            />
            <CardBody>
            <Row className="list-action-icon">
                {
                    userLikes.some(like => like.postId === post._id)
                    ? <FontAwesomeIcon onClick={() => handleClickUnLike(post._id)} icon={faHeartSolid} />
                    : <FontAwesomeIcon onClick={() => handleClickLike(post._id)} icon={faHeartRegular} />
                }
                <FontAwesomeIcon icon={faComment} />
                <FontAwesomeIcon icon={faPaperPlane} />
            </Row>
            <span className="mr-1">{ likes.filter(like => like.postId === post._id).length } người khác đã thích</span>
            <CardTitle>{post.user.username} { post.caption }</CardTitle>
            {
                post.comments && post.comments.map((comment, index) =>
                    <CardTitle key={index}>{comment.username} {comment.content}</CardTitle>
                )
            }
            <CardTitle>gnuh.m 😍😍😍</CardTitle>
            <CardTitle>ttttuyen_2104 ❤️❤️ </CardTitle>
            <CardTitle>hoanh ❤️❤️ </CardTitle>
            <CardTitle>chiquooc16 ❤️ chị </CardTitle>
            <Comment idPost={post._id}/>
            </CardBody>
        </Card>
    );
}

export default CardPost;