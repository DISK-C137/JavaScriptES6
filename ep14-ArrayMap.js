//Array Map
//การนำสมาชิกใน array มาทำการเปลี่ยนแปลงค่า แล้วสร้างเป็น array ก้อนใหม่มาใช้งาน

const numbers = [10,20,30,40]
console.log("🚀 ~ numbers:", numbers)

const result = numbers.map(e => e * 2)
console.log("🚀 ~ result:", result)

const data = ["ฝนตก","แดดร้อน","ฝนฟ้าคะนอง","แดดร้อน","ฝนตก","อากาศดี","หมอก"]
const result1 = data.map((e, i) => {
    return `วันที่ ${i}, สภาพอากาศ = ${e}`
})
console.log("🚀 ~ result1:", result1)

//Object
const data1 = [
    {day:"01/06/2564",weather:"แดดร้อน",temp:27},
    {day:"03/06/2564",weather:"ฝนตก",temp:23},
    {day:"04/06/2564",weather:"หมอก",temp:18}
]
console.log("🚀 ~ data1:", data1)

result2 = data1.map(e => e.weather)
console.log("🚀 ~ result2:", result2)
