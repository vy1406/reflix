import React, { Component } from 'react';
import Budget from './Budget';

class User extends Component {
    chooseUser = () => {
        this.props.chooseUser(this.props.user.id)
    }
    render() {
        return (
            <div>
                {this.props.user.id} : {this.props.user.name}
                <button onClick={this.chooseUser}>SelectUser</button>
                <Budget budget={this.props.user.budget} />
            </div>
        )
    }
}

export default User;