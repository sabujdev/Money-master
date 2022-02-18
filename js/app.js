
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
 remainingBalance = incomeAmount - totalCost;

totalExpanse.innerText = totalCost;
balance.innerText = remainingBalance;


}else{
    alert("You have to provide a positive value")
}

})



document.getElementById('save-btn').addEventListener("click",function(){
    let parcentage = percentage.value
 if(remainingBalance > 0 && parcentage <= 100 && parcentage > 0){
let savings = (remainingBalance / 100) *  Number()
let balanceAfterSavings = remainingBalance - savings;

document.getElementById("saving-amount").innerText = savings;
document.getElementById("remaining-balance").innerText = balanceAfterSavings;

 }else{
     alert("You don't have sufficient balance!")
 }
})