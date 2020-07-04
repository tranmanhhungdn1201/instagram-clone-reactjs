import React, { useState } from 'react';
import auth from '../../actions/auth';
import PopupFilterUser from './PopupFilterUser';

function FilterInput(props) {
    const [content, setContent] = useState('');
    const [users, setUsers] = useState([]);
    const [modal, setModal] = useState(false);
    const close = () => setModal(false);

    function handleFilter(e){
        const value = e.target.value;
        setContent(value);
        searchUser(value);
    }

    function searchUser(content){
        auth.getUsers(content).then(function(users){
            setUsers(users);
            setModal(true);
        })
    }

    return (
        <div className="search-box" >
            <input
                className="input-search"
                type="text"
                placeholder="Tìm kiếm"
                value={content}
                onChange={(e) => handleFilter(e)}
            />
            <PopupFilterUser  modal={modal} close={close} users={users}/>
        </div>
    );
}

export default FilterInput;