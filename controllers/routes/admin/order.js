var models = require("../../../models");

function getOrders (req,res){
  var status = req.query.status;
  var query = {};

  if(status && status.length){
    query.status = status;
  }

  function _sendErr(err) {
    console.log(err);
    res.status(400).send({msg: 'Error occured'});
  }
  models.Order.find(query, function(err, orders){
    if(err){
      _sendErr(err);
      return;
    }
    res.json(orders.reverse());
  });
};

function changeStatus (req,res){
  var status = req.body.status;
  var id = req.body.id;
  function _sendErr(err) {
    console.log(err);
    res.status(400).send({msg: 'Error occured'});
  }
  models.Order.findById(id, function(err, order){
    if(err){
      _sendErr(err);
      return;
    }
    order.status = status;
    order.save(function(err, updatedOrder){
      res.json(updatedOrder);
    });
  });
};

module.exports = {
  getOrders: getOrders,
  changeStatus: changeStatus
};