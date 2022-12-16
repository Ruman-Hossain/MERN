exports.logger = (req, res, next) => {
    console.log("Middleware ran");
    next();
  };
  
  