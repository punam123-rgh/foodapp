const usermodel = require("../models/usermodel");

const registerController = async (req, resp) => {
  try {
    const { username, email, password, phone, address } = req.body;
    //validation
    if (!username || !email || !password || !phone || !address) {
      return resp.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    const exisiting = await usermodel.findOne({ email });
    if (exisiting) {
      return resp.status(500).send({
        success: false,
        message: "Email Already Registered ,Please Login",
      });
    }
    //create new user
    const user = await usermodel.create({
      username,
      email,
      password,
      phone,
      address,
    });
    resp.status(201).send({
      success: true,
      message: "Sucessfully register",
    });
  } catch (error) {
    console.log(error);
    resp.status(500).send({
      success: false,
      message: "error in register Api",
      error,
    });
  }
};

const getdata = async(req,resp)=>{
const result = await usermodel.find()
resp.send(result)
}

module.exports = { registerController,getdata };
