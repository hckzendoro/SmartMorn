import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { bindActionCreators } from 'redux'; 
import { actions as Alarms } from '../redux/reducers/alarm';
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
import { connect } from 'react-redux';

const Margin = styled.div`
    margin-top: 7vh;
`;
const icontSize = styled.i`
    font-size: 40px;
`;

class Alarm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: ''
        }
        this.checkLogin.bind(this);
    }
    checkLogin() {
        const token = localStorage.getItem('SmartMornKey');
        console.log(token)
        if(!token) {
            Router.push('/login');
        }
    }
    setAlarm = (e) => {
        e.preventDefault();
        this.props.setAlarm(this.state);
    }
    handleChange = (field) => (e) => {
        this.setState({
            [field]: e.target.value
        });
    }
    componentDidMount() {
        this.checkLogin();
        this.props.clearMessage();
    }
    render() {
        return (
            <Layout title="SmartMorn - Alarm" Navbar={true}>
                <Margin>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>
                            <Card>
                                <CardBody>
                                    <h4><i className="icon ion-md-time" style={{ fontSize: '35px' }}></i> Alarm Setting</h4>
                                    <br/>
                                    { this.props.message && 
                                        <Alert color="success">
                                             {this.props.message}
                                        </Alert>
                                    }
                                    <br/>
                                    <Form method="post" onSubmit={this.setAlarm}>   
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <Label for="username">Date</Label>
                                                    <Input type="date" name="date" id="date" placeholder="date placeholder"
                                                    value={this.state.date}
                                                    onChange={this.handleChange('date')}
                                                    required="true"
                                                     />
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <Label for="username">Time</Label>
                                                    <Input type="time" name="date" id="date" placeholder="date placeholder" 
                                                    value={this.state.time}
                                                    onChange={this.handleChange('time')}
                                                    required="true"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Button className="btn-outline-info active">Set Alarm</Button>
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
const mapStateToProps = ({ alarm }) => ({
    message: alarm.message
})
//console.log(Alarms)
const mapDispatchToProps = (dispatch) => ({
    setAlarm: bindActionCreators(Alarms.setAlarm,dispatch),
    clearMessage: bindActionCreators(Alarms.clearMessage,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Alarm);