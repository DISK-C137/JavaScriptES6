//ค้นหาข้อมูลภายใน Array
const colors = ["แดง","เขียว","น้ำเงิน","ม่วง","ขาว"]
console.log("🚀 ~ colors:", colors)

//indexof(ข้อมูล) ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
const indexof = colors.indexOf("ขาว")
console.log("🚀 ~ indexof:", indexof)

//find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefind
const find = colors.find(e => e === "เขียว")
console.log("🚀 ~ find:", find)

//findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ทีค้นเจอ ถ้าไม่เจอจะได้ -1
const findIndex = colors.findIndex(e => e === "ม่วง")
console.log("🚀 ~ findIndex:", findIndex)
