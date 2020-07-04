import React from 'react';
import PropTypes from 'prop-types';
import ImageUser from '../ImageUser';
import { Row, Col, Container } from 'reactstrap';
import httpClient from '../../actions/httpClient';

import './InfoUser.scss';

InfoUser.propTypes = {
    info: PropTypes.object,
};

InfoUser.defaultProps = {
    info: {
        user: {
        }
    }
}

function InfoUser(props) {
    const {info, folowUser, following} = props;
    const {user, countPost, countFollower, countFollowing} = info;
    const userCurrent = httpClient.getCurrentUser();
    console.log(info, user)
    return (
        <Container>
            <Row className="info-user">
                <Col xs="3">
                    <ImageUser
                        srcImg={user.avatar}
                        altImg="avatar-user"
                        width={170}
                        height={170}
                    />
                </Col>
                <Col>
                    <Row>
                        <Col xs="2">
                            <h4>{user.username}</h4>
                        </Col>
                        <Col xs="8">
                            {
                                userCurrent.username === user.username ?
                                    <a href="#">Chỉnh sửa trang cá nhân</a>
                                :
                                    following == 0
                                ?
                                    <button className="btn btn-info" onClick={folowUser}>Theo dõi</button>
                                :
                                    following == 1
                                ?
                                    <a href="#">Đang chờ duyệt</a>
                                :
                                    <button className="btn btn-info">Đã Theo dõi</button>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2">
                            <span><b>{countPost}</b> bài viết</span>
                        </Col>
                        <Col xs="3">
                            <span><b>{countFollower}</b> người theo dõi</span>
                        </Col>
                        <Col xs="4">
                            <span>Đang theo dõi <b>{countFollowing}</b> người dùng</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="3">
                            {user.fullName}
                        </Col>
                    </Row>
                </Col>
        </Row>
        </Container>
    );
}

export default InfoUser;