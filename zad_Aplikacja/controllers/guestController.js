var database = require('../models/guest_database.js');
const guest_list =(req,res)=>{
    
    res.render("list",{data:database.guest_database});
};

const guest_add=(req,res)=>
{
    res.render("add");
};

const guest_submit=(req,res)=>
{
  var name = req.body.name;
  database.guest_database.push({name:name});
  res.render("list",{data:database.guest_database});
  
};

const guest_redirect=(req,res)=>{
    
    res.redirect("/guests/add");
};
module.exports = {guest_redirect,guest_add,guest_list,guest_submit};