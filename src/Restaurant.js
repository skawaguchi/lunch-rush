import React, {Component, PropTypes} from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {

    render() {
        const userHasSelected = this.props.votes && Object.keys(this.props.votes).includes(this.props.user.uid);

        return (
            <article className="Restaurant">
                <h3>{this.props.name}</h3>
                <ul>
                    {this.props.votes && map(this.props.votes, (vote, key) => <li key={key}>{vote}</li>)}
                </ul>
                <button
                    onClick={this.props.handleSelect}
                >
                    Yup Yup
                </button>
                <button
                    className='destructive'
                    onClick={this.props.handleDeselect}
                >
                    Naw, Dawg...
                </button>
            </article>
        );
    }
}

Restaurant.propTypes = {
    name: PropTypes.string,
    votes: PropTypes.object,
    user: PropTypes.object,
    handleSelect: PropTypes.func,
    handleDeselect: PropTypes.func
};

export default Restaurant;
