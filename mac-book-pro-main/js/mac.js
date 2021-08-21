


//get  ram
const memory8BG = document.getElementById('mamory-8GB');
const memory16BG = document.getElementById('mamory-16GB');
//get storage
const storage256GB = document.getElementById('storage-256GB');
const storage512GB = document.getElementById('storage-512GB');
const storage1TB = document.getElementById('storage-1TB');
// Choose youe delivery option
const freeDelivery = document.getElementById('free-delivery');
const expressDelivery = document.getElementById('express-delivery');
// amount quantuty
const bestPrice = document.getElementById('best-price');
const extraMemoryCost = document.getElementById('extra-memory-cost');
const extraStorageCost = document.getElementById('extra-storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');
// pomo filed
const grandTotal = document.getElementById('grand-total');

//pomo discount

// total price
function totalCost() {
    const totalCalculation = parseInt(bestPrice.innerText) + parseInt(extraMemoryCost.innerText) + parseInt(extraStorageCost.innerText) + parseInt(deliveryCharge.innerText);
    totalPrice.innerText = totalCalculation;
    grandTotal.innerText = totalCalculation;
}

// get ram event 
memory8BG.addEventListener('click', function () {
    const getextraMemoryPrice = extraMemoryCost.innerText = '0';
    totalCost()
    return getextraMemoryPrice;

})

memory16BG.addEventListener('click', function () {
    const getextraMemoryPrice = extraMemoryCost.innerText = '180';
    totalCost()
    return getextraMemoryPrice;

})
// get storage event 
storage256GB.addEventListener('click', function () {
    const getextraStoragePrice = extraStorageCost.innerText = '0';
    totalCost()
    return getextraStoragePrice;
})
storage512GB.addEventListener('click', function () {
    const getextraStoragePrice = extraStorageCost.innerText = '100';
    totalCost()
    return getextraStoragePrice;
})
storage1TB.addEventListener('click', function () {
    const getextraStoragePrice = extraStorageCost.innerText = '180';
    totalCost()
    return getextraStoragePrice;
})
//delivery event
freeDelivery.addEventListener('click', function () {
    const getFreeDelivery = deliveryCharge.innerText = '0';
    totalCost()
    return getFreeDelivery
});
expressDelivery.addEventListener('click', function () {
    const getFreeDelivery = deliveryCharge.innerText = '20';
    totalCost()
    return getFreeDelivery
});
// pomo

document.getElementById('button-addon2').addEventListener('click', function () {
    const pomoFiled = document.getElementById('pomo-filed');
    if (pomoFiled.value == 'stevekaku') {
        const grandTotal = document.getElementById('grand-total');
        const finalFrandTotal = grandTotal.innerText * 20 / 100;
        grandTotal.innerText = grandTotal.innerText - finalFrandTotal;

    }
    pomoFiled.value = '';
})

