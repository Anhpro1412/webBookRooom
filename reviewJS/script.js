// const sum = (a,b) =>{
//     return  a + b ;
// }
// const sum = (a,b) =>{
//     a = a || 0
//     b = b || 0
//     return a + b
// }
// const a = [1,2,3];
// const b = [4,5,6];
// const c = [1,2,3,4,5,6];
// const d =[...a,...b]
// console.log(...a);
// console.log(...b);
// console.log(c);
// console.log(d)

// let info = {
//     fullname: "Do Hoai Anh",
//     email:"anhd78428@gmail.com"
// };
// let infoUpdate = {
//     phone: "0132214254",
//     age : 19
// }
// let infoFinal = {
//     ...info,...infoUpdate
// }
// console.log(info);
// console.log(infoUpdate);
// console.log(infoFinal);

// const sum = (...numbers) => {
//   let tong = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     tong += numbers[i];
//   }
//   return tong;
// }
// const sum = (...number) => {
//     console.log(number);
//     const result = number.reduce((total,item)=>{
//         return total + item;
//     },0)
// }

// console.log(sum(10,20,203,12,30432,430))

// let info = {
//     name : "Do Hoai Anh",
//     email: "anhd78428@gmail.com"
// } || {};
// console.log(info.name);
// const { name, email } = info;
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(email)
// let a = [1,2,2,3,4,4,35,35,46,4,6]
// console.log(...a)

// const numbers = [1, 2, 3, 4, 5];

// // Lấy ra các phần tử đầu tiên
// const [first, second, third] = numbers;

// console.log(first);  // 1
// console.log(second); // 2
// console.log(third);  // 3

// const person = {
//   name: "Lan",
//   age: 25,
//   city: "Hà Nội"
// };

// // Lấy ra các thuộc tính
// const { name, age } = person;
// const { city }  = person;
// console.log(name); // "Lan"
// console.log(age);  // 25
// console.log(city)
// const numbers1 = [10, 20, 30, 40, 50];

// numbers1.forEach((number, index) => {
//   console.log(`Số ở vị trí ${index} là: ${number}`);
// });
// const numbers2 = [1, 2, 3, 4, 5];

// numbers2.forEach((num) => {
//   const result = num * 2; // thực hiện phép tính nhân 2
//   console.log(result);
// });
fetch('https://dummyjson.com/products') // API giả lập danh sách sản phẩm
  .then(response => response.json())
  .then(data => {
    // data.products là mảng chứa các sản phẩm
    data.products.forEach(product => {
      console.log('Tên sản phẩm:', product.title);
    });
  })
  .catch(error => console.error('Lỗi:', error));
// fetch('https://dummyjson.com/products')
//   .then(response => response.json())
//   .then(data => {
//     const productNames = data.products.map(({ title }) => title);
//     console.log(productNames);
//   })
//   .catch(error => console.error('Lỗi:', error));
