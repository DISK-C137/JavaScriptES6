//การ Loop Array

const data = [10,20,30,40,50]

//For
for(let i = 0; i < data.length; i++){
    if(data[i] >= 30) break
    console.log(`ลำดับที่: ${data[i]}`)
}

//ForEach
let sum = 0
data.forEach(e => {
    sum += e
    console.log(`ผลรวม: ${sum}`)
})

//ForOf
for (const e of data){
    if(e >= 30) break
    console.log(`สมาชิก array data: ${e}`)
}