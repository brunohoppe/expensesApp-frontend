import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

let e = React.createElement;
class Gastos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valor: '',
            tipo: '',
            data: '',
            showDialog: false
        };
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);

     }
    openDialog (){
        this.setState({showDialog: true});
    }
    closeDialog(){
        this.setState({showDialog: false});
    } 
    onChangeNumber(e){
        const re = /^\d+\.?\d{0,2}$/;
        let pvalue = e.target.value;
        pvalue = pvalue.replace('.', '');
        if (pvalue === '' || (re.test(pvalue) && pvalue.length < 7)) {
            if(pvalue.length > 2){
                pvalue = pvalue.substring(0, pvalue.length - 2) + '.' + pvalue.substring(pvalue.length - 2);
            }
            this.setState({valor: pvalue})
        }
    }
	render() {
		return (
            e(Dialog, {
				open: this.state.showDialog, modal:false,
                onRequestClose: this.closeDialog,
                autoScrollBodyContent: true,
                style: {top: '-60px'}
			},
                e('div', {className: 'gastos-container'},
                    e('h1', {className: 'gastos-header'}, 'Gastos'),
                    e('div', {className: 'gastos-body'},
                            e(TextField, {floatingLabelText: 'Nome', fullWidth: true}),
                            e(DatePicker, {style: {marginTop: '14px'}, hintText: 'Data Pagamento', fullWidth: true}),
                            e(DatePicker, {style: {marginTop: '14px'},hintText: 'Data Vencimento', fullWidth: true}),
                            e(TextField, {floatingLabelText: 'Valor R$', fullWidth: true , onChange: this.onChangeNumber, value: this.state.valor}),
                            e('div', {style: {display: 'flex', justifyContent: 'center'}},
                                e(RaisedButton, {style: {marginTop: '14px', marginRight: '14px'}, secondary: true, icon: e(FontIcon, {className: 'material-icons'}, 'save')}),
                            )
                            // e(RaisedButton, {onClick: () => {this.props.history.push('/gastos')}, style: {marginTop: '14px', marginRight: '14px'}, primary: true, icon: e(FontIcon, {className: 'material-icons'}, 'close')})

                    )
                )
            )
		);
	}
}
export default Gastos;