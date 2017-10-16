var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
function addToCart(item) {
 var randomPrice = randomInteger(1,100);
 var items = { [item]: randomPrice };
// console.log(items);
// console.log('randomPrice', randomPrice);
 cart.push(items);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  console.log('view cart => ', cart);
    if (cart.length === 0) {
      console.log ('Your shopping cart is empty.');
    }
  else {
  var text = 'In your cart, you have ';
  for ( let i = 0; i < cart.length; i++) {
    var obj = cart[i];          // [ { apple: 49 } ]
    var item = Object.keys(obj); // [ { apple } ]
    var itemName = item[0];     // apple
    var price = obj[itemName];

    if (cart.length === 1) {
      text += `${item[0]} at $${price}${(i === cart.length - 1) ? "." : ", "}`;
    }
    else if (cart.length === 2){
      text += `${(i === cart.length - 1) ? " and " : ""}${item[0]} at $${price}${(i === cart.length - 1) ? "." : ""}`;
      }

    else if (cart.length > 2){
      text += `${(i === cart.length - 1) ? "and " : ""}${item[0]} at $${price}${(i === cart.length - 1) ? "." : ", "}`;
    }
  }
    console.log(text);
  }
}

function total() {
  // write your code here
  var totalPrice = 0;
  for ( let i = 0; i < cart.length; i++) {
    var obj = cart[i];          // [ { apple: 49 } ]
    var item = Object.keys(obj); // [ { apple } ]
    var itemName = item[0];     // apple
    var price = obj[itemName];
    totalPrice += price;
  }
  console.log ('totalPrice is ', totalPrice);
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
    var counter = 0 ;
    var itemInCart = new Object();
    for ( let i = 0; i < cart.length; i++) {
    itemInCart = cart[i];
    var exist = itemInCart.hasOwnProperty(item);
    console.log("cart[i] = ", cart[i]);
    console.log("var item = ", item);
    console.log("var exist = ", exist);
    console.log("var itemInCart = ", itemInCart);
    if (exist === false) {
      counter = 1 ;
    }
    else {
//      var counter = 1 ;
    var cart1 = cart.slice(i);

    return cart1;
    }
    }
    console.log('counter =', counter );
    if (counter === 1) {
      console.log('That item is not in your cart');
      return cart;
    }
    else {
//      console.log('That item is in your cart');
    }

}

function placeOrder(cardNumber) {
  // write your code here
}

//viewCart();
addToCart("apple");
//viewCart();
addToCart("cake");
//viewCart();
addToCart("pie");
viewCart();
//total()
removeFromCart('pie');
viewCart();
removeFromCart('cake');
viewCart();
/*console.log("cart.hasOwnProperty(apple) = ", cart.hasOwnProperty("apple"));*/
