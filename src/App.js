import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const fetch = require('node-fetch');

class App extends Component
{

    constructor(props)
    {
        super();
        this.state = {};
    }

    render()
    {

        return (
            <div className="App">
                {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<h1 className="App-title">Failed to Load Homepage</h1>*/}
                {/*</header>*/}
                {/*<p className="App-intro">*/}
                    {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                <HomeScreen/>
            </div>
        );
    }

}

class AllUsers extends Component
{

}

class HomeScreen extends Component
{
    render()
    {
        return (
            <html>
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content=""/>
                <meta name="author" content=""/>
                <link rel="icon" href="../../favicon.ico"/>

                <title>utuezi home</title>

                <link href="../dist/css/bootstrap.css" rel="stylesheet"/>
                <link href="../dist/css/starter-template.css" rel="stylesheet"/>
            </head>

            <body>
            <nav class="navbar navbar-toggleable-md navbar-inverse bg-success fixed-top">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">utuezi</a>

                <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/html/profile.html">Profile<span
                                class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Sign In</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search by Month"/>
                        <button class="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <div class="container">

                <div class="starter-template">
                    <h1>Welcome to utuezi!</h1>
                    <br/>
                    <button class="btn btn-outline-success" id="showMonth" onclick="fetchThisMonth">
                        This Month's Appointments
                    </button>
                </div>

                <section id="this_month">
                </section>

            </div>
            </body>
            </html>
        );
    }
}

export default App;
