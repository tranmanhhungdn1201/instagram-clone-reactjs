import React from 'react';
import ShortInUser from './ShortInUser';
import RecommendFriends from './RecommendFriends';
import './SideBar.scss';

function SideBar(props) {
    return (
        <div className="side-bar">
            <ShortInUser />
            <RecommendFriends />
        </div>
    );
}

export default SideBar;