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

class PillowAdjustment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout title="SmartMorn - PillowAdjustment" Navbar={true}>
                <Margin>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>
                            <Card>
                                <CardBody>
                                    <h4><i className="icon ion-md-settings" style={{ fontSize: '35px' }}></i> Pillow Adjustment</h4><br/><br/>
                                    <Form method="post">
                                        <center>
                                            <Button className="btn-outline-info active" >Turn On</Button> | <Button className="btn-outline-warning active" >Turn Off</Button>
                                        </center>
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

export default PillowAdjustment;