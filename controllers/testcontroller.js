const testController = (req, resp) => {
  try {
    resp.status(200).send({
      success: true,
      messge: "test user data API",
    });
  } catch (error) {
    resp.status(400).send("error in test API", error);
  }
};
module.exports = { testController };
