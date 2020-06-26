import React, { useState, useContext } from 'react';
import {
  InputGroup, Input
} from 'reactstrap';
import CommentContext from '../../contexts/CommentContext';
import PropTypes from 'prop-types';

Comment.propTypes = {
  idPost: PropTypes.string
}
function Comment(props) {
    const {idPost} = props;
    const [ comment, setComment] = useState('');
    const {onCommentPost} = useContext(CommentContext);

    function handleInput(event){
      const value = event.target.value;
      setComment(value);
    }

    function handleKeyUp(event){
      if(onCommentPost){
        if(event.keyCode === 13){
          if(!comment.trim()){
            return;
          }
          const data = {
            idPost: idPost,
            content: comment
          }
          onCommentPost(data);
          setComment('');
        }
      }
    }

    return (
      <>
        <InputGroup>
            <Input
              type="text"
              placeholder="Thêm bình luận..."
              value={comment}
              onChange={(e) => handleInput(e)}
              onKeyUp={(e) => handleKeyUp(e)}
            />
        </InputGroup>
      </>
    );
}

export default Comment;