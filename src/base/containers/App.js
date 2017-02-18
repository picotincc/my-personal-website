import React, { Component } from 'react';

import "base/resource/index.less";


export default class App extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount()
    {

    }

    render()
    {
        return (
            <div className="cs-root-app">
                {this.props.children}
            </div>
        );
    }
}
