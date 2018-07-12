import React from 'react';
import styled from 'styled-components';
import {
    Col,
    Row,
    Card,
    CardBody,
    Input,
    Form,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import Layout from '../components/Layout';

const Margin = styled.div`
    margin-top: 7vh;
`;
const icontSize = styled.i`
    font-size: 40px;
`;

class Alarm extends React.Component {
    constructor(props) {
        super(props)
    }
   
    render() {
        return (
            <Layout title="SmartMorn - Sleep Session" Navbar={true}>
                <Margin>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>
                            <Card>
                                <CardBody>
                                    <h4><i className="icon ion-md-time" style={{ fontSize: '35px' }}></i> Sleep Session Setting</h4><br/><br/>
                                    <Form method="post">
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <Label for="username">Sleep Time</Label>
                                                    <Input type="time" name="date" id="date" placeholder="date placeholder" />
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <Label for="username">Wake up Time</Label>
                                                    <Input type="time" name="date" id="date" placeholder="date placeholder" />
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
export default Alarm;