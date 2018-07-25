import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {Line,Doughnut,Pie} from 'react-chartjs-2';
import Link from 'next/link';
import Router from 'next/router';
//import { actions as auth  } from '../redux/reducers/auth'
import { connect } from "react-redux";
import { actions as Dashboards } from '../redux/reducers/dashboard';
import { bindActionCreators } from 'redux';
import { 
    Input,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

const Margin = styled.div`
    margin-top: 7vh;
`;
const CardCustom = styled(Card)`
    margin-bottom: 15px;
`;
const data = {
    labels: ['21.00', '21.30', '22.00', '22.30', '23.00', '23.30', '00.00'],
    datasets: [
      {
        label: 'Sleep Score',
        fill: false,
        lineTension: 0.2,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

class Dashboard extends React.Component {
    
    constructor(props) {
        super(props);
        this.checkLogin.bind(this);
       
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
        this.props.getAllData();
    }
    render() {
        console.log(this.props)
        return (
            <Layout title="SmartMorn V1 - Dashboard" Navbar={true}>
                <Margin>
                    <Row>
                        <Col md={{ size: 12 }}>
                            <CardCustom>
                                <CardBody>
                                    <CardTitle>Alam Set @ {this.props.dashboardData.alarm}</CardTitle>
                                    <CardSubtitle>Last Synced  @ {this.props.dashboardData.time}</CardSubtitle>
                                    <div align="right">
                                        <Link href="/alarm">
                                            <Button className="btn-outline-success active">Set Alarm</Button>
                                        </Link>
                                    </div>
                                </CardBody>
                            </CardCustom>
                        </Col>        
                    </Row>
                    <Row>
                        <Col md={{ size: 6}}>
                            <CardCustom>
                                <CardBody>
                                    <CardTitle><b>Today</b></CardTitle>
                                    <CardSubtitle>Last Synced  @ {this.props.dashboardData.time}</CardSubtitle>
                                    <br/>
                                    <Line data={data} />
                                    <br/>
                                </CardBody>
                            </CardCustom>
                        </Col> 
                        <Col md={{ size: 6 }}>
                            <CardCustom>
                                <CardBody>
                                    <CardTitle>Temperature</CardTitle>
                                    <CardSubtitle>Last Synced  @ {this.props.dashboardData.time}</CardSubtitle>
                                    <br/>
                                    <Doughnut data={this.props.dashboardData.tempPie || { data: null} } />
                                    <br/>
                                </CardBody>
                            </CardCustom>
                        </Col>    
                    </Row>
                </Margin>
            </Layout>
        );
    }

}
const mapStateToProps = ({ dashboard }) => ({
    dashboardData: dashboard.dashboardData
})

const mapDispatchToProps = (dispatch) => ({
    getAllData: bindActionCreators(Dashboards.getData,dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
