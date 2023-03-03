import ProductManager from "./ProductManager.js";
import express, { query } from "express";

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

app.get("/products/", (req, res) => {
	res.setHeader("Content-Type", "application/json");

	let limit = parseInt(req.query.limit);
	let limitedProducts = limit ? products.slice(0, limit) : products;

	return res.end(JSON.stringify({ result: limitedProducts }, null, 3));
});

app.get("/products/:pid", (req, res) => {
	res.setHeader("Content-Type", "application/json");

	let productId = parseInt(req.params.pid);

	let filteredProducts = products.filter((product) => product.id === productId);
	if (filteredProducts.length) {
		res.end(JSON.stringify({ result: filteredProducts[0] }, null, 3));
	} else {
		res.end(JSON.stringify({ result: "Product missing!" }, null, 3));
	}
});

app.listen(8080, () => {
	console.log("Servidor arriba en el puerto 8080");
});
