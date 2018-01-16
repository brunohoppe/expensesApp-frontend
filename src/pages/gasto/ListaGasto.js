import React from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton  from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import moment from 'moment';
import Gasto from './Gasto';
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
		gastosArr: [
			{
				categoria: 'Celpe',
				dataPagamento: new Date(),
				dataVencimento: new Date(),
				valor: 123.45,
				tipoTransacao: 1,
				id: 1
			},
			{
				categoria: 'Compesa',
				dataPagamento: new Date(),
				dataVencimento: new Date(),
				valor: 123.45,
				tipoTransacao: 2,
				id: 2
			}
		],
		openDialog: false
	};
  }
//   componentDidMount() {
// 	axiosInstance.get(axioscfg.getBaseUrl() +  '/transacao')
// 	  .then(res => {
// 		const categoriaArr = res.data;
// 		this.setState({ categoriaArr });
//   	});
//   }
	render (){
		return (
			e('div', {className: 'categoria-container'},
				e(Paper, {className: 'categoria-body'},
					e(Table, {style: {marginBottom: '20px'}},
						e(TableHeader, null,
							e(TableRow, null,
								e(TableHeaderColumn, null, 'Categoria'),    
								e(TableHeaderColumn, null, 'Data do Pagamento'),
								e(TableHeaderColumn, null, 'Data do Vencimento'),
								e(TableHeaderColumn, null, 'Valor')
							)
						),
						
						e(TableBody, null,
							this.state.gastosArr.map((item, index) => {
								let rowClass;
								if (item.tipoTransacao === 1) {
									rowClass = 'creditoClass'
								} else {
									rowClass = 'debitoClass'
								}
								return e(TableRow, {key: index, className: rowClass},
									e(TableRowColumn, null, item.categoria),
									e(TableRowColumn, null, moment(item.dataPagamento).format('DD/MM/YYYY')),
									e(TableRowColumn, null, moment(item.dataVencimento).format('DD/MM/YYYY')),
									e(TableRowColumn, null, 'R$' + item.valor)
								)
							})
							
						)
					),
					e(FloatingActionButton , {onClick: () => {this.child.openDialog()}, style: {marginTop: '30px', float: 'right'}, secondary: true}, 
						e(ContentAdd, null)
					),
					e(Gasto, {ref: instance => { this.child = instance; }})
				)
			)
		);
	}

}

export default ListaCategoria;