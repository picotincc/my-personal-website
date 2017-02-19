import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { CircularProgress } from 'material-ui';

import "pc/resource/index.less";

import FormatUtil from 'base/util/FormatUtil';
import Header from 'pc/components/Header';


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
        if (!FormatUtil.isPC())
        {
            browserHistory.push("/mobile");
        }
    }

    render()
    {
        return (
            <div className="cs-pc-app">
                <header><Header /></header>
                <div className="my-info">
                    <span className="notice">正在建设中</span>
                    <CircularProgress size={60} thickness={7} />
                </div>
                <ul className="projects-container">

                </ul>
                <footer></footer>
            </div>
        );
    }
}
