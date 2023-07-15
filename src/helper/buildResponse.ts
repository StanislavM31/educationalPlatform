function buildResponse(res, code, message){
    res.status(code).send(message);
}

export default buildResponse ;