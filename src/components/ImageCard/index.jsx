import React from 'react';
import PropTypes from 'prop-types';
import './ImageCard.scss';
import ImageModal from '../ImageModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

ImageCard.propTypes = {
    post: PropTypes.object,
};


function ImageCard(props) {
    const {post} = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const close = () => setModal(false);

    return (
        <>
            <div className="image-card" onClick={toggle}>
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
            <ImageModal modal={modal} toggle={toggle} close={close} post={post}/>
        </>
    );
}

export default ImageCard;