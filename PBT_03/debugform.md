Lỗi 2: Dòng 4 — Input email không có <label> và thiếu name, không gửi được dữ liệu về server
Sửa:<label for="email">Email:</label>
<input type="email" id="email" name="email" placeholder="Email của bạn" required>
Lỗi 3: Dòng 6 — Input password không có name và id, không phân biệt được trường
Sửa:<label for="password">Mật khẩu:</label>
<input type="password" id="password" name="password" required>
Lỗi 4: Dòng 7 — Input "Nhập lại mật khẩu" không có name, id và không phân biệt với password
Sửa:<label for="confirm">Nhập lại mật khẩu:</label>
<input type="password" id="confirm" name="confirm" required>
Lỗi 5: Dòng 9 — Phone dùng type="text" thay vì type="tel", không có validation số điện thoại
Sửa:<label for="phone">Phone:</label>
<input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>
Lỗi 6: Dòng 9 — Dùng value="0901234567" thay vì placeholder, gây khó khăn khi nhập liệu
Sửa:<input type="tel" id="phone" name="phone" placeholder="0901234567" pattern="[0-9]{10}" required>
Lỗi 7: Dòng 11–14 — <select> không có <label> và các <option> không có value, dữ liệu gửi về không rõ ràn<label for="city">Thành phố:</label>
<select id="city" name="city" required>
    <option value="">--Chọn--</option>
    <option value="hn">Hà Nội</option>
    <option value="hcm">TP.HCM</option>
</select>
Lỗi 8: Dòng 16 — Label "Tôi đồng ý điều khoản" không có checkbox đi kèm → không thể chọn
Sửa:<label>
    <input type="checkbox" name="terms" required>
    Tôi đồng ý điều khoản
</label>