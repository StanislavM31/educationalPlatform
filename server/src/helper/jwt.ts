import jwt from "jsonwebtoken";

function createToken(userData){
    return jwt.sign(userData[0], "edu");
}

export {createToken}

