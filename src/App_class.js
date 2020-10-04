import React from 'react';
//import React, {useEffect, useState} from 'react';

import {connect} from 'react-redux';

import {Header} from "./components/";
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";
import axios from "axios";
import {setPizzas } from "./redux/action/pizzas"

//function App_class() {

    // const [pizzas,setPizzas] = useState([]);

   // useEffect(()=>{
        //axios.get('http://localhost:3000/db.json').then(({data}) =>{
       // });
    //},[]);
//}


class App_class extends React.Component{

    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) =>{
          this.props.setPizzas(data.pizzas)
        });
    }
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path="/" render={()=> <Home items={this.props.items}/>} exact/>
                    <Route path="/cart" component={Cart} exact/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
   return {
       items: state.pizzas.items
   }
};
const mapDispatchToProps = {
    setPizzas
};

export default connect(mapStateToProps, mapDispatchToProps)(App_class);
