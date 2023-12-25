const requestLoggerMiddleware = (req, res, next) => {
    // Log information about the incoming request
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  
    // Continue to the next middleware or route handler
    next();
  };
  
  module.exports = requestLoggerMiddleware;
  