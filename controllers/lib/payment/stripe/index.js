var unirest = require('unirest');

var _pay = function(data, cb) {
  console.log(data);
  unirest.post(process.env.NOODLIO_CREATE)
    .header("X-Mashape-Key", process.env.MASHAPE_KEY)
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Accept", "application/json")
    .send("cvc=" + data.cvc)
    .send("exp_month=" + data.exp_month)
    .send("exp_year=" + data.exp_year)
    .send("number=" + data.number)
    .send("test=true")
    .end(function (result) {
      unirest.post(process.env.NOODLIO_PROCESS)
        .header("X-Mashape-Key", process.env.MASHAPE_KEY)
        .header("Content-Type", "application/x-www-form-urlencoded")
        .header("Accept", "application/json")
        .send("amount=" + data.price)
        .send("currency=EUR")
        .send("description=Burger")
        .send("source=" + result.body.id)
        .send("stripe_account=" + process.env.STRIPE_ACCOUNT)
        .send("test=true")
        .end(function (result) {
          if (result.status > 299) {
            cb({msg: "An error occured"});
            return;
          }
          cb(null, result);
        });
    });
};

module.exports = {
  pay : _pay
};