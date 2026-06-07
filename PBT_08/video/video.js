function createCart(){
    let items = [];

    return {
        addItem(name,price){
            items.push({name,price});
            console.log(`Đã thêm ${name} với giá ${price}đ vào giỏ hàng.`);
        },
    removeItem(name){
        items = items.filter(item => item.name !== name);
        console.log(`Đã xóa ${name} khỏi giỏ hàng.`);
    },
    getTotal(){
    return items.reduce((total, item) => total + item.price, 0);
    },
    printcart(){
        console.log("Giỏ hàng:");  
    }
};  
    if(items.length === 0){
        console.log("Giỏ hàng trống.");
    } return items.forEach(item => {
        console.log(`- ${item.name}: ${item.price}đ`);
    });
    console.log(`Tổng tiền: ${this.getTotal()}đ`);
}   
const cart = createCart();
cart.addItem("Áo thun", 200000);
cart.addItem("Quần jeans", 500000);
cart.printcart();
cart.addItem("Giày thể thao", 800000);
cart.printcart();
cart.removeItem("Quần jeans");
cart.printcart();
cart.removeItem("Áo thun");
cart.removeItem("Giày thể thao");
cart.printcart();  
console.log(`Tổng tiền cuối cùng: ${cart.getTotal()}đ`);
