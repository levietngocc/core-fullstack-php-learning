<?php

declare(strict_types=1);

/**
 * ========================================================
 * Exercise 01 — PHP Types, Comparison & String Sanitization
 * ========================================================
 *
 * Block 02 final exercise.
 *
 * Mục tiêu:
 * - Ôn lại variable, type, var_dump()
 * - Hiểu input từ user thường là string
 * - Sanitize name/email
 * - Ôn lại == và ===
 * - Viết normalizeName()
 * - Viết vietnameseSlug()
 * - Build thử user array giống data API
 *
 * Cách làm:
 * - Làm từng PART từ trên xuống
 * - Chạy file sau mỗi PART
 * - Không làm một cục rồi debug chết mẹ
 */

echo "========================================================\n";
echo "Exercise 01 — PHP Types, Comparison & String Sanitization\n";
echo "========================================================\n\n";


/**
 * ========================================================
 * PART 1 — RAW INPUT
 * ========================================================
 *
 * Bối cảnh:
 * Giả lập dữ liệu user gửi lên từ form đăng ký.
 *
 * Cần nhớ:
 * - Input từ form/request thường là string.
 * - Nhìn giống số chưa chắc là int.
 * - Nhìn giống boolean chưa chắc là bool.
 */

echo "1. Raw Input\n";
echo "------------\n";

// TODO 1.1 — Tạo raw input
$rawName = "   le     viet     ngoc   ";
$rawEmail = "   NGOC@EXAMPLE.COM   ";
$rawAge = "22";
$rawIsStudent = "1";

// TODO 1.2 — Dùng var_dump() để soi type thật
echo '$rawName = ';
var_dump($rawName);

echo '$rawEmail = ';
var_dump($rawEmail);

echo '$rawAge = ';
var_dump($rawAge);

echo '$rawIsStudent = ';
var_dump($rawIsStudent);

echo "\n";

/**
 * Cần nhận ra:
 *
 * $rawAge = "22"
 * --- nhìn giống số
 * --- nhưng là string
 *
 * $rawIsStudent = "1"
 * --- nhìn giống số/bool
 * --- nhưng là string
 */


/**
 * ========================================================
 * PART 2 — SANITIZE EMAIL
 * ========================================================
 *
 * Sanitize = làm sạch / chuẩn hóa dữ liệu.
 *
 * Input:
 * "   NGOC@EXAMPLE.COM   "
 *
 * Output:
 * "ngoc@example.com"
 *
 * Gợi ý:
 * - trim()
 * - strtolower()
 */

echo "2. Sanitize Email\n";
echo "-----------------\n";

$cleanEmail = ""; // TODO: xử lý từ $rawEmail

echo "Raw email   : [" . $rawEmail . "]\n";
echo "Clean email : [" . $cleanEmail . "]\n";

echo "\n";

/**
 * Expected:
 *
 * Raw email   : [   NGOC@EXAMPLE.COM   ]
 * Clean email : [ngoc@example.com]
 */


/**
 * ========================================================
 * PART 3 — SANITIZE NAME
 * ========================================================
 *
 * Input:
 * "   le     viet     ngoc   "
 *
 * Output:
 * "Le Viet Ngoc"
 *
 * Flow:
 * raw name
 * --- trim
 * --- gom nhiều khoảng trắng thành 1
 * --- lowercase
 * --- viết hoa chữ cái đầu từng từ
 *
 * Gợi ý function:
 * - trim()
 * - preg_replace('/\s+/', ' ', ...)
 * - mb_strtolower(..., 'UTF-8')
 * - mb_convert_case(..., MB_CASE_TITLE, 'UTF-8')
 */

echo "3. Sanitize Name\n";
echo "----------------\n";

$cleanName = ""; // TODO: xử lý từ $rawName

echo "Raw name   : [" . $rawName . "]\n";
echo "Clean name : [" . $cleanName . "]\n";

echo "\n";

/**
 * Expected:
 *
 * Raw name   : [   le     viet     ngoc   ]
 * Clean name : [Le Viet Ngoc]
 */


/**
 * ========================================================
 * PART 4 — COMPARISON: == VS ===
 * ========================================================
 *
 * Mục tiêu:
 * Ôn lại so sánh lỏng và so sánh chặt.
 *
 * Cần nhớ:
 *
 * ==
 * --- so sánh lỏng
 * --- PHP có thể tự ép kiểu
 *
 * ===
 * --- so sánh chặt
 * --- value giống và type cũng phải giống
 */

echo "4. Comparison Cases\n";
echo "-------------------\n";

/**
 * TODO 4.1 — String number vs Integer
 *
 * Expected:
 * "1" == 1   => true
 * "1" === 1  => false
 */

echo '"1" == 1      : ';
var_dump(null); // TODO: thay null bằng biểu thức so sánh

echo '"1" === 1     : ';
var_dump(null); // TODO: thay null bằng biểu thức so sánh

echo "\n";

/**
 * TODO 4.2 — Zero vs False
 *
 * Expected:
 * 0 == false   => true
 * 0 === false  => false
 */

echo '0 == false    : ';
var_dump(null); // TODO

echo '0 === false   : ';
var_dump(null); // TODO

echo "\n";

/**
 * TODO 4.3 — Empty string vs False
 *
 * Expected:
 * "" == false   => true
 * "" === false  => false
 */

echo '"" == false   : ';
var_dump(null); // TODO

echo '"" === false  : ';
var_dump(null); // TODO

echo "\n";

/**
 * TODO 4.4 — Null vs False
 *
 * Expected:
 * null == false   => true
 * null === false  => false
 */

echo 'null == false : ';
var_dump(null); // TODO

echo 'null === false: ';
var_dump(null); // TODO

echo "\n";

/**
 * Ghi nhớ:
 *
 * ==
 * --- giống giống là PHP cho qua
 *
 * ===
 * --- value giống và type cũng phải giống
 */


/**
 * ========================================================
 * PART 5 — FUNCTION: normalizeName()
 * ========================================================
 *
 * Viết function chuẩn hóa tên người.
 *
 * Function:
 * normalizeName(string $name): string
 *
 * Input:
 * "   le     viet     ngoc   "
 *
 * Output:
 * "Le Viet Ngoc"
 *
 * Flow:
 * input
 * --- trim
 * --- gom nhiều khoảng trắng thành 1
 * --- nếu rỗng thì return ''
 * --- lowercase
 * --- title case từng từ
 * --- return clean name
 */

function normalizeName(string $name): string
{
    // TODO 5.1 — trim name

    // TODO 5.2 — gom nhiều khoảng trắng thành 1

    // TODO 5.3 — nếu rỗng thì return ''

    // TODO 5.4 — chuyển về chữ thường bằng mb_strtolower()

    // TODO 5.5 — viết hoa chữ cái đầu từng từ bằng mb_convert_case()

    // TODO 5.6 — return kết quả

    return "";
}

echo "5. normalizeName()\n";
echo "-------------------\n";

$nameTestCases = [
    "   le     viet     ngoc   ",
    "NGUYEN     VAN     NAM",
    "trần   thị    mai",
    "     ",
    "",
];

foreach ($nameTestCases as $input) {
    echo "Input : [" . $input . "]\n";
    echo "Output: [" . normalizeName($input) . "]\n";
    echo "---\n";
}

echo "\n";

/**
 * Expected:
 *
 * [   le     viet     ngoc   ] -> [Le Viet Ngoc]
 * [NGUYEN     VAN     NAM]     -> [Nguyen Van Nam]
 * [trần   thị    mai]          -> [Trần Thị Mai]
 * [     ]                       -> []
 * []                            -> []
 */


/**
 * ========================================================
 * PART 6 — FUNCTION: vietnameseSlug()
 * ========================================================
 *
 * Slug = chuỗi dùng trong URL.
 *
 * Ví dụ:
 * "Nguyễn Văn Nam"
 * --->
 * "nguyen-van-nam"
 *
 * Function:
 * vietnameseSlug(string $text): string
 *
 * Flow:
 * text
 * --- trim
 * --- lowercase
 * --- bỏ dấu tiếng Việt
 * --- ký tự đặc biệt / khoảng trắng thành -
 * --- xóa dấu - đầu/cuối
 *
 * Ghi chú:
 * - Function này dài vì tiếng Việt có nhiều dấu.
 * - Không cần thuộc bảng dấu.
 * - Chỉ cần hiểu flow.
 */

function vietnameseSlug(string $text): string
{
    // TODO 6.1 — trim text

    // TODO 6.2 — lowercase bằng mb_strtolower()

    // TODO 6.3 — tạo map bỏ dấu tiếng Việt
    // Ví dụ:
    // 'à' => 'a'
    // 'á' => 'a'
    // 'ạ' => 'a'
    // 'đ' => 'd'
    //
    // Không cần tự nhớ hết, có thể tra/nhìn lại notes khi làm.

    // TODO 6.4 — dùng strtr() để bỏ dấu

    // TODO 6.5 — dùng preg_replace('/[^a-z0-9]+/', '-', ...)

    // TODO 6.6 — trim dấu '-' đầu/cuối

    // TODO 6.7 — return slug

    return "";
}

echo "6. vietnameseSlug()\n";
echo "--------------------\n";

$slugTestCases = [
    "Nguyễn Văn Nam",
    "Lê Viết Ngọc",
    "Trần Thị Mai",
    "Đà Nẵng đẹp vãi",
    "  Xin chào Việt Nam!!!  ",
];

foreach ($slugTestCases as $input) {
    echo "Input : [" . $input . "]\n";
    echo "Slug  : [" . vietnameseSlug($input) . "]\n";
    echo "---\n";
}

echo "\n";

/**
 * Expected:
 *
 * [Nguyễn Văn Nam]           -> [nguyen-van-nam]
 * [Lê Viết Ngọc]             -> [le-viet-ngoc]
 * [Trần Thị Mai]             -> [tran-thi-mai]
 * [Đà Nẵng đẹp vãi]          -> [da-nang-dep-vai]
 * [  Xin chào Việt Nam!!!  ] -> [xin-chao-viet-nam]
 */


/**
 * ========================================================
 * PART 7 — BONUS: BUILD USER ARRAY
 * ========================================================
 *
 * Mục tiêu:
 * Build data giống response API.
 *
 * Yêu cầu:
 * - name lấy từ $cleanName
 * - email lấy từ $cleanEmail
 * - age convert từ $rawAge sang int
 * - is_student convert từ $rawIsStudent sang bool
 *
 * Gợi ý:
 *
 * $age = (int) $rawAge;
 * $isStudent = $rawIsStudent === "1";
 */

echo "7. Bonus User Data\n";
echo "------------------\n";

$user = [
    "name" => $cleanName,
    "email" => $cleanEmail,
    "age" => null, // TODO: convert từ $rawAge sang int
    "is_student" => null, // TODO: convert từ $rawIsStudent sang bool
];

echo "User array:\n";
var_dump($user);

echo "\n";

echo "User JSON:\n";
echo json_encode($user, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
echo "\n\n";

/**
 * Expected JSON:
 *
 * {
 *     "name": "Le Viet Ngoc",
 *     "email": "ngoc@example.com",
 *     "age": 22,
 *     "is_student": true
 * }
 */


/**
 * ========================================================
 * DONE
 * ========================================================
 */

echo "Done Exercise 01.\n";


/**
 * ========================================================
 * SELF CHECKLIST
 * ========================================================
 *
 * Pass tối thiểu:
 *
 * [ ] File chạy không lỗi
 * [ ] Hiểu rawAge = "22" là string
 * [ ] Có cleanEmail = ngoc@example.com
 * [ ] Có cleanName = Le Viet Ngoc
 * [ ] Comparison cases ra đúng true/false
 * [ ] normalizeName() chạy đúng test cases
 *
 * Pass tốt:
 *
 * [ ] vietnameseSlug() chạy đúng test cases
 * [ ] User array có age là int
 * [ ] User array có is_student là bool
 * [ ] JSON output đẹp
 *
 * Chưa cần stress:
 *
 * [ ] Chưa cần thuộc bảng dấu tiếng Việt
 * [ ] Chưa cần giỏi regex
 */
