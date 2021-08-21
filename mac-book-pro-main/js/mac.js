
//Item function announced
function getProductPrice(item, price) {
    const macItem = document.getElementById(item);
    macItem.innerText = price;
    totalCost()
}
//items calculation and sum
function totalCost() {
    const bestPrice = document.getElementById('best-price').innerText;
    const extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
    const extraStorageCost = document.getElementById('extra-storage-cost').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;
    // item sum
    const totalCalculation = parseInt(bestPrice) + parseInt(extraMemoryCost) + parseInt(extraStorageCost) + parseInt(deliveryCharge);
    document.getElementById('total-price').innerText = totalCalculation;
    document.getElementById('grand-total').innerText = totalCalculation;
}
// 8GB unified memory event Listener
const memory8BG = document.getElementById('mamory-8GB').addEventListener('click', function () {
    getProductPrice('extra-memory-cost', 0)
});
//16GB unified memory event Listener
const memory16BG = document.getElementById('mamory-16GB').addEventListener('click', function () {
    getProductPrice('extra-memory-cost', 180)
});
// get storage event 
//256GB SSD storage event listener
const storage256GB = document.getElementById('storage-256GB').addEventListener('click', function () {
    getProductPrice('extra-storage-cost', 0)
});
//512GB SSD storage event listener
const storage512GB = document.getElementById('storage-512GB').addEventListener('click', function () {
    getProductPrice('extra-storage-cost', 100)
});
//1TB SSD storage event listener
const storage1TB = document.getElementById('storage-1TB').addEventListener('click', function () {
    getProductPrice('extra-storage-cost', 180)
});
//delivery event
// free delivery event listener
const freeDelivery = document.getElementById('free-delivery').addEventListener('click', function () {
    getProductPrice('delivery-charge', 0)
});
// express delivery event listener
const expressDelivery = document.getElementById('express-delivery').addEventListener('click', function () {
    getProductPrice('delivery-charge', 20)
});
// pomo code function
document.getElementById('button-addon2').addEventListener('click', function () {
    const pomoFiled = document.getElementById('pomo-filed');
    // pomo code condition cheack
    if (pomoFiled.value == 'stevekaku') {
        const grandTotal = document.getElementById('grand-total');
        const finalFrandTotal = grandTotal.innerText * 20 / 100;
        grandTotal.innerText = grandTotal.innerText - finalFrandTotal;
    };
    //  pomo Fill and disable
    document.getElementById("button-addon2").disabled = !false;
    pomoFiled.value = '';
});