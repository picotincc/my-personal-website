import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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
            <MuiThemeProvider>
                <div className="cs-root-app">
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}
