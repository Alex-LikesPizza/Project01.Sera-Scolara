let orderList = 0;
let orders = 3;

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
