"use strict";
const Fibonacci = (number) => {
	let f0 = 1,
		f1 = 1,
		f2 = 0;
	if (number == 1) return f1;
	for (let i = 2; i <= number; i++) {
		f2 = f0 + f1;
		f0 = f1;
		f1 = f2;
	}
	return f2;
};

const LargestEven = (a) => {
	let res = -1;
	for (let i = 0; i < a.length; i++) {
		if (a[i] % 2 === 0 && a[i] > res) res = a[i];
	}
	return res;
};

document.querySelector(".btn-even").addEventListener("click", function () {
	const array = document
		.querySelector(".text-even")
		.value.split(" ")
		.map(Number);
	let a = LargestEven(array);
	console.log(a);
	alert("LargestEven(" + array + ")= " + a);
});

document.querySelector(".btn-fibo").addEventListener("click", () => {
	const order = Number(document.querySelector(".text-fibo").value);
	let a = Fibonacci(order);
	alert("Fibonacci(" + order + ")=" + a);
});
