import React,{ Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { bindActionCreators } from 'redux';
import Router from 'next/router';
import Layout from '../components/Layout.js';
import Link from '../utils/helper/Link';
import { connect } from "react-redux";
import { actions as auth  } from '../redux/reducers/auth'

import {
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    Alert
} from 'reactstrap';

const MarginTop = styled.div`
    margin-top: 13vh;
`;
const MarginLink = styled.div`
    margin-top: 10px;
`;
const MarginBottom = styled.div`
    margin-bottom: 40px;
`;
const FormWithMargin = styled(Form) `
    margin-top: 16px;
`;
const MarginForButton = styled.div `
    margin-top: 20px;
`;
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    componentDidUpdate() {
        if(this.props.isLogin)
            Router.push('/dashboard');

    }

    Login = (e) => {
        e.preventDefault();
       // console.log(this.state) 
        const { username , password } = this.state;
        this.props.login(username,password);
    }

    handleChange = (field) => (e) => {
        this.setState({
            [field]: e.target.value
        });
    }
    render() {
        
		return (
            <Layout title="SmartMorn V1 - Login" Navbar="false">
                <MarginTop>
                    <Row>
                        <Col md="3" md={{ size: 4, offset: 4 }}>
                            <MarginBottom>
                                <center>
                                    <img src="static/images/smartmornlogo.png" width="300"/>
                                </center>
                            </MarginBottom>
                            <Card>
                                <CardBody>
                                    <FormWithMargin method="post" onSubmit={(e) => this.Login(e)}>
                                        { this.props.errorMessage && 
                                            <Alert color="danger">
                                                {this.props.errorMessage}
                                            </Alert>
                                        }
                                        <FormGroup>
                                            <Label for="username">Username</Label>
                                            <Input type="text" name="username" id="username" placeholder="" 
                                                value={this.state.username}
                                                onChange={this.handleChange('username')}
                                                required="true"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="password">Password</Label>
                                            <Input type="password" name="username" id="password" placeholder="" 
                                                value={this.state.password}
                                                onChange={this.handleChange('password')}
                                                required="true"
                                            />
                                        </FormGroup>
                                        <MarginForButton>
                                            <Button block className="btn-outline-info active" disabled={this.props.loading}><i className="icon ion-md-log-in"></i> Login</Button>
                                        </MarginForButton>
                                        <MarginLink>
                                            <div>
                                                Don't have an account? 
                                                <Link href="/register">
                                                    <a> Register</a>
                                                </Link>
                                            </div>
                                        </MarginLink>
                                    </FormWithMargin>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </MarginTop>
            </Layout>
	    )
	}
}

const mapStateToProps = ({ auth }) => ({
    isLogin : auth.isLogin,
    errorMessage: auth.messageLogin
})

const mapDispatchToProps = (dispatch) => ({
    login: bindActionCreators(auth.Login, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);




