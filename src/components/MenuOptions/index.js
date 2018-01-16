import React from 'react';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';


let h = React.createElement;

class MenuOptions extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            h(IconMenu, {
                iconButtonElement: h(IconButton, null, h(MoreVertIcon, null)),
                anchorOrigin: {horizontal: 'left', vertical: 'top'},
                targetOrigin: {horizontal: 'left', vertical: 'top'}
                
              }
            )
        );
    }

}



export default MenuOptions;