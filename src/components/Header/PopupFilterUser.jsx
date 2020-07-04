import React from 'react';
import PropTypes from 'prop-types';
import './PopupFilterUser.scss';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ShortInUser from '../ShortInfoUser/ShortInUser';

PopupFilterUser.propTypes = {
    users:PropTypes.array,
};

PopupFilterUser.defaultProps = {
    users: []
}

function PopupFilterUser({ modal, close, users}) {
    return modal ? (
        <div className="popup-filter-users">
            {
                users.length ? users.map(user =>
                    <ListGroup>
                        <ListGroupItem>
                            <ShortInUser
                                avatar={user.avatar}
                                username={user.username}
                                content={user.fullName}
                                width={40}
                                height={40}
                            />
                        </ListGroupItem>
                    </ListGroup>
                ) :
                <ListGroup>
                    <ListGroupItem>
                        Không có kết quả nào.
                    </ListGroupItem>
                </ListGroup>
            }
        </div>
    ) : null;
}

export default PopupFilterUser;