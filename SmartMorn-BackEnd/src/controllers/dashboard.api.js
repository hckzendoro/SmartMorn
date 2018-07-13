import jwt from 'jsonwebtoken';
import db from '../utils/database';
import md5 from 'md5';


export const graph = (req,res) => {
  res.json({
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
  });
}

export const pie1 = (req,res) => {
  res.json({
    labels: [
  		'Red',
  		'Green',
  		'Yellow'
  	],
    datasets: [{
  		data: [300, 50, 100],
  		backgroundColor: [
  		'#FF6384',
  		'#36A2EB',
  		'#FFCE56'
  		],
  		hoverBackgroundColor: [
  		'#FF6384',
  		'#36A2EB',
  		'#FFCE56'
  		]
  	}]
  });
}

export const pie2 = (req,res) => {
  res.json({
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  });
}
