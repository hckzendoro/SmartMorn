import jwt from 'jsonwebtoken';
import db from '../utils/database';
import md5 from 'md5';
import _ from 'lodash';
import moment from 'moment';
const bestTemp = 20;

Array.prototype.groupBy = function(prop) {
  return this.reduce(function(groups, item) {
    const val = item[prop];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
}
export const dashboard = (req,res) => {
  const token = req.headers['x-access-token'];
  try {
    var user = jwt.verify(token, 'SuperHeroLOL');
  } catch(error) {
    return res.json({
      error: true,
      message: 'Not allow'
    }); 
  }

  db('SELECT * FROM `config` WHERE `userID` = ?',[ user.userID ],(returnDataConfig) => {
    db('SELECT *,UNIX_TIMESTAMP(time) AS time_unix FROM `sensordata`',[ ],(returnData) => {
      
      let result = _.countBy(returnData, 'temperature');
      let count = 0;
      Object.keys(result).forEach(((ele) => {
        count += result[ele];
        
      }));
      let temp = {
        perfect: 0,
        hot: 0,
        cold: 0
      };

      // cal percentage 
      Object.keys(result).forEach(((ele) => {
        if(ele >= 20 && ele <= 27) {
          temp.perfect += (result[ele] / count) * 100
        } else if(ele > 27) {
          temp.hot += (result[ele] / count) * 100
        } else if(ele < 20) {
          temp.cold += (result[ele] / count) * 100
        }
      }));
      let date = new Date(Date.now());
      date = (date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear()+' '+(date.getHours() > 12 ? date.getHours() - 12 : date.getHours())+':'+date.getMinutes()+' '+(date.getHours() >= 12 ? "PM" : "AM");
      res.json({
        error: false,
        time: date,
        alarm: moment(returnDataConfig[0].alarm).format('MM/DD/YYYY h:mm'),
        tempPie: {
          labels: [
            'Too Hot',
            'Too Cold',
            'Perfect'
          ],
          datasets: [{
            data: [ 
              temp.hot,
              temp.cold,
              temp.perfect
            ],
            backgroundColor: [
            '#f90230',
            '#00a1ff',
            '#4caf50'
            ],
            hoverBackgroundColor: [
            '#f90230',
            '#00a1ff',
            '#4caf50'
            ]
          }]
        }
      });
    });
  });
}
