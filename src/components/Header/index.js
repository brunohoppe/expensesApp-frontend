import React from 'react';
import AppBar from 'material-ui/AppBar';

//Constants
let h = React.createElement;

let titleStyle = {
    display: 'flex',
    justifyContent: 'center',

}
let appStyle = {
    backgroundColor: '#E0E0E0',
    gridRow: 1
}

class Header extends React.Component {
    render () {
        return (
            h(AppBar, {
                onLeftIconButtonTouchTap: this.props.handleToggle,
                className: 'main-appbar', 
                titleStyle: titleStyle, 
                style: appStyle, 
                showMenuIconButton: true,
                title: 
                    h('img', {
                            width: "45px",
                            height: "40px", 
                            src: "logo.png"
                    })
            })
        );
    }

}

export default Header;