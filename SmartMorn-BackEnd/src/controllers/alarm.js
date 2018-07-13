import jwt from 'jsonwebtoken';
import db from '../utils/database';
import md5 from 'md5';

export const setalarm = (req,res) => {
    let date = req.body.date;
    let time = req.body.time;

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
                sleepSession: '0000-00-00 00:00:00',
                alarm: date+' '+time
            },(returnCheckExist) => {
                res.json({
                    error: false,
                    message: 'Set alarm success'
                });
            });
        } else {
            db('UPDATE `config` SET `alarm` = ? WHERE `userID` = ?',[ date+' '+time, user.userID ],(returnCheckExist) => {
                res.json({
                    error: false,
                    message: 'Set alarm success'
                });
            });
        }
    });
}