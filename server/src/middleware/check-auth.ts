import jwt from "jsonwebtoken"

export const checkAuth =  (request, response, next) => {
    try {
        const decoded = jwt.verify(request.body.token, process.env.JWT_KEY);
        request.userData = decoded;
        next();

    } catch (error) {
        return response.status(401).json({
            message: 'Auth failed'
        })
    }
}