import ProductManager from "./ProductManager.js";
import express from "express";

const app = express();
const manager = new ProductManager();
const products = await manager.getProducts();

// Ejemplo: consulta en express
app.get("/saludo", (req, res) => {
	res.send("Hola a todos, pero ahora desde express");
});

app.get("/bienvenida", (req, res) => {
	res.setHeader("Content-type", "text/html");
	res.send("<p style='color:blue'>Bienvenida!<p>");
});

app.get("/usuario", (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(
		JSON.stringify(
			{
				nombre: "Alfredo",
				apellido: "Mercurio",
				edad: 60,
				correo: "alfredo.mercurio@gmail.com",
			},
			null,
			3
		)
	);
});

app.get("/products", (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(products, null, 3));
});

app.listen(8080, () => {
	console.log("Servidor arriba en el puerto 8080");
});

// const product1 = {
// 	title: "producto de prueba 1",
// 	description: "Este es un producto de prueba",
// 	price: 1000,
// 	thumbnail: "Sin imagen",
// 	code: "abc123",
// 	stock: 50,
// };

// const product2 = {
// 	title: "producto de prueba 2",
// 	description: "Este es un producto de prueba",
// 	price: 100,
// 	thumbnail: "Sin imagen",
// 	code: "abc456",
// 	stock: 20,
// };

// const product3 = {
// 	title: "producto de prueba 3",
// 	description: "Este es un producto de prueba",
// 	price: 50,
// 	thumbnail: "Sin imagen",
// 	code: "abc789",
// 	stock: 1000,
// };

// const product4 = {
// 	title: "producto de prueba 4",
// 	description: "Este es un producto de prueba",
// 	price: 500,
// 	thumbnail: "Sin imagen",
// 	code: "abc321",
// 	stock: 25,
// };

// await manager.addProduct(product1);
// await manager.addProduct(product2);
// await manager.addProduct(product3);
// await manager.addProduct(product4);

// await manager.updateProduct(1, product1);
// await manager.updateProduct(2, product2);
// await manager.deleteProduct(3);
// await manager.deleteProduct(4);

// await manager.addProduct(product4);
