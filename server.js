const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

//dot on configuration
dotenv.config();

//connection
connectDb();
//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); //show which url hit, how many take time
app.use("/api/v1/test", require("./routes/testRouter"));
app.use("/api/v1/auth", require("./routes/authRouters"));
app.get("/", (req, resp) => {
  return resp.status(200).send("<h1>welcome to food server</h1>");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`.bgBlue.white);
});
