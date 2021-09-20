
// constructor for Orders

function Orders(pizzaName,pizzaSize,pizzaName,delivery,pizzaToppings,pizzaCrust,phoneNumber ){
   this.pizzaName = pizzaName
   this.pizzaSize = pizzaSize 
   this.pizzaName = pizzaName
   this.delivery = delivery
   this.pizzaToppings = pizzaToppings
   this.pizzaCrust = pizzaCrust
   this.phoneNumber = phoneNumber
 }








$(document).ready(function(){

   //   TOOGLE THE PRICES FOR PIZZA
   
      //   USER INTERFACE
   
       $("#price1").click(function(){
           $("#pizza1").toggle()
           $("#imag1").toggle()
       })
       $("#price2").click(function(){
           $("#pizza2").toggle()
           $("#imag2").toggle()
       })
       $("#price3").click(function(){
           $("#pizza3").toggle()
           $("#imag3").toggle()
       })
       $("#price4").click(function(){
           $("#pizza4").toggle()
           $("#imag4").toggle()
       })
       $("#price5").click(function(){
           $("#pizza5").toggle()
           $("#imag5").toggle()
       })
       $("#price6").click(function(){
           $("#pizza6").toggle()
           $("#imag6").toggle()
       })
   })
   
   // Get the variables from user
   
   function generateName(){
   
      // USER INTERFACE
   
       var quantity = document.getElementById("quantity").value;
       var pizzaSize = document.getElementById("size").value;
       var pizzaName = document.getElementById("pizzaName").value;
       var delivery = document.getElementById("delivery").value;
       var pizzaToppings = document.getElementById("toppings").value;
       var pizzaCrust = document.getElementById("crust").value;
       var phoneNumber = document.getElementById("phoneNumber").value;

       

      //  BUSINESS LOGIC
      var quantityOfPizza = parseInt(quantity);
      var order = "You ordered "+quantityOfPizza+" , "+pizzaSize+" "+pizzaName+" , "+pizzaCrust+" , "+pizzaToppings
       alert(order)
      if (pizzaName === "Greek pizza" ) {
       price = (8.00*100);
       }
          else if (pizzaName=== "Sicilian pizza")
      {
       price = (7.00*100);
          }
          else if (pizzaName=== "Chicago pizza"){
       price = (6.50*100);
          }
          else if (pizzaName=== "Neopolitan pizza") {
       price = (12.50*100);
          }
          else if (pizzaName==="New York pizza") {
       price = (10.00*100);
          }
          else if (pizzaName==="Detroit pizza") {
       price =(9.00*100);
    }
   
    if (pizzaCrust=="Gluten free crust"){
       price1=300;
    }
    else if(pizzaCrust=="Crispy crust"){
      price1=400;
    }
    else if(pizzaCrust=="Stuffed crust"){
       price1=500;
    }
   
    if (pizzaToppings=="mushroom toppings" || pizzaToppings=="pepperoni toppings" || pizzaToppings =="Sausage toppings" || pizzaToppings =="Onions toppings"|| pizzaToppings=="Black olives toppings"|| pizzaToppings=="Bacon toppings" ){
       price3=150;
    }
    else {
       price3=0;
    }
   
   
    if (pizzaSize == "small"){
       price2=300;
    }
    else if (pizzaSize == "medium"){
       price2=400;
    }
    else if (pizzaSize == "Large"){
       price2=500;
   
    }
   
   var delivery1=200
   var Total =((price+price1+price2+price3)*quantityOfPizza)
   var delivery1=parseInt(delivery1)
   Total=Total
   
   // USER INTERFACE

   if ( delivery == "yes") {
      var deliver = prompt("ENTER ADDRESS FOR DELIVERY WITHIN NAIROBI")
       alert("We shall deliver the order to "+ phoneNumber + " at " + deliver +" and total cost is "+ Total +" plus "+""+ delivery1 +" delivery fee")
       }
    else if (delivery == "no") {
           alert ("Pick your pizza from our PIZZERIA SHOP  . Total cost is "+ Total)   
       }
   
   }
   

