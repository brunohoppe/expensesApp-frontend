import React from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton  from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Categoria from './Categoria';
import { axiosInstance, axioscfg } from '../../config/Axios.conf';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
let e = React.createElement;
class ListaCategoria extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			openDialog: false,
			categoriaArr: []
		};
  	}

  	componentDidMount() {
    	axiosInstance.get(axioscfg.getBaseUrl() +  '/categoriasgastos')
      	.then(res => {
        	const categoriaArr = res.data;
        	this.setState({ categoriaArr });
      });
	}
	  
	render (){
		return (
			e('div', {className: 'categoria-container'},
				e('h1',  {className: 'categoria-header'}, 'Categorias'),
				e(Paper, {className: 'categoria-body'},
					e(Table, {style: {marginBottom: '20px'}},
						e(TableHeader, null,
							e(TableRow, null,
								e(TableHeaderColumn, null, 'Nome'),    
								e(TableHeaderColumn, null, 'Descricao')
							)
						),
						
						e(TableBody, null,
							this.state.categoriaArr.map((item, index) => {
								return (
								e(TableRow, {key: index},
									e(TableRowColumn, null, item.nome),
									e(TableRowColumn, null, item.descricao)
								)
							)
							})
							
						)
					),
					e(FloatingActionButton , {onClick: () => {this.child.openDialog()}, style: {marginTop: '30px', float: 'right'}, secondary: true}, 
						e(ContentAdd, null)
					),
					e(Categoria, {ref: instance => { this.child = instance; }})
				)
			)
		
		);
	}

}

export default ListaCategoria;