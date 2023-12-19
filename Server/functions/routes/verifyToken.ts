const jwt = require('jsonwebtoken')

const verifyToken = (req:any,res:any,next:any)=>{
    const authHeader = req.headers.token

    if(authHeader){
        jwt.verify(authHeader, process.env.JWT_SECRET, (err:any,user:any)=>{
           if(err) res.status(401).json({message:"You are not authenticated!"})

           req.user = user
           next()
        })
    }else{
        return res.status(401).json({message:"You are not authenticated!"})
    }
}
export const verifyTokenAuthorization = (req:any,res:any,next:any)=>{
    
    verifyToken(req,res,()=>{        
        if(req.user.id === req.params.id || req.user.isAdmin){            
            next()
        }else{
            res.status(403).json({message:"You are not allowed to do that!"})
        }
    })
}

export const verifyTokenAndAdminAuthorization = (req:any,res:any,next:any)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(403).json({message:"You are not allowed to do that!"})
        }
    })
}

module.exports = {verifyToken,verifyTokenAuthorization,verifyTokenAndAdminAuthorization}