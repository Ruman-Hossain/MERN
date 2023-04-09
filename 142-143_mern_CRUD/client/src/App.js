import React, {Component, Fragment} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import ReadPage from "./Pages/ReadPage";
import CreatePage from "./Pages/CreatePage";
import UpdatePage from "./Pages/UpdatePage";
import {Switch} from "react-router";
class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={(props)=><ReadPage {...props} key={Date.now()} />}/>
                        <Route exact path="/create" render={(props)=><CreatePage {...props} key={Date.now()} />}/>
                        <Route exact path="/update/:id" render={(props)=><UpdatePage {...props} key={Date.now()} />}/>
                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}
export default App;