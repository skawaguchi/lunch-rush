import React, {Component} from 'react';
import {auth, googleAuthProvider} from './firebase';

class SignIn extends Component {
    onClickHandler() {
        auth.signInWithPopup(googleAuthProvider);
    }

    render() {
        return (
            <div className="SignIn">
                <button onClick={this.onClickHandler}>Sign In</button>
            </div>
        );
    }
}

export default SignIn;
