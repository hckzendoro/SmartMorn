import jwt from 'jsonwebtoken';
import db from '../utils/database';
import md5 from 'md5';
export const login = (req,res) => {

    let username = req.body.username;
    let password = req.body.password;
    if(!(username != undefined && password != undefined))
        return res.json({
            error: true,
            message: 'Invalid'
        })
    db('SELECT * FROM `userinfo` WHERE `username` = ? and `password` = ?',[ username, md5(password) ],(returnData) => {

        if(returnData.length > 0) {
            const token = jwt.sign({ userID: returnData[0].id },'SuperHeroLOL',{ expiresIn: '24h' });
            res.json({
                error: false,
                message: 'success',
                token: token
            });
        } else {
            res.json({
                error: true,
                message: 'Error: Username Or Password Incorrect!'
            });
        }
    });
}

export const register = (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    let gender = req.body.gender;
    let birthDay = req.body.birthday;
    if(!(username != undefined && password != undefined && gender != undefined && birthDay != undefined))
        return res.json({
            error: true,
            message: 'Invalid'
        })
    db('SELECT * FROM `userinfo` WHERE `username` = ? ',[ username ],(returnCheckExist) => {
        if(returnCheckExist.length == 0) {
          
            db("INSERT INTO `userinfo` SET ?",{ 
                username: username, 
                password: md5(password),
                birthday: birthDay,
                gender: gender
            },(error,returnData) => {
                res.json({
                    error: false,
                    message: 'Register Success',
                });
            });
        } else {
            res.json({
                error: true,
                message: 'Error: Username Already Exist!'
            });
        }
    });
}