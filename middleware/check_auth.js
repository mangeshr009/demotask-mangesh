const jwt  = require('jsonwebtoken')
module.exports =(req,res,next)=>{
    try {
        if (!req.headers['authorization']) {
            return res.status(404).json({
                message: "Unauthorised access please provide token",
                status: false
            })
        }
        const authHeader = req.headers['authorization']
        let token = authHeader.split(' ')
        req.auth_token = token[1]
        const isUser = jwt.verify(req.auth_token, 'TEST')
        req.user = isUser
        next();
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}