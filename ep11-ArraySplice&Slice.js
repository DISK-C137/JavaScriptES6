//Splice&Slice

//splice(ตำแหน่งที่จะลบ, จำนวนที่จะลบ, สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่งที่ลบ)
const data = [10,20,30,40,50]
console.log(data.splice(1,2,999))
console.log("🚀 ~ data:", data)

//slice(ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้าย-1) //ดึงสมาชิกมาใช้งาน
const data1 = [10,20,30,40,50]
console.log("🚀 ~ data1:", data1)
const lastdata = data1.slice(1,3)
console.log("🚀 ~ lastdata:", lastdata)