
var arr = [null, 123, undefined, null, 'sweet', 34, 65, 'chocolate', 'cake',null, 'ice-cream']

var groupArr = {}

arr.forEach((val) =>{
 var type = typeof val
 if (type === 'object' && !val){
  type = 'null'
 }if (!groupArr[type]){
  groupArr[type] = []
 }groupArr[type].push(val)
})

var sortArr = Object.values(groupArr).sort((a,b) => b.length - a.length)
console.log(sortArr)