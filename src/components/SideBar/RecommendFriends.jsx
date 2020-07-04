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
                        srcImg="https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-19/s150x150/101642534_870812113415695_3919789580433227776_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_ohc=Q7Fl7BJjFfkAX9HSZAt&oh=9513ed50cdf1bb946098c002806aa24e&oe=5F273814"
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