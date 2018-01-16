import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Gastos from '../gasto/ListaGasto';

let h = React.createElement;

class Home extends React.Component {

    render (){
			return (
					h('div', null,
						h(Tabs, null, 
							h(Tab, {label: 'Gastos'},
								h(Gastos, null)
							)
						) 
					)
        );
    }
}

export default Home;