let arr = [
	{
		id: Date.now() + 2,
		name: "tuongvy",
		email: "u@gmail.com",
		salary: 12,
		city: "dn",
	},
	{
		id: Date.now() + 1,
		name: "tuongvy12",
		email: "u@gmail.com",
		salary: 120,
		city: "dn",
	},
];
let render = document.querySelector(".render");

function DeleteItem(id) {
	arr = arr.filter((i) => {
		console.log("id truyen vao", id);
		console.log("item", i);
		return i.id !== id;
	});
	render.innerHTML = "";
	arr.forEach((item) => {
		render.innerHTML =
			render.innerHTML +
			`<tr>
                <td>${item.name}</td>   
                <td>${item.email}</td> 
                <td>${item.salary}</td> 
                <td>${item.city}</td>   
                <td><a href="#">Edit</a><span>  </span><a onClick="DeleteItem(${item.id})" href="#">Delete</a></td>           
            </tr>`;
	});
}

document
	.querySelector(".btn-submit")
	.addEventListener("click", function (event) {
		event.preventDefault();
		let id = Date.now();
		let name = document.querySelector("#name").value;
		let email = document.querySelector("#email").value;
		let salary = document.querySelector("#salary").value;
		let city = document.querySelector("#city").value;
		arr.push({ id, name, email, salary, city });

		render.innerHTML = "";
		arr.forEach((item) => {
			render.innerHTML =
				render.innerHTML +
				`<tr>
                    <td>${item.name}</td>   
                    <td>${item.email}</td> 
                    <td>${item.salary}</td> 
                    <td>${item.city}</td>   
                    <td><a href="#">Edit</a><span>  </span><a onClick="DeleteItem(${item.id})" href="#">Delete</a></td>           
                </tr>`;
		});
	});
