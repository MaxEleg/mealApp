
var Response = function(){

};

Response.prototype.status = function(status){
  this.status = status;
  return this;
};
Response.prototype.json = function(obj){
  return this;
};

module.exports = {
  req: {},
  res: new Response(),
};