function createCart() {

    // Private data
    let items = [];
    let discount = {
        type: null,
        value: 0
    };

    return {

        // Thêm sản phẩm
        addItem(product, quantity = 1) {

            // Kiểm tra sản phẩm đã tồn tại chưa
            const existingItem = items.find(item => item.id === product.id);

            if (existingItem) {

                // Nếu có rồi → tăng quantity
                existingItem.quantity += quantity;

            } else {

                // Nếu chưa có → thêm mới
                items.push({
                    ...product,
                    quantity
                });
            }
        },

        // Xóa sản phẩm theo id
        removeItem(productId) {

            items = items.filter(item => item.id !== productId);

        },

        // Cập nhật số lượng
        updateQuantity(productId, newQuantity) {

            const item = items.find(item => item.id === productId);

            if (item) {

                // Nếu số lượng <= 0 → xóa
                if (newQuantity <= 0) {

                    this.removeItem(productId);

                } else {

                    item.quantity = newQuantity;

                }
            }
        },

        // Tính tổng tiền
        getTotal() {

            const subtotal = items.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0);

            // Áp dụng giảm giá
            if (discount.type === "percent") {

                return subtotal - (subtotal * discount.value / 100);

            }

            if (discount.type === "fixed") {

                return subtotal - discount.value;

            }

            return subtotal;
        },

        // Áp dụng mã giảm giá
        applyDiscount(code) {

            switch (code) {

                case "SALE10":
                    discount = {
                        type: "percent",
                        value: 10
                    };
                    break;

                case "SALE20":
                    discount = {
                        type: "percent",
                        value: 20
                    };
                    break;

                case "FREESHIP":
                    discount = {
                        type: "fixed",
                        value: 30000
                    };
                    break;

                default:
                    console.log("Mã giảm giá không hợp lệ");
            }
        },

        // In giỏ hàng
        printCart() {

            const tableData = items.map((item, index) => ({
                "#": index + 1,
                "Sản phẩm": item.name,
                "SL": item.quantity,
                "Đơn giá": item.price.toLocaleString("vi-VN") + "đ",
                "Tổng": (item.price * item.quantity).toLocaleString("vi-VN") + "đ"
            }));

            console.table(tableData);

            console.log(
                "Tổng cộng:",
                this.getTotal().toLocaleString("vi-VN") + "đ"
            );
        },

        // Tổng số sản phẩm
        getItemCount() {

            return items.reduce((total, item) => {
                return total + item.quantity;
            }, 0);

        },

        // Xóa toàn bộ giỏ
        clearCart() {

            items = [];
            discount = {
                type: null,
                value: 0
            };

        }
    };
}


// ================= TEST =================

const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);

cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);

cart.printCart();

cart.applyDiscount("SALE10");

cart.printCart();

console.log("Số SP:", cart.getItemCount());

cart.removeItem(3);

console.log("Sau xóa:", cart.getItemCount());