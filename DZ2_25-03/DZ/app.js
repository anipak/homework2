// ДЗ 2

var drinks = prompt('coffee tea')

var starbucks = {
    coffee:{
        coffee1: 'latte',
        coffee2: 'cappuccino',
        coffee3: 'americano'
    },
    tea:{
        tea1: 'black tea',
        tea2: 'green tea',
        tea3: 'tea with lemon'
    }
}

var coffeeAndTea = 'order is accepted'



if (drinks === starbucks.coffee.coffee1){
    alert(coffeeAndTea)
} else if (drinks === starbucks.coffee.coffee2){
    alert(coffeeAndTea)
} else if (drinks === starbucks.coffee.coffee3){
    alert(coffeeAndTea)
} else if (drinks === starbucks.tea.tea1){
    alert(coffeeAndTea)
} else if (drinks === starbucks.tea.tea2){
    alert(coffeeAndTea)
} else if(drinks === starbucks.tea.tea3){
    alert(coffeeAndTea)
} else
    alert('Error')






