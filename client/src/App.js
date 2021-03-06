import React from 'react';
import {BrowserRouter as Router, Route, Redirect, NavLink, Switch} from 'react-router-dom'

import Games from './ContainerComponents/Games'
import Series from './ContainerComponents/Series'
import Movies from './ContainerComponents/Movies'
import './App.css';


class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <div id="header">
                        <ul>
                            <li>
                                <NavLink to='/games' activeClassName="active">
                                    <code id="games">Games</code>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/series' activeClassName="active">
                                    <code id="series">Series</code>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/movies' activeClassName="active">
                                    <code id="movies">Movies</code>
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <Switch>
                        <Route exact path='/' render={() => (
                            <Redirect
                                to='/games'
                            />
                        )}/>
                        <Route path='/games' component={Games}/>
                        <Route path='/series' component={Series}/>
                        <Route path='/movies' component={Movies}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
