import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import LikeContext from '../../contexts/LikeContext';
import { Row } from 'reactstrap';

ActionPost.propTypes = {
    
};

function ActionPost(props) {
    const {post, isLike} = props;
    const {onUnLikePost, onLikePost} = useContext(LikeContext);
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
        <div className="list-action-icon ">
            {
                isLike
                ? <FontAwesomeIcon onClick={() => handleClickUnLike(post._id)} icon={faHeartSolid} />
                : <FontAwesomeIcon onClick={() => handleClickLike(post._id)} icon={faHeartRegular} />
            }
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faPaperPlane} />
        </div>
    );
}

export default ActionPost;