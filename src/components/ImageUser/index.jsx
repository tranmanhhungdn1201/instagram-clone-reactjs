import React from 'react';
import './ImageUser.scss';

function ImageUser(props) {
    const {width, height, srcImg, altImg} = props;
    return (
        <div className="image-user">
            <img 
                src={srcImg}
                alt={altImg}
                width={width}
                height={height}
            />
        </div>
    );
}

export default ImageUser;