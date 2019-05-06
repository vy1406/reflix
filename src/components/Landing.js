import React, { Component } from 'react';
import User from './User';

class Landing extends Component {

    chooseUser = user => {
        this.props.chooseUser(user)
    }
    render() {
        return (
            <div>
                <h3>Landing Component</h3>
                {this.props.users.map(u =>
                    <User user={u} chooseUser={this.chooseUser}/>
                )}
                <hr />
            </div>
        )
    }
}

export default Landing;