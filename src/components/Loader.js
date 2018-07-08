import React, { Component } from 'react';
import {connect} from 'react-redux';

function Loader(props) {
    return (
        <p className={props.loaderClass}>Loading lists...</p>
    )
}

export default connect((state) => ({
    loaderClass: state.loaderClass
}))(Loader)