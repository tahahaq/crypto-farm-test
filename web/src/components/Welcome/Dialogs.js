import React, { Component } from 'react';
import {Dialog,DialogContent} from '@material-ui/core'


class index extends Component {
    render() {
        return (
            <Dialog
            fullWidth={true}
            maxWidth={"sm"}
            open={this.props.open} 
            onClose={this.props.onClose} >
                {/* <DialogContent> */}
                    {this.props.children}
                {/* </DialogContent> */}
            </Dialog>
        );
    }
}

export default index;