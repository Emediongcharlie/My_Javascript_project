let expenses = {
    "grocereis": 150, 
    "dining out" : 100, 
    "transportation" : 50,
     "entertainment" : 80
    }
function expenseCalculator(amount){
let sum = 0
for(let element in expenses){
    sum += expenses[element];   
}
return sum
}
let todaysExpenses = expenseCalculator(expenses)
console.log(todaysExpenses)
