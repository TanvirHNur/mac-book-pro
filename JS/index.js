
//  function on adding extra cost 
function addExtraCost(item, cost){
    const extraCost = document.getElementById(item + '-cost');
    extraCost.innerText = cost;
}





// geting extra item cost  
function getExtraPrice(item){
    const  itemPrice = document.getElementById(item + '-cost');
    const itemCostAmount = parseInt(itemPrice.innerText);
    return itemCostAmount;
}



// Function for update total 
function updateTotalPrice (){
    const bestPrice = getExtraPrice('best');
    const memoryPrice = getExtraPrice('memory');
    const storagePrice = getExtraPrice ('storage');
    const deliveryPrice = getExtraPrice ('delivery')
    const totalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('total-price').innerText = totalPrice;

    // update total 
    const total = document.getElementById('total');
        total.innerText = totalPrice;
}




// handle event listener for extra memory-cost
document.getElementById('memory-extra-cost-btn').addEventListener('click', function(){
    addExtraCost('memory', 180);
    updateTotalPrice();
})

// handle event listener for no extra memory-cost
document.getElementById('memory-cost-btn').addEventListener('click', function(){
    addExtraCost('memory', 0);
    updateTotalPrice();
})




// handle event listener for Storage 256gb
document.getElementById('storage-cost-btn-0').addEventListener('click', function(){
    addExtraCost('storage', 0);
    updateTotalPrice();
})
// handle event listener for Storage 512gb
document.getElementById('storage-cost-btn-1').addEventListener('click', function(){
    addExtraCost('storage', 100);
    updateTotalPrice();
})

// handle event listener for Storage 1tb
document.getElementById('storage-cost-btn-2').addEventListener('click', function(){
    addExtraCost('storage', 180);
    updateTotalPrice();
})





// handle event listener for no delivery cost
document.getElementById('delivery-cost-btn').addEventListener('click', function(){
    addExtraCost('delivery', 0);
    updateTotalPrice();
})


// handle event listener for extra delivery cost
document.getElementById('delivery-extra-cost-btn').addEventListener('click', function(){
    addExtraCost('delivery', 20);
    updateTotalPrice();
})




//  apply promo code for bonus part
document.getElementById('apply-btn').addEventListener('click', function(){
    const totalPrice = document.getElementById('total-price').innerText;
    const total = document.getElementById('total');
    const promoCode = document.getElementById('input-promo-code');
    const cupon =promoCode.value;
    if(cupon.toLowerCase() == 'stevekaku'){
        const discount = totalPrice * 20 / 100;
        const priceAfterDiscount = totalPrice - discount;
        total.innerText = priceAfterDiscount;
    }
    else if (cupon.toLowerCase() != 'stevekaku'){
        alert('Invalid code. Relax and try to remember the code or copy the right promo code')
    }
    else {
        total.innerText = totalPrice;
    }
   promoCode.value = '';
})

/* -------------------
You've all been very supportive, patient, and you've given us so much.Thank you all
----------------------*/












