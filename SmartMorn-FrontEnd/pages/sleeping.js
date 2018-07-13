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
import { actions as sleeps  } from '../redux/reducers/sleepSession'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
const Margin = styled.div`
    margin-top: 7vh;
`;
const icontSize = styled.i`
    font-size: 40px;
`;

class Alarm extends React.Component {
    constructor(props) {
        super(props);
        this.checkLogin.bind(this);
        this.state = {
            sleepTime: ''
        }
    }
    setSleepTime = (e) => {
        e.preventDefault();
        this.props.setSleepTimeAction(this.state);
       // console.log(this.state) 
        // const { username , password } = this.state;
        // this.props.login(username,password);
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

    handleChange = (field) => (e) => {
        this.setState({
            [field]: e.target.value
        });
    }
    render() {
        return (
            <Layout title="SmartMorn - Sleep Session" Navbar={true}>
                <Margin>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>
                            <Card>
                                <CardBody>
                                    <h4><i className="icon ion-md-time" style={{ fontSize: '35px' }}></i> Sleep Session Setting</h4>
                                    <br/>
                                    { this.props.message && 
                                        <Alert color="success">
                                             {this.props.message}
                                        </Alert>
                                    }
                                    <br/>
                                    <Form method="post" onSubmit={(e) => this.setSleepTime(e)}>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <Label for="username">Sleep Time</Label>
                                                    <Input type="time" name="date" id="date" placeholder="date placeholder" 
                                                    
                                                    value={this.state.sleepTime}
                                                    onChange={this.handleChange('sleepTime')}
                                                    required="true"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Button className="btn-outline-info active">Set Session Time</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Margin>
            </Layout>
        );
    }
}
const mapStateToProps = ({ sleep }) => ({
    message: sleep.message
})

const mapDispatchToProps = (dispatch) => ({
    setSleepTimeAction: bindActionCreators(sleeps.setSleepSession, dispatch),
    clearMessage: bindActionCreators(sleeps.clearMessage, dispatch),
})
export default connect(mapStateToProps,mapDispatchToProps)(Alarm);