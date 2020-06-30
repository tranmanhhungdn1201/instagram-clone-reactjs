import React from 'react';
import {
    Container,
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Row, Col, CardHeader
  } from 'reactstrap';
import Comment from '../Comment/';
import ActionPost from '../ActionPost';
import './CardPost.scss';
import ImageUser from '../ImageUser';
import PropTypes from 'prop-types';
import { useContext } from 'react';
CardPost.propTypes = {
    post: PropTypes.object,
    likes: PropTypes.array,
    userLikes: PropTypes.array,
};

CardPost.defaultProps = {
    post: [],
    likes: []
}

function CardPost(props) {
    const { post, likes, isLike} = props;
    return (
        <Card className="card-post mt-5">
            <CardHeader className="title">
                <ImageUser
                    srcImg="https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-19/s320x320/101398119_727257868032169_1713471211259822080_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_ohc=Rudj3Hl3y50AX9a35XT&oh=80981382c327f5c3f36fcbb6ab9a8c54&oe=5F19FEA6"
                    altImg={post.user.username}
                    width={40}
                    height={40}
                />
                <a href={'/' + post.user.username}>{post.user.username}</a>
            </CardHeader>
            <CardImg
                top
                width="100%"
                src={ post.imageUrl}
                alt="Card image cap"
            />
            <CardBody>
            <ActionPost post={post} isLike={isLike}/>
            <span className="mr-1">{ likes.filter(like => like.postId === post._id).length } người khác đã thích</span>
            <CardTitle>{post.user.username} { post.caption }</CardTitle>
            {
                post.comments && post.comments.map((comment, index) =>
                    <CardTitle key={index}>{comment.username} {comment.content}</CardTitle>
                )
            }
            <Comment idPost={post._id}/>
            </CardBody>
        </Card>
    );
}

export default CardPost;