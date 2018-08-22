var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
})

function startShopping(){

console.log('\n')
console.log('Welcome to bAmazon!!')
console.log('\n')

connection.query('SELECT * FROM products', function(err, res){
  if(err) throw err;

  for(var i = 0; i<res.length;i++){
    console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
    console.log('\n')
}

  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "What is the ID of the product you would like to buy?",
      validate: function(value){
        if(isNaN(value) == false && parseInt(value) > 0 && parseInt(value) <= res.length){
          return true;
        } else{
          return false;
        }
      }
    },
    {
      type: "input",
      name: "quantity",
      message: "How many would you like to buy?",
      validate: function(value){
        if(isNaN(value)){
          return false;
        } else{
          return true;
        }
      }
    }
    ]).then(function(ans){
      var item = (ans.id)-1;
      var quantity = parseInt(ans.quantity);
      var amount = parseFloat(((res[item].price)*quantity).toFixed(2));

      if(res[item].stock_quantity >= quantity){
        connection.query("UPDATE Products SET ? WHERE ?", [
        {stock_quantity: (res[item].stock_quantity - quantity)},
        {item_id: ans.id}
        ], function(err, result){
            if(err) throw err;
            console.log("Your total purchase price is $" + amount.toFixed(2) + ". Thank you for shopping")
        });

      } else{
        console.log("Insufficient Quantity, Please check again later for new stock");
      }
    })
})
}

startShopping();