//Array Filter
//1. เงื่อนไขการคัดครอง
//2. ผลการคัดกรอง

const data = [10,20,30,40]

const result = data.filter(e => e > 20)
console.log("🚀 ~ result:", result)

const data1 = [
    {name:"Chinnawat",salary:25000,department:"โปรแกรมเมอร์"},
    {name:"John",salary:30000,department:"ฝ่ายบุคคล"},
    {name:"Manid",salary:45000,department:"ฝ่ายการตลาด"},
    {name:"Supawit",salary:15000,department:"เด็กฝึกงาน"}
]

const result1 = data1.filter(e => e.salary >= 30000).filter(e => e.department === "ฝ่ายการตลาด")
console.log("🚀 ~ result1:", result1)