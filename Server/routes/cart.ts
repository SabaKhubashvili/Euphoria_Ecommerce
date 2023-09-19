const router = require('express').Router()
const {verifyTokenAuthorization} = require('./verifyToken')


router.get('/getCart',verifyTokenAuthorization,async(req:any,res:any)=>{
    return res.status(200).json(req.user)
})

module.exports = router