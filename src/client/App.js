import React, { Component } from 'react';
import './components/fontawesome';
import { Helmet } from 'react-helmet';
import Feed from './Feed';
import Bar from './components/bar';
import '../../assets/css/style.css';


const App = () => {
        return (
            <div className="container">
                <Helmet>
                    <title>Graphbook - Feed</title>
                    <meta name="description" content="Newsfeed of all your friends on Graphbook" />
                </Helmet>
<Bar />                <Feed />
            </div>
        )
    }
export default App
