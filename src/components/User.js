import React, { Component } from 'react';

class User extends Component {
    chooseUser = () => {
        this.props.chooseUser(this.props.user.id)
    }
    render() {
        return (
            <div>
                {this.props.user.id} : {this.props.user.name}
                <button onClick={this.chooseUser}>SelectUser</button> 
            </div>
        )
    }
}

export default User;