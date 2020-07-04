import React from 'react';
import './Logo.scss';

function Logo(props) {
    const {width, height} = props;
    return (
        <div className="logo-ins">
            <a href="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                    alt="logo instagram"
                    width={width}
                    height={height}
                />
            </a>
      </div>
    );
}

export default Logo;