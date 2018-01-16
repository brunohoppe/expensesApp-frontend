import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import ActionSave from 'material-ui/svg-icons/content/save';
import { axiosInstance, axioscfg } from '../../config/Axios.conf';
let e = React.createElement;
let divButtonStyle = {
	display: 'flex', 
	justifyContent: 'center'
}
let buttonStyle = {
	marginTop: '14px', 
	marginRight: '14px'
}
class Categoria extends React.Component {

	constructor(props){
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			formData: {
				nome: '',
				descricao: ''
			},
			showDialog: false
		};
		this.openDialog = this.openDialog.bind(this);
		this.closeDialog = this.closeDialog.bind(this);
		this.salvar = this.salvar.bind(this);
	}
	
	openDialog (){
        this.setState({showDialog: true});
    }
    closeDialog(){
        this.setState({showDialog: false});
    } 
	handleInputChange(e) {
        let formData = Object.assign({}, this.state.formData);
        formData[e.target.name] = e.target.value;
        this.setState({formData})
    }

	salvar(){
		if(this.state.formData.nome && this.state.formData.descricao){
			axiosInstance.post(axioscfg.getBaseUrl() +  '/categoriagastos', {
				nome: this.state.formData.nome,
				descricao: this.state.formData.descricao
			})
			.then(res => {
			  this.closeDialog();
			});
		}
	}

	render() {
		return (
			e(Dialog, {
				open: this.props.showDialog || this.state.showDialog , modal:false,
				onRequestClose: this.props.closeDialog || this.closeDialog,
				autoScrollBodyContent: true
			},
				e('div', {className: 'categoria-container'},
					e('h1', {className: 'categoria-header'}, 'Categoria'),
					e('div', {className: 'categoria-body'},
						e('div', null, 
							e(TextField, {
								name:'nome' ,
								floatingLabelText: 'Nome', 
								fullWidth: true,
								onChange: this.handleInputChange
							}),
							e(TextField, {
								name: 'descricao',
								floatingLabelText: 'Descrição',
								fullWidth: true,
								onChange: this.handleInputChange
							}),
							e('div', {style: divButtonStyle},
								e(RaisedButton, {
									onClick: this.salvar ,
									style: buttonStyle, 
									secondary: true, 
									icon: e(ActionSave, null)
									}
								),
							)
						)
					)
				)
			)	
		);
	}
}
export default Categoria;