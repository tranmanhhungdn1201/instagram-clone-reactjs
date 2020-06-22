import React from 'react';
import './ShortInUser.scss';
import ImageUser from '../ImageUser';

function ShortInUser(props) {
    return (
        <div className="info-user">
            <ImageUser
                srcImg="https://instagram.fhan2-2.fna.fbcdn.net/v/t51.2885-15/e35/20398817_242067519646715_9028720386673475584_n.jpg?_nc_ht=instagram.fhan2-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=dd4a3BBMXdYAX9MqJ2P&oh=4af34909b6e0abc674631545d795bf3c&oe=5F1B58A7"
                altImg="avatar-user"
                width={80}
                height={80}
            />
            <div className="username">
                <p>gnuh.m</p>
                <p>Mạnh Hùng</p>
            </div>
        </div>
    );
}

export default ShortInUser;