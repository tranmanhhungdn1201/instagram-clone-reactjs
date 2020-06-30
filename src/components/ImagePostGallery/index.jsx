import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from '../ImageCard';
import { Row, Col, Container } from 'reactstrap';

ImagePostGallery.propTypes = {
    posts: PropTypes.array,
};

function ImagePostGallery(props) {
    const {posts} = props;
    return (
        <Container>
            <hr/>
            <Row>
                {
                    posts.map(post =>
                        <Col sm="4">
                            <ImageCard
                                post={post}
                            />
                        </Col>
                        )
                }
            </Row>
        </Container>
    );
}

export default ImagePostGallery;