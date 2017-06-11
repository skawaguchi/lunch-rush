import React, {PropTypes} from 'react';
import {auth} from './firebase';
import './CurrentUser.css';

function signOutHandler() {
    auth.signOut();
}

const CurrentUser = ({user}) => {
    return (
        <div className="CurrentUser">
            <img
                alt={user.displayName}
                className='CurrentUser--photo'
                src={user.photoURL}
            />
            <div className='CurrentUser--identification'>
                <h3>{user.displayName}</h3>
                <p>{user.email}</p>
                <button onClick={signOutHandler}>Sign out</button>
            </div>
        </div>
    );
};

CurrentUser.propTypes = {
    user: PropTypes.shape({
        displayName: PropTypes.string,
        email: PropTypes.string.isRequired,
        photoURL: PropTypes.string,
        uid: PropTypes.string.isRequired
    })
};

export default CurrentUser;
