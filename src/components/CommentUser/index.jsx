import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import ImageUser from '../ImageUser';

CommentUser.propTypes = {
    comment: PropTypes.object,
};

function CommentUser(props) {
    const {comment} = props;
    return (
        <div>
            <Row className="d-flex align-items-center post-comment">
                <ImageUser
                    srcImg="https://instagram.fixc1-3.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fixc1-3.fna.fbcdn.net&_nc_ohc=VuHrdWdZLhYAX9ny6vK&oh=53db277dd4fb3e3940b83b3664c623e9&oe=5F237E8F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                    altImg="avatar-user"
                    width={40}
                    height={40}
                />
                <div className="ml-2">
                    <a href="#" className="username">
                        {comment.username}
                    </a>
                    <span className="ml-2">
                         : {comment.content}
                    </span>
                    <p className="m-0 time-comment">2w</p>
                </div>
            </Row>
        </div>
    );
}

export default CommentUser;