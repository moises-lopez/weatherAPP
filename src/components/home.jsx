import React, { Component } from 'react';
import Form from './form'
import Display from './display'


import '../css/form.css'

const Home = () => {
    return (  
        <React.Fragment>
        <div className="flex_parent">
        <Form className="flex_left"/>
        <Display className="flex_right"/>
        </div>
        </React.Fragment>
    );
}
 
export default Home;