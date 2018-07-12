import React,{ Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Layout from '../components/Layout.js';
import Link from '../utils/helper/Link';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Button,
    Card,
    CardBody
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
class Login extends Component {
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
                                <FormWithMargin method="post">
                                    <FormGroup>
                                        <Label for="username">Username</Label>
                                        <Input type="text" name="username" id="username" placeholder="" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" name="username" id="password" placeholder="" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="confirm_password">Confirm Password</Label>
                                        <Input type="password" name="confirm_password" id="confirm_password" placeholder="" />
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
export default Login;