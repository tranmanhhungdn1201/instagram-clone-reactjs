import React from 'react';
import {
  InputGroup, Input
} from 'reactstrap';

function Comment(props) {
    const { handleInput, handleKeyUp, idPost, comment} = props;
    return (
      <>
        <InputGroup>
            <Input
              type="text"
              placeholder="Comment..."
              data-id={idPost}
              value={comment}
              onChange={handleInput}
              onKeyUp={handleKeyUp}
            />
        </InputGroup>
      </>
    );
}

export default Comment;