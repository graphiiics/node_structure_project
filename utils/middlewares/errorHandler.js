function logError(err, req, res, next){
    console.error('---------------------{ Error Log Middleware }--------------------');
    console.error(err.message);
    next(err);
}

function errorHandler(err, req, res, next){
    console.error('-------------------{ Error Handler Middleware }------------------');
    let errorMessage = err.message || 'Unknown error!';

    res.status(err.status || 400);
    res.json({
        error: errorMessage,
        stack: err.stack
    });
}

module.exports = {
    logError,
    errorHandler
}