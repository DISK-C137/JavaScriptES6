//การเพิ่มและลบสมาชิกใน array

const data = [10, 20, 30];
console.log("🚀 ~ data:", data);

//push = เพิ่มสมาชิกต่อท้าย
//data.push(500)
data.push(...[500, 1000, 2000]);
console.log("🚀 ~ push:", data);

//pop = เอาสมาชิกตัวที่อยู่ท้ายสุดออกไป
data.pop();
console.log("🚀 ~ pop:", data);

//shift = เอาสมากชิกด้านหน้าออก
data.shift();
console.log("🚀 ~ shift:", data);

//unshift = เพิ่มสมาชิกด้านหน้า
data.unshift(...[999,888,777]);
console.log("🚀 ~ unshift:", data);
console.log("Count of Array: ",data.length)