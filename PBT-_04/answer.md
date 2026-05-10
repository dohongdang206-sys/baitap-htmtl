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