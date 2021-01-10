const mongoose = require("mongoose");
const { uri } = require('../.env');
mongoose.set("useUnifiedTopology", true);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .catch((e) => {
    /* Node Console.Log Callers */
    const msg = "ERRO: Nao foi possivel conectar com o MongoDB!";
    console.log("\x1b[41m%s\x1b[37m", msg, "\x1b[0m");
  });
