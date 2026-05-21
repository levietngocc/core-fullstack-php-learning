# Block 02 Summary — PHP CLI, Types, Comparison & String Functions

> Tổng kết Block 02 của Day 01 — PHP Core Mapping.
> Block này tập trung vào cách PHP đọc dữ liệu, phân biệt kiểu dữ liệu, so sánh giá trị và xử lý chuỗi đầu vào.

---

## 1. Mục tiêu của block

Block 02 giúp xây nền cho việc xử lý dữ liệu trong PHP trước khi đi tiếp sang validation, control flow, array processing, JSON và Laravel.

Luồng học chính:

```txt
PHP CLI
--- biến
--- kiểu dữ liệu
--- debug bằng var_dump
--- so sánh lỏng và so sánh chặt
--- xử lý chuỗi
--- nền tảng sanitize input
```

---

## 2. Các file đã học

```txt
blocks/02-php-cli-types/
|
|--- examples/
|    |
|    |--- types-demo.php
|    |--- comparison-demo.php
|    |--- string-functions-demo.php
|
|--- exercises/
     |
     |--- 01-types.php
```

Vai trò từng file:

```txt
types-demo.php
--- học biến, kiểu dữ liệu và var_dump

comparison-demo.php
--- học == và ===

string-functions-demo.php
--- học các hàm xử lý chuỗi

01-types.php
--- bài tập tổng hợp của block
```

---

# 3. `types-demo.php`

## Mục đích

File này dùng để hiểu cách PHP lưu và hiển thị các kiểu dữ liệu cơ bản.

Các nội dung đã học:

```txt
string
int
float / double
bool
null
indexed array
associative array
var_dump()
```

---

## 3.1 Variable là gì?

Variable là biến dùng để chứa dữ liệu.

Ví dụ:

```php
$name = "Le Viet Ngoc";
$age = 22;
```

Hiểu đơn giản:

```txt
Biến
--- là cái hộp có tên
--- dùng để giữ một giá trị
```

Ví dụ trong backend:

```txt
$name
--- giữ tên user

$email
--- giữ email user

$errors
--- giữ danh sách lỗi

$response
--- giữ dữ liệu trả về
```

---

## 3.2 Type là gì?

Type là kiểu dữ liệu của một giá trị.

| Type               | Nghĩa                              | Ví dụ                |
| ------------------ | ---------------------------------- | -------------------- |
| `string`           | chuỗi chữ                          | `"Le Viet Ngoc"`     |
| `int`              | số nguyên                          | `22`                 |
| `float` / `double` | số thực                            | `1.71`               |
| `bool`             | đúng/sai                           | `true`, `false`      |
| `null`             | không có giá trị                   | `null`               |
| `array`            | danh sách hoặc dữ liệu có cấu trúc | `["PHP", "Laravel"]` |

Ghi nhớ:

```txt
Mỗi dữ liệu trong PHP đều có type thật.
Không biết type thì dễ xử lý sai.
```

---

## 3.3 `var_dump()` dùng để làm gì?

`var_dump()` dùng để debug dữ liệu.

Nó cho biết:

```txt
type
--- kiểu dữ liệu thật

value
--- giá trị thật

length
--- độ dài nếu là string

structure
--- cấu trúc nếu là array
```

Ví dụ:

```php
$name = "Le Viet Ngoc";

var_dump($name);
```

Output:

```txt
string(12) "Le Viet Ngoc"
```

Nghĩa là:

```txt
string
--- type là chuỗi

12
--- độ dài chuỗi

"Le Viet Ngoc"
--- giá trị thật
```

---

## 3.4 Indexed array

Indexed array là array dạng danh sách, dùng index số.

Ví dụ:

```php
$skills = ["PHP", "Laravel", "React"];
```

Cấu trúc:

```txt
0 --- PHP
1 --- Laravel
2 --- React
```

Truy cập phần tử:

```php
echo $skills[0];
```

Output:

```txt
PHP
```

Dùng khi cần lưu nhiều item cùng loại:

```txt
skills
students
products
errors
```

---

## 3.5 Associative array

Associative array là array có key rõ nghĩa.

Ví dụ:

```php
$user = [
    "name" => "Le Viet Ngoc",
    "age" => 22,
    "skills" => ["PHP", "Laravel", "React"],
];
```

Cấu trúc:

```txt
name   --- Le Viet Ngoc
age    --- 22
skills --- ["PHP", "Laravel", "React"]
```

Cái này quan trọng vì nó rất gần với JSON object khi làm API.

Ví dụ JSON tương ứng:

```json
{
  "name": "Le Viet Ngoc",
  "age": 22,
  "skills": ["PHP", "Laravel", "React"]
}
```

---

## 3.6 Các cách in dữ liệu

| Cách in         | Dùng khi nào                    |
| --------------- | ------------------------------- |
| `echo`          | in giá trị đơn giản ra terminal |
| `var_dump()`    | debug type và value             |
| `print_r()`     | in array dễ đọc hơn             |
| `json_encode()` | chuyển dữ liệu sang JSON string |

Ghi nhớ:

```txt
echo
--- in output sạch

var_dump()
--- soi ruột dữ liệu

print_r()
--- xem array nhanh

json_encode()
--- in dữ liệu giống response API
```

---

# 4. `comparison-demo.php`

## Mục đích

File này dùng để hiểu sự khác nhau giữa:

```txt
==
--- so sánh lỏng

===
--- so sánh chặt
```

---

## 4.1 `==` và `===` khác nhau thế nào?

| Toán tử | Tên gọi      | Ý nghĩa                               |
| ------- | ------------ | ------------------------------------- |
| `==`    | so sánh lỏng | PHP có thể tự ép kiểu rồi mới so sánh |
| `===`   | so sánh chặt | So sánh cả value và type              |

Ghi nhớ nhanh:

```txt
==
--- giống giống là PHP cho qua

===
--- value giống và type cũng phải giống
```

---

## 4.2 Case 1 — String number vs Integer

```php
"1" == 1
```

Kết quả:

```txt
true
```

Vì PHP tự ép `"1"` thành số `1` rồi so sánh.

```php
"1" === 1
```

Kết quả:

```txt
false
```

Vì:

```txt
"1"
--- string

1
--- int
```

Khác type nên `===` trả về `false`.

---

## 4.3 Case 2 — Zero vs False

```php
0 == false
```

Kết quả:

```txt
true
```

Vì `==` so sánh lỏng, PHP xem `0` và `false` là giống kiểu “không”.

```php
0 === false
```

Kết quả:

```txt
false
```

Vì:

```txt
0
--- int

false
--- bool
```

Khác type.

---

## 4.4 Case 3 — Empty string vs False

```php
"" == false
```

Kết quả:

```txt
true
```

Vì chuỗi rỗng `""` và `false` khi so sánh lỏng có thể bị xem là tương đương.

```php
"" === false
```

Kết quả:

```txt
false
```

Vì:

```txt
""
--- string rỗng

false
--- bool
```

Khác type.

---

## 4.5 Case 4 — Null vs False

```php
null == false
```

Kết quả:

```txt
true
```

Vì `null` và `false` đều mang cảm giác “không có/không đúng” khi so sánh lỏng.

```php
null === false
```

Kết quả:

```txt
false
```

Vì:

```txt
null
--- không có giá trị

false
--- boolean false
```

Khác type.

---

## 4.6 Quy tắc backend

Nên ưu tiên `===` để tránh bug do PHP tự ép kiểu.

Ví dụ rõ ràng:

```php
if ($value === null) {
    echo "Missing value";
}

if ($value === "") {
    echo "Empty string";
}

if ($value === false) {
    echo "Boolean false";
}

if ($value === 0) {
    echo "Number zero";
}
```

Không nên viết mơ hồ:

```php
if ($value == false) {
    echo "Invalid";
}
```

Vì các giá trị này có thể bị gom chung khi dùng `==`:

```txt
0
""
false
null
```

---

# 5. `string-functions-demo.php`

## Mục đích

File này dùng để học các hàm xử lý chuỗi thường gặp trong backend.

Các hàm đã học:

```txt
trim()
strtolower()
mb_strtolower()
strlen()
mb_strlen()
explode()
implode()
str_replace()
```

---

## 5.1 `trim()`

### Dùng để làm gì?

`trim()` xóa khoảng trắng ở đầu và cuối chuỗi.

Ví dụ:

```txt
"   Le Viet Ngoc   "
--- trim() --->
"Le Viet Ngoc"
```

Lưu ý:

```txt
trim() không xóa khoảng trắng ở giữa chuỗi.
```

Dùng khi:

```txt
user nhập dư khoảng trắng
email bị dư khoảng trắng
name bị dư khoảng trắng
```

---

## 5.2 `strtolower()`

### Dùng để làm gì?

`strtolower()` chuyển chuỗi về chữ thường.

Ví dụ:

```txt
"NAME@EXAMPLE.COM"
--- strtolower() --->
"name@example.com"
```

Hay dùng với email:

```php
strtolower(trim($email));
```

Flow:

```txt
raw email
--- trim
--- strtolower
--- clean email
```

---

## 5.3 `mb_strtolower()`

### Dùng để làm gì?

`mb_strtolower()` chuyển chữ thường tốt hơn với Unicode/tiếng Việt.

Ví dụ:

```txt
"LÊ VIẾT NGỌC"
--- mb_strtolower(..., "UTF-8") --->
"lê viết ngọc"
```

Ghi nhớ:

```txt
strtolower()
--- dùng ổn với tiếng Anh/email

mb_strtolower()
--- nên dùng với tiếng Việt hoặc Unicode
```

---

## 5.4 `strlen()` và `mb_strlen()`

### Khác nhau

```txt
strlen()
--- đếm byte

mb_strlen()
--- đếm ký tự Unicode
```

Ví dụ tiếng Anh:

```txt
"Ngoc"

strlen()
--- 4

mb_strlen()
--- 4
```

Ví dụ tiếng Việt:

```txt
"Ngọc"

strlen()
--- 6

mb_strlen()
--- 4
```

Vì chữ tiếng Việt có dấu có thể dùng nhiều byte trong UTF-8.

Ghi nhớ:

```txt
Validate tên tiếng Việt
--- dùng mb_strlen()

Text tiếng Anh đơn giản
--- strlen vẫn ổn
```

---

## 5.5 `explode()`

### Dùng để làm gì?

`explode()` tách string thành array.

Ví dụ:

```php
$skillText = "PHP,Laravel,React";

$skills = explode(",", $skillText);
```

Flow:

```txt
"PHP,Laravel,React"
--- explode(",") --->
["PHP", "Laravel", "React"]
```

Trong đó:

```txt
","
--- dấu cắt / separator

$skillText
--- chuỗi cần cắt
```

Ghi nhớ:

```txt
explode = làm nổ chuỗi ra thành nhiều phần tử trong array
```

---

## 5.6 `implode()`

### Dùng để làm gì?

`implode()` ghép array thành string.

Ví dụ:

```php
$skills = ["PHP", "Laravel", "React"];

$joinedSkills = implode(" | ", $skills);
```

Flow:

```txt
["PHP", "Laravel", "React"]
--- implode(" | ") --->
"PHP | Laravel | React"
```

Trong đó:

```txt
" | "
--- dấu nối

$skills
--- array cần ghép
```

Ghi nhớ:

```txt
implode = gom array lại thành một chuỗi
```

---

## 5.7 `str_replace()`

### Dùng để làm gì?

`str_replace()` thay một đoạn chữ trong string.

Ví dụ:

```php
$sentence = "I am learning PHP and Laravel";

$updatedSentence = str_replace("Laravel", "React", $sentence);
```

Flow:

```txt
"I am learning PHP and Laravel"
--- thay Laravel bằng React --->
"I am learning PHP and React"
```

Cấu trúc:

```txt
str_replace(search, replace, subject)
```

Trong đó:

```txt
search
--- chữ cần tìm

replace
--- chữ thay vào

subject
--- chuỗi gốc
```

---

# 6. Ghi chú cú pháp quan trọng

## 6.1 Nối chuỗi bằng dấu `.`

PHP dùng dấu `.` để nối chuỗi.

Ví dụ:

```php
echo "Name: " . $name . "\n";
```

Nghĩa là:

```txt
"Name: "
--- nối với
$name
--- nối với
xuống dòng
```

---

## 6.2 Nháy đơn và nháy kép

Nháy đơn in biến như chữ thường:

```php
echo '$name = ';
```

Output:

```txt
$name =
```

Nháy kép cho phép PHP đọc biến bên trong:

```php
echo "$name";
```

Output:

```txt
Le Viet Ngoc
```

---

## 6.3 `declare(strict_types=1);`

Dòng này bật kiểm tra type nghiêm hơn khi gọi function có type hint.

```php
declare(strict_types=1);
```

Hiểu đơn giản:

```txt
Function cần int thì truyền int.
Function cần string thì truyền string.
Truyền sai type thì PHP báo TypeError.
```

Lưu ý:

```txt
Nó không biến PHP thành TypeScript.
Nó không khóa type của mọi biến.
Nó chủ yếu phát huy khi dùng function có khai báo type.
```

---

# 7. Mental model cuối block

```txt
Input từ user
--- thường là string
--- có thể bẩn
--- có thể sai type
--- có thể dư khoảng trắng
--- có thể viết hoa lung tung
--- có thể chứa tiếng Việt/Unicode
```

PHP cần:

```txt
var_dump()
--- soi type và value thật

===
--- so sánh an toàn

trim()
--- xóa khoảng trắng đầu/cuối

strtolower()
--- chuẩn hóa chữ thường đơn giản

mb_strtolower()
--- chuẩn hóa chữ thường tiếng Việt

mb_strlen()
--- đếm ký tự tiếng Việt đúng hơn

explode()
--- string thành array

implode()
--- array thành string

str_replace()
--- thay chữ trong string
```

---

# 8. Bài tập tiếp theo

File tiếp theo:

```txt
blocks/02-php-cli-types/exercises/01-types.php
```

Mục tiêu bài tập:

```txt
raw input
--- var_dump
--- sanitize name/email
--- comparison cases
--- normalizeName()
--- vietnameseSlug()
```

---

# 9. Checklist trước khi làm exercise

```txt
[ ] Hiểu var_dump() dùng để soi type và value
[ ] Hiểu vì sao === an toàn hơn ==
[ ] Hiểu trim() xóa khoảng trắng đầu/cuối
[ ] Hiểu strtolower() chuẩn hóa email/text đơn giản
[ ] Hiểu mb_strtolower() dùng tốt hơn cho tiếng Việt
[ ] Hiểu strlen() đếm byte
[ ] Hiểu mb_strlen() đếm ký tự Unicode
[ ] Hiểu explode() đổi string thành array
[ ] Hiểu implode() đổi array thành string
[ ] Hiểu str_replace() thay chữ trong string
```

---

# 10. Tổng kết

Block 02 giúp hiểu cách PHP xử lý dữ liệu nền tảng.

```txt
Dữ liệu có type.
Input thường bẩn.
So sánh lỏng có thể gây bug.
String functions giúp sanitize dữ liệu.
Debug bắt đầu bằng việc nhìn đúng type và value.
```

Câu chốt:

```txt
Trước khi xử lý input, phải soi dữ liệu, làm sạch dữ liệu, so sánh chặt, rồi mới xử lý bằng function rõ ràng.
```
