module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    userName: { type: String },
    telNum: { type: String },    
    password: { type: String },
    cart: [
      {
        goodName: { type: String },
        count: { type: String },
        kouwei: { type: String },
        price: { type: String },
        pic: { type: String }
      }
    ]
  });

  return mongoose.model('User', UserSchema);
}