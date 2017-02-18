import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import FormatUtil from 'base/util/FormatUtil';


export default class App extends Component {

    constructor (props) {
        super(props);
        this.redirect();
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


    redirect()
    {
        if (!FormatUtil.isPc())
        {
            browserHistory.push("/mobile");
        }
    }

    render()
    {
        return (
            <div className="cs-pc-app">
                PC端
            </div>
        );
    }
}
