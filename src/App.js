import React from 'react';
import {Header} from "./components/";
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                {/*<Route path="/" render={()=> <Home items={items}/>} exact/>*/}
                <Route path="/" component={Home} exact/>
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>
    )
}

export default App;
