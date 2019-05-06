import React, { Component } from 'react';

class Budget extends Component {

    render() {
        return (
            <span>{this.props.budget}$</span>
        )
    }
}

export default Budget;