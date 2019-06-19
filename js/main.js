
/*****************************************Business Interface Logic************************************* */

var pizzaPriceTotalPrice = [];
function PlaceOrder(size,crust,toppings){
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.pepperoni = 1;
  this.blackOlives = 1;
  this.costing=0;
}

PlaceOrder.prototype.pizzaTotal = function () {
  if (this.size === "Small") {
    this.costing += 1;
  } else if (this.customSize === "Medium ") {
    this.costing += 2;
  } else if (this.customSize === "Large 18 in.") {
    this.costing += 2.5;
  }
  if (this.crust === "Thick") {
    this.costing += 1;
  } else if (this.crust === "Thin") {
    this.costing += 0.5;
  } else if (this.crust === "Stuffy") {
    this.costing += 1;
  }
  if (this.toppings === "Pepperoni") {
    this.costing += 1;
  } else if (this.toppings=== "Black Olives") {
    this.costing += 0.5;
  } else if (this.toppings=== "Cheese") {
    this.costing += 1;
  }
 
 
  return this.costing;
}
PlaceOrder.prototype.toBePaidcost = function () {
  var cartPrice = 0;
  for (var i = 0; i< pizzaPriceTotalPrice.length; i ++) {
    cartPrice += pizzaPriceTotalPrice[i]; 
  }
  return cartPrice;
}
$(document).ready(function () {
/**********************OVERLAY JQ**************** */

  $("div.overlay").hover(function(){
    $(this).css({
      "opacity":"5",
      "transition": "2s",
      "cursor": "pointer"
      });
    },
    function () { 
      $(this).css({
        "opacity": "0"
    });
    $("#finish-btn").click(function() {
      location.reload();
    });
       
 }); }); 
   /****************User Interface Logic******************* */
  
   
   if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)

function PlaceAnOrder(size,topping,crust){
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.defaultPizzaPrice = 2;
    this.mushrooms = 0.5;
    this.greenpepper= 1.5;
    this.pepperoni = 1;
    this.extraCheese = 1.5;

}
var myPriceBox = [];
/***************Prototype that checks the size,crust and topping to determine the price */

PlaceAnOrder.prototype.checkPizzaSizeToppingsCrust = function (){
    if(this.size === "small"){
        this.defaultPizzaPrice +=1;
    }
    else if (this.size ==="Large"){
        this.defaultPizzaPrice += 3;
    }
    else if(this.size === "Medium"){
        this.defaultPizzaPrice + 2;
    }
    else if(this.size === "Extra Large"){
        this.defaultPizzaPrice + 4;
    }
      /********************loop for toppings */
    if(this.topping === "Mushrooms" ){
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
  };
