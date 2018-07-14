import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import {
    Col,
    Row,
    Card,
    CardBody,
    Input,
    Form,
    FormGroup,
    Label,
    Button,
    Alert
} from 'reactstrap';
import Layout from '../components/Layout';
import { actions as adjust  } from '../redux/reducers/adjustment'
import { connect } from "react-redux";
import { bindActionCreators } from '../node_modules/redux';

const Margin = styled.div`
    margin-top: 7vh;
`;

class PillowAdjustment extends React.Component {
    static async getInitialProps(ctx) {

    }
    constructor(props) {
        super(props);
        this.checkLogin.bind(this);
        this.state = {

        }
    }
    checkLogin() {
        const token = localStorage.getItem('SmartMornKey');
        console.log(token)
        if(!token) {
            Router.push('/login');
        }
    }
    componentDidMount() {
        this.checkLogin();
        this.props.clearMessage();
    }
    turnOnMC = () => (e) => {
        this.props.turnOn(this.state);
    }
    turnOffMC = () => (e) => {
        this.props.turnOff(this.state);
    }
    render() {
        return (
            <Layout title="SmartMorn - PillowAdjustment" Navbar={true}>
                <Margin>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>
                            <Card>
                                <CardBody>
                                    <h4><i className="icon ion-md-settings" style={{ fontSize: '35px' }}></i> Pillow Adjustment</h4><br/>
                                    { this.props.message && 
                                        <Alert color="success">
                                            {this.props.message}
                                        </Alert>
                                    }
                                    <br/>
                                    <center>
                                        <Button className="btn-outline-info active" onClick={this.turnOnMC()}>Turn On</Button> | <Button className="btn-outline-warning active" onClick={this.turnOffMC()}>Turn Off</Button>
                                    </center>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Margin>
            </Layout>
        );
    }
}
const mapStateToProps = ({ adjustment }) => ({
    message: adjustment.message
})

const mapDispatchToProps = (dispatch) => ({
    turnOn: bindActionCreators(adjust.turnOn,dispatch),
    turnOff: bindActionCreators(adjust.turnOff,dispatch),
    clearMessage: bindActionCreators(adjust.clearMessage,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(PillowAdjustment);