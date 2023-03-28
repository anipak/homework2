//  Задание 1
// class Cars{
//     constructor(options) {
//         this.model = options.model
//         this.color = options.color
//         this.wheels = options.wheels
//         this.price = options.price
//
//
//     }
//     start(){
//         console.log(`${this.model} заведен` )
//     }
//
// }
//
// class Ferrari extends Cars{
//     constructor(options) {
//         super(options);
//     }
// }
//
//
// const ferrari = new Ferrari({
//     model: 'ferrari',
//     color: 'red',
//     wheels: 4,
//     price: '15000$'
// })
//
//
// class Mercedes extends Ferrari{
//     constructor(options) {
//         super(options);
//         this.volum = options.volum
//     }
// }
//
//
// const mercedes = new Mercedes({
//     model: 'mercedes',
//     color: 'black',
//     wheels: 4,
//     price: '20000$',
//     volum: 'big'
// })
//
//
// class Toyota extends Mercedes {
//     constructor(options) {
//         super(options);
//         this.style = options.style
//         this.tires = options.tires
//     }
// }
//
//
// const toyota = new Toyota({
//     model: 'toyota',
//     color: 'silver',
//     wheels: 4,
//     price: '27000$',
//     volum: 'small',
//     style: 'sport',
//     tires: 'summer'
// })
//
//
// ferrari.start()
// mercedes.start()
// toyota.start()


// Задание 2

class Component {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
}


class Circle extends Component{
    constructor(options) {
        super(options.selector);
        this.$element.style.width = this.$element.style.height = options.size + 'px'
        this.$element.style.background = options.color
        this.$element.style.borderRadius = options.border  + '%'
    }
}

const circle1 = new Circle({
    selector: '#circle1',
    size: 80,
    color: 'red',
    border: 30
})


const circle2 = new Circle({
    selector: '#circle2',
    size: 80,
    color: 'yellow',
    border: 30
})


const circle3 = new Circle({
    selector: '#circle3',
    size:80,
    color: 'green',
    border: 30
})


console.log(circle1)



const red = document.querySelector('#circle1')
const yellow = document.querySelector('#circle2')
const green = document.querySelector('#circle3')
const color = prompt('Выберите цвет!')
switch (color){
    case 'red':
        red.style.background = 'red'
        red.innerText = 'Stop!'
        break
    case 'yellow':
        yellow.style.background = 'yellow'
        yellow.innerText = 'Wait!'
        break
    case 'green':
        green.style.background = 'green'
        green.innerText = 'Go!'
    default:
        allert('Error')
}






