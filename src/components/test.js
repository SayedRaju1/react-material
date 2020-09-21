import React from 'react';

import './App.css';
import Home from './components/Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import PostDetails from './components/PostDetails/PostDetails';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
                <Router>
                    <Switch>
                        <Route path="/post/:idPost">
                            <PostDetails></PostDetails>
                        </Route>

                        <Route path="/">
                            <Home />
                        </Route>

                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </React.Fragment>
    );
}
