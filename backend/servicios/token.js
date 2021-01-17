'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
require('dotenv').config()

function createToken(user)
{
    var secret = 'HS256';
    const payload ={
        sub: user._id,
        iat: moment().unix(),
        exp:moment().add(14,'days').unix(), 
    }
   
   return jwt.encode(payload,secret)
}



module.exports = {
    createToken
    
};