const mongoose = require("mongoose");
let url = `mongodb+srv://rootuser:UJP0u4KjtnbqTqZS@cluster0.l3qyg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const dbConnection = (resolve) => {
  mongoose.connect(url, (err) => {
    if (err) return resolve(0);
    return resolve(null);
  });
};
module.exports = dbConnection;
