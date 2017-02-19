import React, { Component } from 'react';
import { FlatButton } from 'material-ui';

export default class Header extends Component {

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
            <div className="cs-pc-header">
                <span className="master">陈&nbsp;&nbsp;硕</span>
                <a className="resume" href="/resume" target="_blank" >个人简历</a>
            </div>
        );
    }
}
