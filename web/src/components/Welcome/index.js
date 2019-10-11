import React, { Component } from 'react';
import Dialog from './Dialogs'
import { Grid, Hidden,Link, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import step1 from '../../images/step1.d54034d0.png'
import step2 from '../../images/step2.d4520c89.png'
import step3 from '../../images/step3.551c8d8f.png'
import step4 from '../../images/step4.dcd831c5.gif'
import step5 from '../../images/step5.e8c16158.gif'

// const useStyles = makeStyles(theme => ({
//     button: {
//         margin: theme.spacing(1),outlinedPrimary
//     },
// }));

const styles= theme =>({
    outlinedPrimary:{
        color:"#7d8091",
        borderColor:"#7d8091" ,
    }
})

class index extends Component {
    constructor() {
        super();
        this.state = {
            step: 0
        }
    }

    stepperDetails = () => {
        const { step } = this.state;
        const {classes} = this.props;
        // const classes = useStyles();
        if (step == 0) {
            return (
                <>
                    <p style={{ textAlign: "center",color:"#e6dde9" }} >{"LEARN TO TRADE ON CRYPTO FARM ( < 3 minutes)"}</p>
                    <p style={{ textAlign: "center", fontSize: 12,color:"#97999a" }} >{"Welcome to CRYPTO FARM! This guide will set you up with everything you need to begin trading"}</p>
                    <div style={{ width: "100%", height: 305, display: "flex", alignItems: "center" }} >
                        <img src={step1} width="100%" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 15 }} >
                        <Button variant="outlined" className={classes.outlinedPrimary} onClick={() => this.props.onClose()} >
                            Skip This
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => this.setState({ step: step + 1 })}  >
                            Next
                        </Button>
                    </div>
                </>
            )
        }
        if (step == 1) {
            return (
                <>
                    <p style={{ textAlign: "center",color:"#e6dde9" }} >{"CONNECT, CREATE OR IMPORT A WALLET"}</p>
                    <p style={{ textAlign: "center", fontSize: 12,color:"#97999a" }} >{"You will need a wallet to trade on CRYPTO FARM. From the wallet area, you can create a new wallet or connect an existing wallet to use on CRYPTO FARM."}</p>
                    <div style={{ width: "100%", height: 305, display: "flex", alignItems: "center" }} >
                        <img src={step2} width="100%" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 15 }} >
                        <Button variant="outlined" className={classes.outlinedPrimary} onClick={() => this.setState({ step: step - 1 })} >
                            Previous
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => this.setState({ step: step + 1 })}  >
                            Next
                        </Button>
                    </div>
                </>
            )
        }
        if (step == 2) {
            return (
                <>
                    <p style={{ textAlign: "center",color:"#e6dde9" }} >{"ADD ETH TO YOUR WALLET"}</p>
                    <p style={{ textAlign: "center", fontSize: 12,color:"#97999a" }} >{"You will need some ETH in your wallet. ETH is used for Ethereum network fees: enabling and transferring tokens, wrapping and unwrapping ETH."}</p>
                    <div style={{ width: "100%", height: 305, display: "flex", alignItems: "center" }} >
                        <img src={step3} width="100%" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 15 }} >
                        <Button variant="outlined" className={classes.outlinedPrimary} onClick={() => this.setState({ step: step - 1 })} >
                            Previous
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => this.setState({ step: step + 1 })}  >
                            Next
                        </Button>
                    </div>
                </>
            )
        }
        if (step == 3) {
            return (
                <>
                    <p style={{ textAlign: "center",color:"#e6dde9" }} >{"WRAPPING ETH TO WETH (Optional)"}</p>
                    <p style={{ textAlign: "center", fontSize: 12,color:"#97999a" }} >{"ETH must first be wrapped to trade with ERC20 tokens. Many of our tokens are paired with Wrapped ETH (WETH)."}</p>
                    <div style={{ width: "100%", height: 305, display: "flex", alignItems: "center" }} >
                        <img src={step4} width="100%" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 15 }} >
                        <Button variant="outlined" className={classes.outlinedPrimary} onClick={() => this.setState({ step: step - 1 })} >
                            Previous
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => this.setState({ step: step + 1 })}  >
                            Next
                        </Button>
                    </div>
                </>
            )
        }
        if (step == 4) {
            return (
                <>
                    <p style={{ textAlign: "center",color:"#e6dde9" }} >{"ENABLE TOKENS TO TRADE"}</p>
                    <p style={{ textAlign: "center", fontSize: 12, color: "#97999a" }} >{"Enabling tokens allows you to use ERC20 tokens on CRYPTO FARM, directly from your wallets."} <Link href="https://crypto.farm" target="_blank" rel="noreferrer" style={{ color: "#0dc5d8" }} >Learn More.</Link></p>
                    <div style={{ width: "100%", height: 305, display: "flex", alignItems: "center" }} >
                        <img src={step5} width="100%" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 15 }} >
                        <Button variant="outlined" className={classes.outlinedPrimary} onClick={() => this.setState({ step: step - 1 })} >
                            Previous
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => this.props.onClose()}  >
                            Start Trading
                        </Button>
                    </div>
                </>
            )
        }
    }

    render() {
        const { step } = this.state;
        const blur = { padding: "20px 0px 0px 20px", height: 93, borderBottom: "1px solid hsla(0,0%,100%,.1)" }
        const focus = { ...blur, borderBottom: "3px solid #e6dde9" }
        const textBlur = { fontSize: 13, color: "#97999a"}
        const textFoucus = { ...textBlur, color:"#e6dde9"}
        return (
            <Dialog open={this.props.open} onClose={this.props.onClose} >
                <Grid container style={{ backgroundColor:"#101535"}} >
                    <Grid item xs={12} sm={3} md={3} lg={3} style={{ borderRight: "1px solid hsla(0,0%,100%,.1)" }} >
                        <div style={step == 0 ? focus : blur} >
                            <p style={{ margin: 0, fontSize: 11, color:"#97999a" }} >STEP 1</p>
                            {step >= 1 ? <i style={{ color: "green", marginRight: 5 }} class="fa fa-check-circle" aria-hidden="true"></i> : null}
                            <span style={step == 0 ? textFoucus : textBlur} >Getting Started</span>
                        </div>
                        <div style={step == 1 ? focus : blur} >
                            <p style={{ margin: 0, fontSize: 11, color:"#97999a" }} >STEP 2</p>
                            {step >= 2 ? <i style={{ color: "green", marginRight: 5 }} class="fa fa-check-circle" aria-hidden="true"></i> : null}
                            <span style={step == 1 ? textFoucus : textBlur} >Connect a Wallet</span>
                        </div>
                        <div style={step == 2 ? focus : blur} >
                            <p style={{ margin: 0, fontSize: 11, color:"#97999a" }} >STEP 3</p>
                            {step >= 3 ? <i style={{ color: "green", marginRight: 5 }} class="fa fa-check-circle" aria-hidden="true"></i> : null}
                            <span style={step == 2 ? textFoucus : textBlur} >Add ETH</span>
                        </div>
                        <div style={step == 3 ? focus : blur} >
                            <p style={{ margin: 0, fontSize: 11, color:"#97999a" }} >STEP 4</p>
                            {step >= 4 ? <i style={{ color: "green", marginRight: 5 }} class="fa fa-check-circle" aria-hidden="true"></i> : null}
                            <span style={step == 3 ? textFoucus : textBlur} >Wrap ETH</span>
                        </div>
                        <div style={step == 4 ? focus : blur} >
                            <p style={{ margin: 0, fontSize: 11, color:"#97999a" }} >STEP 5</p>
                            {step >= 5 ? <i style={{ color: "green", marginRight: 5 }} class="fa fa-check-circle" aria-hidden="true"></i> : null}
                            <span style={step == 4 ? textFoucus : textBlur} >Unlock Tokens</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={9} md={9} lg={9} style={{ padding: 15 }} >
                        {this.stepperDetails()}
                    </Grid>
                </Grid>
            </Dialog>
        );
    }
}

export default withStyles(styles)(index);