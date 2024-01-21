const requestLoggerMiddleware = (req, res, next) => {
    // Log information about the incoming request
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
 
    next();
  };
  
  module.exports = requestLoggerMiddleware;
  