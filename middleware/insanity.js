const insanityMiddleware = (req, res, next) => {
    const insanity = req.cookies.insanity || "1";

    req.insanity = insanity;

    next();
    
}

module.exports = insanityMiddleware;
