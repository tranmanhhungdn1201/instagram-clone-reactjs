import React from 'react';
import PropTypes from 'prop-types';
import ImageUser from '../ImageUser';
import { Row, Col, Container } from 'reactstrap';
import './InfoUser.scss';

InfoUser.propTypes = {
    info: PropTypes.object,
};

InfoUser.defaultProps = {
    info: {}
}

function InfoUser(props) {
    const {info} = props;
    const {user, countPost} = info;
    return (
        <Container>
            <Row className="info-user">
                <Col xs="2">
                    <ImageUser
                        srcImg="https://instagram.fhan2-2.fna.fbcdn.net/v/t51.2885-15/e35/20398817_242067519646715_9028720386673475584_n.jpg?_nc_ht=instagram.fhan2-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=dd4a3BBMXdYAX9MqJ2P&oh=4af34909b6e0abc674631545d795bf3c&oe=5F1B58A7"
                        altImg="avatar-user"
                        width={170}
                        height={170}
                    />
                </Col>
                <Col>
                    <Row>
                        <Col xs="2">
                            {/* <h4>{info.username}</h4> */}
                        </Col>
                        <Col xs="8">
                            <a href="#">Chỉnh sửa trang cá nhân</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2">
                            <span><b>{countPost}</b> bài viết</span>
                        </Col>
                        <Col xs="3">
                            <span><b>290</b> người theo dõi</span>
                        </Col>
                        <Col xs="4">
                            <span>Đang theo dõi <b>511</b> người dùng</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="3">
                            Mạnh Hùng
                        </Col>
                    </Row>
                </Col>
        </Row>
        </Container>
    );
}

export default InfoUser;