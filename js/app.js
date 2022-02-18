
let income = document.getElementById('total-income');
let foodCost = document.getElementById('food-cost');
let rentCost = document.getElementById('rent-cost');
let clothesCost = document.getElementById('cloths-cost');
let totalExpanse = document.getElementById('total-expenses')
let balance = document.getElementById('balance')
let percentage = document.getElementById('percentage')

let remainingBalance = 0;
 document.getElementById('calculate-btn').addEventListener("click", function(){

let incomeAmount = Number(income.value) ;
let foodCostAmount = Number(foodCost.value) ;
let rentCostAmount = Number(rentCost.value) ;
let clothesCostAmount = Number(clothesCost.value) ;

if(incomeAmount > 0 && foodCostAmount > 0 && clothesCostAmount > 0){
    let totalCost = foodCostAmount + rentCostAmount + clothesCostAmount;
if( incomeAmount > totalCost){
    remainingBalance = incomeAmount - totalCost;

    totalExpanse.innerText = totalCost;
    balance.innerText = remainingBalance;
}else{
    alert('Your income amount  is less than ')
}


}else{
    alert("You have to provide a positive value")
}

})


document.getElementById('save-btn').addEventListener("click",function(){
    let parentage = percentage.value
 if(remainingBalance > 0 && parentage <= 100 && parentage > 0){
let savings = calculateSaving(parentage , remainingBalance);
let balanceAfterSavings = remainingBalance - savings;

document.getElementById("saving-amount").innerText = savings;
document.getElementById("remaining-balance").innerText = balanceAfterSavings;

 }else{
     alert("You don't have sufficient balance!")
 }
})


// percentage and saving
function calculateSaving( parentage, remainingBlance){
    let result =(remainingBalance / 100) *  Number(parentage);
    return result;
}