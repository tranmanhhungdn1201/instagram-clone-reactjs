import React from 'react';
import './ShortInUser.scss';
import ImageUser from '../ImageUser';

function ShortInUser({avatar, username, width, height, content}) {
    return (
        <div className="info-short-user">
            <ImageUser
                srcImg={avatar}
                altImg={username}
                width={width}
                height={height}
            />
            <div className="username">
                <a href={"/" + username} >{username}</a>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default ShortInUser;