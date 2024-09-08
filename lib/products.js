import sql from "better-sqlite3";

const db = sql("products.db");

export function getProducts() {
    return db.prepare("SELECT * FROM products").all();

}
export function getProductsByCategory(category) {
    return db.prepare("SELECT * FROM products WHERE category = ?").all(category);
}
