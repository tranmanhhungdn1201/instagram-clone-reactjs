import React from 'react';
import PropTypes from 'prop-types';
import './ImageCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

ImageCard.propTypes = {
    post: PropTypes.object,
};

function ImageCard(props) {
    const {post} = props;
    return (
        <div className="image-card">
            <img 
                src={post.imageUrl}
                alt="Avatar"
                className="image"
            />
            <div className="overlay">
                <div className="icon">
                    <span>
                        <FontAwesomeIcon icon={faHeart}/>
                        10
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faComment}/>
                        {post.comments.length}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ImageCard;