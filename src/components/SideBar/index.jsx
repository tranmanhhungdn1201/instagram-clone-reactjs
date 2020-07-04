import React from 'react';
import ShortInUser from '../ShortInfoUser/ShortInUser';
import RecommendFriends from './RecommendFriends';
import httpClient from '../../actions/httpClient';
import './SideBar.scss';

function SideBar(props) {
    const auth = httpClient.getCurrentUser();
    return (
        <div className="side-bar">
            <ShortInUser
                avatar={auth.avatar}
                username={auth.username}
                content={auth.fullName}
                width={80}
                height={80}
            />
            <RecommendFriends />
        </div>
    );
}

export default SideBar;