import React, { Component } from 'react';
import Dialog from '../Welcome/Dialogs'
import Crypto from '../../images/logo.png'
import { Button,Link } from '@material-ui/core'

class index extends Component {
    render() {
        return (
            <Dialog open={this.props.open} onClose={this.props.onClose} >
                <div style={{ textAlign: "center", backgroundColor: "#101535", color:"#e6dde9"}} >
                    <div style={{ textAlign: "center", padding: 20 }} >
                        <img src={Crypto} />
                    </div>
                    <p style={{ fontSize: 20 }} >Welcome To CRYPTO FARM</p>
                    <p style={{ width: 370, fontSize: 16, margin: "auto" }} >This DApp you are about to launch is a decentralized exchange that runs on the Ethereum blockchain. By choosing "I AGREE" below, you agree to CRYPTO FARM's <Link href="https://www.crypto.farm/legal" target="_blank" rel="noreferrer" style={{ color:"#0dc5d8"}} >User Agreement and Privacy Policy.</Link></p>
                    <Button variant="contained" size="large" color="primary" onClick={()=>this.props.onClick()} style={{marginTop:20,marginBottom:20,width:200 }} >I Agree</Button>
                </div>
            </Dialog>
        );
    }
}

export default index;