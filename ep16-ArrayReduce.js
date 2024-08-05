//Array Reduce
//การนำเอาสมาชิกใน array มาดำเนินการบางอย่าง เพื่อให้ได้ค่าตอบกลับเพื่อนำไปใช้งาน

const data = [10,20,30,40]

// const mapData = data.map(e => 100)
// console.log("🚀 ~ mapData:", mapData)

// const filterData = data.filter(e => e > 20)
// console.log("🚀 ~ filterData:", filterData)

//array.reduce((ค่าที่ถูกประมวลผล, e)=>{},ค่าเริ่มต้น)
const summation = data.reduce((value, e) => e + value, 0)
console.log("🚀 ~ summation:", summation)

const cart = [
    {name:"กระเป๋า", price:2000},
    {name:"หนังสือ", price:5000},
    {name:"กล้องถ่ายรูป", price:5000}
]

const totalPrice = cart.reduce((value,e) => e.price + value, 0)
console.log("🚀 ~ totalPrice:", totalPrice)
