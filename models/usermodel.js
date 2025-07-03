const mongoose = require("mongoose");

const userShema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "user name is reuired"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "phone number is required"],
    },
    usertype: {
      type: String,
      required: [true, "user type is required"],
      default: "client",
      enum: ["client", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAOVBMVEXy8vKZmZn19fWWlpb4+PiTk5Pu7u7r6+ucnJyPj4+6urqysrKkpKTj4+PT09Ovr6/d3d3ExMTLy8vcgDZkAAAEcElEQVR4nO2c6a7DKAyFg4FAEiDL+z/skNypmjYLS7GpZnqkSv35ybjmYEyb5idKtQ1As37a2iQ72ckt0+LmRdUm2clat7jJuemroBofpWVx/sv3SLXKNlZ51Sb56aeffvrpp/+3vMFT1qp2dXtfItG4fjRaa9MvrfgKLlAzl5wzL+6/9FNTDwuEWD8gnJFsJ85HVyla0Ewj66Tubf+CtGFJ7doKWMKOfwsmGX9n2rDMRB0taHt5xrKXNJaUSlhzWLKTaOmFMlhzFwrTv8EaFRWVGOKQ1mAZIio4/trulpAksWCKjtNfrCighEmCYnLGpwKbsHibNP6xGfq0QPlQLeihak0ik88qgQ1ldSoU67CZYEpNKb9+E/L6wZIBtSCvn0jOc59UPXKkxJgBNeAy+dKZzMT4iA2VzuRrAnInW6TnOWPYUE33H4H6yuXDT/RE47JBoZeEFNv5gMIunom+c5N02N5FpVfPDt3lpZs8ptH9FLjUpCIx6amB4th2qskwL4bg4GBdmiFGLwg+TjPTaVDSYec5TMl7H1/Qy1SO8cQunhmlE39DzoLC9lNthklAjxTE98sIoeYcKORKlb7zrVDYJ+Qcj47eS8ixw/hdF5cMRdCfSq/pBJ289FTXFPNLiZHiA0HP2h+ygndFe3UExtPvf/OUUELliJ/mq0DEu6rFkV0ZRR8eDOH9aOzhgSTJH4otoegbzItizR4hUuz6cYKz8U5gY35/JLV8TxWxBcqepkQ9oWJSnXzmOnzFxtEPoQeJ0M0ReqfzTG2gpaDJ9pedAqlOWsyfunfrdaAgAIXd0T/XfU7xsUak2lsmosmNd6lASdAVmILX7rzCewcxB6BovdSfgjsy+Xa8epd7JEbSP3+HCnfPCBrorwpux9sConfQ9wI1RDUU5EB36Hsfy72hMkTzumDHhG6eHAkGY0U7n47lXorzXqGmFoCNHTvdY3W9xRqdB4/U64yOtV9D3VtRfhVBtHY26VF6RsvMtuhIP0DrBsN4NtKGxZkZXFNoHUG5sUvq3V2DyW50n6c9gOrNZyF64+KmV5+EyyeSG2XOwNStpFzDlcflgzTrkkF6inM954RLNG4oH6SnpPRZn5Rd0LRz0Uw6k8+uuY1+YAMw9QwxSE9tRTUKC5RJ290+EWdRryCEo0PasHTYCmZcnX2MFepj5QySfa7AYazNswGfievbe4mMMbIiVHet7fRHFaV087gmZ9i8iG5O06DqILG7BmmFcvDQTVnIGWQpBHXZ3w41oTGlL24nMkbbyunq+lvkTPyUkpzPf385byrK6WL2RFVMqau3beBqMl3syllDZOV0vv/F3HViQp3eUNSsUqvOLgNy3sgVlTxxClGtVVSok3HCrAnOkuLDESr9LWhpHYd5IeMtaGEd33ZX9FIPHT1VpSPDC9SxfOaMTxeGOpbP6kzsMNhU1eA91L1levXSuep9dDbnJW9x8ffpy+qlc5X5ttK56vU/V+p0gA56fUpW2XU+9Fo+K7vOhx6TRP8ARHQ7K7tckvAAAAAASUVORK5CYII=",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userShema);
