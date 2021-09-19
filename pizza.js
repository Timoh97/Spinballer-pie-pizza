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
    var pizzaName = document.getElementById("pizzaName").value;
    var delivery = document.getElementById("delivery").value;
    var pizzaToppings = document.getElementById("toppings").value;
    var pizzaCrust = document.getElementById("crust").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    alert(pizzaName)
    alert(pizzaToppings)
    alert(pizzaCrust)
    alert (quantity)
    alert (phoneNumber)
    alert (delivery)
}


