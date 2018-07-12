import jwt from 'jsonwebtoken';
import db from '../utils/database';
export const login = (req,res) => {
    console.log(db);
    db('SELECT * FROM `user` WHERE `username` = ? and `password` = ?',[ req.username, req.password ],(resp) => {
        console.log(resp);
        res.json({
            error: false,
            message: 'success'
        });
    });
    
        
       
   // const token = jwt.sign({ foo: 'bar' },'123456',{ expiresIn: '1h' });
    //res.send(token);
}