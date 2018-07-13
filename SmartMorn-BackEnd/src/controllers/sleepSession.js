import jwt from 'jsonwebtoken';
import db from '../utils/database';
import md5 from 'md5';

export const setSleep = (req,res) => {
    let sleepTime = req.body.time;
    const token = req.headers['x-access-token'];

    try {
        var user = jwt.verify(token, 'SuperHeroLOL');
    } catch(error) {
        return res.json({
            error: true,
            message: 'Not allow'
        }); 
    }
    
    db('SELECT * FROM `config` WHERE `userID` = ?',[ user.userID ],(returnData) => {
        if(returnData.length == 0) {
            db('INSERT INTO `config` SET ? ',{
                userID: user.userID,
                sleepTime:  date+' '+time,
                alarm: '0000-00-00 00:00:00'
            },(returnCheckExist) => {
                res.json({
                    error: false,
                    message: 'Set sleep session success'
                });
            });
        } else {
            db('UPDATE `config` SET `sleepTime` = ? WHERE `userID` = ?',[ sleepTime+':00', user.userID ],(returnCheckExist) => {
                res.json({
                    error: false,
                    message: 'Set sleep session success'
                });
            });
        }
    });
}