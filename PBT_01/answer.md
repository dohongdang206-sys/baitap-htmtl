1.DNS Lookup
Trình duyệt hỏi hệ thống DNS để chuyển shopee.vn → địa chỉ IP của server.
TCP Connection
Trình duyệt thiết lập kết nối TCP tới server (3-way handshake).
TLS Handshake (HTTPS)
Vì dùng HTTPS nên sẽ có bước mã hóa: xác thực chứng chỉ SSL và thiết lập khóa bảo mật.
Gửi HTTP Request
Trình duyệt gửi request (GET /) tới server.
Server xử lý & trả response
Server xử lý và trả về HTML (kèm status code như 200 OK).
Trình duyệt parse HTML
Đọc HTML → tạo DOM
Gặp CSS/JS → gửi thêm request để tải
Tải tài nguyên (CSS, JS, ảnh, font...)
Các request này hiển thị trong tab Network.
Render (hiển thị trang)
Tạo CSSOM
Kết hợp DOM + CSSOM → Render Tree
Layout + Paint → hiển thị lên màn hình
2. Tab Network trong Chrome DevTools cho thấy gì?

Tab Network hiển thị toàn bộ hoạt động mạng của trang web:

Danh sách request (HTML, CSS, JS, ảnh, API…)
Status Code (200, 404, 500…)
Type (document, stylesheet, script…)
Size (dung lượng)
Time (thời gian tải)
Waterfall (timeline từng request)
Tổng thời gian load trang (ở thanh dưới)
3. Cách bạn tự chụp screenshot + đánh dấu (quan trọng)

Làm theo từng bước này:

Bước 1: Mở DevTools
Nhấn F12 hoặc Ctrl + Shift + I
Chọn tab Network
Bước 2: Reload trang
Nhấn Ctrl + R (để thấy toàn bộ request)
Bước 3: Tìm 3 thứ cần đánh dấu
Status Code của request đầu tiên
Dòng đầu tiên (thường là document)
Cột Status → ví dụ 200
Tổng thời gian load trang
Nhìn góc dưới bên trái hoặc phải (ví dụ: Finish: 2.31s)
Một request CSS
Tìm dòng có Type = stylesheet
Ví dụ: main.css

Câu A2.
1. Dùng <div> thay cho thẻ semantic
2. Không dùng thẻ heading (<h1>, <h2>)
3. Menu không dùng danh sách (<ul><li>)
4. Ảnh không có alt
5. Không có cấu trúc rõ ràng cho sản phẩm
Câu A3
1. Sai semantic (ý nghĩa HTML)
2. Khó responsive (hiển thị mobile kém)
3. Code rối, khó bảo trì
4. Hiệu năng kém hơn
5. Accessibility kém
Câu C1:
<!-- HEADER -->
<header> <!-- header: chứa phần đầu trang -->
    <div class="logo">
        <a href="/">ShopTLU</a> <!-- link về trang chủ -->
    </div>

    <nav> <!-- nav: khu vực điều hướng chính -->
        <ul> <!-- ul: menu là danh sách -->
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
        </ul>
    </nav>
</header>

<!-- BREADCRUMB -->
<nav aria-label="breadcrumb"> <!-- nav: điều hướng phụ -->
    <ol> <!-- ol: breadcrumb có thứ tự phân cấp -->
        <li><a href="/">Trang chủ</a></li>
        <li><a href="/dien-thoai">Điện thoại</a></li>
        <li aria-current="page">iPhone 16</li> <!-- trang hiện tại -->
    </ol>
</nav>

<!-- MAIN CONTENT -->
<main> <!-- main: nội dung chính của trang -->

    <!-- LAYOUT 2 CỘT: CONTENT + SIDEBAR -->
    <div class="container"> <!-- div: chỉ để layout (không có semantic riêng) -->

        <!-- NỘI DUNG CHÍNH -->
        <section class="product-detail"> <!-- section: nhóm nội dung sản phẩm -->

            <!-- ẢNH SẢN PHẨM -->
            <section class="product-images"> <!-- section: nhóm ảnh -->
                <h2>Hình ảnh sản phẩm</h2> <!-- heading cho section -->

                <figure> <!-- figure: chứa ảnh minh họa -->
                    <img src="img1.jpg" alt="Ảnh sản phẩm 1">
                </figure>

                <figure>
                    <img src="img2.jpg" alt="Ảnh sản phẩm 2">
                </figure>

                <figure>
                    <img src="img3.jpg" alt="Ảnh sản phẩm 3">
                </figure>

                <figure>
                    <img src="img4.jpg" alt="Ảnh sản phẩm 4">
                </figure>

                <figure>
                    <img src="img5.jpg" alt="Ảnh sản phẩm 5">
                </figure>
            </section>

            <!-- THÔNG TIN SẢN PHẨM -->
            <article class="product-info"> <!-- article: nội dung độc lập (1 sản phẩm) -->
                <h1>iPhone 16 Pro</h1> <!-- h1: tiêu đề chính -->

                <p class="price">25.990.000đ</p> <!-- p: nội dung văn bản -->

                <div class="rating"> <!-- div: nhóm sao đánh giá -->
                    <span>★★★★★</span>
                </div>

                <section class="description"> <!-- section: mô tả -->
                    <h2>Mô tả sản phẩm</h2>
                    <p>...</p>
                </section>
            </article>

            <!-- BẢNG THÔNG SỐ -->
            <section class="specs"> <!-- section: nhóm thông số -->
                <h2>Thông số kỹ thuật</h2>

                <table> <!-- table: dữ liệu dạng bảng -->
                    <thead> <!-- thead: tiêu đề bảng -->
                        <tr>
                            <th>Thuộc tính</th>
                            <th>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody> <!-- tbody: dữ liệu chính -->
                        <tr>
                            <td>Màn hình</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td>Pin</td>
                            <td>...</td>
                        </tr>
                    </tbody>
                    <tfoot> <!-- tfoot: phần cuối bảng -->
                        <tr>
                            <td colspan="2">Thông tin chỉ mang tính tham khảo</td>
                        </tr>
                    </tfoot>
                </table>
            </section>

            <!-- ĐÁNH GIÁ / BÌNH LUẬN -->
            <section class="reviews"> <!-- section: nhóm đánh giá -->
                <h2>Đánh giá sản phẩm</h2>

                <article class="review"> <!-- article: mỗi bình luận là nội dung độc lập -->
                    <h3>Người dùng A</h3>
                    <p>Rất tốt!</p>
                </article>

                <article class="review">
                    <h3>Người dùng B</h3>
                    <p>Ổn trong tầm giá.</p>
                </article>
            </section>

        </section>

        <!-- SIDEBAR -->
        <aside> <!-- aside: nội dung phụ (sản phẩm tương tự) -->
            <h2>Sản phẩm tương tự</h2>

            <ul> <!-- danh sách sản phẩm -->
                <li>
                    <article> <!-- mỗi sản phẩm là 1 thực thể -->
                        <h3>iPhone 15</h3>
                    </article>
                </li>
                <li>
                    <article>
                        <h3>Samsung S24</h3>
                    </article>
                </li>
            </ul>
        </aside>

    </div>

</main>

<!-- FOOTER -->
<footer> <!-- footer: phần cuối trang -->
    <p>© 2026 ShopTLU</p>
</footer>z

Lỗi 1: Dòng 1 — <!DOCTYPE> sai chuẩn — Sửa thành <!DOCTYPE html>

Lỗi 2: Dòng 4 — Thẻ <title> không đóng — Thêm </title>

Lỗi 3: Dòng 5 — charset="utf8" sai chuẩn — Sửa thành UTF-8

Lỗi 4: Dòng 9 — <h1> không đóng đúng — Sửa </h1>

Lỗi 5: Dòng 13 — Thẻ <a> không đóng — Sửa </a>

Lỗi 6: Dòng 20 — Thiếu dấu ngoặc kép trong src ảnh — Sửa src="iphone.jpg"

Lỗi 7: Dòng 20 — Thiếu thuộc tính alt cho img (semantic) — Thêm alt="iPhone 16 Pro"

Lỗi 8: Dòng 22 — Sai thứ tự đóng thẻ <b> và <p> — Sửa <b> nằm trong <p> và đóng đúng thứ tự

Lỗi 9: Dòng 27 — Table thiếu <thead> và <th> (semantic) — Thêm <thead> và đổi <td> thành <th>

Lỗi 10: Dòng 37 — Dùng 2 thẻ <main> là sai — Thay cái thứ 2 bằng <aside>

Lỗi 11: Dòng 42 — Thẻ <p> trong footer không đóng — Thêm </p>

Lỗi 12: Table thiếu <tbod> (semantic) — Thêm <tbody>