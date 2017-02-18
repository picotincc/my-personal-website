import React, { Component } from 'react';
import { browserHistory } from 'react-router';

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

                </div>
                <ul className="projects-container">

                </ul>
                <footer></footer>
            </div>
        );
    }
}
