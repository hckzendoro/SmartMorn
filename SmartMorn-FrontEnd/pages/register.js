import React,{ Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Layout from '../components/Layout.js';
import Link from '../utils/helper/Link';
import { actions as auth  } from '../redux/reducers/auth'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Router from 'next/router';
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
    ButtonGroup,
    Alert
} from 'reactstrap';

const MarginTop = styled.div`
    margin-top: 5vh;
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
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            birthday: '',
            gender: 'Male',
        }
        
    }
    
    register = () => (e)  => {
        e.preventDefault();
        this.props.register(this.state);
    }
    handleChange = (field) => (e) => {
        this.setState({
            [field]: e.target.value
        })
    }
    componentDidMount() {
        this.props.clearMessageRegister();
    }
	render() {
       
		return (
		<Layout title="SmartMorn V1 - Register" Navbar="false">
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
                                { this.props.errorMessage && 
                                    <Alert color={this.props.error ? 'danger' : 'success'}>
                                        {this.props.errorMessage}
                                    </Alert>
                                }
                                <FormWithMargin method="post" onSubmit={this.register()}>
                                    <FormGroup>
                                        <Label for="username">Username</Label>
                                        <Input type="text" name="username" id="username" placeholder="" 
                                        onChange={this.handleChange('username')}
                                        value={this.state.username}
                                        required="true"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" name="username" id="password" placeholder="" 
                                        onChange={this.handleChange('password')}
                                        value={this.state.password}
                                        required="true"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="confirm_password">Confirm Password</Label>
                                        <Input type="password" name="confirm_password" id="confirm_password" placeholder="" 
                                        onChange={this.handleChange('confirmPassword')}
                                        value={this.state.confirmPassword}
                                        required="true"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="confirm_password">BirthDay</Label>
                                        <Input type="date" name="birthday" id="birthday" placeholder=""
                                         onChange={this.handleChange('birthday')}
                                         value={this.state.birthday}
                                        required="true"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="gender">Gender</Label>
                                        <Input type="select" name="select" id="gender" 
                                        onChange={this.handleChange('gender')}
                                        value={this.state.gender}>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </Input>
                                    </FormGroup>
                                    <Button className="btn-outline-info active" block><i className="icon ion-md-log-in"></i> Register</Button>
                                    <MarginLink>
                                        <div>
                                            <Link href="/login">
                                                <a> Back</a>
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
    errorMessage: auth.messageRegister,
    error: auth.error
})

const mapDispatchToProps = (dispatch) => ({
    register: bindActionCreators(auth.Register,dispatch),
    clearMessageRegister: bindActionCreators(auth.clearMessageRegister,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Register);