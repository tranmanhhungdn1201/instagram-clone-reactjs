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

function CardPost(props) {
    return (
        <Card className="card-post mt-5">
            <CardHeader className="title">
                <ImageUser
                    srcImg="https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-19/s320x320/101398119_727257868032169_1713471211259822080_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_ohc=Rudj3Hl3y50AX9a35XT&oh=80981382c327f5c3f36fcbb6ab9a8c54&oe=5F19FEA6"
                    altImg="avatar-user"
                    width={40}
                    height={40}
                />
                <span>junvu95</span>
            </CardHeader>
            <CardImg top width="100%" src="https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/104418815_119850049476178_3848955868072780967_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_cat=1&_nc_ohc=WnvSkghRGA4AX-OkqFu&oh=9700d29d85ec3be18aadbd18cb230aee&oe=5F1B19E0" alt="Card image cap" />
            <CardBody>
            <Row className="list-action-icon">
                <FontAwesomeIcon icon={faHeartSolid} />
                <FontAwesomeIcon icon={faHeartRegular} />
                <FontAwesomeIcon icon={faComment} />
                <FontAwesomeIcon icon={faPaperPlane} />
            </Row>
            <span className="mr-1">52,270 người khác đã thích</span>
            <CardTitle>junvu95 Hôm nay trời xanh mây trắng</CardTitle>
            <CardTitle>gnuh.m 😍😍😍</CardTitle>
            <CardTitle>ttttuyen_2104 ❤️❤️ </CardTitle>
            <CardTitle>hoanh ❤️❤️ </CardTitle>
            <CardTitle>chiquooc16 ❤️ chị </CardTitle>
            <Comment />
            </CardBody>
        </Card>
    );
}

export default CardPost;