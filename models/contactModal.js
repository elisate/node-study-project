const mongoose = require("mongoose");

const contactschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please entercontact name"],
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const contact = mongoose.model("contact", contactschema);
module.exports = contact;
