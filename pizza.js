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

// Get the variables from user

$("#submitButton").submit(function(){
    var nameOfPizza = $("#pizza-name").val()
    var pizzaToppings = $("#pizza-toppings").val()
    var pizzaCrust = $("#pizza-crust").val()
    var numberOfPizzas = $("#num").val()
    var telNumber = $("#tel").val()
})
  
console.log (nameOfPizza)

})