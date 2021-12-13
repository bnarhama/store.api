import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: String,
  email: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
// Product model
const User = mongoose.model("User", UserSchema);

// export the model so it can be used in other files
export default User;
