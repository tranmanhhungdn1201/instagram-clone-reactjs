import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
// import { faHomeActive } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faCompass } from '@fortawesome/free-regular-svg-icons'
import './MainNavigation.scss';

function MainNavigation() {
    const [active, setActive] = useState();
    return (
        <div className="main-nav">
            <ul>
                <li>
                    <a href="/"><FontAwesomeIcon icon={faHome} /></a>
                    {/* <a href="/"><FontAwesomeIcon icon={faHomeActive} /></a> */}
                </li>
                <li>
                    <a href="#" className="active"><FontAwesomeIcon icon={faPaperPlane} /></a>
                </li>
                <li>
                    <a href="#"><FontAwesomeIcon icon={faCompass} /></a>
                </li>
                <li>
                    <a href="#"><FontAwesomeIcon icon={faHeartRegular} /></a>
                </li>
            </ul>
        </div>
    );
}

export default MainNavigation;