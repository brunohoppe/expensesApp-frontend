import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListaGasto from './ListaGasto';
// import Gasto from './Gasto';
import ListaCategoria from './ListaCategoria';
// import Categoria from './Categoria';
import { Link } from 'react-router-dom';
import { Arquiteture } from './Axios.conf';
let h = React.createElement;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      h(MuiThemeProvider, null,
        h('div', null, 
          h(AppBar, {onLeftIconButtonTouchTap: this.handleToggle, title: "Controle de Gastos", iconClassNameRight: "muidocs-icon-navigation-expand-more"}
          ),
          h(Router, null,
            h('div', null,
              h(Drawer, {open: this.state.open, docked: false, onRequestChange: (open) => this.setState({open})},
                h(MenuItem, {style: {backgroundColor: '#8BC34A'}}),
                h(MenuItem,{
                  onClick: this.handleClose, 
                  containerElement: h(Link, {to: '/gastos'})
                }, 'Gastos'),
                h(MenuItem,{
                  onClick: this.handleClose , 
                  containerElement: h(Link, {to: '/categorias'})
                }, 'Categorias'),
              ),
              h(Route, {path: '/gastos', component: ListaGasto}),
              // h(Route, {path: '/gasto', component: Gasto}),
              h(Route, {path: '/categorias', component: ListaCategoria})
              // h(Route, {path: '/categoria', component: Categoria})
            )
          ),
          h(Arquiteture, null)
        ),
      )
    );
  }
}

export default App;
