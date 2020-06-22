import React from 'react';
import './RecommendFriends.scss';
import ImageUser from '../ImageUser';

function RecommendFriends(props) {
    return (
        <div className="recommened-friend">
            <div className="title">
                <p>Gợi ý cho bạn</p>
                <p>Xem tất cả</p>
            </div>
            <div className="list-recommend-friend">
                <div className="item-friend">
                    <ImageUser
                        srcImg="https://instagram.fhan2-2.fna.fbcdn.net/v/t51.2885-15/e35/20398817_242067519646715_9028720386673475584_n.jpg?_nc_ht=instagram.fhan2-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=dd4a3BBMXdYAX9MqJ2P&oh=4af34909b6e0abc674631545d795bf3c&oe=5F1B58A7"
                        altImg="avatar-user"
                        width={50}
                        height={50}
                    />
                    <div className="ml-2">
                        <p>truyen810</p>
                        <p>Mới tham gia Instagram</p>
                    </div>
                    <a href="">Theo dõi</a>
                </div>
            </div>
        </div>
    );
}

export default RecommendFriends;