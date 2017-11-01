import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component
{

    constructor(props)
    {
        super();
        this.state = {view:"home"};
    }

    render()
    {

        return (
            <div class="App">
                {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<h1 className="App-title">Failed to Load Homepage</h1>*/}
                {/*</header>*/}
                {/*<p className="App-intro">*/}
                    {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                <AllUsers/>
                <AllUsers/>
            </div>
        );
    }
}

class AllUsers extends Component {
    constructor(props){
        super(props);
        this.state = {size: 2}
        let userarray=[];
        //let firstnames userarray.map((firstname
        let firstnames=[1,2,3];
        let arrayemail=[3,2,1];
    }
    render(){
            let rows = [];
            for (var i = 0; i < this.state.size; i++){
                let rowID = `row${i}`
                let cell = []
                for (var idx = 0; idx < this.state.size; idx++){
                    let cellID = `cell${i}-${idx}`
                    cell.push(<td key={cellID} id={cellID}>{this.firstnames[idx]+" "+this.lastnames[idx]}</td>)
                }
                rows.push(<tr key={i} id={rowID}>{cell}</tr>)
            }
            return(
                <div className="container">
                    <div className="row">
                        <div className="col s12 board">
                            <table id="simple-board">
                                <tbody>
                                {rows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        }
}
class HomeScreen extends Component
{
    constructor(props)
    {
        super(props);
        this.data = [];
    }

    componentDidMount()
    {
        fetch('/users/')
            .then(response=>
            {
                this.data = response.json();
            })
            .catch(error=>
            {
                console.log(error);
            });
    }

    render()
    {
        return (
            <div>
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
                    <button class="btn btn-outline-success" id="showMonth" onClick="fetchThisMonth">
                        This Month's Appointments
                    </button>
                </div>

                <section id="this_month">
                </section>

            </div>
            </div>
        );
    }
}

export default App;
