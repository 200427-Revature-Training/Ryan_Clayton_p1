import jwt from "jsonwebtoken"
import jwt_decode from 'jwt-decode'

export const checkManager =  (request, response, next) => {
    try {
        if(jwt_decode(request.body.token).role==="MANAGER"){
            next();
        }
        else{
            throw jwt.JsonWebTokenError
        }

    } catch (error) {
        return response.status(401).json({
            message: 'Auth failed'
        })
    }
}