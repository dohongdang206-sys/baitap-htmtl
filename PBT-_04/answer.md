Câu A1 (10đ) — 5 Loại Positioning
Position	Vẫn chiếm chỗ trong flow?	Tham chiếu vị trí	Cuộn theo trang?	Use case
static	Có	Theo flow bình thường của document	Có	Layout mặc định, không cần định vị đặc biệt
relative	Có	So với vị trí gốc của chính nó	Có	Dịch nhẹ phần tử, làm mốc cho absolute
absolute	Không	So với ancestor gần nhất có position ≠ static	Có	Tooltip, dropdown, badge, popup nhỏ
fixed	Không	So với viewport (màn hình trình duyệt)	Không	Navbar cố định, nút chat, nút back-to-top
sticky	Có	Ban đầu theo flow, sau đó bám theo viewport	Chỉ bám khi cuộn tới ngưỡng	Header dính đầu trang, menu sidebar sticky
Câu A2 (10đ) — Flexbox vs Grid
+------+------+------+------+
| item | item | item | item |
+------+------+------+------+

.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; }
+-------+  +-------+
| item1 |  | item2 |
+-------+  +-------+

+-------+  +-------+
| item3 |  | item4 |
+-------+  +-------+

+-------+  +-------+
| item5 |  | item6 |
+-------+  +-------+
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
|item1                item2                item3|
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 20px;
}
+--------+----------------------+--------+
| 200px  |      flexible        | 200px  |
| item1  |        item2         | item3  |
+--------+----------------------+--------+
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}+------+------+------+
|  1   |  2   |  3   |
+------+------+------+

+------+------+------+
|  4   |  5   |  6   |
+------+------+------+

+------+------+------+
|  7   |      |      |
+------+------+------+

Câu C1 (10đ) — Flexbox vs Grid: Khi nào dùng gì?
Tình huống	Nên dùng	Giải thích
Navigation bar ngang (logo + menu + buttons)	Flexbox	Navbar là layout 1 chiều (ngang). Flexbox rất mạnh để căn hàng ngang, justify-content và align-items giúp chia khoảng cách và căn giữa dễ dàng.
Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)	Grid	Đây là layout 2 chiều (hàng + cột). CSS Grid giúp tạo các cột đều nhau (grid-template-columns) và tự động xuống dòng rất tiện.
Layout blog: main content + sidebar	Grid	Có cấu trúc rõ ràng gồm nhiều vùng lớn (main + sidebar), Grid giúp chia bố cục tổng thể chính xác hơn bằng tỉ lệ cột như 3fr 1fr.
Footer với 4 cột thông tin	Grid (hoặc Flexbox nếu đơn giản)	Footer nhiều cột đều nhau phù hợp với Grid vì dễ quản lý cột và responsive. Nếu chỉ cần xếp ngang đơn giản thì Flexbox cũng được.
Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)	Flexbox	Card là layout theo chiều dọc. Dùng display: flex; flex-direction: column; và margin-top: auto để đẩy nút xuống đáy rất hiệu quả.
Câu C2 (10đ) — Debug Flexbox
Lỗi 1 — Cards không đều chiều cao, nút “Mua” bị lệch
Nguyên nhân

Các .card có lượng nội dung khác nhau (title dài/ngắn khác nhau), nên chiều cao mỗi card khác nhau.
Nút .btn nằm ngay sau nội dung nên bị “nhảy” lên/xuống
.card-container {
    display: flex;
    flex-wrap: wrap;
}

.card {
    width: 30%;
    margin: 1.5%;
}

.card img {
    width: 100%;
}
Lỗi 2 — Item không nằm giữa màn hình
Nguyên nhân

Container .hero có display: flex nhưng chưa dùng:

justify-content
align-items

Mặc định Flexbox đặt item ở góc trên trái.
Code lỗi
.hero {
    height: 100vh;
    display: flex;
}

.hero-content {
    text-align: center;
}
Code sửa
.hero {
    height: 100vh;
    display: flex;

    justify-content: center;
    align-items: center;
}

.hero-content {
    text-align: center;
}
Lỗi 3 — Sidebar bị co lại
Nguyên nhân

Trong Flexbox, item mặc định có:

flex-shrink: 1;

Nghĩa là sidebar được phép co lại khi .content quá dài.
Code lỗi
.layout {
    display: flex;
}

.sidebar {
    width: 250px;
}

.content {
    flex: 1;
}
Code sửa
.layout {
    display: flex;
}

.sidebar {
    width: 250px;
    flex-shrink: 0;
}

.content {
    flex: 1;
}