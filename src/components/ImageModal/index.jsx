import React from "react";
import './ImageModal.scss';
import ImageUser from '../ImageUser';
import { Row } from "reactstrap";
import CommentUser from "../CommentUser";
import ActionPost from "../ActionPost";
import Comment from "../Comment";

function ImageModal({ modal, close, post}) {

  return modal ? (
    <div
      className="modal-backdrop"
      onClick={close}
    >
        <div
            className="content"
            onClick={e => e.stopPropagation()}
        >
            <img
                className="img-post"
                src={post.imageUrl}
            />
            <div className="comment-post">
                <Row className="align-items-center title-post post-comment">
                     <ImageUser
                        srcImg={post.user.avatar}
                        altImg="avatar-user"
                        width={40}
                        height={40}
                    />
                    <a href="#" className="ml-2 username">
                        {post.user.username}
                    </a>
                </Row>
                <div className="comments my-custom-scrollbar">
                    <Row className="align-items-center post-comment">
                        <ImageUser
                            srcImg={post.user.avatar}
                            altImg="avatar-user"
                            width={40}
                            height={40}
                        />
                        <a href="#" className="ml-2 username">
                            {post.user.username} : {post.caption}
                        </a>
                    </Row>
                    {
                        post.comments.map(comment =>
                            <CommentUser comment={comment}/>
                        )
                    }
                </div>
                <ActionPost post={post} />
                <span className="mr-1">3 người khác đã thích</span>
                <Comment idPost={post._id}/>
            </div>
        </div>
    </div>
  ) : null;
}

export default ImageModal;
