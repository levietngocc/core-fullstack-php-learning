## Quick Review

### 1. Web app có 2 phía

```txt
┌──────────────────────────────┐
│ CLIENT                       │
│ Browser / React / Postman    │
│ Nơi user tương tác           │
└───────────────┬──────────────┘
                │
                │ HTTP request
                ▼
┌──────────────────────────────┐
│ SERVER / BACKEND             │
│ PHP / Laravel                │
│ Nơi xử lý logic              │
└───────────────┬──────────────┘
                │
                │ đọc / ghi dữ liệu
                ▼
┌──────────────────────────────┐
│ STORAGE                      │
│ Database / File / Log        │
│ Nơi lưu dữ liệu              │
└──────────────────────────────┘
```

Server xử lý xong trả ngược lại:

```txt
Storage
   │
   │ trả dữ liệu
   ▼
Backend PHP / Laravel
   │
   │ HTTP response
   ▼
Client / React / Browser
   │
   │ hiển thị kết quả
   ▼
User
```

Ghi nhớ:

| Thành phần       | Nghĩa                    |
| ---------------- | ------------------------ |
| Client           | Nơi user thao tác        |
| Server / Backend | Nơi xử lý logic          |
| Storage          | Nơi lưu hoặc đọc dữ liệu |

---

### 2. Backend flow chính

```txt
┌──────────────┐
│ HTTP Request │
└──────┬───────┘
       ▼
┌──────────────┐
│ Input        │  Dữ liệu đi vào backend
└──────┬───────┘
       ▼
┌──────────────┐
│ Sanitize     │  Làm sạch / chuẩn hóa dữ liệu
└──────┬───────┘
       ▼
┌──────────────┐
│ Validate     │  Kiểm tra dữ liệu đúng hay sai
└──────┬───────┘
       ▼
┌──────────────┐
│ Process      │  Xử lý logic chính
└──────┬───────┘
       ▼
┌──────────────┐
│ Output       │  Trả JSON / HTML / file / log
└──────────────┘
```

Một câu phải nhớ:

```txt
Client gửi request
--- Backend lấy input
--- Backend làm sạch nếu cần
--- Backend validate
--- Backend xử lý
--- Backend trả response
```

---

### 3. Request / Response là gì?

```txt
USER
 │
 │ bấm nút đăng ký
 ▼
REACT / BROWSER
 │
 │ POST /api/register
 │ gửi name, email, password
 ▼
LARAVEL BACKEND
 │
 │ validate + xử lý
 ▼
RESPONSE JSON
 │
 │ success hoặc errors
 ▼
REACT HIỂN THỊ KẾT QUẢ
```

Ví dụ request:

```txt
POST /api/register
```

Body gửi lên:

```json
{
  "name": "Nguyen Van Nam",
  "email": "nam@example.com",
  "password": "12345678"
}
```

Ví dụ response thành công:

```json
{
  "success": true,
  "message": "Register successfully"
}
```

Ví dụ response lỗi:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": "Email is invalid"
  }
}
```

---

### 4. Nghĩa nhanh các từ quan trọng

| Từ       | Nghĩa ngắn gọn                | Ví dụ                 |
| -------- | ----------------------------- | --------------------- |
| Request  | Client gửi yêu cầu lên server | `POST /api/register`  |
| Response | Server trả kết quả về client  | JSON success/error    |
| Input    | Dữ liệu đi vào backend        | name, email, password |
| Sanitize | Làm sạch dữ liệu              | trim email            |
| Validate | Kiểm tra đúng/sai             | email hợp lệ không    |
| Process  | Xử lý logic chính             | tạo user              |
| Output   | Kết quả trả ra                | JSON, HTML, log       |
| Escaping | Bảo vệ output                 | `htmlspecialchars()`  |
| JSON     | Format trao đổi dữ liệu       | `{ "name": "Nam" }`   |
| CRUD     | Tạo, đọc, sửa, xóa            | User API              |

---

### 5. Sanitize vs Validate vs Escaping

```txt
INPUT TỪ USER
      │
      ▼
SANITIZE
Làm sạch dữ liệu
Ví dụ: "  NAM@EXAMPLE.COM  " -> "nam@example.com"
      │
      ▼
VALIDATE
Kiểm tra đúng/sai
Ví dụ: email hợp lệ không, password đủ 8 ký tự không
      │
      ▼
PROCESS
Xử lý logic
Ví dụ: tạo user, lọc list, lưu file
      │
      ▼
ESCAPE OUTPUT
Bảo vệ khi đưa dữ liệu ra ngoài
Ví dụ: htmlspecialchars khi in ra HTML
```

Ghi nhớ:

```txt
Sanitize
--- làm sạch input

Validate
--- kiểm tra input đúng/sai

Escaping
--- bảo vệ output
```

---

### 6. JSON là gì?

JSON là format text để client và server nói chuyện.

```txt
React
   │
   │ gửi JSON request
   ▼
Laravel API
   │
   │ trả JSON response
   ▼
React render UI
```

PHP array:

```php
$user = [
    "name" => "Nam",
    "email" => "nam@example.com",
];
```

JSON:

```json
{
  "name": "Nam",
  "email": "nam@example.com"
}
```

Chuyển đổi:

```txt
PHP array
   │
   │ json_encode()
   ▼
JSON string

JSON string
   │
   │ json_decode($json, true)
   ▼
PHP array
```

---

### 7. CRUD user API

```txt
CREATE
POST /api/users
--- tạo user mới

READ LIST
GET /api/users
--- lấy danh sách user

READ DETAIL
GET /api/users/1
--- lấy user id = 1

UPDATE
PUT /api/users/1
--- sửa user id = 1

DELETE
DELETE /api/users/1
--- xóa user id = 1
```

CRUD là:

```txt
C --- Create --- tạo mới
R --- Read   --- đọc/lấy
U --- Update --- cập nhật
D --- Delete --- xóa
```

---

### 8. Junior Laravel task map về PHP core

| Task Laravel  | PHP core cần biết                            |
| ------------- | -------------------------------------------- |
| CRUD user     | variable, array, function, condition, JSON   |
| Filter list   | array, condition, `array_filter`, function   |
| Validate form | if/else, string functions, errors array      |
| Import file   | file handling, loop, JSON, exception, logger |
| Return JSON   | array, `json_encode`, response structure     |

---

### 9. Self Quiz

#### PHP chạy ở client hay server?

PHP chạy ở server/backend.

#### React gọi Laravel bằng gì?

React gọi Laravel bằng HTTP request/API.

#### Input là gì?

Input là dữ liệu đầu vào đi vào chương trình.

#### Sanitize khác validate chỗ nào?

Sanitize là làm sạch hoặc chuẩn hóa dữ liệu.
Validate là kiểm tra dữ liệu đúng hay sai.

#### Escaping dùng khi nào?

Escaping dùng khi output dữ liệu ra ngoài, đặc biệt là HTML.

#### JSON là gì?

JSON là format text dùng để trao đổi dữ liệu giữa client và server.

#### `json_encode()` dùng để làm gì?

Đổi PHP array/object thành JSON string.

#### `json_decode($json, true)` dùng để làm gì?

Đổi JSON string thành PHP array.

#### CRUD gồm những gì?

Create, Read, Update, Delete.

#### Vì sao không được tin input từ user?

Vì user có thể nhập sai, nhập thiếu, nhập độc hại, hoặc cố tình phá hệ thống.

---

### 10. Chốt block

```txt
Backend là xử lý input bẩn
--- kiểm tra nó
--- làm sạch khi cần
--- xử lý đúng
--- trả output an toàn
```

PHP syntax chỉ là công cụ để build được flow đó.
