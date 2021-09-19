$(document).ready(function(){

//   TOOGLE THE PRICES FOR PIZZA

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
    var quantity = document.getElementById("quantity").value;
    var pizzaSize = document.getElementById("size").value;
    var pizzaName = document.getElementById("pizzaName").value;
    var delivery = document.getElementById("delivery").value;
    var pizzaToppings = document.getElementById("toppings").value;
    var pizzaCrust = document.getElementById("crust").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    alert(pizzaName)
    alert(pizzaSize)
    alert(pizzaToppings)
    alert(pizzaCrust)
    alert (quantity)
    alert (phoneNumber)
    alert (delivery)


    
   var quantityOfPizza = parseInt(quantity);
   var telephone = parseInt(phoneNumber);
   alert (typeof(pizzaCrust))
   alert (typeof(pizzaToppings))


   var pizzas = ["Greek pizza", "Sicilian pizza", "Chicago pizza", "detroit", "newYork", "sicilian"];

   if (pizzaName === "Greek pizza" ) {
    price = (8.00*130);
    }
       else if (pizzaName=== "Sicilian pizza")
   {
    price = (7.00*130);
       }
       else if (pizzaName=== "Chicago pizza"){
    price = (6.50*140);
       }
       else if (pizzaName=== "Neopolitan pizza") {
    price = (12.50*160);
       }
       else if (pizzaName==="New York pizza") {
    price = (10.00*150);
       }
       else if (pizzaName==="Detroit pizza") {
    price =(9.00*110);
 }

 if (pizzaCrust=="Gluten free crust" || pizzaSize == "small"){
    price1=600
 }
 else if(pizzaCrust=="Crispy crust" ||  pizzaSize == "medium"){
   price1=700
 }
 else if(pizzaCrust=="Stuffed crust" ||  pizzaSize == "Large"){
    price1=800
 }



var Total =(price*quantityOfPizza+price1)
alert (Total)

if ( delivery == "yes") {
   var deliver = prompt("ENTER ADDRESS FOR DELIVERY WITHIN NAIROBI")
    alert("We shall deliver your order at "+deliver+" and total cost is "+ Total + " plus delivery fee of 200")
    }
 else if (delivery == "no") {
        alert ("Your total is "+ Total)   
    }

    





//    neopolitanPizza = 8.00
//    total1 = (neopolitanPizza + gluten-free)
//    total2 = (neopolitanPizza + stuffed)
//    total3 = (neopolitanPizza + crispy)

//    greek = 7.00
//    total4 = (greek + Gluten-free) 
//    total5 = (greek + stuffed) 
//    total6 = (greek + crispy) 

//    chicago = 9.00
//    total7 = (chicago + gluten-free) 
//    total8 = (chicago + stuffed) 
//    total9 = (chicago + crispy) 

//    detroit = 10.00
//    total10 = (detroit + gluten-free) 
//    total11 = (detroit + stuffed) 
//    total12 = (detroit + crispy) 

//    newYork =6.50
//    total13 = (newYork + gluten-free)
//    total14= (newYork + stuffed)
//    total15 = (newYork + crispy)

//    sicilian =12.50
//    total16 = (sicilian + gluten-free)
//    total17 = (sicilian + stuffed)
//    total18 = (sicilian + crispy)


}


