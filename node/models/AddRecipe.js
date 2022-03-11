var connection = require("../config/DB");

var users = function (users) {
  this.UID = users.UID
  this.FName = users.FName;
  this.LName = users.LName;
  this.Gender = users.Gender;
  this.State = users.State;
  this.City = users.City;
  this.Email = users.Email;
  this.Mobile = users.Mobile;
  this.Password = users.Password;
  this.Status = users.Status;
  // this.created_at = new Data();
};