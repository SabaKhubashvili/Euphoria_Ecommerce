const jwt = require('jsonwebtoken')

const verifyToken = (req:any,res:any,next:any)=>{
    const authHeader = req.headers.token

    if(authHeader){
        jwt.Verify(authHeader, process.env.JWT_SECRET, (err:any,user:any)=>{
           if(err) res.status(401).json({message:"You are not authenticated!"})

           req.user = user
        })
    }else{
        return res.status(401).json({message:"You are not authenticated!"})
    }
}