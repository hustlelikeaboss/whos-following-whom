const errorHandler = (err, req, res, next) => {
    res.send({
        status: err.status,
        message: err.message,
        stack: err.stack
    });
}

module.exports = errorHandler;