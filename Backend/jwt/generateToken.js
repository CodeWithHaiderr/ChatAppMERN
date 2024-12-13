import jwt from "jsonwebtoken"

const createTokenAndSaveCookie = (userId, res) => {
    const token = jwt.sign({userId }, process.env.JWT_TOKEN,{
        expiresIn: "5d",
    });
    res.cookie("jwt", token, {
        httpOnly: true, // for preventing xss attacks
        secure: true, 
        sameSite: "strict" // for preventing csrf attacks
    });
};

export default createTokenAndSaveCookie;