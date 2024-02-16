// input [[4,3,2,-1], [3,-2,-1,6], [5,-4,0,-1]]

// const { lazy } = require("react");

// function solution(arr) {
//   return arr
//     .map((row, i) => row.filter((r) => r < 0).length)
//     .reduce((acc, b) => acc + b, 0);
// }

// console.log(
//   solution([
//     [4, 3, 2, -1],
//     [3, -2, -1, 6],
//     [5, -4, 0, -1],
//   ])
// );

// function solution(arr) {
//   let b = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] < 0) {
//         b.push(arr[i][j]);
//       }
//     }
//   }
//   return b.length;
// }

// console.log(
//   solution([
//     [4, 3, 2, -1],
//     [3, -2, -1, 6],
//     [5, -4, 0, -1],
//   ])
// );

// function solution(arr) {
//   return arr.filter((r) => r.toString().length % 2 == 0).length;
// }

// console.log(solution([555, 901, 899, 1276, 12]));

// function solution(n) {
//   let b = [];
//   if (n % 2 == 1) {
//     b.push(0);
//   }
//   for (let i = 1; i < n / 2; i++) {
//     b.push(i);
//     b.unshift(-i);
//     console.log(b);
//   }
// }
// console.log(solution(5));

// function solution(n) {
//   let a = n.toString().split("").map(Number);

//   return (
//     a.reduce((acc, sayi) => acc * sayi, 1) -
//     a.reduce((acc, sayi) => acc + sayi, 0)
//   );
// }

// console.log(solution(434));

// function solution(arr) {
//   let newArr = [...new Set(arr)];
//   return newArr.reduce((acc, sayi)=> acc+sayi,0);
// }

// console.log(solution([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// function solution(num) {
//   if (num < 0) {
//     return (
//       -1 *
//       Number(
//         num
//           .toString()
//           .split("")
//           .reverse()
//           .filter((r) => r != "-")
//           .join("")
//       )
//     );
//   } else {
//     return Number(num.toString().split("").reverse().join(""));
//   }
//   console.log(num);
// }

// console.log(solution(120));

// function solution(arr, num) {
//   let a = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr.length; k++) {
//       if (arr[i] + arr[k] == 8 && i != k) {
//         return [i, k];
//       }
//     }
//   }
// }

// function solution(l1, l2) {
//   let sonuc1 = Number(l1.reverse().join(""))
//   let sonuc2 = Number(l2.reverse().join(""))
//   let cevap =  sonuc1 + sonuc2
//   return (cevap.toString().split("").reverse().map(Number))
// }

// console.log(solution([2,4,3],[5,6,4]));

// function solution(nums1, nums2) {
//   const birlesikArray = [...nums1, ...nums2];
//   birlesikArray.sort((a, b) => a - b);
//   if (birlesikArray.length % 2 == 0) {
//     const ortaEleman = birlesikArray[Math.floor(birlesikArray.length / 2)];
//     const ortaEleman1 = birlesikArray[Math.floor(birlesikArray.length / 2 - 1)];
//     return (ortaEleman + ortaEleman1) / 2;
//   } else if (birlesikArray.length % 2 == 1) {
//     const ortaElemanTek = birlesikArray[Math.floor(birlesikArray.length / 2)];
//     return ortaElemanTek;
//   }
//   console.log(birlesikArray);
// }

// console.log(solution([1, 3, 4, 5, 6, 7], [2]));

// function solution(num) {
//   for (let i = 1; i < num; i++) {
//     for (let j = 1; j < num; j++) {
//       if (i * j == num) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(solution(69));
// function fibonacciRecursive(n) {
//   if (n <= 1) {
//     return n;
//   }

//   return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }

// // Örnek kullanım
// const sonuc = fibonacciRecursive(4);
// console.log(sonuc);

// const ulDOM = document.querySelector("ul");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json)
//   .then((data) => {
//     data.forEach((kisi) => {
//       const li = document.createElement("li");
//       li.textContent = kisi.name;
//       ulDOM.appendChild(li);
//     });
// //   });

// const ulDOM = document.querySelector("ul");
// let loading = true;

// if (loading == true) {
//   ulDOM.innerHTML = "YÜKLENİYOR";

//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       ulDOM.innerHTML = "";
//       for (const key in data) {
//         // const kisi = data[key];
//         const li = document.createElement("li");
//         li.textContent = data[key].name;
//         ulDOM.appendChild(li);
//       }
//     })
//     .catch((error) => {
//       console.error("Fetch error:", error);
//     })
//     .finally(() => {
//       loading = false;
//     });

// function solution(arr) {
//   let birlesim = [];

//   const kum1 = arr[0].split(",");
//   const kum2 = arr[1].split(",");

//   kum2.forEach((item) => {
//     if (kum1.includes(item)) {
//       birlesim.push(item);
//     }
//   });

//   return birlesim;
// }

// console.log(solution(["1,3,4,7,13", "1,2,4,13,15"]));

// function solution(str) {
//   // const a = str;
//   // const b = str.split("").reverse().join("");
//   // if (a === b) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }

//   return str.trim() === str.trim().split("").reverse().join("");
// }

// console.log(solution("küçük"));

// function solution(arr) {
//   diff = arr[1] - arr[0];
//   isGeometric = true;
//   isAricmetic = true;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] - arr[i - 1] !== diff) {
//       isAricmetic = false;
//     }

//     if (arr[i] !== arr[i - 1] * 3) {
//       isGeometric = false;
//     }
//   }
//   if (isAricmetic === true) {
//     return "Aritmetic";
//   } else if (isGeometric === true) {
//     return "Geometric";
//   } else {
//     return -1;
//   }
// }

// console.log(solution([2, 4, 6, 8]));

// function solution(arr) {
//   const a = arr.sort((a, b) => a - b);
//   const b = a.pop();

//   const sums = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       sums.push(a[i] + a[j]);
//     }
//   }
//   console.log(sums);
//   return sums.includes(b);
// }

// console.log(solution([2, 4, 7, 8, 14]));

// function solution(str) {
//   let a = str.split(" ");
//   let longest = []
//   for (let i = 0; i < a.length; i++) {
//     let obj = {};
//     a[i].split("").forEach((char) => {
//       char in obj ? (obj[char] += 1) : (obj[char] = 1);
//     });
//     longest.push(obj)
//   }
//   console.log()
// }

// console.log(solution("Today is the greatest day ever!"));

// function solution(num) {
//   if (num == 0) {
//     return 1;
//   }
//   let sayi = [];
//   for (let i = 1; i <= num; i++) {
//     sayi.push(i);
//   }
//   return sayi.reduce((acc, curr) => acc * curr, 1);
// }
// console.log(solution(5));

// function solution(num) {
//   let newArr = [];
//   let a = [...new Set(num)];
//   let b = a.sort((a, b) => a - b);

//   if (b.length < 3) {
//     let b = [...new Set(num)];
//     return b;
//   }
//   if (b.length === 3) {
//     let b = [...new Set(num)];
//     b.sort((a, b) => a - b);
//     return b[Math.floor(a.length / 2)];
//   } else {
//     b.pop();
//     b.shift();

//     newArr.push(b.pop());
//     newArr.push(b.shift());
//   }
//   return newArr.sort((a, b) => a - b);
// }

// // console.log(solution([7, 7, 12, 98, 106]));
// console.log(solution([2, 3, 4, 5, 6]));

// function solution(str) {
//   let son = [];
//   let newArr = str.split("");
//   newArr.forEach((i) => {
//     if (i.toLowerCase() === i) {
//       return (son += i.toUpperCase());
//     } else {
//       return (son += i.toLowerCase());
//     }
//   });
//   return son.trim();
// }

// console.log(solution("SaliH"));

// function solution(str) {
//   const words = str.split(" ");

//   const word1 = words[0];
//   const word2 = words[1];
//   let hamm = 0;

//   for (let i = 0; i < word1.length; i++) {
//     if (word1[i] !== word2[i]) {
//       hamm++;
//     }
//   }

//   return hamm;
// }

// console.log(solution("karolin kathrin")); // 3
