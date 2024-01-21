class ErrorHandler extends Error {

    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}


export const errorMiddleware = (err, req, res, next)=> {
    
    err.message = err.message || "internal Server Error";
    err.statusCode = err.statusCode || 500;
    
    return res.status(404).json({
        success:false,
        message: err.message,
    });
}

export default ErrorHandler;