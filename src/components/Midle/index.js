import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Categorias from '../../pages/categoria/ListaCategoria';
import Home from '../../pages/home/Home';

//Constants
let h = React.createElement;

let divRouterStyle = {
    backgroundColor: '#E8F5E9'
}

class Midle extends React.Component {
    render(){
        return (
            h(Router, {className: 'main-router'},
            h('div', {
              style : divRouterStyle
              },
              h(Drawer, {open: this.props.openMenu, docked: false, onRequestChange: (open) => this.props.requestChange({open})},
              h(MenuItem, {style: {backgroundColor: '#E8F5E9'}}),
              h(MenuItem,{
                onClick: this.props.handleClose , 
                containerElement: h(Link, {to: '/home'})
              }, 'Home'),
              h(MenuItem,{
                onClick: this.props.handleClose , 
                containerElement: h(Link, {to: '/categorias'})
              }, 'Categorias'),
            ),
              h(Switch, null, 
                h(Route, {path: '/home', component: Home}),
                h(Route, {path: '/categorias', component: Categorias})
              )
            )
          )
        )
    }
} 


export default Midle;