let orderList = 0;
let orders = 3;
let list = [];
let totalprice;



function increment(id, amount){
    let count = document.getElementById("cart-count" + id);
    let sum = document.getElementById("cart-price" + id);
    sum.innerHTML = +sum.innerHTML + amount;
    count.innerHTML = +count.innerHTML + (amount > 0 ? 1 : -1);
    if(+count.innerHTML <= 0){
        document.getElementById("cart-box" + id).style.display = "none";
        sum.innerHTML = -amount;
        count.innerHTML = 1;
        orderList--;
    }
    if (orderList <=0){
        document.getElementById("cart-empty").style.display = "block";
    }
}
function addItem(id){
    document.getElementById("cart-box" + id).style.display = "flex";
    document.getElementById("cart-empty").style.display = "none";
    orderList++;
    list.push(id);
}

function openCart(){
    document.getElementById("pre-checkout-container").style.display = "block";
    totalprice = 0;
    for(let i = 1; i <= orders; i++){
      if(!list.includes(i)){
        document.getElementById("item" + i).style.display = "none";
      }
      else{
        const elem = document.getElementById("item" + i);
        elem.style.display = "flex";
        let price = +document.getElementById("cart-price" + i).innerHTML;
        document.getElementById("checkout-count" + i).innerHTML = document.getElementById("cart-count" + i).innerHTML;
        document.getElementById("checkout-price" + i).innerHTML = price;
        totalprice += price;
      }
    document.getElementById("total-price").innerHTML = totalprice;
    }


}
function closeCart(){
    document.getElementById("pre-checkout-container").style.display = "none";
}


//buy
const popup = document.getElementById('popup');

function buy(){
    for(let i = 1; i <= orders; i++){
        document.getElementById("cart-box" + i).style.display = "none";
    }
    document.getElementById("cart-empty").style.display = "block";

    if (orderList > 0) {
        popup.innerHTML = "Comanda a fost predată cu succes!";
        popup.style.backgroundColor = "#333";
    } 
    else {
        popup.innerHTML = "Error: Coșul este gol!";
        popup.style.backgroundColor = "#ff0000";
    }
    showPopup();
  }


function confirmPurchase(){
    buy();
    closeCart();
}


function showPopup() {
  popup.style.display = 'block';
  setTimeout(() => {
    popup.classList.add('slide-out');
    setTimeout(() => {
      popup.style.display = 'none';
      popup.classList.remove('slide-out');
    }, 500);
  }, 4000);
}
