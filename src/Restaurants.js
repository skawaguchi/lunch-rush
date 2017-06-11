import React, {Component, PropTypes} from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import {database} from './firebase';
import './Restaurants.css';

class Restaurants extends Component {
    constructor(props) {
        super(props);

        this.handleSelect.bind(this);
        this.handleDeselect.bind(this);
    }

    handleSelect(key) {
        const currentUser = this.props.user;

        database.ref('/restaurants')
            .child(key)
            .child('votes')
            .child(currentUser.uid)
            .set(currentUser.displayName);
    }

    handleDeselect(key) {
        const currentUser = this.props.user;

        database.ref('/restaurants')
            .child(key)
            .child('votes')
            .child(currentUser.uid)
            .remove();
    }

    render() {
        const {restaurants} = this.props;

        return (
            <section className="Restaurants">
                {
                    map(restaurants, (restaurant, key) => {
                        return <Restaurant
                            handleDeselect={() => this.handleDeselect(key)}
                            handleSelect={() => this.handleSelect(key)}
                            key={key}
                            {...restaurant}
                            user={this.props.user}
                        />
                    })
                }
            </section>
        );
    }
}

Restaurants.propTypes = {
    user: PropTypes.object,
    restaurantsRef: PropTypes.object,
    restaurants: PropTypes.object
};

export default Restaurants;
