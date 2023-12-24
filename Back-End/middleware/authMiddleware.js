const authMiddleware = (req, res, next) => {
  const isAuthenticated = /* Your authentication logic here */ true;

  if (isAuthenticated) {
    next();
  } else {
    // If not authenticated, send a 401 Unauthorized response
    res.status(401).json({
      title: "Unauthorized",
      message: "You are not authenticated.",
    });
  }
};

module.exports = authMiddleware;
