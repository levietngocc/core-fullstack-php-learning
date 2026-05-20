export const mockRoadmap = {
  phases: [
    {
      id: "week-1",
      name: "Tuần 1",
      title: "PHP Core + OOP + SQL + Laravel Foundation",
      progress: 0,
    },
    {
      id: "week-2",
      name: "Tuần 2",
      title: "React + TypeScript + Laravel API",
      progress: 0,
    },
    {
      id: "week-3",
      name: "Tuần 3",
      title: "Project Production + Testing",
      progress: 0,
    },
    {
      id: "week-4",
      name: "Tuần 4",
      title: "Docker + Deploy + Junior Interview",
      progress: 0,
    },
  ],

  days: [
    {
      id: "day-1",
      phaseId: "week-1",
      day: "Day 01",
      title: "PHP Core Mapping — Syntax không phải để nhớ, mà để build backend",
      status: "doing",
      difficulty: "Hard",
      duration: "08:00 - 20:30",

      hook: "Hôm nay không học PHP kiểu nhập môn. Hôm nay reverse engineer một backend request: user gửi input → PHP validate → xử lý → output JSON/HTML an toàn. Mục tiêu là cuối ngày mày viết được script xử lý dữ liệu thật, có Git history, có note lỗi, không còn mù terminal.",

      perspectives: [
        {
          label: "Mapping",
          text: "Junior Laravel khi nhận task CRUD sẽ phải biết: input từ request là gì, validate ở đâu, biến/array xử lý thế nào, output trả về sao cho an toàn. Vì vậy ngày 1 học PHP core theo đường request → process → response, không học lan man.",
        },
        {
          label: "Ultralearning",
          text: "Không xem video quá 20 phút liên tục. Mỗi khối 2 tiếng phải có file code chạy được. Không chạy được bằng terminal thì coi như chưa học.",
        },
        {
          label: "Hard Mode",
          text: "Không XAMPP, không Laragon. Trên Pop!_OS dùng terminal thật: php -v, composer -V, which php, git commit. Mỗi bài nhỏ phải commit. Cuối ngày repo phải có lịch sử như người đi làm.",
        },
      ],

      methods: {
        mapping:
          "Vẽ sơ đồ backend request: Browser/Postman → PHP script → validate input → xử lý array/string → file/json/log → response.",
        ultralearning:
          "70% thời gian code, 20% đọc docs/tài liệu, 10% review/note. Không học thụ động.",
        goldilocks:
          "Bài tập khó hơn mức hiện tại 20–30%: đủ đau để lên trình, chưa đến mức bỏ cuộc.",
        hardMode:
          "Mỗi block có output. Không output = block fail. Không commit = ngày fail.",
      },

      goal: [
        "Hiểu PHP chạy bằng CLI trên Pop!_OS và biết kiểm tra đúng PHP runtime.",
        "Nắm biến, kiểu dữ liệu, so sánh lỏng/chặt, string functions.",
        "Viết được control flow với if/switch/match, loop và function.",
        "Xử lý array bằng array_map/filter/reduce/usort thay vì foreach bừa.",
        "Đọc/ghi JSON và log file đơn giản.",
        "Có Git repo với commit rõ ràng, không dồn commit cuối ngày.",
      ],

      timeBlocks: [
        {
          id: "day-1-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Junior PHP/Laravel thật sự cần gì?",
          description:
            "Khởi động bằng reverse engineering. Không đâm đầu vào syntax trước.",
          type: "setup",
          tasks: [
            "Mở notebook/app note và viết tiêu đề: Day 1 — PHP Core Mapping.",
            "Vẽ flow: HTTP request → input → validate → process → output.",
            "Viết 5 task junior Laravel thường gặp: CRUD user, filter list, validate form, import file, trả JSON.",
            "Map từng task đó về PHP core cần học: variable, array, function, condition, loop, file, json.",
            "Kiểm tra môi trường trên Pop!_OS: php -v, composer -V, which php, git --version.",
            "Nếu which php ra PHP 8.4 thì ghi note: dùng PHP 8.4 làm runtime chính.",
          ],
          output: [
            "Có sơ đồ backend request trong note.",
            "Có danh sách 5 task junior và kiến thức PHP core tương ứng.",
          ],
        },
        {
          id: "day-1-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — PHP CLI + Variables + Types",
          description:
            "Setup lab và học kiểu dữ liệu bằng cách chạy file thật.",
          type: "deep",
          tasks: [
            "Tạo lab: mkdir -p ~/Code/php-core-lab && cd ~/Code/php-core-lab.",
            "Khởi tạo Git: git init.",
            "Tạo file 01-types.php.",
            "Code các kiểu: string, int, float, bool, null, indexed array, associative array.",
            "Với mỗi biến dùng var_dump() để nhìn type thật.",
            "So sánh '1' == 1, '1' === 1, 0 == false, 0 === false.",
            "Viết note: khi nào dùng === thay vì ==.",
            "Học string functions: strlen, mb_strlen, strtolower, mb_strtolower, trim, str_replace, substr, explode, implode.",
            "Bài hardcore mini: viết normalizeName($name) xử lý khoảng trắng thừa và viết hoa chữ cái đầu.",
            "Bài slug: vietnameseSlug($text) chuyển Nguyễn Văn Nam thành nguyen-van-nam.",
            "Không dùng package ngoài.",
            "Commit: feat: setup php cli and type exercises.",
          ],
          output: [
            "01-types.php chạy được.",
            "Có hàm normalizeName.",
            "Có hàm vietnameseSlug.",
            "Có commit đầu tiên.",
          ],
        },
        {
          id: "day-1-block-3",
          time: "10:30 - 10:45",
          label: "Break — Consolidation",
          description: "Nghỉ để não nạp lại.",
          type: "break",
          tasks: [
            "Đứng dậy khỏi máy.",
            "Uống nước.",
            "Không lướt mạng quá 5 phút.",
            "Trong đầu tự trả lời: == khác === thế nào?",
          ],
          output: ["Không cần code. Nhưng phải nhớ được khác biệt == và ===."],
        },
        {
          id: "day-1-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Condition + Loop + match PHP 8",
          description:
            "Control flow là xương sống của mọi service/backend logic.",
          type: "deep",
          tasks: [
            "Tạo file 02-control-flow.php.",
            "Viết hàm classifyScore($score): A/B/C/D/F bằng if/elseif.",
            "Viết lại classifyScore bằng match expression.",
            "So sánh readability giữa if và match.",
            "Viết FizzBuzz 1–100 bằng match.",
            "Viết validateRegisterInput($input) trả về mảng lỗi.",
            "Input gồm name, email, password, confirm_password.",
            "Rule: name required, email có @, password >= 8, confirm trùng password.",
            "Học for, while, do-while, foreach bằng một bài duy nhất: generate report 1–100.",
            "Dùng break/continue để bỏ qua số chia hết cho 7 nhưng dừng nếu gặp số > 90.",
            "Commit: feat: add control flow and validation exercises.",
          ],
          output: [
            "02-control-flow.php chạy được.",
            "Có validateRegisterInput trả về lỗi rõ ràng.",
            "Có FizzBuzz bằng match.",
          ],
        },
        {
          id: "day-1-block-5",
          time: "12:45 - 13:30",
          label: "Lunch — No input mode",
          description: "Ăn và nghỉ thật.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không xem tutorial lúc ăn.",
            "Không tự lừa là đang học khi chỉ lướt video.",
          ],
          output: ["Quay lại lúc 13:30."],
        },
        {
          id: "day-1-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Functions + Array Processing",
          description:
            "Backend thực tế xử lý list data liên tục. Array là vũ khí ngày 1.",
          type: "deep",
          tasks: [
            "Tạo file 03-array-functions.php.",
            "Học function với type hint: function sum(int $a, int $b): int.",
            "Học default params và named arguments.",
            "Học arrow function fn($x) => $x * 2.",
            "Học closure function() use ($var) {}.",
            "Tạo mảng 20 sinh viên: name, score, class, email.",
            "Dùng array_filter lấy sinh viên pass >= 5.",
            "Dùng usort sort theo score giảm dần.",
            "Dùng array_slice lấy top 3.",
            "Dùng array_reduce tính điểm trung bình.",
            "Dùng array_reduce hoặc tự viết groupByClass($students).",
            "Hard mode: không dùng foreach trong bài xử lý chính, ưu tiên array functions.",
            "Viết printStudentReport($students) in ra summary rõ ràng.",
            "Commit: feat: add student report with array functions.",
          ],
          output: [
            "03-array-functions.php chạy được.",
            "Có report: pass count, fail count, top 3, average, group by class.",
          ],
        },
        {
          id: "day-1-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description:
            "Kiểm tra độ khó: dễ quá thì tăng, khó quá thì chia nhỏ.",
          type: "break",
          tasks: [
            "Tự chấm block vừa rồi từ 1–10.",
            "Nếu dưới 6: thêm yêu cầu export JSON.",
            "Nếu trên 9: ghi note chỗ kẹt và hỏi lại sau.",
            "Không bỏ cuộc giữa block.",
          ],
          output: ["Có note độ khó của Flow 3."],
        },
        {
          id: "day-1-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — File + JSON + Exception + Logger",
          description:
            "Tự build mini persistence layer trước khi học database.",
          type: "practice",
          tasks: [
            "Tạo folder storage/logs và storage/data.",
            "Tạo file 04-file-json-logger.php.",
            "Viết saveJson(string $path, array $data): void.",
            "Viết loadJson(string $path): array.",
            "Nếu file không tồn tại thì trả mảng rỗng.",
            "Học try/catch/finally.",
            "Tạo custom exception: ValidationException extends Exception.",
            "Viết Logger class có method info(), warning(), error().",
            "Mỗi log ghi timestamp, level, message.",
            "Nếu log file > 1MB thì rotate thành app-YYYY-mm-dd-His.log.",
            "Viết readLastLogs($path, $lines = 20).",
            "Bài chính: lưu student report từ Flow 3 thành JSON và ghi log mỗi lần export.",
            "Commit: feat: implement json storage and logger.",
          ],
          output: [
            "storage/data/students-report.json được tạo.",
            "storage/logs/app.log có log.",
            "Logger class chạy được.",
          ],
        },
        {
          id: "day-1-block-9",
          time: "17:45 - 18:30",
          label: "Dinner — Burnout control",
          description: "Hard mode không có nghĩa là ngu người.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không code trong lúc ăn.",
            "Nếu đau đầu thì đi bộ 10 phút.",
          ],
          output: ["Quay lại flow tối."],
        },
        {
          id: "day-1-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Git Workflow + Self Review",
          description:
            "Tập cách làm việc như junior trong team: branch, commit, review.",
          type: "review",
          tasks: [
            "Tạo branch: git checkout -b day-1/php-core-lab.",
            "Tạo một thay đổi nhỏ trong logger.",
            "Commit theo chuẩn: refactor: improve logger output format.",
            "Tạo conflict cố ý bằng cách sửa cùng một dòng ở 2 branch.",
            "Merge và tự fix conflict.",
            "Viết README.md: cách chạy từng file, hôm nay học gì.",
            "Chạy toàn bộ file bằng terminal.",
            "Nếu đã cài composer, chạy composer init và composer require --dev phpstan/phpstan.",
            "Chạy ./vendor/bin/phpstan analyse nếu có src rõ ràng.",
            "Git log --oneline kiểm tra commit history.",
          ],
          output: [
            "README.md có hướng dẫn chạy.",
            "Có ít nhất 5 commit.",
            "Từng file chạy được bằng php file.php.",
          ],
        },
        {
          id: "day-1-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Lock kiến thức",
          description: "Không reflect thì ngày mai quên. Đây là phần bắt buộc.",
          type: "review",
          tasks: [
            "Viết 10 bullet: hôm nay học được gì.",
            "Viết 3 lỗi gặp phải và cách fix.",
            "Tự trả lời bằng lời: PHP nhận input thế nào?",
            "Tự trả lời: tại sao output phải htmlspecialchars?",
            "Tự trả lời: vì sao === an toàn hơn ==?",
            "Tự trả lời: array_map/filter/reduce khác foreach ở tư duy nào?",
            "Commit cuối: docs: add day 1 reflection.",
          ],
          output: [
            "Có file notes/day-1.md hoặc ghi trực tiếp vào app note.",
            "Có benchmark tự chấm.",
          ],
        },
      ],

      checklist: [
        "Chạy được PHP CLI trên Pop!_OS.",
        "Có folder ~/Code/php-core-lab.",
        "Có slugify/normalizeName chạy đúng.",
        "Có validation function cho register input.",
        "Có student report dùng array functions.",
        "Có JSON storage và Logger class.",
        "Có README và ít nhất 5 commit.",
        "Có reflection cuối ngày.",
      ],

      benchmark:
        "Cuối ngày phải viết được PHP script xử lý input, array, JSON, log file và tự chạy bằng terminal. Không cần tra syntax cơ bản. Git history nhìn như người học nghiêm túc.",
    },

    {
      id: "day-2",
      phaseId: "week-1",
      day: "Day 02",
      title: "OOP Shark Mode — Nghĩ như Laravel trước khi học Laravel",
      status: "not-started",
      difficulty: "Very Hard",
      duration: "08:00 - 20:30",

      hook: "OOP là ngày quyết định. Laravel là một framework OOP khổng lồ. Nếu mày học Laravel khi chưa hiểu class, interface, service, dependency thì sẽ chỉ biết gõ artisan mà không hiểu chuyện gì đang chạy.",

      perspectives: [
        {
          label: "Mapping",
          text: "Reverse engineer Laravel: Controller là class, Model là class, Request là class, Service là class, Middleware là class, Policy là class. Ngày 2 học OOP để đọc Laravel source không bị ngợp.",
        },
        {
          label: "Ultralearning",
          text: "Mỗi khái niệm OOP phải đi cùng một class thật. Không được chỉ ghi định nghĩa abstract/interface/SOLID.",
        },
        {
          label: "Hard Mode",
          text: "Tất cả property mặc định private/protected, không public bừa. Mỗi lần thêm behavior phải tự hỏi: class này có đang ôm quá nhiều trách nhiệm không?",
        },
      ],

      methods: {
        mapping:
          "Map Laravel architecture về OOP: Controller → Service → Repository → Model. Interface là contract. Container inject dependency.",
        ultralearning:
          "Build 3 mini systems: BankAccount, Notification, Payment. Mỗi system ép dùng một nhóm khái niệm.",
        goldilocks:
          "Nếu hiểu class/object thì tăng lên abstract/interface. Nếu interface quá khó thì quay lại bằng payment example.",
        hardMode:
          "Không viết procedural trong ngày 2. Mọi bài đều phải có class, method, type hint và commit.",
      },

      goal: [
        "Hiểu class, object, constructor, $this, property, method.",
        "Biết đóng gói bằng private/protected/public.",
        "Biết inheritance, abstract class, interface, trait.",
        "Hiểu SOLID bằng refactor code thật.",
        "Viết được Service + Repository đơn giản.",
        "Chuẩn bị tư duy cho Laravel Service Container và dependency injection.",
      ],

      timeBlocks: [
        {
          id: "day-2-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Laravel là OOP như thế nào?",
          description:
            "Trước khi học class, phải biết class dùng ở đâu trong Laravel.",
          type: "setup",
          tasks: [
            "Mở note Day 2 — OOP Shark Mode.",
            "Vẽ Laravel flow: Route → Controller → FormRequest → Service → Model → Resource.",
            "Gạch chân tất cả thứ là class.",
            "Viết câu trả lời: nếu Controller ôm hết logic thì hại gì?",
            "Mở code ngày 1 và chỉ ra chỗ nào nên biến thành class.",
          ],
          output: [
            "Có sơ đồ Laravel OOP flow.",
            "Có danh sách code ngày 1 cần refactor sang class.",
          ],
        },
        {
          id: "day-2-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Class + Encapsulation",
          description: "Xây nền class/object thật chắc.",
          type: "deep",
          tasks: [
            "Tạo folder ~/Code/php-oop-lab.",
            "git init.",
            "Tạo src/BankAccount.php.",
            "Học class, object, property, method, constructor __construct.",
            "Dùng constructor property promotion của PHP hiện đại.",
            "Tất cả state quan trọng để private.",
            "Viết deposit(int $amount), withdraw(int $amount).",
            "Không cho deposit/withdraw số âm.",
            "Không cho withdraw vượt balance.",
            "Tạo Transaction class lưu type, amount, createdAt.",
            "BankAccount lưu transaction history.",
            "Thêm getBalance(), getTransactions().",
            "Tạo __toString() in account summary.",
            "Commit: feat: implement bank account encapsulation lab.",
          ],
          output: [
            "BankAccount chạy được.",
            "Balance không thể sửa trực tiếp từ ngoài.",
            "Có transaction history.",
          ],
        },
        {
          id: "day-2-block-3",
          time: "10:30 - 10:45",
          label: "Break — OOP mental reset",
          description: "Nghỉ để không nhầm class/object.",
          type: "break",
          tasks: [
            "Đứng dậy.",
            "Tự nói bằng lời: class là gì, object là gì.",
            "Không tiếp tục nếu còn lẫn class với object.",
          ],
          output: ["Trả lời được class/object bằng ví dụ BankAccount."],
        },
        {
          id: "day-2-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Inheritance + Abstract + Interface",
          description:
            "Học contract và polymorphism bằng notification/payment.",
          type: "deep",
          tasks: [
            "Tạo contracts/Notifiable.php interface.",
            "Interface có method send(string $to, string $message): bool.",
            "Tạo EmailNotification, SmsNotification, SlackNotification.",
            "Viết NotificationService nhận Notifiable qua constructor.",
            "Gửi cùng message qua nhiều channel bằng foreach.",
            "Không dùng if channel == email trong service.",
            "Tạo abstract class PaymentGateway có method validateAmount().",
            "Tạo MomoGateway, VnpayGateway, BankTransferGateway extends PaymentGateway.",
            "Mỗi gateway implement pay(int $amount): PaymentResult.",
            "So sánh: phần nào nên để abstract class, phần nào nên để interface.",
            "Hard mode: thêm TelegramNotification mà không sửa NotificationService.",
            "Commit: feat: implement notification and payment polymorphism.",
          ],
          output: [
            "NotificationService không phụ thuộc class cụ thể.",
            "Thêm channel mới không sửa service.",
            "Giải thích được abstract vs interface.",
          ],
        },
        {
          id: "day-2-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không xem tutorial lúc ăn.",
            "Nếu còn mơ hồ interface, ghi vào note để 13:30 xử tiếp.",
          ],
          output: ["Quay lại đúng giờ."],
        },
        {
          id: "day-2-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — SOLID Refactor thật",
          description:
            "Không học SOLID bằng định nghĩa. Học bằng code xấu rồi refactor.",
          type: "deep",
          tasks: [
            "Tạo class BadOrderProcessor ôm: validate order, calculate total, save file, send email.",
            "Chạy được phiên bản code xấu trước.",
            "S — Tách OrderValidator, OrderCalculator, OrderRepository, Mailer.",
            "O — Thêm discount mới bằng class mới, không sửa calculator cũ.",
            "L — Tạo ví dụ Rectangle/Square để hiểu LSP bị phá thế nào.",
            "I — Tách PaymentInterface và RefundableInterface, không ép mọi gateway refund.",
            "D — OrderService phụ thuộc PaymentGatewayInterface, không new MomoGateway bên trong.",
            "Sau mỗi chữ SOLID, commit một lần.",
            "Viết note: SOLID giúp Laravel project không nát ở đâu.",
          ],
          output: [
            "BadOrderProcessor được refactor thành nhiều class nhỏ.",
            "Có 5 commit tương ứng S/O/L/I/D.",
          ],
        },
        {
          id: "day-2-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Kiểm tra độ phê.",
          type: "break",
          tasks: [
            "Chấm mức khó SOLID từ 1–10.",
            "Nếu không giải thích được D, quay lại PaymentGatewayInterface.",
            "Nếu dễ quá, thêm CashOnDeliveryGateway.",
          ],
          output: ["Có note về điểm yếu SOLID."],
        },
        {
          id: "day-2-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Namespace + Composer + PHPStan",
          description: "Đưa lab về cấu trúc project chuyên nghiệp.",
          type: "practice",
          tasks: [
            "composer init.",
            "Cấu hình autoload PSR-4: App\\\\ trỏ vào src/.",
            "Tạo folders: src/Contracts, src/Services, src/Repositories, src/Models.",
            "Chạy composer dump-autoload.",
            "Không require file thủ công nữa.",
            "Cài Carbon: composer require nesbot/carbon.",
            "Dùng Carbon cho Transaction createdAt.",
            "Cài PHPStan: composer require --dev phpstan/phpstan.",
            "Chạy ./vendor/bin/phpstan analyse src.",
            "Fix type error, thêm return type, thêm property type.",
            "Commit: chore: setup composer psr4 and phpstan.",
          ],
          output: [
            "Project autoload bằng Composer.",
            "Không còn require thủ công.",
            "PHPStan chạy được.",
          ],
        },
        {
          id: "day-2-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không vừa ăn vừa debug.",
            "Chuẩn bị tinh thần cho service/repository.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-2-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Repository + Service Pattern",
          description: "Đây là bridge trực tiếp sang Laravel architecture.",
          type: "review",
          tasks: [
            "Tạo User model: id, name, email.",
            "Tạo UserRepositoryInterface: all(), find(), create(), update(), delete().",
            "Tạo JsonUserRepository lưu vào storage/users.json.",
            "Tạo ArrayUserRepository để test nhanh.",
            "Tạo UserService nhận UserRepositoryInterface qua constructor.",
            "UserService xử lý validate email unique trước khi create.",
            "Đổi repository implementation mà không sửa UserService.",
            "Viết mini script demo tạo user, list user.",
            "Viết note: Laravel sau này sẽ bind interface vào implementation trong ServiceProvider.",
            "Commit: feat: implement repository service pattern.",
          ],
          output: [
            "UserService chạy với JsonUserRepository.",
            "Có thể swap sang ArrayUserRepository.",
            "Hiểu dependency injection bằng tay.",
          ],
        },
        {
          id: "day-2-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Interview Lock",
          description: "Khóa câu trả lời phỏng vấn.",
          type: "review",
          tasks: [
            "Trả lời bằng lời: class khác object thế nào?",
            "Trả lời: private/protected/public dùng khi nào?",
            "Trả lời: abstract class khác interface thế nào?",
            "Trả lời: Dependency Inversion là gì?",
            "Trả lời: Repository và Service khác nhau thế nào?",
            "Ghi 3 câu vẫn chưa chắc vào note.",
            "Commit: docs: add day 2 oop reflection.",
          ],
          output: [
            "Có note Day 2.",
            "Trả lời được 5 câu OOP/Laravel foundation.",
          ],
        },
      ],

      checklist: [
        "Code được BankAccount có encapsulation.",
        "Code được NotificationService dùng interface.",
        "Code được PaymentGateway bằng abstract/interface.",
        "Refactor được BadOrderProcessor theo SOLID.",
        "Setup được Composer PSR-4.",
        "Chạy được PHPStan.",
        "Code được Repository + Service Pattern.",
        "Có reflection trả lời phỏng vấn OOP.",
      ],

      benchmark:
        "Cuối ngày phải nhìn Laravel Controller/Service/Model không còn lạ. Code OOP có namespace, Composer autoload, interface, service, repository và PHPStan chạy được.",
    },

    {
      id: "day-3",
      phaseId: "week-1",
      day: "Day 03",
      title: "Database Shark Mode — SQL, Docker, PDO, Index, Transaction",
      status: "not-started",
      difficulty: "Very Hard",
      duration: "08:00 - 20:30",

      hook: "Database là nơi fresher hay chết nhất. Code Laravel CRUD thì dễ, nhưng query chậm, sai relationship, sai transaction, mất dữ liệu thì không ai cứu. Hôm nay học database như người sắp cầm production.",

      perspectives: [
        {
          label: "Mapping",
          text: "Junior Laravel nhận task thường phải tạo migration, relationship, query list, filter, paginate, update nhiều bảng trong transaction. Ngày 3 học đúng những thứ đó bằng SQL/PDO trước khi giao cho Eloquent làm hộ.",
        },
        {
          label: "Ultralearning",
          text: "Không chỉ viết SELECT. Phải đo query, đọc EXPLAIN, tạo index, viết transaction, demo N+1 và tự fix.",
        },
        {
          label: "Hard Mode",
          text: "Không cài MySQL trực tiếp vào máy. Dùng Docker Compose để giống môi trường team. Không query bừa trong GUI mà không hiểu câu SQL.",
        },
      ],

      methods: {
        mapping:
          "Map task Laravel database: migration → schema → relationship → query → index → transaction → repository.",
        ultralearning:
          "Tự seed data, tự tạo query chậm, tự tối ưu, tự đo lại. Không chỉ đọc lý thuyết index.",
        goldilocks:
          "Nếu JOIN còn yếu thì tập 2 bảng trước. Nếu ổn thì tăng lên 4 bảng + aggregate + subquery.",
        hardMode:
          "Mọi DB chạy qua Docker. Mọi thao tác quan trọng có SQL script. Mọi query khó phải note.",
      },

      goal: [
        "Chạy MySQL 8 bằng Docker Compose trên Pop!_OS.",
        "Thiết kế schema có FK, constraints, index.",
        "Viết JOIN, GROUP BY, HAVING, subquery, CTE cơ bản.",
        "Dùng EXPLAIN để đọc query plan.",
        "Kết nối PHP với DB bằng PDO và prepared statement.",
        "Viết transaction đúng.",
        "Demo và fix N+1 problem.",
      ],

      timeBlocks: [
        {
          id: "day-3-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — DB task của Junior Laravel",
          description: "Hiểu vì sao học SQL trước khi học Eloquent sâu.",
          type: "setup",
          tasks: [
            "Viết 5 task Laravel liên quan DB: tạo migration, list có filter, search, update order status, dashboard stats.",
            "Map từng task sang SQL cần biết: CREATE TABLE, JOIN, WHERE, GROUP BY, INDEX, TRANSACTION.",
            "Vẽ schema mini e-commerce: users, products, orders, order_items, payments.",
            "Ghi câu hỏi: nếu tạo order thành công nhưng trừ stock fail thì chuyện gì xảy ra?",
          ],
          output: ["Có sơ đồ DB task mapping.", "Có ERD nháp mini e-commerce."],
        },
        {
          id: "day-3-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Docker MySQL + Schema Design",
          description: "Chạy DB bằng Docker và thiết kế schema có trách nhiệm.",
          type: "deep",
          tasks: [
            "Tạo folder: mkdir -p ~/Code/db-shark-lab && cd ~/Code/db-shark-lab.",
            "Tạo docker-compose.yml với mysql:8.0 và adminer.",
            "MYSQL_ROOT_PASSWORD=root, MYSQL_DATABASE=junior_laravel.",
            "Chạy docker compose up -d.",
            "Mở Adminer ở localhost:8081.",
            "Học image, container, volume, port mapping bằng chính compose vừa viết.",
            "Tạo file schema.sql.",
            "Thiết kế bảng: users, categories, products, orders, order_items, payments, inventory_logs.",
            "Dùng BIGINT cho id nếu muốn gần production.",
            "Dùng DECIMAL(12,2) cho money, không dùng FLOAT.",
            "Dùng VARCHAR cho email/name, TEXT cho description dài.",
            "Thêm NOT NULL, UNIQUE, DEFAULT, FK.",
            "Thêm index cho email, product status, order user_id/status.",
            "Commit: chore: setup mysql docker and schema.",
          ],
          output: [
            "Docker MySQL chạy được.",
            "schema.sql có bảng và index.",
            "Adminer truy cập được.",
          ],
        },
        {
          id: "day-3-block-3",
          time: "10:30 - 10:45",
          label: "Break — DB reset",
          description: "Nghỉ ngắn.",
          type: "break",
          tasks: [
            "Đứng dậy.",
            "Tự trả lời: volume Docker dùng để làm gì?",
            "Không xóa container khi chưa hiểu volume.",
          ],
          output: ["Hiểu container mất nhưng volume giữ data."],
        },
        {
          id: "day-3-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — JOIN + Aggregate + Report SQL",
          description: "Query như làm dashboard/report thật.",
          type: "deep",
          tasks: [
            "Tạo file queries.sql.",
            "INSERT data mẫu cho users, categories, products, orders, order_items.",
            "INNER JOIN orders với users.",
            "LEFT JOIN products với order_items để thấy sản phẩm chưa bán.",
            "JOIN 4 bảng: orders + users + order_items + products.",
            "GROUP BY doanh thu theo ngày.",
            "GROUP BY doanh thu theo product.",
            "HAVING lọc sản phẩm có doanh thu > 1 triệu.",
            "Subquery: tìm user có tổng chi tiêu lớn hơn average.",
            "CTE WITH revenue_by_user để query dễ đọc.",
            "Window function ROW_NUMBER lấy top 3 sản phẩm theo từng category.",
            "Commit: feat: add sql join and report queries.",
          ],
          output: [
            "queries.sql có ít nhất 10 query.",
            "Có query report doanh thu.",
            "Có query top products.",
          ],
        },
        {
          id: "day-3-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không học kiểu mở SQL trên điện thoại.",
            "Nghỉ để chiều xử index.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-3-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Index + EXPLAIN + Slow Query Hunt",
          description:
            "Đây là phần phân biệt fresher gõ CRUD và junior biết nghĩ.",
          type: "deep",
          tasks: [
            "Seed thêm nhiều product/order giả bằng PHP hoặc SQL script.",
            "Viết query tìm product theo status + category_id + price range.",
            "Chạy EXPLAIN trước khi thêm index.",
            "Ghi lại type, rows, Extra.",
            "Tạo composite index phù hợp.",
            "Chạy EXPLAIN lại và so sánh.",
            "Học vì sao index (category_id, status) khác (status, category_id).",
            "Tạo query dùng LIKE '%abc%' và quan sát index không hiệu quả.",
            "Note khi nào cần FULLTEXT thay vì LIKE.",
            "Viết file index-notes.md: query, explain trước, explain sau, lý do chọn index.",
            "Commit: feat: optimize sql queries with indexes.",
          ],
          output: [
            "Có ít nhất 3 query được EXPLAIN trước/sau.",
            "Có index-notes.md.",
            "Giải thích được composite index order.",
          ],
        },
        {
          id: "day-3-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Tự đo độ khó index.",
          type: "break",
          tasks: [
            "Chấm mức khó EXPLAIN từ 1–10.",
            "Nếu >9, chỉ cần hiểu rows giảm là gì.",
            "Nếu <6, thêm một query report có date range.",
          ],
          output: ["Có note độ khó index."],
        },
        {
          id: "day-3-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — PDO + Prepared Statement + Transaction",
          description: "Kết nối PHP với database như backend thật.",
          type: "practice",
          tasks: [
            "Tạo project PHP: ~/Code/pdo-repository-lab.",
            "composer init và PSR-4 nếu chưa có.",
            "Tạo Database class nhận DSN, user, password từ config.",
            "Bật PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION.",
            "Bật charset utf8mb4.",
            "Viết query(), fetchAll(), fetchOne(), execute().",
            "Demo SQL injection bằng string concat.",
            "Fix bằng prepared statement.",
            "Viết ProductRepository: all(), find(), create(), update(), delete().",
            "Viết OrderService.placeOrder() dùng transaction.",
            "Transaction gồm: tạo order, tạo order_items, trừ stock, ghi inventory_logs.",
            "Nếu stock không đủ, rollback toàn bộ.",
            "Commit: feat: implement pdo repository and order transaction.",
          ],
          output: [
            "Database class chạy được.",
            "ProductRepository chạy được.",
            "OrderService transaction rollback đúng khi lỗi.",
          ],
        },
        {
          id: "day-3-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không debug transaction trong lúc ăn.",
            "Chuẩn bị xử N+1 buổi tối.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-3-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — N+1 Problem + Migration Mini",
          description: "Hiểu lỗi mà Laravel dev gặp liên tục với Eloquent.",
          type: "review",
          tasks: [
            "Demo N+1 bằng PDO: load 10 orders, mỗi order query user riêng.",
            "Đếm tổng query: 1 + N.",
            "Fix bằng JOIN hoặc load users theo WHERE IN.",
            "Ghi note: trong Laravel lỗi này tương đương lazy loading relationship.",
            "Tạo bảng migrations.",
            "Viết migration class có up() và down() đơn giản.",
            "Tạo script migrate.php chạy file migration chưa chạy.",
            "Tạo script rollback.php rollback migration cuối.",
            "Commit: feat: demonstrate n plus one and mini migration system.",
          ],
          output: [
            "Demo được N+1.",
            "Fix được N+1.",
            "Có mini migration system.",
          ],
        },
        {
          id: "day-3-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — DB Interview Lock",
          description: "Khóa câu trả lời phỏng vấn DB.",
          type: "review",
          tasks: [
            "Trả lời: INNER JOIN khác LEFT JOIN thế nào?",
            "Trả lời: index giúp gì và khi nào không dùng được?",
            "Trả lời: transaction để làm gì?",
            "Trả lời: N+1 là gì, fix sao?",
            "Trả lời: tại sao tiền không dùng FLOAT?",
            "Viết 3 lỗi DB có thể làm mất dữ liệu.",
            "Commit: docs: add day 3 database reflection.",
          ],
          output: [
            "Có note Day 3.",
            "Trả lời được 5 câu DB cơ bản của junior.",
          ],
        },
      ],

      checklist: [
        "Chạy được MySQL bằng Docker Compose.",
        "Thiết kế được schema có FK/index/constraints.",
        "Viết được JOIN nhiều bảng.",
        "Viết được report SQL bằng GROUP BY/HAVING.",
        "Dùng EXPLAIN và thêm index đúng chỗ.",
        "Kết nối PDO bằng prepared statement.",
        "Viết được transaction placeOrder.",
        "Demo và fix được N+1.",
        "Có mini migration system.",
      ],

      benchmark:
        "Cuối ngày phải thiết kế DB được, query được, tối ưu được query cơ bản, viết PDO Repository và Transaction. Khi học Laravel migration/Eloquent sau này sẽ hiểu bản chất chứ không gõ mù.",
    },
    {
      id: "day-4",
      phaseId: "week-1",
      day: "Day 04",
      title: "Security + REST API + Auth Production-grade",
      status: "not-started",
      difficulty: "Very Hard",
      duration: "08:00 - 20:30",

      hook: "Security không phải phần học thêm. Một backend junior mà không hiểu SQL Injection, XSS, CSRF, password hashing, token, status code thì đi làm rất dễ tạo bug chết người. Hôm nay mày tự tấn công code của mình rồi tự vá.",

      perspectives: [
        {
          label: "Mapping",
          text: "Reverse engineer một Laravel API thật: request vào → middleware auth/role → validation → controller → service → response JSON. Mỗi bước đều có rủi ro bảo mật: input bẩn, SQL injection, token sai, role sai, file upload độc.",
        },
        {
          label: "Ultralearning",
          text: "Không chỉ đọc OWASP. Phải tự tạo lỗ hổng, tự exploit bằng input bẩn, rồi tự fix. Cái gì không tấn công được bằng tay thì chưa hiểu sâu.",
        },
        {
          label: "Hard Mode",
          text: "Không dùng package auth sẵn trong ngày này. Tự build mini auth/token/rate limit/validator trước để hiểu bản chất. Sau này dùng Laravel Sanctum sẽ biết nó đang giải quyết gì.",
        },
      ],

      methods: {
        mapping:
          "Map một API production: validate → sanitize → authorize → business logic → response → log. Mỗi tầng phải biết trách nhiệm.",
        ultralearning:
          "Tự viết exploit nhỏ: SQL Injection, XSS, CSRF fake form, brute force login. Sau đó fix và verify lại.",
        goldilocks:
          "Nếu security quá khó, tập trung 3 thứ sống còn: prepared statement, htmlspecialchars, password_hash. Nếu ổn thì thêm CSRF/rate limit/webhook HMAC.",
        hardMode:
          "Không merge code nếu login còn bypass được, API trả status code sai, hoặc password còn lưu plain text.",
      },

      goal: [
        "Hiểu và demo được SQL Injection, XSS, CSRF ở mức thực hành.",
        "Biết hash password bằng password_hash/password_verify.",
        "Tự build auth flow: register, login, logout, me.",
        "Thiết kế REST API đúng resource, HTTP verb, status code.",
        "Viết response JSON format nhất quán.",
        "Viết validator cơ bản và error response 422.",
        "Hiểu file upload an toàn và webhook HMAC.",
      ],

      timeBlocks: [
        {
          id: "day-4-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — API production bị tấn công ở đâu?",
          description:
            "Bóc một request API ra từng lớp để biết cần bảo vệ chỗ nào.",
          type: "setup",
          tasks: [
            "Vẽ flow: client → route → middleware → validator → controller → service → repository → database → response.",
            "Đánh dấu rủi ro từng lớp: input bẩn, role sai, query injection, file độc, token giả.",
            "Viết 5 endpoint thực tế: register, login, product list, create product, upload image.",
            "Với mỗi endpoint, ghi rõ: cần auth không, cần role gì, validate gì, status code nào.",
            "Tạo folder ~/Code/php-security-api-lab.",
            "Commit: chore: init php security api lab.",
          ],
          output: [
            "Có sơ đồ API production flow.",
            "Có bảng endpoint + auth + validation + status code.",
          ],
        },
        {
          id: "day-4-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Attack trước, Fix sau",
          description:
            "Tự tạo lỗ hổng rồi vá. Đây là cách nhớ security nhanh nhất.",
          type: "deep",
          tasks: [
            "Tạo form login cố ý dùng SQL string concat.",
            "Thử SQL Injection: email = ' OR '1'='1 và xem có bypass được không.",
            "Fix bằng prepared statement PDO.",
            "Tạo comment form cố ý echo raw input.",
            "Inject <script>alert('xss')</script> để thấy Stored/Reflected XSS.",
            "Fix bằng htmlspecialchars($value, ENT_QUOTES, 'UTF-8').",
            "Tạo form POST giả từ file HTML khác để hiểu CSRF.",
            "Tạo CSRF token: random_bytes, lưu session, verify khi submit.",
            "Học password_hash với PASSWORD_BCRYPT hoặc PASSWORD_DEFAULT.",
            "Học password_verify.",
            "Tạo session_regenerate_id(true) sau login.",
            "Ghi security-notes.md: lỗ hổng → cách exploit → cách fix.",
            "Commit: feat: demonstrate and fix sql injection xss csrf.",
          ],
          output: [
            "Có exploit SQL Injection trước và fix sau.",
            "Có exploit XSS trước và fix sau.",
            "Có CSRF token hoạt động.",
            "Có password_hash/password_verify.",
          ],
        },
        {
          id: "day-4-block-3",
          time: "10:30 - 10:45",
          label: "Break — Security checkpoint",
          description: "Nghỉ nhưng phải tự kiểm tra 3 khái niệm chính.",
          type: "break",
          tasks: [
            "Tự nói bằng lời: SQL Injection là gì?",
            "Tự nói: XSS khác CSRF thế nào?",
            "Tự nói: vì sao MD5/SHA1 không dùng cho password?",
          ],
          output: ["Trả lời được 3 câu security không nhìn note."],
        },
        {
          id: "day-4-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Auth System Production Mindset",
          description: "Build auth đủ sâu để sau này hiểu Laravel Sanctum/JWT.",
          type: "deep",
          tasks: [
            "Tạo users table: id, name, email unique, password, role, created_at.",
            "Viết RegisterService: validate name/email/password/confirm_password.",
            "Rule password: >= 8, có chữ, có số.",
            "Hash password trước khi lưu.",
            "Viết LoginService: tìm user theo email, verify password.",
            "Nếu login sai quá 5 lần thì lock 15 phút bằng bảng login_attempts hoặc file JSON.",
            "Tạo access token random: bin2hex(random_bytes(32)).",
            "Hash token trước khi lưu DB hoặc storage.",
            "Tạo AuthMiddleware đọc Authorization: Bearer token.",
            "Tạo endpoint: POST /register, POST /login, GET /me, POST /logout.",
            "Tạo RoleMiddleware nhận role admin/manager/user.",
            "Test bằng Postman hoặc curl.",
            "Commit: feat: implement manual auth token flow.",
          ],
          output: [
            "Register/login/me/logout chạy được.",
            "Password không lưu plain text.",
            "API private không có token thì bị chặn.",
            "Role middleware hoạt động.",
          ],
        },
        {
          id: "day-4-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa để chiều làm REST API chuẩn.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không học tiếp trên điện thoại.",
            "Quay lại với đầu tỉnh để thiết kế API.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-4-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — REST API chuẩn Junior",
          description:
            "Không viết API kiểu /getProducts nữa. Viết theo resource.",
          type: "deep",
          tasks: [
            "Thiết kế resource routes: /api/v1/products.",
            "Dùng đúng HTTP verbs: GET list/show, POST create, PUT/PATCH update, DELETE delete.",
            "Chuẩn hóa JSON response: { success, message, data, errors, meta }.",
            "Status code bắt buộc: 200, 201, 204, 400, 401, 403, 404, 409, 422, 500.",
            "Viết ApiResponse helper class.",
            "Viết ProductController thủ công: index, store, show, update, destroy.",
            "Thêm pagination: page, per_page, total, total_pages.",
            "Thêm filter: status, category_id, min_price, max_price.",
            "Thêm sort: price_asc, price_desc, newest.",
            "Nếu validation fail trả 422, không trả 200.",
            "Nếu không tìm thấy resource trả 404.",
            "Commit: feat: implement rest product api with proper status codes.",
          ],
          output: [
            "Product API chạy đủ CRUD.",
            "Response format nhất quán.",
            "Status code đúng.",
            "Có pagination/filter/sort.",
          ],
        },
        {
          id: "day-4-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Kiểm tra độ khó API.",
          type: "break",
          tasks: [
            "Nếu còn trả 200 cho mọi lỗi, quay lại status code.",
            "Nếu đã ổn, thêm search keyword.",
            "Ghi endpoint nào khó nhất.",
          ],
          output: ["Có note về endpoint khó nhất."],
        },
        {
          id: "day-4-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Validator + Upload + Webhook HMAC",
          description: "Ba thứ API thực tế hay gặp: validate, upload, webhook.",
          type: "practice",
          tasks: [
            "Tạo Validator class hỗ trợ rules: required, email, min, max, numeric, confirmed.",
            "Error message trả theo field.",
            "Product store/update dùng Validator.",
            "Tạo upload endpoint cho product image.",
            "Validate file MIME, không tin extension.",
            "Giới hạn size file.",
            "Rename file bằng bin2hex(random_bytes(16)).",
            "Lưu file vào storage/uploads, không để tên gốc.",
            "Tạo webhook endpoint /api/v1/webhooks/payment.",
            "Tạo secret key trong .env hoặc config.",
            "Verify HMAC signature bằng hash_hmac và hash_equals.",
            "Chặn webhook duplicate bằng webhook_id.",
            "Commit: feat: add validator upload and hmac webhook.",
          ],
          output: [
            "Validator class chạy được.",
            "Upload image có validate MIME/size.",
            "Webhook verify HMAC và chống duplicate.",
          ],
        },
        {
          id: "day-4-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không vừa ăn vừa debug webhook.",
            "Chuẩn bị review/test.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-4-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Postman/curl Test + Security Audit",
          description: "Không test bằng mắt. Test như người chuẩn bị merge PR.",
          type: "review",
          tasks: [
            "Tạo Postman collection hoặc file curl-commands.md.",
            "Test register success.",
            "Test register duplicate email → 409 hoặc 422 tùy thiết kế.",
            "Test login wrong password → 401.",
            "Test GET /me không token → 401.",
            "Test user role sai → 403.",
            "Test product validation fail → 422.",
            "Test product not found → 404.",
            "Test upload file sai MIME → 422.",
            "Test webhook sai signature → 401 hoặc 403.",
            "Security audit: tìm 5 chỗ có thể bị input bẩn.",
            "Commit: test: add api manual test collection and security audit.",
          ],
          output: [
            "Có checklist test API.",
            "Có security audit note.",
            "Các lỗi chính trả đúng status code.",
          ],
        },
        {
          id: "day-4-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Security Interview Lock",
          description: "Khóa kiến thức security/API để đi phỏng vấn.",
          type: "review",
          tasks: [
            "Trả lời: Authentication khác Authorization thế nào?",
            "Trả lời: 401 khác 403 thế nào?",
            "Trả lời: SQL Injection fix bằng gì?",
            "Trả lời: XSS fix bằng gì?",
            "Trả lời: CSRF là gì?",
            "Trả lời: HMAC webhook để làm gì?",
            "Viết 3 lỗi bảo mật nguy hiểm nhất mày có thể mắc.",
            "Commit: docs: add day 4 security api reflection.",
          ],
          output: ["Có note Day 4.", "Trả lời được 6 câu security/API cơ bản."],
        },
      ],

      checklist: [
        "Demo và fix được SQL Injection.",
        "Demo và fix được XSS.",
        "Tạo được CSRF token cơ bản.",
        "Register/login/me/logout chạy được.",
        "Password được hash.",
        "Token auth middleware chạy được.",
        "REST API trả đúng status code.",
        "Validator trả lỗi 422 rõ ràng.",
        "Upload file có validate MIME/size.",
        "Webhook HMAC verify được.",
      ],

      benchmark:
        "Cuối ngày mày phải có một mini API có auth, role, validation, upload, webhook, status code đúng và hiểu các lỗ hổng security cơ bản bằng cách tự attack rồi tự fix.",
    },

    {
      id: "day-5",
      phaseId: "week-1",
      day: "Day 05",
      title: "Project Hard Mode — PHP Fullstack/App API thuần",
      status: "not-started",
      difficulty: "Boss Fight",
      duration: "08:00 - 20:30",

      hook: "Ngày 5 là ngày không có tutorial. Đây là ngày kiểm tra mày có thật sự hiểu 4 ngày trước không. Công ty không đưa tutorial, công ty đưa yêu cầu mơ hồ. Hôm nay mày tự biến yêu cầu thành DB, API, service, test, README.",

      perspectives: [
        {
          label: "Mapping",
          text: "Làm ngược từ tiêu chuẩn junior: nhận requirement → phân tích entity → ERD → endpoint → service → repository → validation → test → README. Không code trước khi thiết kế.",
        },
        {
          label: "Ultralearning",
          text: "Build project trong một ngày. Không tối ưu UI. Tập trung architecture, data flow, transaction, auth, test, Git history.",
        },
        {
          label: "Hard Mode",
          text: "Không copy project mẫu. Không để controller ôm hết. Không commit một cục cuối ngày. Không có README thì project coi như chưa xong.",
        },
      ],

      methods: {
        mapping:
          "Chọn project rồi lập bảng: feature → API → DB tables → service methods → validation → tests.",
        ultralearning:
          "Mỗi 2 giờ phải ship một phần chạy được. Không được kẹt 2 giờ ở naming/class đẹp.",
        goldilocks:
          "Nếu scope quá lớn, cắt còn 3 feature chính. Nếu quá dễ, thêm transaction/report/filter.",
        hardMode:
          "Push lên GitHub/GitLab, README rõ, Docker chạy được. Đây là project để sau này kể trong phỏng vấn.",
      },

      goal: [
        "Tự thiết kế và build một project PHP thuần có architecture rõ.",
        "Áp dụng Controller → Service → Repository.",
        "Có auth hoặc ít nhất token middleware.",
        "Có CRUD chính, validation, pagination/filter.",
        "Có transaction hoặc report SQL.",
        "Có README, Git history, test/manual test.",
      ],

      timeBlocks: [
        {
          id: "day-5-block-1",
          time: "08:00 - 09:00",
          label: "Design — Không code khi chưa có bản đồ",
          description: "Chọn project và thiết kế như đang nhận task thật.",
          type: "setup",
          tasks: [
            "Chọn 1 trong 2 project: Task Management API hoặc Expense Tracker API.",
            "Nếu chọn Task: users, projects, tasks, comments, activity_logs.",
            "Nếu chọn Expense: users, wallets, categories, transactions, budgets, reports.",
            "Viết problem statement 5 dòng.",
            "Vẽ ERD.",
            "Viết danh sách API endpoints với method/status/auth.",
            "Viết Service methods cần có.",
            "Viết Repository methods cần có.",
            "Viết validation rules.",
            "Tạo repo mới: ~/Code/php-hardmode-project.",
            "Commit: docs: add project design and api plan.",
          ],
          output: ["Có ERD.", "Có API plan.", "Có architecture plan."],
        },
        {
          id: "day-5-block-2",
          time: "09:00 - 11:00",
          label: "Flow 1 — Foundation + Database + Router",
          description: "Dựng khung chạy được trước.",
          type: "deep",
          tasks: [
            "Tạo cấu trúc: public, src, routes, storage, database, tests.",
            "Composer init + PSR-4 App\\\\.",
            "Tạo Docker Compose nếu project dùng MySQL.",
            "Tạo schema.sql hoặc migration mini.",
            "Tạo Database class PDO.",
            "Tạo Router class parse method + URI.",
            "Tạo ApiResponse helper.",
            "Tạo middleware pipeline đơn giản.",
            "Tạo health endpoint GET /api/health.",
            "Chạy bằng PHP built-in server: php -S localhost:8000 -t public.",
            "Commit: feat: setup project foundation router database.",
          ],
          output: [
            "GET /api/health trả JSON.",
            "Database kết nối được.",
            "Project có cấu trúc rõ.",
          ],
        },
        {
          id: "day-5-block-3",
          time: "11:00 - 13:00",
          label: "Flow 2 — Auth + Core CRUD",
          description: "Build phần sống còn của app.",
          type: "deep",
          tasks: [
            "Tạo users table.",
            "Register/login bằng password_hash/password_verify.",
            "Token auth middleware.",
            "Tạo entity chính: task hoặc transaction.",
            "Tạo RepositoryInterface cho entity chính.",
            "Tạo PdoRepository implementation.",
            "Tạo Service xử lý business logic.",
            "Tạo Controller chỉ nhận request và gọi service.",
            "CRUD: index, store, show, update, destroy.",
            "Validation: required, min, status enum, numeric nếu cần.",
            "Commit: feat: implement auth and core crud.",
          ],
          output: [
            "Auth chạy được.",
            "CRUD chính chạy được.",
            "Controller không ôm business logic.",
          ],
        },
        {
          id: "day-5-block-4",
          time: "13:00 - 13:45",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không thêm feature trong lúc đói.",
            "Sau lunch chỉ làm phần có giá trị cao nhất.",
          ],
          output: ["Quay lại 13:45."],
        },
        {
          id: "day-5-block-5",
          time: "13:45 - 15:45",
          label: "Flow 3 — Advanced Business Logic",
          description: "Thêm phần phân biệt project nghiêm túc với CRUD demo.",
          type: "practice",
          tasks: [
            "Thêm pagination cho list.",
            "Thêm filter theo status/category/date.",
            "Thêm search keyword.",
            "Thêm report endpoint.",
            "Task project: report số task theo status, overdue tasks, tasks by project.",
            "Expense project: report spending by category, monthly total, top expenses.",
            "Thêm transaction nếu có nhiều bảng thay đổi cùng lúc.",
            "Thêm activity log cho hành động create/update/delete.",
            "Fix N+1 nếu có relationship.",
            "Commit: feat: add filters reports transaction activity logs.",
          ],
          output: [
            "List API có filter/search/pagination.",
            "Có report endpoint.",
            "Có business logic ngoài CRUD.",
          ],
        },
        {
          id: "day-5-block-6",
          time: "15:45 - 17:45",
          label: "Flow 4 — Test + Security + Quality Gate",
          description: "Hard mode: không có test/audit thì không coi là xong.",
          type: "review",
          tasks: [
            "Viết manual test collection bằng Postman hoặc curl file.",
            "Test auth success/fail.",
            "Test route private không token.",
            "Test validation lỗi.",
            "Test update/delete không tìm thấy id.",
            "Test report endpoint.",
            "Security audit: SQL Injection, XSS output, password hash, token random, file permission.",
            "Chạy PHPStan nếu setup được.",
            "Format code theo PSR-12 nếu có PHP-CS-Fixer.",
            "Commit: test: add manual api tests and security audit.",
          ],
          output: [
            "Có test checklist.",
            "Có security audit note.",
            "Code chạy lại toàn bộ flow.",
          ],
        },
        {
          id: "day-5-block-7",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không cố thêm feature mới.",
            "Tối chỉ polish và README.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-5-block-8",
          time: "18:30 - 20:00",
          label: "Flow 5 — README + Git + Self Review",
          description: "Biến project thành thứ người khác đọc được.",
          type: "review",
          tasks: [
            "Viết README.md có: mô tả, stack, setup, env, chạy server, API endpoints.",
            "Thêm ERD hoặc mô tả schema.",
            "Thêm demo account nếu có auth.",
            "Thêm curl examples cho 3 endpoint chính.",
            "Git log --oneline kiểm tra history.",
            "Tạo tag v1.0.0.",
            "Push lên GitHub/GitLab nếu có remote.",
            "Self review: viết 5 điểm tốt và 5 điểm cần cải thiện.",
            "Commit: docs: polish readme and project review.",
          ],
          output: [
            "README đủ cho người khác clone chạy.",
            "Có tag v1.0.0.",
            "Có self-review.",
          ],
        },
        {
          id: "day-5-block-9",
          time: "20:00 - 20:30",
          label: "Reflect — Project Interview Story",
          description: "Biến project thành câu chuyện phỏng vấn.",
          type: "review",
          tasks: [
            "Viết câu trả lời: Walk me through your project.",
            "Giải thích vì sao dùng Service Layer.",
            "Giải thích transaction/report quan trọng ở đâu.",
            "Giải thích lỗi khó nhất hôm nay và cách fix.",
            "Ghi 3 trade-off: làm gì trước, bỏ gì lại, vì sao.",
            "Commit: docs: add project interview notes.",
          ],
          output: ["Có interview story 5 phút.", "Có trade-off note."],
        },
      ],

      checklist: [
        "Có project PHP thuần chạy được.",
        "Có ERD/API plan.",
        "Có Router + ApiResponse.",
        "Có Auth hoặc token middleware.",
        "Có CRUD chính.",
        "Có Service + Repository.",
        "Có filter/search/pagination.",
        "Có report hoặc transaction.",
        "Có test checklist/security audit.",
        "Có README đủ setup.",
        "Có Git history và tag.",
      ],

      benchmark:
        "Cuối ngày phải có một project PHP thuần có kiến trúc rõ, chạy được, test được, đọc được. Đây là bằng chứng mày không chỉ học syntax mà biết tự build app.",
    },

    {
      id: "day-6",
      phaseId: "week-1",
      day: "Day 06",
      title: "Laravel Core — Route, Controller, Eloquent, Service Container",
      status: "not-started",
      difficulty: "Very Hard",
      duration: "08:00 - 20:30",

      hook: "Laravel không phải phép màu. Nó là những thứ mày đã tự build ở PHP thuần nhưng được tổ chức tốt hơn: router, container, migration, model, validation, middleware, queue. Hôm nay mày học Laravel bằng cách mapping lại toàn bộ những gì đã làm.",

      perspectives: [
        {
          label: "Mapping",
          text: "Route Laravel thay Router tự build. Migration Laravel thay migration mini. Eloquent thay PDO Repository. FormRequest thay Validator tự build. Middleware Laravel thay AuthMiddleware tự build.",
        },
        {
          label: "Ultralearning",
          text: "Mỗi khái niệm Laravel phải map ngược về thứ đã tự build. Nếu thấy magic, mở route:list, tinker, logs, hoặc source để thấy nó hoạt động.",
        },
        {
          label: "Hard Mode",
          text: "Không dùng starter kit. Không scaffold quá mức. Tự tạo API route, controller, request, resource, service, model, migration để hiểu luồng.",
        },
      ],

      methods: {
        mapping:
          "Map PHP thuần Day 1–5 sang Laravel: Router → Route, PDO → Eloquent, Validator → FormRequest, Response helper → Resource.",
        ultralearning:
          "Code Laravel project nhỏ trong ngày, không chỉ đọc docs. Mỗi artisan command phải hiểu file nào được tạo.",
        goldilocks:
          "Nếu Eloquent relationship khó, bắt đầu hasMany/belongsTo. Nếu ổn, thêm belongsToMany, withCount, whereHas.",
        hardMode:
          "Controller không ôm logic. Từ ngày đầu Laravel đã đi theo Controller → Request → Service → Model → Resource.",
      },

      goal: [
        "Tạo Laravel API project chạy trên máy Pop!_OS.",
        "Hiểu request lifecycle Laravel.",
        "Biết route, controller, model, migration, seeder, factory.",
        "Biết Eloquent relationship, query scope, eager loading.",
        "Biết Service Container và dependency injection cơ bản.",
        "Biết FormRequest, API Resource, Middleware.",
      ],

      timeBlocks: [
        {
          id: "day-6-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Laravel thay gì trong PHP thuần?",
          description: "Bắt đầu bằng so sánh project Day 5 với Laravel.",
          type: "setup",
          tasks: [
            "Mở project PHP thuần Day 5.",
            "Liệt kê các phần tự build: Router, Database, Validator, Middleware, Repository, Response.",
            "Tạo bảng mapping Laravel tương ứng.",
            "Ghi câu hỏi: Laravel Service Container giải quyết điều gì?",
            "Chuẩn bị folder: ~/Code/laravel-api-junior.",
          ],
          output: [
            "Có bảng mapping PHP thuần → Laravel.",
            "Có câu hỏi học Laravel rõ ràng.",
          ],
        },
        {
          id: "day-6-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Create Laravel Project + Request Lifecycle",
          description: "Tạo project và hiểu request chạy qua đâu.",
          type: "deep",
          tasks: [
            "cd ~/Code.",
            "composer create-project laravel/laravel laravel-api-junior.",
            "cd laravel-api-junior.",
            "php artisan about.",
            "php artisan serve.",
            "Tạo route GET /api/health trả JSON.",
            "Chạy php artisan route:list.",
            "Đọc cấu trúc folders: app, routes, database, config, storage.",
            "Hiểu flow: public/index.php → bootstrap → middleware → route → controller → response.",
            "Tạo HealthController.",
            "Commit: feat: create laravel api project and health route.",
          ],
          output: [
            "Laravel chạy được.",
            "GET /api/health trả JSON.",
            "Hiểu route:list.",
          ],
        },
        {
          id: "day-6-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ ngắn.",
          type: "break",
          tasks: [
            "Uống nước.",
            "Tự nói: request lifecycle Laravel đi qua đâu?",
          ],
          output: ["Trả lời được lifecycle ngắn gọn."],
        },
        {
          id: "day-6-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Migration + Model + Factory + Seeder",
          description: "Dựng database Laravel đúng chuẩn.",
          type: "deep",
          tasks: [
            "Cấu hình DB trong .env trỏ tới Docker MySQL hoặc SQLite local nếu cần nhanh.",
            "php artisan make:model Project -mf.",
            "php artisan make:model Task -mf.",
            "Migration projects: id, name, description, status, owner_id.",
            "Migration tasks: id, project_id, title, description, status, priority, due_date.",
            "Thêm foreignId + constrained + cascadeOnDelete nếu hợp lý.",
            "Thêm index status, project_id, due_date.",
            "Model Project hasMany Task.",
            "Model Task belongsTo Project.",
            "Factory tạo Project/Task fake data.",
            "Seeder tạo 5 projects, mỗi project 10 tasks.",
            "php artisan migrate:fresh --seed.",
            "Test bằng php artisan tinker.",
            "Commit: feat: add project task migrations factories seeders.",
          ],
          output: [
            "Database có projects/tasks.",
            "Seeder chạy được.",
            "Relationship test được trong tinker.",
          ],
        },
        {
          id: "day-6-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: ["Ăn trưa.", "Không code.", "Chiều làm Eloquent + Service."],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-6-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Eloquent Query + Relationship",
          description: "Không chỉ Model::all(). Học query như đi làm.",
          type: "deep",
          tasks: [
            "Project::with('tasks')->paginate(10).",
            "Task::whereStatus('pending') nếu tạo scope.",
            "Tạo local scope: scopeStatus, scopeSearch, scopeOverdue.",
            "Dùng withCount('tasks') cho project list.",
            "Dùng whereHas để lọc project có task overdue.",
            "Dùng orderBy priority/due_date.",
            "Demo N+1: load projects rồi gọi tasks trong loop.",
            "Fix bằng with('tasks').",
            "Tạo API endpoint tạm GET /api/projects-debug để xem data.",
            "Ghi note: Eloquent giúp nhưng vẫn có thể tạo N+1.",
            "Commit: feat: add eloquent scopes relationships eager loading.",
          ],
          output: [
            "Có scopes trong model.",
            "Dùng được with, withCount, whereHas.",
            "Hiểu N+1 trong Laravel.",
          ],
        },
        {
          id: "day-6-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Kiểm tra độ khó Eloquent.",
          type: "break",
          tasks: [
            "Nếu whereHas khó, ghi ví dụ 1 câu bằng lời.",
            "Nếu dễ, thêm belongsTo User owner.",
            "Không nhảy qua Service nếu relationship còn mù.",
          ],
          output: ["Có note Eloquent yếu/chắc chỗ nào."],
        },
        {
          id: "day-6-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Controller + FormRequest + Resource + Service",
          description: "Đặt architecture chuẩn từ đầu.",
          type: "practice",
          tasks: [
            "php artisan make:controller Api/ProjectController --api.",
            "php artisan make:request StoreProjectRequest.",
            "php artisan make:request UpdateProjectRequest.",
            "php artisan make:resource ProjectResource.",
            "Tạo app/Services/ProjectService.php.",
            "ProjectController chỉ gọi ProjectService.",
            "StoreProjectRequest validate name, status.",
            "UpdateProjectRequest validate partial fields.",
            "ProjectResource format output, không trả raw model bừa.",
            "API: GET /api/projects, POST /api/projects, GET /api/projects/{project}, PUT, DELETE.",
            "Thêm pagination meta nếu cần.",
            "Commit: feat: implement project crud with service request resource.",
          ],
          output: [
            "Project CRUD API chạy được.",
            "Controller mỏng.",
            "Validation nằm trong FormRequest.",
            "Output qua Resource.",
          ],
        },
        {
          id: "day-6-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không mở thêm feature mới.",
            "Tối học container/middleware.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-6-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Service Container + Middleware",
          description: "Hiểu dependency injection thật sự.",
          type: "review",
          tasks: [
            "Tạo ProjectRepositoryInterface.",
            "Tạo EloquentProjectRepository.",
            "Bind interface vào implementation trong AppServiceProvider.",
            "Inject ProjectRepositoryInterface vào ProjectService.",
            "Chạy API để verify container resolve được.",
            "Tạo middleware CheckRole hoặc SimpleApiKey nếu chưa auth.",
            "Apply middleware vào route group.",
            "Chạy php artisan route:list để nhìn middleware.",
            "Ghi note register() khác boot() trong ServiceProvider.",
            "Commit: feat: add container binding repository and middleware.",
          ],
          output: [
            "Interface được bind trong container.",
            "Service inject repository interface.",
            "Middleware chạy trên route group.",
          ],
        },
        {
          id: "day-6-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Laravel Core Lock",
          description: "Khóa kiến thức Laravel core.",
          type: "review",
          tasks: [
            "Trả lời: Route Model Binding là gì?",
            "Trả lời: FormRequest dùng để làm gì?",
            "Trả lời: Resource khác Model ở đâu?",
            "Trả lời: Service Container giải quyết vấn đề gì?",
            "Trả lời: N+1 trong Eloquent là gì?",
            "Viết 3 chỗ Laravel còn thấy magic.",
            "Commit: docs: add day 6 laravel core reflection.",
          ],
          output: ["Có note Day 6.", "Trả lời được 5 câu Laravel core."],
        },
      ],

      checklist: [
        "Laravel project chạy được.",
        "Có route /api/health.",
        "Có migration/model/factory/seeder Project/Task.",
        "Relationship Project-Task chạy được.",
        "Dùng được Eloquent scopes, with, withCount, whereHas.",
        "Project CRUD API chạy được.",
        "Controller mỏng, có Service.",
        "Có FormRequest và Resource.",
        "Bind interface vào Service Container.",
        "Có middleware route group.",
      ],

      benchmark:
        "Cuối ngày phải có Laravel API project nền tảng với migration, model, relationship, CRUD, Service Layer, FormRequest, Resource, middleware và hiểu request lifecycle.",
    },

    {
      id: "day-7",
      phaseId: "week-1",
      day: "Day 07",
      title: "Sunday Boss Fight — Laravel API Pro + Feature Testing + Blog API",
      status: "not-started",
      difficulty: "Boss Fight",
      duration: "08:00 - 20:30",

      hook: "Chủ nhật không phải ngày nhẹ. Đây là boss fight tuần 1. Mục tiêu là có Laravel API thật: có Resource, FormRequest, Auth sơ bộ/Sanctum nếu kịp, Feature Test, CI mindset, README. Đây là thứ có thể kể trong CV/phỏng vấn.",

      perspectives: [
        {
          label: "Mapping",
          text: "Junior Laravel không chỉ code CRUD. Phải biết test auth, validation, authorization, pagination, error response. Phải đọc được lỗi 401/403/422/500 và tự debug.",
        },
        {
          label: "Ultralearning",
          text: "Hôm nay học bằng boss project. Tài liệu chỉ dùng khi bị chặn. Phần lớn thời gian là code, test, fix, commit.",
        },
        {
          label: "Hard Mode",
          text: "Không có test thì không xong. Không README thì không xong. API trả lỗi sai status thì không xong. Không giải thích được architecture thì không xong.",
        },
      ],

      methods: {
        mapping:
          "Map toàn bộ tuần 1 vào một project Laravel Blog/Task API: DB → Eloquent → Service → Resource → Test → Docs.",
        ultralearning:
          "Build theo vòng lặp: feature nhỏ → test → commit → feature tiếp. Không làm 5 tiếng rồi mới chạy.",
        goldilocks:
          "Nếu Blog quá nhiều, cắt còn Post + Category + Comment. Nếu ổn thì thêm Tag, search, cache, queue.",
        hardMode:
          "Mục tiêu cuối ngày là project có thể mở repo cho người khác xem. Localhost-only mindset bị cấm.",
      },

      goal: [
        "Build Blog API hoặc Task API bằng Laravel theo architecture chuẩn.",
        "Có API Resource, FormRequest, Service Layer.",
        "Có Feature Test cho auth/validation/CRUD.",
        "Có pagination/search/filter.",
        "Có error response rõ.",
        "Có README và câu chuyện phỏng vấn.",
      ],

      timeBlocks: [
        {
          id: "day-7-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Boss Fight Plan",
          description: "Chọn scope và khóa mục tiêu trong ngày.",
          type: "setup",
          tasks: [
            "Chọn project boss: Blog API hoặc Task API.",
            "Khuyến nghị Blog API nếu muốn học post/category/comment/tag.",
            "Khuyến nghị Task API nếu muốn gần factory/admin system.",
            "Viết scope MVP: 3 entities chính, 8–12 endpoints.",
            "Viết bảng endpoint + status code + test cases.",
            "Tạo branch: git checkout -b week-1/boss-fight-laravel-api.",
            "Commit: docs: add week 1 boss fight plan.",
          ],
          output: ["Có scope rõ.", "Có endpoint plan.", "Có test plan."],
        },
        {
          id: "day-7-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Laravel API Production Shape",
          description: "Dựng skeleton API giống team thật.",
          type: "deep",
          tasks: [
            "Tạo models/migrations: Post, Category, Comment hoặc Project, Task, Comment.",
            "Thêm FK, index, softDeletes nếu hợp lý.",
            "Tạo factories và seed data realistic.",
            "Tạo API controllers.",
            "Tạo FormRequests cho store/update.",
            "Tạo API Resources cho list/detail.",
            "Tạo Services tương ứng.",
            "Tạo routes apiResource.",
            "Chạy migrate:fresh --seed.",
            "Chạy route:list.",
            "Commit: feat: setup boss api models routes resources.",
          ],
          output: [
            "DB có data seed.",
            "Routes xuất hiện đúng.",
            "API skeleton chạy.",
          ],
        },
        {
          id: "day-7-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ ngắn.",
          type: "break",
          tasks: [
            "Uống nước.",
            "Tự kiểm tra route:list.",
            "Nếu route loạn, fix trước khi tiếp.",
          ],
          output: ["route:list sạch."],
        },
        {
          id: "day-7-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — CRUD + Search + Pagination + Error Format",
          description: "Hoàn thiện behavior API cơ bản.",
          type: "deep",
          tasks: [
            "Implement index với pagination.",
            "Thêm search keyword theo title/name.",
            "Thêm filter theo category/status.",
            "Thêm sort newest/oldest.",
            "Implement store với FormRequest.",
            "Implement show với route model binding.",
            "Implement update với Service.",
            "Implement destroy soft delete nếu có.",
            "Chuẩn hóa response JSON.",
            "Xử lý not found, validation error, unauthorized error.",
            "Test thủ công bằng curl/Postman.",
            "Commit: feat: implement crud search pagination error format.",
          ],
          output: [
            "CRUD chạy.",
            "Search/filter/pagination chạy.",
            "Lỗi trả status code đúng.",
          ],
        },
        {
          id: "day-7-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không thêm feature trong đầu.",
            "Chiều viết test.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-7-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Feature Testing Laravel",
          description: "Phần phân biệt học nghiêm túc với code demo.",
          type: "deep",
          tasks: [
            "Đọc nhanh tests/Feature có sẵn.",
            "Dùng RefreshDatabase.",
            "Tạo test list API trả 200.",
            "Tạo test show existing resource trả 200.",
            "Tạo test show missing resource trả 404.",
            "Tạo test store valid data trả 201.",
            "Tạo test store invalid data trả 422.",
            "Tạo test update valid data.",
            "Tạo test delete/soft delete.",
            "Nếu có auth: actingAs user.",
            "Dùng assertJsonStructure.",
            "Dùng assertDatabaseHas.",
            "Chạy php artisan test.",
            "Commit: test: add feature tests for boss api.",
          ],
          output: ["Có ít nhất 10 feature tests.", "php artisan test xanh."],
        },
        {
          id: "day-7-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Kiểm tra test có quá sức không.",
          type: "break",
          tasks: [
            "Nếu test fail, không hoảng.",
            "Chọn 1 test fail quan trọng nhất để fix.",
            "Nếu test xanh nhanh, thêm auth/role test.",
          ],
          output: ["Có note test fail/fix."],
        },
        {
          id: "day-7-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Auth/Policy/Authorization hoặc Advanced API",
          description: "Tùy tiến độ, chọn nhánh đúng Goldilocks.",
          type: "practice",
          tasks: [
            "Nếu CRUD/test chưa vững: dùng block này để fix quality.",
            "Nếu đã vững: thêm Auth API bằng Sanctum hoặc token đơn giản.",
            "Tạo endpoint login/me/logout.",
            "Protect route store/update/delete.",
            "Tạo Policy nếu dùng Post/Task ownership.",
            "Test user không phải owner không được update/delete.",
            "Hoặc thêm comments nested route: /posts/{post}/comments.",
            "Hoặc thêm tags belongsToMany và sync tag ids.",
            "Không thêm quá nhiều nếu chưa test.",
            "Commit: feat: add auth authorization or advanced nested api.",
          ],
          output: [
            "Có auth/authorization hoặc advanced nested API.",
            "Có test tương ứng nếu kịp.",
          ],
        },
        {
          id: "day-7-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không thêm scope mới nữa.",
            "Tối chỉ polish, docs, review.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-7-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Quality Gate + README + CI mindset",
          description: "Biến project thành thứ có thể show.",
          type: "review",
          tasks: [
            "Chạy php artisan test.",
            "Chạy php artisan route:list.",
            "Kiểm tra .env.example có đủ biến cần thiết.",
            "Viết README: project description, stack, setup, migrate, seed, test.",
            "Viết API docs ngắn: endpoint, method, auth, body, response.",
            "Thêm demo account nếu có auth.",
            "Thêm screenshots nếu có UI hoặc sample response.",
            "Viết mục Architecture: Controller → Request → Service → Model → Resource.",
            "Viết mục Known limitations.",
            "Commit: docs: polish boss api readme and docs.",
          ],
          output: ["README đủ để clone chạy.", "Có API docs.", "Test xanh."],
        },
        {
          id: "day-7-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Week 1 Interview Story",
          description: "Biến tuần 1 thành câu chuyện junior.",
          type: "review",
          tasks: [
            "Viết: tuần này từ PHP core tới Laravel API đã build được gì.",
            "Viết câu trả lời 5 phút: Walk me through your Laravel API project.",
            "Trả lời: vì sao dùng FormRequest?",
            "Trả lời: vì sao dùng Resource?",
            "Trả lời: Service Layer giúp gì?",
            "Trả lời: Feature Test khác Unit Test thế nào?",
            "Trả lời: N+1 trong Laravel fix sao?",
            "Chốt 5 điểm yếu cần xử ở tuần 2.",
            "Commit: docs: add week 1 reflection and interview story.",
          ],
          output: [
            "Có week-1-reflection.md.",
            "Có interview story.",
            "Có danh sách weak points tuần 2.",
          ],
        },
      ],

      checklist: [
        "Có Laravel Boss API project.",
        "Có migrations/factories/seeders.",
        "Có API Resource/FormRequest/Service.",
        "Có CRUD + search/filter/pagination.",
        "Có error response/status code rõ.",
        "Có ít nhất 10 Feature Tests.",
        "php artisan test xanh.",
        "Có auth/authorization hoặc nested API nếu kịp.",
        "Có README và API docs.",
        "Có reflection tuần 1.",
      ],

      benchmark:
        "Cuối Chủ nhật phải có một Laravel API project nghiêm túc có test, docs, architecture rõ. Mày phải giải thích được project trong 5 phút như đang phỏng vấn junior.",
    },
    {
      id: "day-8",
      phaseId: "week-2",
      day: "Day 08",
      title:
        "TypeScript Shark Mode — Type-safe mindset cho React + Laravel API",
      status: "not-started",
      difficulty: "Very Hard",
      duration: "08:00 - 20:30",

      hook: "TypeScript không phải trang sức. Nó là dây an toàn khi React gọi Laravel API. Junior đi làm sẽ gặp bug kiểu data undefined, sai response shape, sai field name, sai enum status. Hôm nay học TS để chặn bug trước khi user thấy.",

      perspectives: [
        {
          label: "Mapping",
          text: "Reverse engineer flow React gọi Laravel: Laravel trả JSON → API client nhận data → TypeScript type response → component render. Nếu type sai, UI bug. Vì vậy học TS theo API contract, không học kiểu khai báo biến cho vui.",
        },
        {
          label: "Ultralearning",
          text: "Mỗi type phải gắn với data thật: User, Project, Task, PaginatedResponse, ApiResponse, ValidationError. Không làm bài toy kiểu name: string quá lâu.",
        },
        {
          label: "Hard Mode",
          text: "Cấm any trừ khi ghi rõ lý do. Strict mode bật. Response nào từ API cũng phải có type. Form nào gửi lên Laravel cũng có input type.",
        },
      ],

      methods: {
        mapping:
          "Map Laravel JSON response thành TypeScript types: Resource → ApiResponse<T> → component props → form input.",
        ultralearning:
          "Code type từ project thật: auth, project, task, validation error, pagination. Không học lý thuyết rời rạc.",
        goldilocks:
          "Nếu generic quá khó, bắt đầu ApiResponse<User>. Nếu ổn, tăng lên PaginatedResponse<Project> và discriminated union.",
        hardMode:
          "Không dùng any. Không để API response là unknown mà không parse/guard. Không commit nếu TS còn lỗi.",
      },

      goal: [
        "Hiểu TypeScript primitive, union, literal type, interface, type alias.",
        "Viết được generic ApiResponse<T>, PaginatedResponse<T>.",
        "Biết type cho Laravel validation error 422.",
        "Biết type cho React props, event, state, ref.",
        "Biết discriminated union cho async state.",
        "Biết Zod hoặc runtime validation mindset để không tin API mù quáng.",
        "Chuẩn bị type system cho React app nối Laravel API.",
      ],

      timeBlocks: [
        {
          id: "day-8-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — TypeScript bảo vệ frontend khỏi lỗi API nào?",
          description: "Bắt đầu bằng lỗi thật: Laravel đổi field, React chết.",
          type: "setup",
          tasks: [
            "Mở note Day 8 — TypeScript Shark Mode.",
            "Viết 5 lỗi React hay gặp khi gọi API: undefined, sai field, sai enum, validation errors, pagination meta thiếu.",
            "Map từng lỗi sang TypeScript type cần có.",
            "Vẽ flow: Laravel Resource → JSON → Axios → ApiResponse<T> → React component.",
            "Tạo folder hoặc branch frontend: week-2/typescript-foundation.",
            "Commit: docs: add typescript api contract mapping.",
          ],
          output: [
            "Có sơ đồ API contract.",
            "Có danh sách lỗi frontend TS phải chặn.",
          ],
        },
        {
          id: "day-8-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — TS Core Types bằng data Laravel",
          description:
            "Không học type bằng ví dụ vớ vẩn. Dùng User/Project/Task thật.",
          type: "deep",
          tasks: [
            "Tạo file src/types/domain.ts.",
            "Định nghĩa Role = 'admin' | 'manager' | 'technician' | 'user'.",
            "Định nghĩa TaskStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled'.",
            "Định nghĩa User type: id, name, email, role, createdAt.",
            "Định nghĩa Project type: id, name, description, status, ownerId.",
            "Định nghĩa Task type: id, projectId, title, description, status, priority, dueDate.",
            "Học optional property với field description?: string.",
            "Học readonly với id/createdAt nếu muốn chặn sửa.",
            "Học union type cho status/role.",
            "Học type alias vs interface: dùng interface cho object domain mở rộng, type cho union/generic.",
            "Bài: viết function canManageTask(user: User, task: Task): boolean.",
            "Bài: viết function getTaskBadge(status: TaskStatus): string bằng switch exhaustive.",
            "Commit: feat: add domain types for laravel api data.",
          ],
          output: [
            "domain.ts có User/Project/Task/Role/TaskStatus.",
            "Không có any.",
            "Có function canManageTask và getTaskBadge.",
          ],
        },
        {
          id: "day-8-block-3",
          time: "10:30 - 10:45",
          label: "Break — Type mental reset",
          description: "Nghỉ ngắn để không loạn type/interface.",
          type: "break",
          tasks: [
            "Đứng dậy.",
            "Tự trả lời: union type dùng cho cái gì?",
            "Tự trả lời: optional property khác nullable thế nào?",
          ],
          output: ["Trả lời được union/optional bằng ví dụ TaskStatus."],
        },
        {
          id: "day-8-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — API Response Types + Laravel 422 Errors",
          description: "Build type contract giống API thật.",
          type: "deep",
          tasks: [
            "Tạo src/types/api.ts.",
            "Định nghĩa ApiResponse<T> = { success, message, data, errors?, meta? }.",
            "Định nghĩa PaginatedMeta: currentPage, perPage, total, totalPages.",
            "Định nghĩa PaginatedResponse<T> cho list API.",
            "Định nghĩa LaravelValidationErrors = Record<string, string[]>.",
            "Định nghĩa ApiError type có status, message, errors.",
            "Viết type ProjectListResponse = ApiResponse<Project[]> hoặc PaginatedResponse<Project>.",
            "Viết type LoginResponse = ApiResponse<{ token: string; user: User }>.",
            "Viết function isValidationError(error): boolean.",
            "Hard mode: viết normalizeLaravelErrors(errors) trả về string[] hiển thị lên form.",
            "Commit: feat: add typed api response and validation error contracts.",
          ],
          output: [
            "api.ts có ApiResponse/PaginatedResponse/ValidationErrors.",
            "Có helper normalizeLaravelErrors.",
          ],
        },
        {
          id: "day-8-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không xem thêm TS video.",
            "Chiều dùng TS trong React thật.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-8-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — React + TS Props, Events, State",
          description: "Type component như đi làm.",
          type: "deep",
          tasks: [
            "Tạo component TaskCard.tsx.",
            "Props gồm task: Task, onStatusChange: (taskId, status) => void.",
            "Không dùng React.FC nếu không cần, viết function TaskCard(props: TaskCardProps).",
            "Type event input: React.ChangeEvent<HTMLInputElement>.",
            "Type form submit: React.FormEvent<HTMLFormElement>.",
            "useState<TaskStatus>('pending').",
            "useState<Project[]>([]).",
            "useRef<HTMLInputElement | null>(null).",
            "Tạo ProjectFilter component với search, status, onChange.",
            "Hard mode: component props không được để object any.",
            "Commit: feat: add typed react task components.",
          ],
          output: [
            "TaskCard.tsx typed đầy đủ.",
            "ProjectFilter.tsx typed đầy đủ.",
            "Không có any.",
          ],
        },
        {
          id: "day-8-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Đo độ khó TypeScript.",
          type: "break",
          tasks: [
            "Chấm TS hôm nay từ 1–10.",
            "Nếu trên 9, dừng generic nâng cao, quay lại ApiResponse<User>.",
            "Nếu dưới 6, thêm discriminated union async state.",
          ],
          output: ["Có note điểm yếu TS."],
        },
        {
          id: "day-8-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Discriminated Union + Async State",
          description: "Không để UI access data khi đang loading/error.",
          type: "practice",
          tasks: [
            "Tạo type AsyncState<T> gồm idle/loading/success/error.",
            "State success có data: T.",
            "State error có error: string.",
            "Viết renderAsyncState<T>() hoặc demo trong component.",
            "Tạo ProjectListDemo dùng AsyncState<Project[]>.",
            "Bắt buộc switch theo state.status.",
            "Trong case loading không được access data.",
            "Trong case error không được access data.",
            "Hard mode: thêm exhaustiveCheck để TS báo nếu thiếu case.",
            "Commit: feat: add discriminated union async state demo.",
          ],
          output: [
            "Có AsyncState<T>.",
            "Có component demo không access sai data.",
            "Hiểu vì sao union tốt hơn optional field bừa.",
          ],
        },
        {
          id: "day-8-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không tranh cãi với TS lúc đói.",
            "Tối làm API client type-safe.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-8-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Type-safe API Client Skeleton",
          description: "Chuẩn bị nền cho Axios/React Query ngày sau.",
          type: "review",
          tasks: [
            "Tạo src/lib/api-client.ts.",
            "Viết generic function unwrapResponse<T>(response: ApiResponse<T>): T.",
            "Viết endpoint types: LoginInput, CreateProjectInput, UpdateTaskInput.",
            "Viết mock functions: login(input): Promise<LoginResponse>, getProjects(): Promise<PaginatedResponse<Project>>.",
            "Không gọi API thật cũng được, nhưng type phải chuẩn.",
            "Viết ApiClientError class hoặc type.",
            "Ghi note: API client là boundary giữa backend và frontend.",
            "Commit: feat: add typed api client skeleton.",
          ],
          output: [
            "api-client.ts có generic response handling.",
            "Có input type cho login/create/update.",
          ],
        },
        {
          id: "day-8-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — TS Interview Lock",
          description: "Khóa câu trả lời TS.",
          type: "review",
          tasks: [
            "Trả lời: type khác interface thế nào?",
            "Trả lời: generic dùng để làm gì?",
            "Trả lời: why no any?",
            "Trả lời: discriminated union giải quyết lỗi gì?",
            "Trả lời: Laravel validation error nên type thế nào?",
            "Viết 3 lỗi TS hôm nay gặp.",
            "Commit: docs: add day 8 typescript reflection.",
          ],
          output: [
            "Có note Day 8.",
            "Trả lời được 5 câu TS liên quan React/Laravel API.",
          ],
        },
      ],

      checklist: [
        "Có domain types User/Project/Task.",
        "Có ApiResponse/PaginatedResponse/ValidationErrors.",
        "Có typed React components.",
        "Có AsyncState discriminated union.",
        "Có API client skeleton.",
        "Không có any.",
        "Có reflection TS cuối ngày.",
      ],

      benchmark:
        "Cuối ngày phải type được dữ liệu Laravel API từ backend sang React. Không còn fetch data dạng any rồi render bừa.",
    },

    {
      id: "day-9",
      phaseId: "week-2",
      day: "Day 09",
      title: "Server State Shark Mode — TanStack Query + Zustand Auth Store",
      status: "not-started",
      difficulty: "Very Hard",
      duration: "08:00 - 20:30",

      hook: "React junior mà còn fetch list bằng useEffect thủ công ở mọi page là rất dễ nát. Server state cần caching, loading, error, refetch, invalidation. Hôm nay học TanStack Query để gọi Laravel API như app thật.",

      perspectives: [
        {
          label: "Mapping",
          text: "Laravel API có list/detail/create/update/delete. React cần query list/detail và mutation create/update/delete. Sau mutation phải invalidate đúng query key. Đây là mapping chính của ngày.",
        },
        {
          label: "Ultralearning",
          text: "Không học React Query bằng todo app. Dùng Project/Task API từ Laravel tuần 1. Mỗi query/mutation phải gắn với endpoint thật hoặc mock theo đúng endpoint.",
        },
        {
          label: "Hard Mode",
          text: "Không fetch server data bằng useEffect trong page CRUD. useEffect chỉ dùng cho side effect thật, không dùng để thay React Query.",
        },
      ],

      methods: {
        mapping:
          "Map endpoint Laravel: GET list → useQuery, GET detail → useQuery, POST/PUT/DELETE → useMutation, success → invalidateQueries.",
        ultralearning:
          "Build hooks thật: useProjects, useProject, useCreateProject, useUpdateProject, useDeleteProject.",
        goldilocks:
          "Nếu React Query khó, làm list/detail trước. Nếu ổn, thêm optimistic update và dependent query.",
        hardMode:
          "Query key phải có chiến lược rõ. Không queryKey lung tung kiểu ['data']. Không mutation xong quên invalidate.",
      },

      goal: [
        "Hiểu server state khác client state.",
        "Setup QueryClientProvider.",
        "Viết useQuery cho list/detail.",
        "Viết useMutation cho create/update/delete.",
        "Biết invalidate query sau mutation.",
        "Biết optimistic update cơ bản.",
        "Biết Zustand cho auth state/local UI state.",
      ],

      timeBlocks: [
        {
          id: "day-9-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Server state vs Client state",
          description: "Phân biệt cái gì thuộc server, cái gì thuộc browser.",
          type: "setup",
          tasks: [
            "Viết bảng: server state gồm projects/tasks/user from API.",
            "Viết bảng: client state gồm modal open, sidebar collapsed, selected filter.",
            "Map server state sang TanStack Query.",
            "Map auth/user/token sang Zustand persist.",
            "Ghi nguyên tắc: API data không tự quản bằng useState nếu đã có React Query.",
            "Commit: docs: add server state client state mapping.",
          ],
          output: [
            "Có bảng server state/client state.",
            "Có query/mutation mapping.",
          ],
        },
        {
          id: "day-9-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — QueryClient + Query Key Strategy",
          description: "Setup nền đúng để không loạn query key.",
          type: "deep",
          tasks: [
            "Cài package nếu chưa có: npm install @tanstack/react-query zustand.",
            "Tạo QueryClient trong main.jsx hoặc providers/AppProviders.jsx.",
            "Bọc app bằng QueryClientProvider.",
            "Tạo src/lib/query-keys.js hoặc queryKeys.ts.",
            "Định nghĩa queryKeys.projects.all, lists(), list(filters), detail(id).",
            "Giải thích vì sao queryKey nên là array.",
            "Tạo mock getProjects(filters) hoặc gọi Laravel API nếu backend đang chạy.",
            "Viết useProjects(filters) dùng useQuery.",
            "Thêm staleTime hợp lý.",
            "Hiển thị loading skeleton, error state, empty state.",
            "Commit: feat: setup react query and project list query.",
          ],
          output: [
            "QueryClientProvider chạy.",
            "useProjects hook chạy.",
            "UI có loading/error/empty.",
          ],
        },
        {
          id: "day-9-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ ngắn.",
          type: "break",
          tasks: [
            "Uống nước.",
            "Tự trả lời: queryKey dùng để làm gì?",
            "Tự trả lời: server state khác client state thế nào?",
          ],
          output: ["Trả lời được queryKey/server state."],
        },
        {
          id: "day-9-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Mutations + Invalidation",
          description: "CRUD React đúng chuẩn: mutation xong data tự refetch.",
          type: "deep",
          tasks: [
            "Viết createProject(input) trong API client.",
            "Viết updateProject(id, input).",
            "Viết deleteProject(id).",
            "Viết useCreateProject() dùng useMutation.",
            "onSuccess invalidate queryKeys.projects.lists().",
            "Viết useUpdateProject() invalidate detail và lists.",
            "Viết useDeleteProject() invalidate lists.",
            "Tạo ProjectForm component typed.",
            "Submit form gọi mutation.",
            "Button có loading state khi mutation pending.",
            "Hiển thị validation error 422 từ Laravel.",
            "Commit: feat: add project mutations and invalidation.",
          ],
          output: [
            "Create/update/delete gọi mutation.",
            "Mutation xong list refresh đúng.",
            "Validation error hiển thị được.",
          ],
        },
        {
          id: "day-9-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không mở thêm React docs khi ăn.",
            "Chiều làm Zustand.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-9-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Zustand Auth Store",
          description:
            "Auth state không phải server list; nó là app/session state.",
          type: "deep",
          tasks: [
            "Tạo src/stores/authStore.js hoặc .ts.",
            "State: user, token, isAuthenticated.",
            "Actions: setAuth, clearAuth, updateUser.",
            "Dùng persist middleware để lưu token/user vào localStorage.",
            "Không lưu password hoặc dữ liệu nhạy cảm.",
            "Tạo useAuthStore.",
            "Tạo login flow giả hoặc gọi API login Laravel.",
            "Sau login lưu user/token vào store.",
            "Logout clear store và query cache nếu cần.",
            "Tạo helper getAuthToken() cho Axios interceptor dùng ngày sau.",
            "Commit: feat: add zustand auth store with persist.",
          ],
          output: [
            "Auth store persist qua reload.",
            "Login/logout cập nhật UI.",
            "Token lấy được cho API client.",
          ],
        },
        {
          id: "day-9-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Kiểm tra độ khó React Query/Zustand.",
          type: "break",
          tasks: [
            "Nếu query/mutation còn rối, vẽ lại mapping endpoint → hook.",
            "Nếu ổn, thêm optimistic update.",
            "Ghi 1 lỗi khó nhất hôm nay.",
          ],
          output: ["Có note lỗi React Query hoặc Zustand."],
        },
        {
          id: "day-9-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Optimistic Update + Dependent Query",
          description: "Tăng độ giống app thật.",
          type: "practice",
          tasks: [
            "Tạo task toggle status mutation.",
            "Khi click complete, update UI trước bằng optimistic update.",
            "onMutate snapshot old data.",
            "onError rollback old data.",
            "onSettled invalidate lại query.",
            "Tạo dependent query: chỉ fetch tasks khi projectId tồn tại.",
            "Tạo useTasks(projectId, filters) với enabled: !!projectId.",
            "Tạo prefetch project detail khi hover/click nếu muốn.",
            "Ghi note: optimistic update lợi/hại ở đâu.",
            "Commit: feat: add optimistic task status update.",
          ],
          output: [
            "Toggle task status có optimistic update.",
            "Dependent query chạy đúng.",
            "Rollback được khi lỗi.",
          ],
        },
        {
          id: "day-9-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không debug query cache trong lúc ăn.",
            "Tối refactor hook.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-9-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Custom Hooks Layer",
          description: "Dọn code để page không ôm API logic.",
          type: "review",
          tasks: [
            "Tạo hooks: useProjects, useProject, useCreateProject, useUpdateProject, useDeleteProject.",
            "Tạo hooks: useTasks, useToggleTaskStatus.",
            "Page chỉ gọi hooks, không gọi api client trực tiếp.",
            "Tách error display component.",
            "Tách LoadingSkeleton.",
            "Kiểm tra không còn useEffect fetch data.",
            "Commit: refactor: extract react query hooks layer.",
          ],
          output: [
            "Hooks layer rõ ràng.",
            "Page component sạch.",
            "Không còn fetch thủ công bằng useEffect.",
          ],
        },
        {
          id: "day-9-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — React Query Interview Lock",
          description: "Khóa câu trả lời server state.",
          type: "review",
          tasks: [
            "Trả lời: server state khác client state thế nào?",
            "Trả lời: queryKey là gì?",
            "Trả lời: mutation khác query thế nào?",
            "Trả lời: invalidateQueries dùng khi nào?",
            "Trả lời: optimistic update có rủi ro gì?",
            "Trả lời: Zustand dùng cho loại state nào?",
            "Commit: docs: add day 9 server state reflection.",
          ],
          output: ["Có note Day 9.", "Trả lời được 6 câu React Query/Zustand."],
        },
      ],

      checklist: [
        "Setup QueryClientProvider.",
        "Có query key strategy.",
        "Có useProjects/useProject.",
        "Có create/update/delete mutation.",
        "Mutation invalidate đúng.",
        "Có Zustand auth store persist.",
        "Có optimistic update cơ bản.",
        "Không fetch server data bằng useEffect.",
        "Có reflection cuối ngày.",
      ],

      benchmark:
        "Cuối ngày React app phải quản lý server state bằng TanStack Query, auth/app state bằng Zustand, page sạch, không fetch API thủ công lung tung.",
    },

    {
      id: "day-10",
      phaseId: "week-2",
      day: "Day 10",
      title:
        "Axios + Router + Auth Flow — React nối Laravel API như production",
      status: "not-started",
      difficulty: "Very Hard",
      duration: "08:00 - 20:30",

      hook: "Hôm nay nối React với Laravel API kiểu đi làm: Axios instance, interceptors, protected routes, role routes, 401/403/422 handling. Đây là phần thực chiến nhất của fullstack React + Laravel.",

      perspectives: [
        {
          label: "Mapping",
          text: "Laravel trả 401 khi chưa đăng nhập, 403 khi sai quyền, 422 khi validation fail. React phải bắt đúng từng loại lỗi và phản ứng đúng: redirect login, show forbidden, show form errors.",
        },
        {
          label: "Ultralearning",
          text: "Không chỉ login được một lần. Phải test reload, token mất, token sai, role sai, validation error, API down.",
        },
        {
          label: "Hard Mode",
          text: "Không để token handling rải rác trong từng function. Tất cả đi qua Axios instance và auth store.",
        },
      ],

      methods: {
        mapping:
          "Map Laravel status code → React behavior: 401 logout/redirect, 403 forbidden page, 422 form errors, 500 toast retry.",
        ultralearning:
          "Tạo lỗi thật bằng cách đổi token, gọi route sai role, gửi form thiếu field.",
        goldilocks:
          "Nếu silent refresh quá nặng, làm bearer token + logout khi 401 trước. Nếu ổn thì thêm refresh flow.",
        hardMode: "Không copy auth boilerplate. Tự hiểu từng dòng interceptor.",
      },

      goal: [
        "Tạo Axios instance có baseURL/env.",
        "Attach token tự động bằng request interceptor.",
        "Handle 401/403/422 bằng response interceptor.",
        "Tạo React Router layout routes.",
        "Tạo ProtectedRoute và RoleRoute.",
        "Tạo login page gọi Laravel API.",
        "Sau login chuyển dashboard theo role.",
      ],

      timeBlocks: [
        {
          id: "day-10-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Status code → UI behavior",
          description: "Vẽ bản đồ lỗi trước khi code interceptor.",
          type: "setup",
          tasks: [
            "Viết bảng status code: 200/201/204/401/403/404/422/500.",
            "Ghi React behavior tương ứng mỗi status.",
            "Xác định auth storage: token/user trong Zustand persist.",
            "Xác định API baseURL từ VITE_API_URL.",
            "Commit: docs: add auth api status handling map.",
          ],
          output: [
            "Có bảng status code → behavior.",
            "Có plan Axios instance.",
          ],
        },
        {
          id: "day-10-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Axios Instance + Error Layer",
          description: "Mọi request đi qua một cửa.",
          type: "deep",
          tasks: [
            "Cài axios nếu chưa có: npm install axios.",
            "Tạo src/lib/http.js hoặc http.ts.",
            "Tạo axios instance với baseURL import.meta.env.VITE_API_URL.",
            "Set timeout hợp lý.",
            "Request interceptor attach Authorization Bearer token từ authStore.",
            "Response interceptor bắt lỗi.",
            "Nếu 401: clearAuth và redirect login hoặc throw AuthError.",
            "Nếu 403: throw ForbiddenError.",
            "Nếu 422: normalize validation errors.",
            "Nếu network error: trả message dễ hiểu.",
            "Viết helper getErrorMessage(error).",
            "Commit: feat: add axios instance and api error handling.",
          ],
          output: [
            "http client dùng chung.",
            "Token attach tự động.",
            "Lỗi API normalize được.",
          ],
        },
        {
          id: "day-10-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ ngắn.",
          type: "break",
          tasks: [
            "Tự trả lời: interceptor chạy khi nào?",
            "Tự trả lời: 401 khác 403 ở UI thế nào?",
          ],
          output: ["Trả lời được interceptor/401/403."],
        },
        {
          id: "day-10-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Auth API Client + Login Page",
          description: "Login thật với Laravel API.",
          type: "deep",
          tasks: [
            "Tạo src/api/authApi.js.",
            "Viết login(credentials), me(), logout().",
            "Tạo LoginPage với email/password.",
            "Validate frontend tối thiểu: required/email/password.",
            "Submit gọi useMutation login.",
            "Login success: lưu user/token vào Zustand.",
            "Login fail 401: hiển thị sai email/mật khẩu.",
            "Login fail 422: hiển thị validation errors.",
            "Sau login redirect theo role.",
            "Tạo /dashboard placeholder.",
            "Commit: feat: implement login flow with laravel api.",
          ],
          output: [
            "Login page chạy.",
            "Sai password hiển thị lỗi.",
            "Login success lưu auth và redirect.",
          ],
        },
        {
          id: "day-10-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không thêm refresh token lúc đói.",
            "Chiều làm router.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-10-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — React Router Layout + ProtectedRoute",
          description: "Chặn URL đúng role như app doanh nghiệp.",
          type: "deep",
          tasks: [
            "Cài react-router-dom nếu chưa có.",
            "Tạo router với BrowserRouter hoặc createBrowserRouter tùy app hiện tại.",
            "Tạo AuthLayout cho login/register.",
            "Tạo DashboardLayout có sidebar/header/main.",
            "Tạo ProtectedRoute kiểm tra isAuthenticated.",
            "Nếu chưa login, redirect /login và giữ intended path.",
            "Tạo RoleRoute nhận allowedRoles.",
            "Admin route chỉ admin vào.",
            "Manager route chỉ manager/admin vào.",
            "Technician route chỉ technician vào.",
            "Tạo ForbiddenPage cho 403.",
            "Commit: feat: add protected and role based routes.",
          ],
          output: [
            "ProtectedRoute hoạt động.",
            "RoleRoute hoạt động.",
            "Refresh page vẫn giữ login nhờ persist.",
          ],
        },
        {
          id: "day-10-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Kiểm tra auth flow.",
          type: "break",
          tasks: [
            "Test chưa login vào /dashboard.",
            "Test role sai vào admin route.",
            "Ghi lỗi auth khó nhất.",
          ],
          output: ["Có note lỗi auth/router."],
        },
        {
          id: "day-10-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Me Endpoint + Session Restore + Logout",
          description: "Reload trang không được vỡ auth.",
          type: "practice",
          tasks: [
            "Khi app load, nếu có token thì gọi /me để verify user.",
            "Nếu /me success, update user.",
            "Nếu /me 401, clearAuth.",
            "Tạo AuthBootstrap hoặc useAuthBootstrap hook.",
            "Thêm loading screen khi đang verify session.",
            "Logout gọi API logout nếu backend có, sau đó clearAuth.",
            "Clear React Query cache khi logout.",
            "Test: reload khi token đúng.",
            "Test: đổi token sai trong localStorage rồi reload.",
            "Commit: feat: add auth bootstrap and logout flow.",
          ],
          output: [
            "Reload giữ session đúng.",
            "Token sai thì logout.",
            "Logout clear cache.",
          ],
        },
        {
          id: "day-10-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không debug route lúc ăn.",
            "Tối làm testing/performance nhẹ.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-10-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Auth Edge Cases + Performance Check",
          description: "Test những case hay làm app vỡ.",
          type: "review",
          tasks: [
            "Test Laravel API tắt server: UI hiển thị network error.",
            "Test 422 validation: form show lỗi field.",
            "Test 403: chuyển ForbiddenPage.",
            "Test 401: clearAuth redirect login.",
            "Dùng React DevTools xem render LoginPage/Dashboard.",
            "Không lạm dụng useMemo/useCallback nếu chưa có vấn đề thật.",
            "Tách auth logic khỏi component nếu component quá dài.",
            "Commit: test: verify auth edge cases and cleanup.",
          ],
          output: [
            "Auth edge cases được test.",
            "Form error handling ổn.",
            "Component không quá rối.",
          ],
        },
        {
          id: "day-10-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Auth Interview Lock",
          description: "Khóa câu trả lời auth/router.",
          type: "review",
          tasks: [
            "Trả lời: ProtectedRoute hoạt động thế nào?",
            "Trả lời: RoleRoute khác ProtectedRoute ở đâu?",
            "Trả lời: Axios interceptor dùng để làm gì?",
            "Trả lời: 401/403/422 xử lý thế nào?",
            "Trả lời: vì sao logout phải clear query cache?",
            "Commit: docs: add day 10 auth router reflection.",
          ],
          output: ["Có note Day 10.", "Trả lời được auth/router flow."],
        },
      ],

      checklist: [
        "Có Axios instance.",
        "Token attach tự động.",
        "Handle 401/403/422.",
        "Login page gọi Laravel API.",
        "Auth store lưu user/token.",
        "ProtectedRoute hoạt động.",
        "RoleRoute hoạt động.",
        "Me endpoint/session restore hoạt động.",
        "Logout clear auth/cache.",
        "Có reflection cuối ngày.",
      ],

      benchmark:
        "Cuối ngày React phải đăng nhập được với Laravel API, chặn route đúng auth/role, xử lý lỗi 401/403/422 đúng và reload không vỡ session.",
    },

    {
      id: "day-11",
      phaseId: "week-2",
      day: "Day 11",
      title: "UI System Hard Mode — Tailwind + Component Library cho Admin App",
      status: "not-started",
      difficulty: "Hard",
      duration: "08:00 - 20:30",

      hook: "Code tốt nhưng UI rối thì project vẫn bị đánh giá thấp. Junior fullstack cần build được admin UI sạch: table, form, modal, status badge, loading, empty state, error state. Hôm nay xây component system dùng lại cho project thật.",

      perspectives: [
        {
          label: "Mapping",
          text: "Admin app Laravel/React cần lặp lại: Button, Input, Select, Badge, Card, Modal, Table, Pagination, Skeleton, Alert. Build một lần dùng cả tháng.",
        },
        {
          label: "Ultralearning",
          text: "Không ngồi chỉnh màu vô hạn. Mỗi component phải có props, states và demo page. UI phục vụ feature, không phải trang trí.",
        },
        {
          label: "Hard Mode",
          text: "Không copy UI library mù. Tự viết component để hiểu props, className, state, error, loading, disabled, responsive.",
        },
      ],

      methods: {
        mapping:
          "Map từng page admin: list page cần table/filter/pagination; form page cần input/select/error; detail page cần card/tabs/status.",
        ultralearning:
          "Build component → dùng ngay trong Project/Task page → sửa theo nhu cầu thật.",
        goldilocks:
          "Nếu nhiều component quá, ưu tiên Button/Input/Card/Table/Modal. Nếu ổn, thêm Toast/Skeleton.",
        hardMode:
          "Mọi component phải reusable. Không viết 10 button khác nhau trong page.",
      },

      goal: [
        "Tạo UI component library cơ bản bằng Tailwind.",
        "Có Button/Input/Select/Card/Badge/Modal/Table/Pagination.",
        "Có loading skeleton, empty state, error state.",
        "Có admin layout sidebar/header/content.",
        "Áp dụng vào Project/Task pages.",
        "UI êm mắt, không neon, không rối.",
      ],

      timeBlocks: [
        {
          id: "day-11-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Admin UI cần component nào?",
          description: "Không code UI trước khi biết pattern lặp lại.",
          type: "setup",
          tasks: [
            "Mở app hiện tại và chụp/ghi các UI lặp lại.",
            "Viết danh sách component cần cho junior admin app.",
            "Map page → component: Dashboard, Project List, Task List, Login, Form, Detail.",
            "Chọn palette sáng/navy dịu đang dùng trong roadmap app.",
            "Commit: docs: add admin ui component map.",
          ],
          output: ["Có component map.", "Có UI priority list."],
        },
        {
          id: "day-11-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Base Components",
          description: "Xây component nhỏ trước.",
          type: "deep",
          tasks: [
            "Tạo src/components/ui/Button.jsx.",
            "Button có variant: primary, secondary, ghost, danger.",
            "Button có size: sm, md, lg.",
            "Button có loading/disabled.",
            "Tạo Input có label, error, helperText.",
            "Tạo Select cơ bản có label/error/options.",
            "Tạo Badge theo status.",
            "Tạo Card component.",
            "Dùng cn() để merge class.",
            "Tạo UIPlayground page để xem component.",
            "Commit: feat: add base ui components.",
          ],
          output: ["Có Button/Input/Select/Badge/Card.", "Có demo page."],
        },
        {
          id: "day-11-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ ngắn.",
          type: "break",
          tasks: [
            "Nhìn UI cách xa màn hình.",
            "Nếu thấy rối, giảm màu.",
            "Nếu text khó đọc, tăng contrast.",
          ],
          output: ["UI dễ nhìn hơn."],
        },
        {
          id: "day-11-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Layout + Table + Pagination",
          description: "Admin app sống bằng layout và table.",
          type: "deep",
          tasks: [
            "Tạo AdminLayout có sidebar/header/main.",
            "Sidebar có nav theo role.",
            "Header có user menu/logout.",
            "Tạo DataTable component nhận columns, rows, renderCell.",
            "DataTable có empty state.",
            "DataTable có loading skeleton.",
            "DataTable có actions column.",
            "Tạo Pagination component.",
            "Áp dụng vào ProjectListPage.",
            "Commit: feat: add admin layout data table pagination.",
          ],
          output: [
            "AdminLayout chạy.",
            "ProjectList dùng DataTable.",
            "Có loading/empty state.",
          ],
        },
        {
          id: "day-11-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không chỉnh pixel trong lúc ăn.",
            "Chiều làm modal/form.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-11-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Modal + Form UX",
          description: "Form junior phải show error rõ, loading rõ.",
          type: "deep",
          tasks: [
            "Tạo Modal component có open/onClose/title/footer.",
            "Đóng modal khi click backdrop nếu phù hợp.",
            "Đóng bằng Escape nếu kịp.",
            "Tạo ProjectForm dùng Input/Select/Button.",
            "Form show Laravel validation errors theo field.",
            "Submit button loading khi mutation pending.",
            "Disable form khi đang submit.",
            "Success thì close modal và reset form.",
            "Error thì giữ form data.",
            "Commit: feat: add modal and project form ux.",
          ],
          output: [
            "Create/Edit Project modal chạy.",
            "Validation errors hiển thị rõ.",
            "Loading state rõ.",
          ],
        },
        {
          id: "day-11-block-7",
          time: "15:30 - 15:45",
          label: "Break — UX check",
          description: "Kiểm tra UI có thật sự dùng được không.",
          type: "break",
          tasks: [
            "Test form bằng tay.",
            "Tab qua input xem focus có rõ không.",
            "Ghi 3 điểm UI khó chịu.",
          ],
          output: ["Có note UX cần sửa."],
        },
        {
          id: "day-11-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Polish States: Skeleton, Empty, Error",
          description: "App thật phải có trạng thái chờ/lỗi/rỗng.",
          type: "practice",
          tasks: [
            "Tạo SkeletonCard/SkeletonTable.",
            "Tạo EmptyState có icon/title/description/action.",
            "Tạo ErrorState có retry button.",
            "Áp dụng vào ProjectList.",
            "Áp dụng vào TaskList nếu có.",
            "Tạo ConfirmDialog cho delete.",
            "Delete cần confirm, không xóa ngay.",
            "Thêm toast đơn giản hoặc alert message.",
            "Commit: feat: add loading empty error confirm states.",
          ],
          output: [
            "Không còn màn hình trắng khi loading.",
            "Delete có confirm.",
            "Error có retry.",
          ],
        },
        {
          id: "day-11-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không chỉnh màu vô tận.",
            "Tối áp dụng vào pages.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-11-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Apply UI System vào CRUD",
          description: "Component chỉ có giá trị khi dùng vào feature thật.",
          type: "review",
          tasks: [
            "Refactor ProjectListPage dùng DataTable.",
            "Refactor ProjectForm dùng UI Input/Button.",
            "Refactor TaskListPage nếu có.",
            "Đảm bảo responsive 1366px và mobile cơ bản.",
            "Kiểm tra màu/spacing/typography.",
            "Xóa class lặp vô nghĩa.",
            "Commit: refactor: apply ui system to admin pages.",
          ],
          output: [
            "Project/Task pages nhìn đồng bộ.",
            "Component được dùng thật.",
          ],
        },
        {
          id: "day-11-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — UI Interview Lock",
          description: "Khóa tư duy UI component.",
          type: "review",
          tasks: [
            "Trả lời: vì sao cần component reusable?",
            "Trả lời: loading/empty/error state quan trọng thế nào?",
            "Trả lời: form UX tốt gồm gì?",
            "Trả lời: DataTable nên nhận props gì?",
            "Ghi 3 component muốn cải thiện tuần sau.",
            "Commit: docs: add day 11 ui system reflection.",
          ],
          output: ["Có note Day 11.", "Có component improvement list."],
        },
      ],

      checklist: [
        "Có Button/Input/Select/Badge/Card.",
        "Có AdminLayout.",
        "Có DataTable và Pagination.",
        "Có Modal và ProjectForm.",
        "Có Skeleton/Empty/Error states.",
        "Có ConfirmDialog hoặc confirm delete.",
        "Áp dụng component vào CRUD pages.",
        "UI đồng bộ và dễ nhìn.",
      ],

      benchmark:
        "Cuối ngày app phải có UI system đủ dùng cho admin dashboard, không còn mỗi page tự viết class hỗn loạn.",
    },

    {
      id: "day-12",
      phaseId: "week-2",
      day: "Day 12",
      title: "Fullstack Project Day 1 — Laravel API + React Admin Panel",
      status: "not-started",
      difficulty: "Boss Fight",
      duration: "08:00 - 20:30",

      hook: "Bắt đầu project fullstack thật. Không còn lab rời rạc. Mục tiêu 2 ngày tới: Laravel API + React Admin Panel có auth, role, CRUD, dashboard, test cơ bản, README. Đây là project có thể đưa vào CV.",

      perspectives: [
        {
          label: "Mapping",
          text: "Project đi làm bắt đầu bằng requirement. Mày phải tự chia backend/frontend/API/UI/test/deploy, không mở code lên gõ đại.",
        },
        {
          label: "Ultralearning",
          text: "Build theo vertical slice: database → API → React page → test manual → commit. Không làm backend 8 tiếng rồi frontend chết.",
        },
        {
          label: "Hard Mode",
          text: "Mỗi feature phải đi qua full stack. Không có endpoint chết, không có UI mock không nối API, không có README rỗng.",
        },
      ],

      methods: {
        mapping:
          "Map feature: User/Project/Task Management → DB tables → Laravel endpoints → React pages → Query hooks → UI components.",
        ultralearning:
          "Mỗi flow 2 tiếng ship một lát cắt chạy được từ DB tới UI.",
        goldilocks:
          "Nếu project quá lớn, MVP: auth + project CRUD + task CRUD + dashboard count. Nếu ổn, thêm comments/activity logs.",
        hardMode:
          "Không có fake UI. React phải gọi API thật hoặc mock đúng contract nếu backend chưa chạy.",
      },

      goal: [
        "Chốt fullstack project scope.",
        "Build Laravel backend foundation.",
        "Build React frontend foundation.",
        "Nối auth/login.",
        "Nối Project CRUD.",
        "Nối Task CRUD cơ bản.",
        "Có dashboard count đầu tiên.",
      ],

      timeBlocks: [
        {
          id: "day-12-block-1",
          time: "08:00 - 09:00",
          label: "Design — Scope như nhận task thật",
          description: "Chọn project và khóa MVP.",
          type: "setup",
          tasks: [
            "Project đề xuất: Factory/Task Management Admin.",
            "Roles: admin, manager, technician.",
            "Entities: users, projects, tasks, comments, activity_logs.",
            "MVP ngày 12–13: login, dashboard, project CRUD, task CRUD, role route.",
            "Vẽ ERD.",
            "Viết endpoint list.",
            "Viết page list.",
            "Viết acceptance criteria cho từng feature.",
            "Tạo repo hoặc folder: ~/Code/fullstack-laravel-react-admin.",
            "Commit: docs: add fullstack project scope and erd.",
          ],
          output: ["Có scope.", "Có ERD.", "Có endpoint/page plan."],
        },
        {
          id: "day-12-block-2",
          time: "09:00 - 11:00",
          label: "Flow 1 — Laravel Backend Foundation",
          description: "Dựng backend theo chuẩn tuần 1.",
          type: "deep",
          tasks: [
            "Tạo hoặc dùng lại laravel-api-junior.",
            "Tạo migrations: projects, tasks, comments, activity_logs nếu chưa có.",
            "Tạo roles trong users table nếu chưa có.",
            "Tạo factories/seeders: admin, manager, technician.",
            "Tạo ProjectService, TaskService.",
            "Tạo FormRequests và Resources.",
            "Tạo routes /api/auth và /api/projects, /api/tasks.",
            "Chạy migrate:fresh --seed.",
            "Test health/auth/project list bằng Postman.",
            "Commit: feat: setup fullstack backend foundation.",
          ],
          output: [
            "Backend có data seed.",
            "Route list rõ.",
            "Project/Task API skeleton chạy.",
          ],
        },
        {
          id: "day-12-block-3",
          time: "11:00 - 13:00",
          label: "Flow 2 — Backend Auth + Role",
          description: "Auth là cổng của toàn bộ app.",
          type: "deep",
          tasks: [
            "Implement login endpoint trả token/user.",
            "Implement me endpoint.",
            "Implement logout endpoint.",
            "Middleware auth bảo vệ private routes.",
            "Middleware role chặn admin/manager/technician.",
            "Admin: quản lý projects.",
            "Manager: quản lý tasks.",
            "Technician: chỉ xem assigned tasks nếu kịp.",
            "Test 401/403/422 bằng Postman.",
            "Commit: feat: implement backend auth and role access.",
          ],
          output: [
            "Login/me/logout chạy.",
            "Role middleware chạy.",
            "401/403/422 rõ.",
          ],
        },
        {
          id: "day-12-block-4",
          time: "13:00 - 13:45",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: ["Ăn trưa.", "Không mở thêm scope.", "Chiều dựng React."],
          output: ["Quay lại 13:45."],
        },
        {
          id: "day-12-block-5",
          time: "13:45 - 15:45",
          label: "Flow 3 — React Foundation + Auth",
          description: "Dựng frontend dùng UI system ngày 11.",
          type: "practice",
          tasks: [
            "Tạo frontend nếu chưa có: Vite React.",
            "Cài axios, react-router-dom, @tanstack/react-query, zustand.",
            "Setup QueryClientProvider.",
            "Setup router.",
            "Setup authStore.",
            "Setup Axios instance trỏ VITE_API_URL.",
            "Tạo LoginPage gọi Laravel login.",
            "Tạo ProtectedRoute.",
            "Tạo DashboardLayout.",
            "Sau login redirect dashboard.",
            "Commit: feat: setup react foundation and login flow.",
          ],
          output: [
            "React login gọi Laravel API.",
            "Dashboard protected.",
            "Auth persist qua reload.",
          ],
        },
        {
          id: "day-12-block-6",
          time: "15:45 - 17:45",
          label: "Flow 4 — Project CRUD full slice",
          description: "Ship lát cắt fullstack đầu tiên.",
          type: "practice",
          tasks: [
            "Backend: đảm bảo Project index/store/update/delete chạy.",
            "Frontend: tạo projectApi.",
            "Frontend: tạo useProjects/useCreateProject/useUpdateProject/useDeleteProject.",
            "Tạo ProjectListPage dùng DataTable.",
            "Tạo Create/Edit Project modal.",
            "Submit form gọi mutation.",
            "Validation error 422 hiển thị field.",
            "Delete có confirm.",
            "Mutation xong invalidate list.",
            "Commit: feat: implement fullstack project crud.",
          ],
          output: [
            "Project CRUD chạy từ React tới Laravel.",
            "Form lỗi hiển thị rõ.",
            "List refresh sau mutation.",
          ],
        },
        {
          id: "day-12-block-7",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không thêm module mới.",
            "Tối dashboard/task cơ bản.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-12-block-8",
          time: "18:30 - 20:00",
          label: "Flow 5 — Dashboard + Task starter",
          description: "Đưa project từ CRUD demo lên admin app.",
          type: "review",
          tasks: [
            "Backend dashboard endpoint: counts projects/tasks/users.",
            "Frontend DashboardPage hiển thị stat cards.",
            "Backend Task index/store cơ bản.",
            "Frontend TaskListPage đơn giản.",
            "Task filter theo status nếu kịp.",
            "Test manual: login → dashboard → project CRUD → task list.",
            "Commit: feat: add dashboard stats and task starter.",
          ],
          output: [
            "Dashboard có số liệu từ API.",
            "Task list cơ bản chạy.",
            "Full flow manual test qua được.",
          ],
        },
        {
          id: "day-12-block-9",
          time: "20:00 - 20:30",
          label: "Reflect — Fullstack Day 1 Review",
          description: "Chốt tiến độ và debt.",
          type: "review",
          tasks: [
            "Viết completed features.",
            "Viết bugs còn lại.",
            "Viết tech debt.",
            "Viết plan ngày 13.",
            "Commit: docs: add fullstack day 1 review.",
          ],
          output: ["Có review Day 12.", "Có plan Day 13 rõ."],
        },
      ],

      checklist: [
        "Có fullstack scope/ERD/API plan.",
        "Laravel auth/role chạy.",
        "React login chạy.",
        "Protected route chạy.",
        "Project CRUD fullstack chạy.",
        "Dashboard count chạy.",
        "Task list starter chạy.",
        "Có manual test flow.",
        "Có review cuối ngày.",
      ],

      benchmark:
        "Cuối ngày 12 phải có fullstack vertical slice thật: login React → Laravel API → dashboard → project CRUD. Không còn frontend mock chơi.",
    },

    {
      id: "day-13",
      phaseId: "week-2",
      day: "Day 13",
      title: "Fullstack Project Day 2 — Task Workflow + Role + Polish + Tests",
      status: "not-started",
      difficulty: "Boss Fight",
      duration: "08:00 - 20:30",

      hook: "Ngày 13 biến project từ chạy được thành đáng show. Thêm role flow, task workflow, validation, tests, README. Đây là ngày dự án bắt đầu giống sản phẩm chứ không chỉ CRUD.",

      perspectives: [
        {
          label: "Mapping",
          text: "Junior nhận task không chỉ tạo CRUD. Phải xử lý workflow: task status, role permission, activity log, filter, validation, test.",
        },
        {
          label: "Ultralearning",
          text: "Làm theo bug/feature loop: chọn feature → backend → frontend → test → commit. Không polish UI trước khi flow xong.",
        },
        {
          label: "Hard Mode",
          text: "Mọi role phải bị chặn đúng. Không admin thì không thấy admin page. Không manager thì không update task. Sai role phải 403.",
        },
      ],

      methods: {
        mapping:
          "Map role matrix: admin/manager/technician → allowed pages → allowed endpoints → UI hidden/disabled.",
        ultralearning: "Mỗi role test bằng account seed thật.",
        goldilocks:
          "Nếu role quá nhiều, chốt 3 flow: admin project, manager task, technician view assigned.",
        hardMode:
          "Không chỉ ẩn nút frontend. Backend phải chặn bằng middleware/policy.",
      },

      goal: [
        "Hoàn thiện Task CRUD/workflow.",
        "Thêm role-based UI và API protection.",
        "Thêm activity log hoặc comments.",
        "Thêm filter/search/pagination.",
        "Thêm feature tests backend cơ bản.",
        "Polish README và demo flow.",
      ],

      timeBlocks: [
        {
          id: "day-13-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Role Matrix",
          description: "Chốt quyền trước khi code.",
          type: "setup",
          tasks: [
            "Tạo role matrix: admin, manager, technician.",
            "Admin: manage projects/users.",
            "Manager: manage tasks in projects.",
            "Technician: view/update own assigned tasks.",
            "Map mỗi role với route frontend.",
            "Map mỗi role với middleware/backend endpoint.",
            "Viết test cases 403.",
            "Commit: docs: add role matrix and day 13 plan.",
          ],
          output: ["Có role matrix.", "Có test cases role."],
        },
        {
          id: "day-13-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Backend Task Workflow",
          description: "Task không chỉ title/status, nó có lifecycle.",
          type: "deep",
          tasks: [
            "Task statuses: pending, in_progress, blocked, completed, cancelled.",
            "Validate status enum bằng FormRequest.",
            "TaskService updateStatus(task, status, user).",
            "Rule: technician chỉ update task được assign.",
            "Rule: manager/admin update task trong project.",
            "Ghi activity log khi status đổi.",
            "Endpoint PATCH /api/tasks/{task}/status.",
            "Endpoint GET /api/tasks?status=&project_id=&search=.",
            "Test manual với các role.",
            "Commit: feat: implement task workflow and activity logs.",
          ],
          output: [
            "Task workflow endpoint chạy.",
            "Activity log ghi được.",
            "Role backend chặn đúng.",
          ],
        },
        {
          id: "day-13-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ ngắn.",
          type: "break",
          tasks: [
            "Uống nước.",
            "Tự trả lời: ẩn nút frontend có đủ bảo mật không?",
          ],
          output: ["Biết backend mới là chỗ chặn quyền thật."],
        },
        {
          id: "day-13-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Frontend Task Workflow",
          description: "UI cho workflow task.",
          type: "deep",
          tasks: [
            "Tạo taskApi: list, create, update, updateStatus, delete.",
            "Tạo hooks useTasks/useUpdateTaskStatus.",
            "TaskListPage có filter status/project/search.",
            "Status badge theo màu.",
            "Dropdown đổi status.",
            "Mutation optimistic update nếu ổn.",
            "Nếu status blocked, cho nhập note/reason nếu kịp.",
            "Role UI: technician chỉ thấy task được assign.",
            "Ẩn action không hợp role nhưng vẫn nhớ backend phải chặn.",
            "Commit: feat: implement task workflow frontend.",
          ],
          output: [
            "TaskList filter được.",
            "Đổi status từ UI.",
            "Role UI cơ bản.",
          ],
        },
        {
          id: "day-13-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: ["Ăn trưa.", "Không thêm UI rườm rà.", "Chiều test."],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-13-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Backend Feature Tests",
          description: "Test những thứ dễ vỡ nhất.",
          type: "deep",
          tasks: [
            "Test login success/fail.",
            "Test unauthenticated route trả 401.",
            "Test wrong role route trả 403.",
            "Test create project validation 422.",
            "Test manager can create task.",
            "Test technician cannot update unassigned task.",
            "Test update task status creates activity log.",
            "Dùng RefreshDatabase.",
            "Dùng actingAs hoặc token theo auth setup.",
            "Chạy php artisan test.",
            "Commit: test: add auth role task workflow feature tests.",
          ],
          output: [
            "Có feature tests quan trọng.",
            "Test xanh hoặc có note lỗi cụ thể.",
          ],
        },
        {
          id: "day-13-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Kiểm tra test và scope.",
          type: "break",
          tasks: [
            "Nếu test fail quá nhiều, ưu tiên auth/role/test status.",
            "Nếu test xanh, thêm pagination/filter test.",
            "Không mở feature mới.",
          ],
          output: ["Có danh sách test còn fail nếu có."],
        },
        {
          id: "day-13-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Polish UX + Error Handling",
          description: "Làm app đáng dùng.",
          type: "practice",
          tasks: [
            "Project/Task pages có skeleton loading.",
            "Empty state có CTA.",
            "Error state có retry.",
            "Form errors từ Laravel 422 hiển thị đúng field.",
            "403 redirect ForbiddenPage.",
            "404 NotFoundPage.",
            "Logout clear store/cache.",
            "Responsive check.",
            "Kiểm tra flow bằng 3 account role.",
            "Commit: refactor: polish ux error handling role flows.",
          ],
          output: [
            "UX flow sạch.",
            "Error handling rõ.",
            "3 role test bằng tay được.",
          ],
        },
        {
          id: "day-13-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: ["Ăn tối.", "Không thêm role mới.", "Tối docs/demo."],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-13-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — README + Demo Script + CV Notes",
          description: "Biến project thành portfolio artifact.",
          type: "review",
          tasks: [
            "README có stack: Laravel, React, Tailwind, React Query, Zustand, MySQL/Docker.",
            "README có setup backend.",
            "README có setup frontend.",
            "README có demo accounts.",
            "README có API summary.",
            "README có role matrix.",
            "Viết demo script 3 phút.",
            "Viết CV bullet: Fullstack Laravel React admin system với role-based access, CRUD, testing.",
            "Commit: docs: add readme demo script and cv notes.",
          ],
          output: ["README đủ mạnh.", "Có demo script.", "Có CV bullet nháp."],
        },
        {
          id: "day-13-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Fullstack Interview Lock",
          description: "Khóa câu chuyện project.",
          type: "review",
          tasks: [
            "Trả lời: project này giải quyết vấn đề gì?",
            "Trả lời: role-based access hoạt động thế nào?",
            "Trả lời: React Query dùng ở đâu?",
            "Trả lời: Laravel Service Layer dùng ở đâu?",
            "Trả lời: test nào quan trọng nhất?",
            "Ghi 5 điểm cần xử Chủ nhật.",
            "Commit: docs: add day 13 fullstack reflection.",
          ],
          output: ["Có reflection Day 13.", "Có plan Day 14."],
        },
      ],

      checklist: [
        "Task workflow backend chạy.",
        "Role backend chặn đúng.",
        "Task workflow frontend chạy.",
        "Có activity log hoặc comment.",
        "Có filter/search task.",
        "Có feature tests auth/role/task.",
        "Có UX loading/error/empty.",
        "Có README/demo script.",
        "Có CV bullet nháp.",
      ],

      benchmark:
        "Cuối ngày 13 project phải giống admin system thật: role, task workflow, API protection, React UI, tests và README. Có thể demo từ login tới task status update.",
    },

    {
      id: "day-14",
      phaseId: "week-2",
      day: "Day 14",
      title: "Sunday Fullstack Boss Fight — Stabilize, Test, Demo, Ship",
      status: "not-started",
      difficulty: "Boss Fight",
      duration: "08:00 - 20:30",

      hook: "Chủ nhật tuần 2 là ngày biến đống code thành sản phẩm trình bày được. Junior không chỉ code được, mà phải biết ổn định flow, test, viết docs, demo rõ, tự nhận ra debt. Hôm nay không học thêm quá nhiều, hôm nay ship.",

      perspectives: [
        {
          label: "Mapping",
          text: "Một project đáng show cần: chạy được, test được, setup được, demo được, giải thích được. Nếu thiếu một trong năm cái này, interviewer sẽ thấy ngay.",
        },
        {
          label: "Ultralearning",
          text: "Tập trung vào feedback loop: chạy full flow → thấy lỗi → fix → test lại → commit. Không học thêm công nghệ mới.",
        },
        {
          label: "Hard Mode",
          text: "Không giấu bug. Ghi Known limitations. Không nói project hoàn hảo. Nói rõ trade-off và việc sẽ cải thiện.",
        },
      ],

      methods: {
        mapping:
          "Map project quality gate: install, env, migrate, seed, test, run backend, run frontend, login demo, CRUD demo, role demo.",
        ultralearning:
          "Một ngày chỉ fix thứ làm project demo tốt hơn. Không rẽ sang feature mới không cần.",
        goldilocks:
          "Nếu test/deploy quá nặng, ưu tiên local demo ổn + README. Nếu ổn, thêm GitHub Actions hoặc deploy thử.",
        hardMode:
          "Mọi bug phát hiện phải ghi issue/note. Không bỏ qua lỗi vì 'chắc không ai thấy'.",
      },

      goal: [
        "Ổn định fullstack project.",
        "Chạy qua toàn bộ demo flow.",
        "Viết thêm test quan trọng.",
        "Fix lỗi UI/API/status code.",
        "Hoàn thiện README/API docs.",
        "Chuẩn bị demo script và interview story.",
        "Nếu đủ sức, thêm CI hoặc deploy thử.",
      ],

      timeBlocks: [
        {
          id: "day-14-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Quality Gate Checklist",
          description: "Chốt tiêu chuẩn ship trong ngày.",
          type: "setup",
          tasks: [
            "Tạo quality-gate.md.",
            "Checklist: backend install, frontend install, env, migrate, seed, test, login, CRUD, role.",
            "Chạy app từ đầu như người mới clone.",
            "Ghi lỗi setup đầu tiên gặp.",
            "Ưu tiên lỗi chặn demo.",
            "Commit: docs: add quality gate checklist.",
          ],
          output: ["Có quality gate.", "Có danh sách lỗi ưu tiên."],
        },
        {
          id: "day-14-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Backend Stabilization",
          description: "Fix backend trước vì frontend phụ thuộc API.",
          type: "deep",
          tasks: [
            "Chạy php artisan test.",
            "Chạy php artisan route:list.",
            "Kiểm tra migrate:fresh --seed chạy sạch.",
            "Kiểm tra .env.example đủ biến.",
            "Fix lỗi 500 thành error rõ nếu có.",
            "Chuẩn hóa response JSON các endpoint chính.",
            "Kiểm tra 401/403/422/404.",
            "Kiểm tra validation messages.",
            "Kiểm tra role middleware.",
            "Commit: fix: stabilize backend api quality gate.",
          ],
          output: ["Backend chạy sạch.", "Seed/test ổn.", "Status code rõ."],
        },
        {
          id: "day-14-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ ngắn.",
          type: "break",
          tasks: [
            "Uống nước.",
            "Không mở feature mới.",
            "Tự hỏi: backend đã đủ demo chưa?",
          ],
          output: ["Backend blocker được ghi rõ."],
        },
        {
          id: "day-14-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Frontend Stabilization",
          description: "Fix UI flow và error state.",
          type: "deep",
          tasks: [
            "npm run build để bắt lỗi build.",
            "Fix import/path/case-sensitive lỗi Linux.",
            "Test login/logout.",
            "Test route protection.",
            "Test project CRUD.",
            "Test task workflow.",
            "Test role UI bằng 3 account.",
            "Fix loading state bị trắng màn hình.",
            "Fix form error không hiển thị.",
            "Fix responsive cơ bản.",
            "Commit: fix: stabilize frontend demo flows.",
          ],
          output: ["Frontend build được.", "Demo flow chạy.", "Role UI ổn."],
        },
        {
          id: "day-14-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: ["Ăn trưa.", "Không nghĩ thêm feature.", "Chiều test/docs."],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-14-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Tests that Matter",
          description: "Không cần test tất cả, test thứ làm app chết nếu sai.",
          type: "deep",
          tasks: [
            "Backend: test login wrong password.",
            "Backend: test unauthenticated 401.",
            "Backend: test forbidden 403.",
            "Backend: test validation 422.",
            "Backend: test create/update task status.",
            "Backend: test activity log created.",
            "Frontend: nếu setup được, test LoginPage validation.",
            "Frontend: test ProtectedRoute redirect.",
            "Ghi rõ test nào chưa làm và vì sao.",
            "Commit: test: add critical backend frontend tests.",
          ],
          output: [
            "Critical tests có mặt.",
            "Test xanh hoặc có known failing note.",
          ],
        },
        {
          id: "day-14-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Đừng cố test tất cả tới chết.",
          type: "break",
          tasks: [
            "Nếu test fail quá nhiều, chọn 3 test quan trọng nhất.",
            "Nếu test xanh, thêm CI.",
            "Không mở refactor lớn.",
          ],
          output: ["Có test priority."],
        },
        {
          id: "day-14-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Docs + Demo Script",
          description: "Docs là thứ biến project thành portfolio.",
          type: "practice",
          tasks: [
            "README phần Overview.",
            "README phần Tech Stack.",
            "README phần Features.",
            "README phần Architecture.",
            "README phần Setup Backend.",
            "README phần Setup Frontend.",
            "README phần Demo Accounts.",
            "README phần API Summary.",
            "README phần Testing.",
            "README phần Known Limitations.",
            "Viết demo-script.md: demo 3–5 phút theo từng bước.",
            "Commit: docs: complete readme api docs and demo script.",
          ],
          output: [
            "README hoàn chỉnh.",
            "Có demo script.",
            "Có known limitations thật.",
          ],
        },
        {
          id: "day-14-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Tối chỉ ship/CI/deploy nếu đủ sức.",
            "Không thêm feature.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-14-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — CI/Deploy Optional + Final Review",
          description:
            "Nếu local ổn, thêm CI/deploy. Nếu chưa ổn, fix blocker.",
          type: "review",
          tasks: [
            "Nếu backend/frontend chưa ổn: fix blocker, không deploy.",
            "Nếu ổn: thêm GitHub Actions chạy backend test.",
            "Nếu ổn: thêm frontend build workflow.",
            "Nếu ổn: deploy frontend lên Vercel.",
            "Nếu ổn: deploy backend lên Render/Railway hoặc ghi plan deploy.",
            "Tạo .env.example đầy đủ.",
            "Tạo release tag v0.2.0-week2.",
            "Self code review: 5 điểm tốt, 5 điểm xấu.",
            "Commit: ci: add project quality workflow hoặc docs: add deploy plan.",
          ],
          output: [
            "Có CI/deploy plan hoặc workflow.",
            "Có release tag.",
            "Có self-review.",
          ],
        },
        {
          id: "day-14-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Week 2 Junior Story",
          description: "Biến tuần 2 thành bằng chứng đi apply.",
          type: "review",
          tasks: [
            "Viết week-2-reflection.md.",
            "Tóm tắt: TS đã giúp gì?",
            "Tóm tắt: React Query dùng ở đâu?",
            "Tóm tắt: Zustand dùng ở đâu?",
            "Tóm tắt: Auth/Role fullstack chạy thế nào?",
            "Viết 3 CV bullets.",
            "Viết 5 câu phỏng vấn tự hỏi tự trả lời.",
            "Chốt weak points tuần 3: testing sâu, Docker, deploy, performance.",
            "Commit: docs: add week 2 reflection and cv bullets.",
          ],
          output: [
            "Có reflection tuần 2.",
            "Có CV bullets.",
            "Có plan tuần 3.",
          ],
        },
      ],

      checklist: [
        "Backend quality gate qua.",
        "Frontend build được.",
        "Login/logout/role flow chạy.",
        "Project CRUD chạy.",
        "Task workflow chạy.",
        "Critical tests có mặt.",
        "README hoàn chỉnh.",
        "Demo script có mặt.",
        "Có CI/deploy plan hoặc workflow.",
        "Có CV bullets.",
        "Có week 2 reflection.",
      ],

      benchmark:
        "Cuối tuần 2 phải có một fullstack Laravel + React admin project chạy được, có auth/role, CRUD, task workflow, docs, tests cơ bản và câu chuyện phỏng vấn rõ ràng.",
    },
    {
      id: "day-15",
      phaseId: "week-3",
      day: "Day 15",
      title:
        "Laravel Architecture Hard Mode — Service, Repository, Policy, Clean Boundaries",
      status: "not-started",
      difficulty: "Very Hard",
      duration: "08:00 - 20:30",

      hook: "Tuần 3 bắt đầu bằng việc dọn architecture. Code chạy được chưa đủ. Junior đi làm phải biết đặt logic đúng chỗ: Controller không ôm logic, Model không thành thùng rác, Service xử lý business, Repository/query layer rõ, Policy chặn quyền, Resource định dạng output. Hôm nay mày refactor project như chuẩn PR thật.",

      perspectives: [
        {
          label: "Mapping",
          text: "Reverse engineer một task doanh nghiệp: manager đổi trạng thái task → validate request → authorize role/owner → service xử lý rule → transaction update task + activity log → resource trả response → test xác nhận. Mỗi tầng có nhiệm vụ riêng.",
        },
        {
          label: "Ultralearning",
          text: "Không học architecture bằng sơ đồ đẹp. Mở project tuần 2 ra, tìm chỗ controller đang phình, query nằm bừa, validation trộn trong component, rồi refactor từng lát. Mỗi refactor phải chạy test hoặc test tay.",
        },
        {
          label: "Hard Mode",
          text: "Không chấp nhận câu 'để tạm trong controller'. Tạm là nợ kỹ thuật. Hôm nay trả nợ. Code nào không giải thích được vì sao nằm ở đó thì phải sửa.",
        },
      ],

      methods: {
        mapping:
          "Map từng feature Project/Task thành pipeline: Route → Middleware → FormRequest → Policy → Controller → Service → Repository/Model → Resource.",
        ultralearning:
          "Chọn 3 flow quan trọng nhất và refactor thật: Project CRUD, Task status workflow, Dashboard stats.",
        goldilocks:
          "Nếu Repository làm project rối, chỉ tách Query/Service trước. Nếu đã vững, thêm interface + binding.",
        hardMode:
          "Mỗi flow sau refactor phải có test hoặc manual checklist. Không refactor mù.",
      },

      goal: [
        "Refactor Laravel backend theo boundary rõ ràng.",
        "Controller chỉ điều phối request/response.",
        "Service xử lý business logic.",
        "Policy/authorization chặn quyền đúng chỗ.",
        "Resource định dạng output nhất quán.",
        "Query/filter/pagination không rải bừa trong controller.",
        "Frontend vẫn chạy sau refactor.",
      ],

      timeBlocks: [
        {
          id: "day-15-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Architecture Audit",
          description: "Không sửa ngay. Đầu tiên soi project như reviewer.",
          type: "setup",
          tasks: [
            "Mở project fullstack tuần 2.",
            "Tạo file notes/day-15-architecture-audit.md.",
            "Liệt kê controller nào dài nhất.",
            "Liệt kê method nào vừa validate vừa query vừa xử lý role.",
            "Liệt kê query đang lặp lại ở nhiều nơi.",
            "Liệt kê response nào trả raw model thay vì Resource.",
            "Liệt kê rule quyền nào đang chỉ ẩn ở frontend nhưng backend chưa chặn.",
            "Chọn 3 flow cần refactor: Project CRUD, Task status, Dashboard stats.",
            "Commit: docs: add architecture audit for week 3.",
          ],
          output: ["Có architecture audit.", "Có 3 flow ưu tiên refactor."],
        },
        {
          id: "day-15-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Controller Slimming",
          description:
            "Controller phải mỏng. Controller không phải nơi nuôi business logic.",
          type: "deep",
          tasks: [
            "Mở ProjectController.",
            "Tách logic create/update/delete sang ProjectService.",
            "Controller chỉ nhận FormRequest, gọi service, trả Resource/response.",
            "Mở TaskController.",
            "Tách updateStatus sang TaskService.",
            "Đảm bảo TaskService nhận user hiện tại để check rule nghiệp vụ.",
            "Không query phức tạp trực tiếp trong controller.",
            "Nếu có dashboard controller, tách DashboardService.",
            "Chạy lại manual flow: login → project list → create/update/delete.",
            "Commit: refactor: move project task logic from controllers to services.",
          ],
          output: [
            "ProjectController mỏng.",
            "TaskController mỏng.",
            "ProjectService/TaskService/DashboardService có trách nhiệm rõ.",
          ],
        },
        {
          id: "day-15-block-3",
          time: "10:30 - 10:45",
          label: "Break — Boundary check",
          description: "Nghỉ và tự kiểm tra boundary.",
          type: "break",
          tasks: [
            "Tự hỏi: controller bây giờ làm gì?",
            "Tự hỏi: service bây giờ làm gì?",
            "Nếu câu trả lời nhập nhằng, ghi lại để sửa tiếp.",
          ],
          output: ["Hiểu rõ controller vs service."],
        },
        {
          id: "day-15-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — FormRequest + Resource Discipline",
          description: "Input và output phải có cổng riêng.",
          type: "deep",
          tasks: [
            "Kiểm tra StoreProjectRequest, UpdateProjectRequest.",
            "Đưa tất cả validation project vào FormRequest.",
            "Kiểm tra StoreTaskRequest, UpdateTaskRequest, UpdateTaskStatusRequest.",
            "Đưa rule status enum vào FormRequest.",
            "Custom messages nếu lỗi khó hiểu.",
            "Dùng authorize() trong FormRequest nếu phù hợp.",
            "Tạo/chuẩn hóa ProjectResource.",
            "Tạo/chuẩn hóa TaskResource.",
            "Resource không leak field nhạy cảm.",
            "Dùng whenLoaded cho relationship.",
            "Frontend kiểm tra response shape có bị thay đổi không.",
            "Commit: refactor: standardize form requests and api resources.",
          ],
          output: [
            "Validation nằm trong FormRequest.",
            "API output qua Resource.",
            "Frontend không bị vỡ response.",
          ],
        },
        {
          id: "day-15-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa. Chiều xử quyền và query.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không mở thêm feature mới.",
            "Ghi nhanh nếu có bug refactor.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-15-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Policy + Authorization Layer",
          description: "Ẩn nút frontend không phải bảo mật. Backend phải chặn.",
          type: "deep",
          tasks: [
            "Tạo ProjectPolicy nếu chưa có.",
            "Tạo TaskPolicy nếu chưa có.",
            "Policy methods: viewAny, view, create, update, delete.",
            "TaskPolicy thêm updateStatus nếu cần.",
            "Admin có quyền rộng.",
            "Manager chỉ quản lý project/task được giao.",
            "Technician chỉ xem hoặc update task được assign.",
            "Gọi $this->authorize() hoặc Gate trong controller/service đúng chỗ.",
            "Test bằng 3 account role.",
            "Đảm bảo sai quyền trả 403.",
            "Frontend RoleRoute vẫn giữ, nhưng backend là lớp quyết định.",
            "Commit: feat: add policies for project and task authorization.",
          ],
          output: [
            "Policy chặn quyền backend.",
            "Sai role trả 403.",
            "3 account role test được.",
          ],
        },
        {
          id: "day-15-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Policy khó là bình thường.",
          type: "break",
          tasks: [
            "Nếu policy rối, vẽ role matrix lại.",
            "Nếu policy ổn, thêm test 403.",
            "Không bỏ quyền ở frontend-only.",
          ],
          output: ["Có note quyền nào còn mơ hồ."],
        },
        {
          id: "day-15-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Query Layer + Filters + Dashboard Service",
          description: "Query lặp là mùi code. Dashboard query càng cần rõ.",
          type: "practice",
          tasks: [
            "Tạo ProjectQuery hoặc ProjectFilter class nếu project list nhiều filter.",
            "Tạo TaskQuery hoặc TaskFilter class cho status/search/project_id/assignee.",
            "Không để controller build query dài 50 dòng.",
            "DashboardService tính total projects, open tasks, completed tasks, overdue tasks.",
            "Dùng withCount nếu cần.",
            "Dùng selectRaw/groupBy cho stats nếu cần.",
            "Kiểm tra query log hoặc debug bằng toSql() khi cần.",
            "Đảm bảo pagination meta đúng.",
            "Commit: refactor: extract query filters and dashboard service.",
          ],
          output: [
            "Filter/query gọn.",
            "DashboardService rõ.",
            "Controller không còn query phức tạp.",
          ],
        },
        {
          id: "day-15-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không refactor lớn lúc mệt.",
            "Tối chạy test và review.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-15-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Regression Test + Frontend Smoke Test",
          description:
            "Refactor mà không test là đánh bạc ngu. Refactor có test là đánh bạc có tính toán.",
          type: "review",
          tasks: [
            "Chạy php artisan test.",
            "Test manual login.",
            "Test project CRUD.",
            "Test task status update.",
            "Test dashboard stats.",
            "Test wrong role 403.",
            "Chạy frontend npm run build.",
            "Fix lỗi response shape nếu frontend vỡ.",
            "Ghi regression-checklist.md.",
            "Commit: test: verify architecture refactor regression.",
          ],
          output: [
            "Backend tests/manual flow qua.",
            "Frontend build qua.",
            "Có regression checklist.",
          ],
        },
        {
          id: "day-15-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Architecture Interview Lock",
          description: "Biến refactor thành kiến thức phỏng vấn.",
          type: "review",
          tasks: [
            "Trả lời: vì sao controller nên mỏng?",
            "Trả lời: Service Layer chứa gì?",
            "Trả lời: Policy khác middleware ở đâu?",
            "Trả lời: Resource dùng để làm gì?",
            "Trả lời: query/filter class giúp gì?",
            "Viết 3 trade-off khi dùng Repository trong Laravel.",
            "Commit: docs: add day 15 architecture reflection.",
          ],
          output: ["Có note Day 15.", "Có câu trả lời architecture."],
        },
      ],

      checklist: [
        "Có architecture audit.",
        "Controller được làm mỏng.",
        "Service xử lý business logic.",
        "FormRequest chuẩn hóa input.",
        "Resource chuẩn hóa output.",
        "Policy chặn quyền backend.",
        "Filter/query layer gọn hơn.",
        "DashboardService rõ.",
        "Regression test/manual flow qua.",
        "Có reflection architecture.",
      ],

      benchmark:
        "Cuối ngày 15 project phải có architecture sạch hơn rõ ràng. Mày phải giải thích được từng tầng trong Laravel API và vì sao logic nằm ở đó.",
    },

    {
      id: "day-16",
      phaseId: "week-3",
      day: "Day 16",
      title: "Testing Hard Mode — Laravel Feature/Unit + React Component Tests",
      status: "not-started",
      difficulty: "Very Hard",
      duration: "08:00 - 20:30",

      hook: "Test không phải để khoe coverage. Test là dây an toàn để mày dám refactor, dám sửa bug, dám nhận task mà không làm vỡ app. Junior biết test sẽ được giao task thật sớm hơn vì team tin code của mày hơn.",

      perspectives: [
        {
          label: "Mapping",
          text: "Map rủi ro project thành test: auth sai → mất bảo mật, role sai → lộ dữ liệu, validation sai → data bẩn, transaction sai → mất dữ liệu, component lỗi → user không dùng được.",
        },
        {
          label: "Ultralearning",
          text: "Không viết test theo tutorial. Chọn 10 lỗi nguy hiểm nhất của project và viết test chặn chúng.",
        },
        {
          label: "Hard Mode",
          text: "Không nói 'test sau'. Test sau thường là không bao giờ. Hôm nay test các flow sống còn trước.",
        },
      ],

      methods: {
        mapping:
          "Risk-based testing: feature nào nguy hiểm nhất thì test trước. Auth/role/validation/workflow trước UI đẹp.",
        ultralearning:
          "Mỗi test phải fail trước hoặc ít nhất chứng minh được một behavior quan trọng.",
        goldilocks:
          "Nếu test Laravel khó, ưu tiên Feature Test. Nếu ổn, thêm Unit Test Service. React test chỉ test behavior chính.",
        hardMode:
          "Không mock database lung tung cho feature test. Dùng RefreshDatabase để test gần thực tế.",
      },

      goal: [
        "Viết Laravel Feature Tests cho auth, role, CRUD, validation.",
        "Viết Unit Test cho Service quan trọng.",
        "Biết dùng factory/seed/actingAs/assertDatabaseHas.",
        "Viết React tests cho LoginForm, ProtectedRoute, ProjectForm hoặc TaskList.",
        "Biết test loading/error/empty state cơ bản.",
        "Biết chọn test theo rủi ro thay vì chạy theo coverage ảo.",
      ],

      timeBlocks: [
        {
          id: "day-16-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Risk-based Test Plan",
          description:
            "Không viết test lung tung. Viết test để chặn lỗi chết người.",
          type: "setup",
          tasks: [
            "Tạo notes/day-16-test-plan.md.",
            "Liệt kê 10 rủi ro của project: login sai, role sai, task status sai, validation sai, delete nhầm.",
            "Chia test thành backend feature, backend unit, frontend component.",
            "Chọn 5 test backend bắt buộc.",
            "Chọn 3 test frontend bắt buộc.",
            "Commit: docs: add risk based testing plan.",
          ],
          output: ["Có test plan theo rủi ro.", "Có danh sách test ưu tiên."],
        },
        {
          id: "day-16-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Laravel Feature Tests: Auth + Role",
          description: "Test lớp bảo mật trước.",
          type: "deep",
          tasks: [
            "Chạy php artisan test để xem baseline.",
            "Dùng RefreshDatabase.",
            "Tạo users bằng factory: admin, manager, technician.",
            "Test login đúng trả token/user.",
            "Test login sai password trả 401.",
            "Test endpoint private không auth trả 401.",
            "Test admin route với technician trả 403.",
            "Test manager route với manager trả 200.",
            "Test logout revoke token hoặc clear session tùy auth.",
            "Dùng assertJsonStructure cho response.",
            "Commit: test: add auth and role feature tests.",
          ],
          output: [
            "Có test auth/role.",
            "Test 401/403 rõ.",
            "php artisan test chạy được.",
          ],
        },
        {
          id: "day-16-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ ngắn.",
          type: "break",
          tasks: [
            "Uống nước.",
            "Tự hỏi: test nào bảo vệ tiền/data/quyền nhất?",
            "Không viết test vô nghĩa chỉ để tăng số lượng.",
          ],
          output: ["Biết test nào quan trọng nhất."],
        },
        {
          id: "day-16-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Laravel Feature Tests: CRUD + Validation + Workflow",
          description: "Test behavior chính của Project/Task.",
          type: "deep",
          tasks: [
            "Test list projects trả 200 và có pagination meta.",
            "Test create project valid data trả 201.",
            "Test create project thiếu name trả 422.",
            "Test update project trả 200 và database đổi.",
            "Test delete project soft delete hoặc database missing tùy thiết kế.",
            "Test create task valid data.",
            "Test update task status hợp lệ.",
            "Test update task status không hợp lệ trả 422.",
            "Test technician không được update task không assigned.",
            "Test update status tạo activity log.",
            "Commit: test: add project task workflow feature tests.",
          ],
          output: [
            "Có CRUD/workflow tests.",
            "Validation 422 được test.",
            "Activity log được test.",
          ],
        },
        {
          id: "day-16-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không thêm test lúc mệt.",
            "Chiều unit test service.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-16-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Unit Test Service Logic",
          description: "Unit test cho business rule, không cần HTTP.",
          type: "deep",
          tasks: [
            "Chọn TaskService hoặc ProjectService.",
            "Xác định business rules trong service.",
            "Test updateStatus từ pending → in_progress hợp lệ.",
            "Test completed task không được quay lại pending nếu rule có.",
            "Test technician chỉ update assigned task.",
            "Nếu service dùng repository interface, mock repository.",
            "Nếu mock làm rối, test với database vẫn được, nhưng ghi rõ là feature/integration.",
            "Test transaction rollback nếu có thể.",
            "Commit: test: add unit tests for service business rules.",
          ],
          output: [
            "Có test business rules.",
            "Hiểu unit vs feature khác nhau.",
          ],
        },
        {
          id: "day-16-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Test có thể đau. Chọn đúng mức.",
          type: "break",
          tasks: [
            "Nếu mock quá khó, chuyển sang feature test.",
            "Nếu test xanh dễ, thêm edge case.",
            "Ghi test nào làm mày hiểu code hơn.",
          ],
          output: ["Có note test khó nhất."],
        },
        {
          id: "day-16-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — React Testing Library",
          description:
            "Test frontend như user dùng, không test implementation vặt.",
          type: "practice",
          tasks: [
            "Cài nếu chưa có: vitest, @testing-library/react, @testing-library/user-event, jsdom.",
            "Setup vitest config nếu project chưa có.",
            "Test LoginPage: nhập email/password và submit.",
            "Mock auth API hoặc mock mutation hook tùy cấu trúc.",
            "Test validation message hiển thị.",
            "Test ProtectedRoute redirect khi chưa login.",
            "Test ProjectForm hiển thị Laravel validation errors.",
            "Test EmptyState khi list rỗng.",
            "Không test class Tailwind.",
            "Commit: test: add react component tests for auth and forms.",
          ],
          output: [
            "Có ít nhất 3 frontend tests.",
            "Biết test behavior thay vì implementation.",
          ],
        },
        {
          id: "day-16-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không cố fix tất cả test fail lúc đói.",
            "Tối tổng hợp test suite.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-16-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Test Suite Cleanup + Coverage Mindset",
          description: "Dọn test để về sau dùng được.",
          type: "review",
          tasks: [
            "Chạy backend test full.",
            "Chạy frontend test full.",
            "Đặt tên test rõ behavior.",
            "Xóa test trùng/vô nghĩa.",
            "Tạo testing-notes.md: cách chạy test backend/frontend.",
            "Ghi danh sách test còn thiếu.",
            "Nếu có coverage, xem nhưng không thần thánh hóa.",
            "Commit: test: stabilize backend frontend test suites.",
          ],
          output: [
            "Backend/frontend tests chạy được.",
            "Có testing-notes.md.",
            "Có danh sách test còn thiếu.",
          ],
        },
        {
          id: "day-16-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Testing Interview Lock",
          description: "Biến test thành câu trả lời phỏng vấn.",
          type: "review",
          tasks: [
            "Trả lời: Feature Test khác Unit Test thế nào?",
            "Trả lời: RefreshDatabase dùng để làm gì?",
            "Trả lời: assertDatabaseHas dùng khi nào?",
            "Trả lời: frontend test nên test gì?",
            "Trả lời: tại sao không chạy theo coverage mù quáng?",
            "Commit: docs: add day 16 testing reflection.",
          ],
          output: ["Có note Day 16.", "Trả lời được testing basics."],
        },
      ],

      checklist: [
        "Có risk-based test plan.",
        "Có auth/role feature tests.",
        "Có CRUD/validation/workflow tests.",
        "Có service business rule tests.",
        "Có React component tests.",
        "Backend test chạy được.",
        "Frontend test chạy được.",
        "Có testing notes.",
        "Có reflection testing.",
      ],

      benchmark:
        "Cuối ngày 16 phải có test suite bảo vệ flow sống còn của project. Mày không còn sợ refactor vì đã có test chống vỡ.",
    },

    {
      id: "day-17",
      phaseId: "week-3",
      day: "Day 17",
      title:
        "Docker Fullstack Production Mindset — Nginx, PHP-FPM, MySQL, Redis, Queue",
      status: "not-started",
      difficulty: "Boss Fight",
      duration: "08:00 - 20:30",

      hook: "Code chạy trên máy mày chưa có nghĩa là chạy được cho team. Docker là cách đóng gói môi trường để người khác clone về chạy giống mày. Junior biết Docker thật sẽ không còn câu 'máy em chạy được mà'.",

      perspectives: [
        {
          label: "Mapping",
          text: "Map production stack: Nginx nhận HTTP → PHP-FPM chạy Laravel → MySQL lưu data → Redis cache/queue → Queue worker xử lý job → React build static. Docker Compose mô phỏng stack đó ở local.",
        },
        {
          label: "Ultralearning",
          text: "Không copy docker-compose không hiểu. Mỗi service phải biết image, container, port, volume, network, env, depends_on, healthcheck.",
        },
        {
          label: "Hard Mode",
          text: "Không dùng XAMPP. Không chạy backend/frontend bằng mỗi npm/php artisan serve mãi. Hôm nay đóng gói dự án như team dev thật.",
        },
      ],

      methods: {
        mapping:
          "Map từng process trong app thành container: nginx, php, mysql, redis, queue, frontend.",
        ultralearning:
          "Tự viết Dockerfile và compose, tự xem logs, tự exec vào container, tự fix permission/storage.",
        goldilocks:
          "Nếu Nginx + PHP-FPM quá khó, bắt đầu Laravel container + MySQL. Nếu ổn, thêm Redis/queue/Nginx.",
        hardMode:
          "Không được xóa volume bừa khi lỗi. Phải hiểu data nằm ở đâu.",
      },

      goal: [
        "Hiểu Docker image/container/volume/network ở mức dùng được.",
        "Dockerize Laravel backend.",
        "Chạy MySQL/Redis bằng Compose.",
        "Thêm queue worker container.",
        "Thêm Nginx/PHP-FPM nếu đủ sức.",
        "Dockerize hoặc build React frontend.",
        "Viết README chạy bằng Docker.",
      ],

      timeBlocks: [
        {
          id: "day-17-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Fullstack runtime diagram",
          description: "Vẽ stack trước khi viết Dockerfile.",
          type: "setup",
          tasks: [
            "Vẽ sơ đồ: browser → nginx/frontend → Laravel API → MySQL/Redis.",
            "Liệt kê process cần chạy: backend, frontend, db, cache, queue.",
            "Liệt kê port local: frontend 5173/80, API 8000/8080, MySQL 3306, Redis 6379.",
            "Liệt kê volume cần giữ: mysql_data, storage logs nếu cần.",
            "Commit: docs: add docker runtime diagram.",
          ],
          output: [
            "Có runtime diagram.",
            "Có danh sách containers/ports/volumes.",
          ],
        },
        {
          id: "day-17-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Laravel Dockerfile + PHP Container",
          description: "Đóng gói backend trước.",
          type: "deep",
          tasks: [
            "Tạo docker/backend/Dockerfile.",
            "Base image php:8.4-fpm hoặc image phù hợp với PHP runtime.",
            "Cài extension cần: pdo_mysql, mbstring, bcmath nếu cần.",
            "Copy composer từ image composer hoặc cài composer.",
            "Set workdir /var/www/html.",
            "Copy composer.json/composer.lock trước để cache layer.",
            "composer install.",
            "Copy source.",
            "Set permission storage/bootstrap/cache.",
            "Tạo .dockerignore loại vendor/node_modules/storage logs không cần.",
            "Build image backend.",
            "Commit: chore: add laravel backend dockerfile.",
          ],
          output: ["Backend image build được.", "Hiểu Dockerfile từng layer."],
        },
        {
          id: "day-17-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ ngắn.",
          type: "break",
          tasks: [
            "Tự trả lời: image khác container thế nào?",
            "Tự trả lời: vì sao copy composer.json trước source?",
          ],
          output: ["Trả lời được image/container/cache layer."],
        },
        {
          id: "day-17-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Docker Compose: Laravel + MySQL + Redis",
          description: "Compose là bản đồ chạy nhiều container.",
          type: "deep",
          tasks: [
            "Tạo docker-compose.yml ở root project.",
            "Service app/backend dùng Dockerfile vừa tạo.",
            "Service mysql dùng mysql:8.0.",
            "Service redis dùng redis alpine.",
            "Tạo networks riêng.",
            "Tạo volumes mysql_data.",
            "Set env DB_HOST=mysql, REDIS_HOST=redis.",
            "docker compose up -d --build.",
            "docker compose exec app php artisan migrate:fresh --seed.",
            "docker compose logs -f app.",
            "Test API health từ host.",
            "Commit: chore: add docker compose mysql redis backend.",
          ],
          output: [
            "Compose chạy Laravel + MySQL + Redis.",
            "Migrate/seed trong container được.",
          ],
        },
        {
          id: "day-17-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không xóa volume khi chưa hiểu.",
            "Chiều thêm queue/nginx/frontend.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-17-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Queue Worker + Scheduler Mindset",
          description:
            "App thật có job chạy nền, không phải mọi thứ sync trong request.",
          type: "deep",
          tasks: [
            "Cấu hình QUEUE_CONNECTION=redis hoặc database tùy setup.",
            "Tạo job ví dụ: SendTaskAssignedNotification hoặc GenerateReportJob.",
            "Dispatch job khi task assigned/status changed.",
            "Thêm service queue vào docker-compose dùng cùng image app.",
            "Command: php artisan queue:work --tries=3 --timeout=90.",
            "Xem logs queue worker.",
            "Test job chạy khi tạo/update task.",
            "Ghi note: request không nên gửi email/report nặng sync.",
            "Commit: feat: add queue worker container and sample job.",
          ],
          output: [
            "Queue worker container chạy.",
            "Job dispatch và xử lý được.",
          ],
        },
        {
          id: "day-17-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Docker đau là bình thường.",
          type: "break",
          tasks: [
            "Nếu compose fail, đọc logs trước khi sửa bừa.",
            "Nếu queue khó, giữ database queue trước rồi nâng Redis sau.",
            "Ghi lỗi Docker khó nhất.",
          ],
          output: ["Có Docker error note."],
        },
        {
          id: "day-17-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Nginx + Frontend Container",
          description: "Đưa stack gần production hơn.",
          type: "practice",
          tasks: [
            "Thêm nginx service proxy vào php-fpm nếu đủ sức.",
            "Tạo nginx config: root /var/www/html/public, try_files, fastcgi_pass app:9000.",
            "Nếu Nginx quá nặng, giữ php artisan serve container và ghi limitation.",
            "Dockerize React frontend dev hoặc production build.",
            "Frontend dev: node image chạy npm run dev -- --host 0.0.0.0.",
            "Frontend prod: build static và serve bằng nginx.",
            "Set VITE_API_URL trỏ API container/host phù hợp.",
            "Test browser gọi API được.",
            "Commit: chore: add nginx frontend docker services.",
          ],
          output: [
            "Có Nginx hoặc frontend container.",
            "Frontend gọi API trong Docker được hoặc có note limitation rõ.",
          ],
        },
        {
          id: "day-17-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không debug Docker networking lúc đói.",
            "Tối viết docs và cleanup.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-17-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Docker README + Troubleshooting",
          description:
            "Docker mà không docs thì người khác vẫn không chạy được.",
          type: "review",
          tasks: [
            "Viết docs/docker.md.",
            "Ghi commands: up, down, build, logs, exec, migrate, seed, test.",
            "Ghi cách reset DB volume an toàn.",
            "Ghi common errors: permission storage, DB connection refused, port conflict.",
            "Chạy thử từ clean state nếu có thể.",
            "Đảm bảo .env.example khớp Docker.",
            "Commit: docs: add docker setup and troubleshooting guide.",
          ],
          output: [
            "Có Docker docs.",
            "Người khác clone có thể chạy theo docs.",
          ],
        },
        {
          id: "day-17-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Docker Interview Lock",
          description: "Khóa câu trả lời Docker.",
          type: "review",
          tasks: [
            "Trả lời: image khác container?",
            "Trả lời: volume dùng để làm gì?",
            "Trả lời: network trong compose giúp gì?",
            "Trả lời: vì sao DB_HOST=mysql trong container?",
            "Trả lời: queue worker là gì?",
            "Commit: docs: add day 17 docker reflection.",
          ],
          output: ["Có note Day 17.", "Trả lời được Docker fundamentals."],
        },
      ],

      checklist: [
        "Có runtime diagram.",
        "Backend Dockerfile build được.",
        "Compose chạy MySQL/Redis/backend.",
        "Migrate/seed trong container được.",
        "Queue worker container chạy.",
        "Có sample job chạy nền.",
        "Có Nginx hoặc frontend container/plan rõ.",
        "Frontend gọi API được.",
        "Có Docker docs/troubleshooting.",
        "Có reflection Docker.",
      ],

      benchmark:
        "Cuối ngày 17 project phải có Docker setup đủ nghiêm túc để người khác clone và chạy. Mày phải debug được logs, exec container, migrate, seed, queue worker.",
    },

    {
      id: "day-18",
      phaseId: "week-3",
      day: "Day 18",
      title:
        "Queues, Cache, Events, Notifications — Backend làm việc như hệ thống thật",
      status: "not-started",
      difficulty: "Very Hard",
      duration: "08:00 - 20:30",

      hook: "App thật không xử lý mọi thứ trong một request. Gửi email, tạo report, log activity, clear cache, notify user — nhiều thứ phải chạy nền hoặc event-driven. Hôm nay mày học cách backend thở như hệ thống thật.",

      perspectives: [
        {
          label: "Mapping",
          text: "Task status đổi → event TaskStatusChanged → listener ghi activity log → job gửi notification → cache dashboard bị invalidate. Đây là chuỗi production hơn rất nhiều so với controller update xong return.",
        },
        {
          label: "Ultralearning",
          text: "Không học queue/cache bằng khái niệm. Gắn vào project: dashboard cache, task notification job, activity event, scheduled cleanup.",
        },
        {
          label: "Hard Mode",
          text: "Không cache bừa. Cache sai còn nguy hiểm hơn không cache. Cache cái đọc nhiều, invalidate khi data đổi.",
        },
      ],

      methods: {
        mapping:
          "Map side effects: update task → activity log, notify assignee, update dashboard stats/cache.",
        ultralearning: "Mỗi concept phải có feature thật trong project.",
        goldilocks:
          "Nếu Redis khó, dùng database queue/cache trước. Nếu ổn, chuyển Redis.",
        hardMode:
          "Không để request chờ việc nặng nếu có thể queue. Không cache mà không có invalidation.",
      },

      goal: [
        "Hiểu event/listener/job trong Laravel.",
        "Dispatch job khi task assigned/status changed.",
        "Cache dashboard/list data đúng chỗ.",
        "Invalidate cache khi project/task thay đổi.",
        "Tạo notification/log activity flow.",
        "Tạo scheduled command cleanup/report nếu kịp.",
      ],

      timeBlocks: [
        {
          id: "day-18-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Side effects trong project",
          description: "Tìm những thứ không nên nhét vào controller.",
          type: "setup",
          tasks: [
            "Liệt kê side effects: activity log, notification, dashboard cache, report export, cleanup.",
            "Chọn 3 thứ sẽ làm hôm nay.",
            "Vẽ flow TaskStatusChanged.",
            "Ghi cache candidates: dashboard stats, project list filters, task counts.",
            "Commit: docs: add events queue cache mapping.",
          ],
          output: ["Có side-effect map.", "Có cache candidate list."],
        },
        {
          id: "day-18-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Events + Listeners",
          description: "Tách side effects khỏi service chính.",
          type: "deep",
          tasks: [
            "Tạo event TaskStatusChanged.",
            "Event chứa task, oldStatus, newStatus, actor.",
            "Dispatch event trong TaskService sau khi update status thành công.",
            "Tạo listener WriteTaskActivityLog.",
            "Listener ghi activity_logs.",
            "Tạo listener ClearDashboardCache nếu cần.",
            "Đăng ký event/listener nếu Laravel version cần.",
            "Test update status tạo activity log.",
            "Commit: feat: add task status event and activity listener.",
          ],
          output: [
            "TaskStatusChanged event chạy.",
            "Activity log được ghi qua listener.",
          ],
        },
        {
          id: "day-18-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ ngắn.",
          type: "break",
          tasks: [
            "Tự trả lời: event khác job thế nào?",
            "Tự trả lời: listener để làm gì?",
          ],
          output: ["Trả lời được event/listener."],
        },
        {
          id: "day-18-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Queue Jobs + Notification",
          description: "Việc chậm đưa vào queue.",
          type: "deep",
          tasks: [
            "Tạo job SendTaskAssignedNotification.",
            "Job nhận taskId thay vì serialize object quá nặng nếu cần.",
            "Trong job load task + assignee.",
            "Tạm thời log notification thay vì gửi email thật nếu chưa setup mail.",
            "Dispatch job khi task assigned hoặc status changed.",
            "Cấu hình queue database hoặc redis.",
            "Chạy queue worker.",
            "Test job chạy bằng logs.",
            "Xử lý failed job cơ bản.",
            "Commit: feat: add queued task notification job.",
          ],
          output: [
            "Job được dispatch.",
            "Queue worker xử lý job.",
            "Log notification xuất hiện.",
          ],
        },
        {
          id: "day-18-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không debug queue worker khi đói.",
            "Chiều cache.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-18-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Cache Dashboard + Invalidation",
          description: "Cache phải có chiến lược, không cache theo cảm hứng.",
          type: "deep",
          tasks: [
            "Mở DashboardService.",
            "Xác định stats đọc nhiều: total projects, open tasks, completed tasks, overdue.",
            "Dùng Cache::remember với TTL 5 phút hoặc phù hợp.",
            "Đặt key rõ: dashboard.stats.admin hoặc theo user role nếu dữ liệu khác nhau.",
            "Khi task/project thay đổi, clear đúng cache key.",
            "Không cache data theo user nếu chưa đưa user id vào key.",
            "Log hoặc debug để biết cache hit/miss.",
            "Test stats cập nhật sau khi task status đổi.",
            "Commit: feat: cache dashboard stats with invalidation.",
          ],
          output: [
            "Dashboard stats được cache.",
            "Cache clear khi data đổi.",
            "Không leak data giữa role.",
          ],
        },
        {
          id: "day-18-block-7",
          time: "15:30 - 15:45",
          label: "Break — Cache sanity check",
          description: "Cache sai rất nguy hiểm.",
          type: "break",
          tasks: [
            "Tự hỏi: cache key có user/role chưa?",
            "Tự hỏi: khi data đổi cache có clear không?",
            "Nếu không chắc, giảm cache scope.",
          ],
          output: ["Có cache safety note."],
        },
        {
          id: "day-18-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Artisan Command + Scheduler",
          description: "Hệ thống thật có việc chạy định kỳ.",
          type: "practice",
          tasks: [
            "Tạo artisan command: tasks:mark-overdue hoặc reports:daily-summary.",
            "Command tìm task quá hạn và ghi log/report.",
            "Thêm option --dry-run nếu muốn an toàn.",
            "Đăng ký schedule chạy daily nếu cấu trúc Laravel yêu cầu.",
            "Test command bằng php artisan.",
            "Nếu dùng Docker, chạy command trong container.",
            "Ghi docs cách chạy command.",
            "Commit: feat: add scheduled task/report command.",
          ],
          output: ["Có artisan command chạy được.", "Có docs command."],
        },
        {
          id: "day-18-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: ["Ăn tối.", "Tối test toàn flow.", "Không thêm concept mới."],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-18-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Tests + Observability Notes",
          description: "Queue/cache/event phải test hoặc ít nhất verify rõ.",
          type: "review",
          tasks: [
            "Test update status creates activity log.",
            "Test event dispatch nếu dùng Event::fake phù hợp.",
            "Test job dispatch nếu dùng Queue::fake.",
            "Test dashboard endpoint trả data.",
            "Manual verify cache clear.",
            "Ghi observability-notes.md: log nào xem khi queue fail, cache sai, command fail.",
            "Commit: test: verify events jobs cache behavior.",
          ],
          output: [
            "Có tests hoặc manual verification rõ.",
            "Có observability notes.",
          ],
        },
        {
          id: "day-18-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Backend Systems Interview Lock",
          description: "Khóa câu trả lời queue/cache/event.",
          type: "review",
          tasks: [
            "Trả lời: khi nào dùng queue?",
            "Trả lời: event/listener giúp gì?",
            "Trả lời: cache invalidation là gì?",
            "Trả lời: vì sao không cache bừa data theo user?",
            "Trả lời: artisan command dùng khi nào?",
            "Commit: docs: add day 18 backend systems reflection.",
          ],
          output: ["Có note Day 18.", "Trả lời được systems basics."],
        },
      ],

      checklist: [
        "Có TaskStatusChanged event.",
        "Có listener ghi activity log.",
        "Có queued notification job.",
        "Queue worker chạy.",
        "Dashboard stats cache được.",
        "Cache invalidate khi data đổi.",
        "Có artisan command.",
        "Có tests/manual verification.",
        "Có observability notes.",
      ],

      benchmark:
        "Cuối ngày 18 backend phải có event-driven side effects, queue job, cache có invalidation và command định kỳ. Project bắt đầu giống hệ thống thật.",
    },

    {
      id: "day-19",
      phaseId: "week-3",
      day: "Day 19",
      title:
        "Import, Export, Files, Reports — Business Features Junior hay gặp",
      status: "not-started",
      difficulty: "Very Hard",
      duration: "08:00 - 20:30",

      hook: "Đi làm không chỉ CRUD. Công ty hay giao mấy task rất đời: import Excel/CSV, export report, upload file, validate từng dòng, báo lỗi rõ, dashboard thống kê. Hôm nay học những feature business khiến project mày có mùi thực tế.",

      perspectives: [
        {
          label: "Mapping",
          text: "Feature import thật: user upload CSV → validate file → parse từng dòng → validate từng row → transaction insert/update → trả report dòng lỗi → log activity. Không phải file upload xong là xong.",
        },
        {
          label: "Ultralearning",
          text: "Tạo file CSV lỗi thật, import thật, báo lỗi thật. Export report thật từ data project/task.",
        },
        {
          label: "Hard Mode",
          text: "Không tin extension file. Không import mà không validate. Không để lỗi dòng 15 làm chết toàn bộ mà không báo rõ.",
        },
      ],

      methods: {
        mapping:
          "Map business ops: import tasks/users, export task report, upload attachment, download report.",
        ultralearning:
          "Build một import/export flow end-to-end từ Laravel API tới React UI.",
        goldilocks:
          "Nếu Excel package quá nặng, làm CSV trước. Nếu ổn, mở rộng Excel sau.",
        hardMode:
          "Mỗi file upload phải validate MIME/size. Mỗi import phải có error report.",
      },

      goal: [
        "Build CSV import task/users.",
        "Validate file và từng dòng.",
        "Trả lỗi import rõ dòng nào sai.",
        "Export report CSV.",
        "Upload attachment an toàn.",
        "React UI import/export có loading/error/result.",
        "Ghi docs format file import.",
      ],

      timeBlocks: [
        {
          id: "day-19-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Business file/report features",
          description: "Chọn feature có giá trị thực tế.",
          type: "setup",
          tasks: [
            "Chọn import target: tasks hoặc users.",
            "Chọn export target: tasks report hoặc activity report.",
            "Viết CSV columns cần có.",
            "Viết validation rules từng column.",
            "Viết error report format.",
            "Commit: docs: add import export feature mapping.",
          ],
          output: ["Có import/export spec.", "Có CSV column rules."],
        },
        {
          id: "day-19-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Backend CSV Import Parser",
          description: "Import phải kiểm soát từng dòng.",
          type: "deep",
          tasks: [
            "Tạo endpoint POST /api/tasks/import.",
            "Validate file required, mime csv/txt, max size.",
            "Lưu file tạm vào storage.",
            "Parse CSV bằng native PHP hoặc package nếu muốn.",
            "Bắt buộc đọc header.",
            "Validate required columns: title, project_id, assignee_id, due_date, priority.",
            "Validate từng row: project tồn tại, assignee tồn tại, due_date hợp lệ.",
            "Không insert row lỗi.",
            "Trả response gồm imported_count, failed_count, errors: [{ row, field, message }].",
            "Commit: feat: add backend csv task import parser.",
          ],
          output: [
            "Import endpoint nhận CSV.",
            "Báo lỗi theo dòng.",
            "Không import data bẩn.",
          ],
        },
        {
          id: "day-19-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ ngắn.",
          type: "break",
          tasks: [
            "Tự hỏi: vì sao không tin file extension?",
            "Tự hỏi: lỗi dòng 10 nên trả thế nào?",
          ],
          output: ["Hiểu import validation."],
        },
        {
          id: "day-19-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Import Transaction + Activity Logs",
          description: "Import là business operation, phải audit được.",
          type: "deep",
          tasks: [
            "Quyết định import partial success hay all-or-nothing.",
            "Nếu partial success: insert dòng hợp lệ, report dòng lỗi.",
            "Nếu all-or-nothing: có lỗi thì rollback toàn bộ.",
            "Dùng transaction cho insert batch.",
            "Ghi activity log: imported X tasks by user.",
            "Ghi import history table nếu đủ sức.",
            "Test import file đúng.",
            "Test import file sai header.",
            "Test import file có vài dòng lỗi.",
            "Commit: feat: add import transaction and activity logging.",
          ],
          output: [
            "Import có transaction strategy.",
            "Activity log ghi được.",
            "Test tay 3 file import.",
          ],
        },
        {
          id: "day-19-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: ["Ăn trưa.", "Không xử CSV lúc đói.", "Chiều làm export."],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-19-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Export CSV Reports",
          description: "Report là thứ quản lý hay cần.",
          type: "deep",
          tasks: [
            "Tạo endpoint GET /api/reports/tasks/export.",
            "Filter theo status, project_id, date_from, date_to.",
            "Query tasks với project/assignee.",
            "Export CSV columns: id, title, project, assignee, status, priority, due_date, updated_at.",
            "Set headers đúng để browser download.",
            "Tên file có timestamp.",
            "Không load quá nhiều data nếu dataset lớn; nếu cần dùng cursor/chunk.",
            "Test download bằng browser/Postman.",
            "Commit: feat: add task report csv export.",
          ],
          output: [
            "Export CSV chạy.",
            "File download mở được.",
            "Filter export hoạt động.",
          ],
        },
        {
          id: "day-19-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Import/export có thể nhiều edge case.",
          type: "break",
          tasks: [
            "Nếu export ổn, thêm frontend.",
            "Nếu import lỗi, ưu tiên error report rõ.",
            "Không mở Excel nếu CSV chưa vững.",
          ],
          output: ["Có note import/export edge cases."],
        },
        {
          id: "day-19-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — React Import/Export UI",
          description: "Người dùng cần thấy kết quả, không chỉ API chạy.",
          type: "practice",
          tasks: [
            "Tạo ImportTasksModal.",
            "Input type file nhận CSV.",
            "Show selected file name/size.",
            "Submit gọi mutation upload FormData.",
            "Loading state khi import.",
            "Hiển thị imported_count/failed_count.",
            "Hiển thị bảng lỗi theo row/field/message.",
            "Thêm nút download sample CSV.",
            "Thêm Export button trên TaskList.",
            "Export giữ filter hiện tại.",
            "Commit: feat: add react task import export ui.",
          ],
          output: [
            "UI import CSV chạy.",
            "UI hiển thị lỗi từng dòng.",
            "Export button tải file.",
          ],
        },
        {
          id: "day-19-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không mở thêm file format mới.",
            "Tối test/docs.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-19-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Tests + Import Docs",
          description: "Không ai biết import format nếu không có docs.",
          type: "review",
          tasks: [
            "Test backend import valid CSV.",
            "Test invalid header returns 422.",
            "Test invalid row returns row errors.",
            "Test export returns CSV headers.",
            "Tạo docs/import-tasks.md.",
            "Docs có sample CSV.",
            "Docs có rules từng column.",
            "Docs có ví dụ error response.",
            "Commit: test: add import export tests and docs.",
          ],
          output: [
            "Có tests import/export.",
            "Có import docs.",
            "Có sample CSV.",
          ],
        },
        {
          id: "day-19-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Business Feature Interview Lock",
          description: "Khóa câu trả lời import/export.",
          type: "review",
          tasks: [
            "Trả lời: import partial success hay all-or-nothing khác gì?",
            "Trả lời: validate file upload cần gì?",
            "Trả lời: export lớn nên chú ý gì?",
            "Trả lời: vì sao cần error report theo row?",
            "Commit: docs: add day 19 import export reflection.",
          ],
          output: [
            "Có note Day 19.",
            "Trả lời được business feature questions.",
          ],
        },
      ],

      checklist: [
        "Có CSV import endpoint.",
        "Validate file MIME/size/header.",
        "Validate từng row.",
        "Có transaction strategy.",
        "Có import activity log.",
        "Có CSV export endpoint.",
        "React import UI chạy.",
        "React export button chạy.",
        "Có tests import/export.",
        "Có docs sample CSV.",
      ],

      benchmark:
        "Cuối ngày 19 project phải có import/export/report feature thực tế. Đây là loại task doanh nghiệp hay giao và là điểm cộng lớn khi phỏng vấn.",
    },

    {
      id: "day-20",
      phaseId: "week-3",
      day: "Day 20",
      title:
        "Security + Performance + Observability — Không để project chết âm thầm",
      status: "not-started",
      difficulty: "Boss Fight",
      duration: "08:00 - 20:30",

      hook: "Project chạy được chưa đủ. App thật chết vì query chậm, permission sai, log không có, lỗi 500 không hiểu, token leak, upload hở, rate limit thiếu. Hôm nay là ngày audit như chuẩn bị đưa app cho người khác dùng.",

      perspectives: [
        {
          label: "Mapping",
          text: "Map production risk: security, performance, reliability, observability. Mỗi rủi ro phải có checklist và fix cụ thể.",
        },
        {
          label: "Ultralearning",
          text: "Không audit bằng cảm giác. Tự tạo lỗi 403/422/500, tự xem log, tự đo query, tự fix N+1, tự test upload sai.",
        },
        {
          label: "Hard Mode",
          text: "Không giấu lỗi 500. Không nuốt exception. Không để APP_DEBUG=true trong production docs. Không bỏ qua rate limit/auth check.",
        },
      ],

      methods: {
        mapping:
          "Map từng endpoint chính với risk: auth, validation, query, file, response, logs.",
        ultralearning:
          "Chạy audit trên endpoint thật và ghi bằng chứng trước/sau.",
        goldilocks:
          "Nếu quá rộng, ưu tiên auth/role, N+1, validation, logging. Nếu ổn, thêm rate limit/security headers.",
        hardMode: "Mỗi fix phải có note hoặc commit. Không sửa thầm.",
      },

      goal: [
        "Audit auth/role/security endpoints.",
        "Audit validation và upload.",
        "Tìm và fix N+1/query chậm.",
        "Thêm rate limiting nếu phù hợp.",
        "Chuẩn hóa logging/error handling.",
        "Tạo production readiness checklist.",
        "Cập nhật README security/performance notes.",
      ],

      timeBlocks: [
        {
          id: "day-20-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Production Risk Matrix",
          description: "Tạo bản đồ rủi ro trước khi audit.",
          type: "setup",
          tasks: [
            "Tạo notes/day-20-production-risk-matrix.md.",
            "Liệt kê endpoint chính: auth, projects, tasks, import, export, dashboard.",
            "Với mỗi endpoint, đánh dấu risk: auth, role, validation, query, file, log.",
            "Chọn top 10 rủi ro cần fix.",
            "Commit: docs: add production risk matrix.",
          ],
          output: ["Có risk matrix.", "Có top 10 audit targets."],
        },
        {
          id: "day-20-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Security Audit",
          description: "Audit bảo mật bằng hành động cụ thể.",
          type: "deep",
          tasks: [
            "Kiểm tra APP_DEBUG trong .env.example và docs production.",
            "Kiểm tra route private có auth middleware.",
            "Kiểm tra route role có role/policy backend.",
            "Test technician gọi admin endpoint.",
            "Test user sửa task không thuộc mình.",
            "Kiểm tra mass assignment: fillable/guarded.",
            "Kiểm tra upload MIME/size/name.",
            "Kiểm tra import không nhận file bẩn.",
            "Kiểm tra token không log ra console/server log.",
            "Thêm throttle/rate limit cho login nếu chưa có.",
            "Commit: security: audit auth role upload import protections.",
          ],
          output: [
            "Security audit có bằng chứng.",
            "Fix route/role/upload/import thiếu bảo vệ.",
          ],
        },
        {
          id: "day-20-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ ngắn.",
          type: "break",
          tasks: [
            "Tự trả lời: frontend ẩn nút có đủ chưa?",
            "Tự trả lời: mass assignment là gì?",
          ],
          output: ["Hiểu security audit trọng tâm."],
        },
        {
          id: "day-20-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Performance Audit: Query + N+1",
          description: "Query chậm là sát thủ âm thầm.",
          type: "deep",
          tasks: [
            "Bật query log local hoặc dùng telescope/debugbar nếu có.",
            "Audit Project list.",
            "Audit Task list.",
            "Audit Dashboard stats.",
            "Audit Export report.",
            "Tìm N+1 relationship.",
            "Fix bằng with/withCount/select cụ thể.",
            "Thêm index nếu query filter thường dùng thiếu index.",
            "Đo trước/sau bằng query count hoặc thời gian.",
            "Ghi performance-notes.md.",
            "Commit: perf: fix n plus one and optimize common queries.",
          ],
          output: [
            "Có performance notes trước/sau.",
            "N+1 chính được fix.",
            "Query list/dashboard tốt hơn.",
          ],
        },
        {
          id: "day-20-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không audit lúc mệt.",
            "Chiều logging/error handling.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-20-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Error Handling + Logging",
          description: "Khi app lỗi, phải biết nhìn ở đâu.",
          type: "deep",
          tasks: [
            "Chuẩn hóa error response cho API.",
            "404 trả JSON rõ.",
            "403 trả JSON rõ.",
            "422 trả validation errors rõ.",
            "500 không leak stack trace trong production mode.",
            "Thêm logging khi import fail.",
            "Thêm logging khi queue job fail.",
            "Thêm logging khi webhook/signature invalid nếu có.",
            "Kiểm tra storage/logs/laravel.log.",
            "Tạo docs/logging.md: xem log ở đâu, lỗi thường gặp.",
            "Commit: fix: standardize api errors and logging.",
          ],
          output: [
            "Error response rõ.",
            "Logs hữu ích hơn.",
            "Có logging docs.",
          ],
        },
        {
          id: "day-20-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Audit dễ lan man. Giữ trọng tâm.",
          type: "break",
          tasks: [
            "Nếu còn quá nhiều lỗi, chọn lỗi demo-blocker.",
            "Nếu ổn, thêm frontend error boundary hoặc fallback.",
            "Ghi 3 lỗi đáng sợ nhất.",
          ],
          output: ["Có priority fix list."],
        },
        {
          id: "day-20-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Frontend Reliability",
          description:
            "Frontend phải xử lý API chết, 403, 422, loading, retry.",
          type: "practice",
          tasks: [
            "Kiểm tra tất cả form hiển thị Laravel 422 đúng field.",
            "Kiểm tra 401 clear auth.",
            "Kiểm tra 403 đi ForbiddenPage.",
            "Kiểm tra 404 NotFoundPage.",
            "Kiểm tra network error có retry/message.",
            "Thêm ErrorState reusable nếu thiếu.",
            "Thêm loading skeleton ở dashboard/list.",
            "Kiểm tra không log token ra console.",
            "npm run build.",
            "Commit: fix: improve frontend reliability and api error states.",
          ],
          output: [
            "Frontend xử lý lỗi tốt hơn.",
            "Build qua.",
            "Không leak token console.",
          ],
        },
        {
          id: "day-20-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: ["Ăn tối.", "Tối đóng gói checklist.", "Không thêm feature."],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-20-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Production Readiness Checklist",
          description: "Đưa audit thành checklist dùng lại.",
          type: "review",
          tasks: [
            "Tạo docs/production-readiness.md.",
            "Mục Security: auth, role, validation, upload, rate limit.",
            "Mục Performance: N+1, indexes, pagination, cache.",
            "Mục Reliability: logs, queue, error response.",
            "Mục Frontend: loading, error, empty, auth redirect.",
            "Mục Environment: .env.example, APP_DEBUG, Docker.",
            "Tick cái đã đạt, ghi cái chưa đạt.",
            "Commit: docs: add production readiness checklist.",
          ],
          output: [
            "Có production readiness docs.",
            "Biết project đang thiếu gì.",
          ],
        },
        {
          id: "day-20-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Production Interview Lock",
          description: "Khóa câu trả lời audit.",
          type: "review",
          tasks: [
            "Trả lời: N+1 phát hiện và fix thế nào?",
            "Trả lời: APP_DEBUG production vì sao nguy hiểm?",
            "Trả lời: rate limit login để làm gì?",
            "Trả lời: log hữu ích nên chứa gì?",
            "Trả lời: production readiness gồm những gì?",
            "Commit: docs: add day 20 production reflection.",
          ],
          output: ["Có note Day 20.", "Có câu trả lời production mindset."],
        },
      ],

      checklist: [
        "Có production risk matrix.",
        "Security audit auth/role/upload/import.",
        "Rate limit login nếu phù hợp.",
        "N+1/query audit.",
        "Performance notes trước/sau.",
        "Error response chuẩn.",
        "Logs hữu ích hơn.",
        "Frontend xử lý lỗi tốt hơn.",
        "Có production readiness checklist.",
        "Có reflection production.",
      ],

      benchmark:
        "Cuối ngày 20 project phải được audit bảo mật, performance, logging và error handling. Mày phải biết app còn yếu đâu thay vì chỉ nói 'chạy được'.",
    },

    {
      id: "day-21",
      phaseId: "week-3",
      day: "Day 21",
      title: "Sunday Production Boss Fight — Refactor, Test, Docker, Demo v1",
      status: "not-started",
      difficulty: "Boss Fight",
      duration: "08:00 - 20:30",

      hook: "Chủ nhật tuần 3 là ngày gom toàn bộ thành bản v1 đáng demo. Không học thêm công nghệ mới. Hôm nay là build như chuẩn bị nộp PR lớn: code sạch, test xanh, Docker chạy, docs đủ, demo script rõ, issue list thật.",

      perspectives: [
        {
          label: "Mapping",
          text: "Một bản v1 đáng show cần: feature flow chạy, test quan trọng xanh, Docker chạy, README rõ, production checklist có, demo story mạch lạc.",
        },
        {
          label: "Ultralearning",
          text: "Chạy full project từ zero như người lạ clone về. Lỗi nào gặp thì fix. Không tự ái với bug.",
        },
        {
          label: "Hard Mode",
          text: "Không che nợ kỹ thuật. Ghi Known limitations. Không nói project hoàn hảo. Nói rõ đã làm, chưa làm, vì sao.",
        },
      ],

      methods: {
        mapping:
          "Map release checklist: install → env → docker → migrate → seed → test → run → login → CRUD → import/export → dashboard → role.",
        ultralearning:
          "Một ngày chỉ làm thứ giúp v1 demo tốt hơn. Không mở feature mới.",
        goldilocks:
          "Nếu quá nhiều bug, fix demo path chính. Nếu ổn, thêm CI hoặc deploy prep.",
        hardMode: "Mỗi blocker phải có issue/note. Không để bug trong đầu.",
      },

      goal: [
        "Ổn định project v1.",
        "Chạy full release checklist.",
        "Fix blocker backend/frontend/Docker.",
        "Chạy tests quan trọng.",
        "Hoàn thiện docs/demo script.",
        "Tạo release tag.",
        "Chuẩn bị câu chuyện phỏng vấn project.",
      ],

      timeBlocks: [
        {
          id: "day-21-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — v1 Release Checklist",
          description: "Chốt đường demo chính.",
          type: "setup",
          tasks: [
            "Tạo docs/release-v1-checklist.md.",
            "Checklist: clone, env, docker up, migrate, seed, test, frontend build, login.",
            "Checklist demo: admin login, project CRUD, task workflow, import/export, dashboard, role denied.",
            "Chọn demo path chính 3–5 phút.",
            "Ghi blockers hiện tại.",
            "Commit: docs: add v1 release checklist.",
          ],
          output: ["Có release checklist.", "Có demo path chính."],
        },
        {
          id: "day-21-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Backend Release Pass",
          description: "Backend phải chạy sạch trước.",
          type: "deep",
          tasks: [
            "composer install nếu test clean clone.",
            "Copy .env.example thành .env và kiểm tra biến.",
            "php artisan key:generate nếu cần.",
            "php artisan migrate:fresh --seed.",
            "php artisan test.",
            "Fix failing tests quan trọng.",
            "Kiểm tra route:list.",
            "Kiểm tra queue worker nếu feature dùng queue.",
            "Kiểm tra storage link/upload nếu có.",
            "Commit: fix: stabilize backend for v1 release.",
          ],
          output: [
            "Backend test chính xanh.",
            "Migrate/seed sạch.",
            "Route rõ.",
          ],
        },
        {
          id: "day-21-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ ngắn.",
          type: "break",
          tasks: [
            "Uống nước.",
            "Nếu backend chưa ổn, không đụng frontend.",
            "Ghi blocker backend nếu còn.",
          ],
          output: ["Backend state rõ."],
        },
        {
          id: "day-21-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Frontend Release Pass",
          description: "Frontend build và demo flow.",
          type: "deep",
          tasks: [
            "npm install nếu cần.",
            "Kiểm tra .env.example frontend.",
            "npm run build.",
            "Fix build errors.",
            "Run dev.",
            "Test login/logout.",
            "Test protected route.",
            "Test project CRUD.",
            "Test task workflow.",
            "Test import/export UI.",
            "Test role denied page.",
            "Commit: fix: stabilize frontend for v1 release.",
          ],
          output: ["Frontend build xanh.", "Demo flow chính chạy."],
        },
        {
          id: "day-21-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: ["Ăn trưa.", "Không mở feature mới.", "Chiều Docker/docs."],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-21-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Docker Release Pass",
          description: "Người khác phải chạy được project.",
          type: "deep",
          tasks: [
            "docker compose down.",
            "docker compose up -d --build.",
            "docker compose ps.",
            "docker compose logs app/backend.",
            "docker compose exec app php artisan migrate:fresh --seed.",
            "Test API từ host.",
            "Test frontend gọi API nếu frontend container có.",
            "Ghi Docker known issues.",
            "Fix .env.example/docker-compose mismatch.",
            "Commit: fix: stabilize docker setup for v1.",
          ],
          output: ["Docker setup chạy.", "Docs Docker khớp thực tế."],
        },
        {
          id: "day-21-block-7",
          time: "15:30 - 15:45",
          label: "Break — Release sanity",
          description: "Kiểm tra có đang tự lừa không.",
          type: "break",
          tasks: [
            "Nếu cần xóa localStorage mới chạy được, ghi rõ.",
            "Nếu cần chạy command thủ công, đưa vào docs.",
            "Nếu có bug chưa fix, đưa Known limitations.",
          ],
          output: ["Không giấu setup step."],
        },
        {
          id: "day-21-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Docs + Demo Script v1",
          description: "Project không có docs là project chưa giao được.",
          type: "practice",
          tasks: [
            "README cập nhật overview.",
            "README cập nhật architecture diagram text.",
            "README cập nhật setup backend.",
            "README cập nhật setup frontend.",
            "README cập nhật Docker setup.",
            "README cập nhật demo accounts.",
            "README cập nhật features.",
            "README cập nhật test commands.",
            "README cập nhật known limitations.",
            "demo-script-v1.md: từng bước demo 3–5 phút.",
            "Commit: docs: complete v1 readme and demo script.",
          ],
          output: [
            "README đủ mạnh.",
            "Demo script rõ.",
            "Known limitations trung thực.",
          ],
        },
        {
          id: "day-21-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Tối chỉ release/reflection.",
            "Không sửa lớn nữa.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-21-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Release Tag + Portfolio Notes",
          description: "Đóng gói thành artifact apply được.",
          type: "review",
          tasks: [
            "Git status sạch.",
            "Git log --oneline xem history.",
            "Tạo tag v1.0.0-week3 hoặc v0.3.0.",
            "Viết portfolio-notes.md.",
            "Viết 5 CV bullets: Laravel API, React admin, role, tests, Docker, import/export.",
            "Viết project challenges: 3 lỗi khó và cách fix.",
            "Viết architecture decisions: Service Layer, Policy, React Query, Docker.",
            "Nếu có GitHub remote, push tag.",
            "Commit: docs: add portfolio notes for v1 release.",
          ],
          output: ["Có release tag.", "Có CV bullets.", "Có portfolio notes."],
        },
        {
          id: "day-21-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Week 3 Junior Upgrade",
          description: "Khóa tuần 3 thành tư duy đi làm.",
          type: "review",
          tasks: [
            "Viết week-3-reflection.md.",
            "Tóm tắt architecture đã sạch hơn ở đâu.",
            "Tóm tắt test bảo vệ flow nào.",
            "Tóm tắt Docker chạy ra sao.",
            "Tóm tắt queue/cache/import/export đã thêm gì.",
            "Ghi 5 weakness còn lại cho tuần 4.",
            "Commit: docs: add week 3 reflection and week 4 plan.",
          ],
          output: ["Có reflection tuần 3.", "Có plan tuần 4."],
        },
      ],

      checklist: [
        "Backend release pass.",
        "Frontend release pass.",
        "Docker release pass.",
        "Tests chính chạy.",
        "Demo flow chính chạy.",
        "README cập nhật đủ.",
        "Demo script v1 có mặt.",
        "Known limitations trung thực.",
        "Có release tag.",
        "Có CV bullets/portfolio notes.",
        "Có week 3 reflection.",
      ],

      benchmark:
        "Cuối tuần 3 phải có bản v1 fullstack đáng show: architecture sạch hơn, test quan trọng, Docker chạy, import/export, queue/cache/logging, docs đủ và câu chuyện phỏng vấn rõ.",
    },
    {
      id: "day-22",
      phaseId: "week-4",
      day: "Day 22",
      title: "CI/CD + Git Workflow — Code không qua gate thì không được merge",
      status: "not-started",
      difficulty: "Very Hard",
      duration: "08:00 - 20:30",

      hook: "Đi làm không phải code xong là đẩy main. Team thật có branch, PR, review, test, build, CI, quality gate. Hôm nay mày biến project từ repo cá nhân thành repo có quy trình làm việc như công ty.",

      perspectives: [
        {
          label: "Mapping",
          text: "Reverse engineer quy trình team: nhận task → tạo branch → code → test local → push → PR → CI chạy test/build → review → merge. Nếu CI đỏ thì không merge.",
        },
        {
          label: "Ultralearning",
          text: "Không học GitHub Actions bằng hello world. CI phải chạy chính project Laravel + React của mày: backend test, frontend build, lint nếu có.",
        },
        {
          label: "Hard Mode",
          text: "Cấm push main. Cấm merge khi test đỏ. Cấm commit message vô nghĩa kiểu update code. Mọi thứ phải giống chuẩn junior đi làm.",
        },
      ],

      methods: {
        mapping:
          "Map workflow công ty vào repo: branch naming, commit convention, pull request template, CI checks, review checklist.",
        ultralearning:
          "Tạo lỗi build/test cố ý để nhìn CI fail, sau đó fix cho CI xanh.",
        goldilocks:
          "Nếu CI quá khó, làm backend test + frontend build trước. Nếu ổn, thêm lint/PHPStan/PHP-CS-Fixer.",
        hardMode:
          "Không merge main bằng tay khi CI fail. Không bỏ qua warning nghiêm trọng.",
      },

      goal: [
        "Chuẩn hóa Git branch và commit convention.",
        "Tạo PR template và review checklist.",
        "Tạo GitHub Actions cho Laravel backend.",
        "Tạo GitHub Actions cho React frontend.",
        "Chạy backend tests trong CI.",
        "Chạy frontend build trong CI.",
        "Thêm PHPStan/PHP-CS-Fixer hoặc lint nếu project sẵn sàng.",
        "Tập xử lý CI fail như đi làm.",
      ],

      timeBlocks: [
        {
          id: "day-22-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Team Git Workflow",
          description: "Vẽ quy trình làm việc trước khi tạo workflow file.",
          type: "setup",
          tasks: [
            "Tạo notes/day-22-ci-git-workflow.md.",
            "Viết branch naming: feat/, fix/, refactor/, test/, docs/, chore/.",
            "Viết commit convention: feat, fix, refactor, test, docs, chore, ci.",
            "Viết PR flow: create branch → commit nhỏ → push → PR → CI → review → merge.",
            "Viết rule: không push trực tiếp main.",
            "Viết checklist trước khi PR: test, build, docs, self-review.",
            "Commit: docs: add git workflow and pr rules.",
          ],
          output: [
            "Có Git workflow notes.",
            "Có branch/commit convention.",
            "Có PR checklist.",
          ],
        },
        {
          id: "day-22-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Repo Hygiene + PR Template",
          description: "Dọn repo để người khác đọc được.",
          type: "deep",
          tasks: [
            "Kiểm tra root repo có README.md rõ chưa.",
            "Tạo .gitignore đúng cho Laravel và React.",
            "Không commit .env, vendor, node_modules, storage logs.",
            "Tạo .env.example backend.",
            "Tạo .env.example frontend.",
            "Tạo .github/pull_request_template.md.",
            "PR template gồm: summary, screenshots, test evidence, checklist, risks.",
            "Tạo docs/code-review-checklist.md.",
            "Chạy git status để đảm bảo không có file rác.",
            "Commit: chore: improve repo hygiene and pull request template.",
          ],
          output: [
            "Có PR template.",
            "Có review checklist.",
            "Repo sạch file rác.",
          ],
        },
        {
          id: "day-22-block-3",
          time: "10:30 - 10:45",
          label: "Break — Git sanity",
          description: "Nghỉ ngắn nhưng tự kiểm tra tư duy Git.",
          type: "break",
          tasks: [
            "Tự trả lời: vì sao không push thẳng main?",
            "Tự trả lời: PR template giúp gì?",
            "Tự trả lời: commit nhỏ lợi gì?",
          ],
          output: ["Trả lời được Git workflow như junior."],
        },
        {
          id: "day-22-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Backend CI: Laravel Test Pipeline",
          description: "CI backend phải chứng minh Laravel không vỡ.",
          type: "deep",
          tasks: [
            "Tạo .github/workflows/backend.yml.",
            "Workflow chạy khi push/PR vào main.",
            "Setup PHP version đúng với project.",
            "Cache Composer nếu cấu hình được.",
            "composer install --no-interaction --prefer-dist.",
            "Copy .env.example thành .env.testing nếu cần.",
            "php artisan key:generate --env=testing nếu cần.",
            "Dùng SQLite testing nếu project hỗ trợ, hoặc MySQL service nếu cần.",
            "php artisan migrate --env=testing.",
            "php artisan test.",
            "Commit: ci: add laravel backend test workflow.",
          ],
          output: [
            "Có backend CI workflow.",
            "CI chạy php artisan test.",
            "Biết đọc log CI fail.",
          ],
        },
        {
          id: "day-22-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không sửa CI khi đói.",
            "Chiều làm frontend CI.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-22-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Frontend CI: React Build Pipeline",
          description:
            "Frontend phải build được trên Linux CI, không chỉ chạy trên máy mày.",
          type: "deep",
          tasks: [
            "Tạo .github/workflows/frontend.yml.",
            "Setup Node version phù hợp project.",
            "npm ci nếu có package-lock.json.",
            "npm run build.",
            "Nếu có lint thì chạy npm run lint.",
            "Nếu có test thì chạy npm run test -- --run.",
            "Fix lỗi import sai hoa/thường vì Linux case-sensitive.",
            "Fix unused imports làm build fail nếu config strict.",
            "Commit: ci: add react frontend build workflow.",
          ],
          output: [
            "Có frontend CI workflow.",
            "React build chạy trong CI.",
            "Fix được lỗi path/case-sensitive nếu có.",
          ],
        },
        {
          id: "day-22-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "CI fail là bình thường.",
          type: "break",
          tasks: [
            "Nếu CI fail, đọc log từ trên xuống.",
            "Không sửa đoán mò.",
            "Ghi lỗi CI đầu tiên gặp.",
          ],
          output: ["Có CI troubleshooting note."],
        },
        {
          id: "day-22-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Quality Tools: PHPStan, PHP-CS-Fixer, Lint",
          description:
            "Thêm gate chất lượng vừa đủ, không tự bóp chết project.",
          type: "practice",
          tasks: [
            "Kiểm tra backend đã có PHPStan chưa.",
            "Nếu có, thêm command composer analyse.",
            "Nếu chưa, cài hoặc ghi plan nếu project chưa sẵn sàng.",
            "Kiểm tra PHP-CS-Fixer command.",
            "Tạo composer scripts: test, analyse, format hoặc format:check.",
            "Kiểm tra frontend lint nếu có.",
            "Không ép quá nhiều rule khiến CI đỏ vô nghĩa.",
            "Thêm quality checks vào workflow nếu project chịu được.",
            "Commit: ci: add quality checks for backend frontend.",
          ],
          output: ["Có quality scripts.", "CI có thêm quality check vừa sức."],
        },
        {
          id: "day-22-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: ["Ăn tối.", "Không debug YAML lúc đói.", "Tối test PR flow."],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-22-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Simulate PR + CI Failure",
          description: "Tập quy trình như đi làm thật.",
          type: "review",
          tasks: [
            "Tạo branch: feat/ci-quality-gate.",
            "Push branch lên remote nếu có.",
            "Mở PR nếu repo dùng GitHub/GitLab.",
            "Cố ý tạo lỗi nhỏ ở test/build nếu muốn thấy CI fail.",
            "Đọc log CI fail.",
            "Fix lỗi.",
            "Push lại cho CI xanh.",
            "Điền PR template đầy đủ.",
            "Self review diff trước khi merge.",
            "Commit: fix: resolve ci quality gate issues nếu có.",
          ],
          output: [
            "Có PR hoặc mô phỏng PR.",
            "Có bằng chứng CI xanh/đỏ và fix.",
            "Biết đọc CI logs.",
          ],
        },
        {
          id: "day-22-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — CI/CD Interview Lock",
          description: "Khóa câu trả lời Git/CI.",
          type: "review",
          tasks: [
            "Trả lời: CI dùng để làm gì?",
            "Trả lời: vì sao CI chạy trên PR?",
            "Trả lời: npm ci khác npm install thế nào?",
            "Trả lời: vì sao Linux CI bắt lỗi import hoa/thường?",
            "Trả lời: PR checklist nên có gì?",
            "Commit: docs: add day 22 ci git reflection.",
          ],
          output: ["Có note Day 22.", "Trả lời được Git/CI fundamentals."],
        },
      ],

      checklist: [
        "Có Git workflow notes.",
        "Có PR template.",
        "Có review checklist.",
        "Có backend CI workflow.",
        "Có frontend CI workflow.",
        "Backend test chạy trong CI.",
        "Frontend build chạy trong CI.",
        "Có quality scripts nếu phù hợp.",
        "Có CI troubleshooting note.",
        "Có reflection CI/Git.",
      ],

      benchmark:
        "Cuối ngày 22 repo phải có quy trình team thật: branch, PR template, backend CI, frontend CI, quality gate và khả năng đọc log khi CI fail.",
    },

    {
      id: "day-23",
      phaseId: "week-4",
      day: "Day 23",
      title: "Deployment Hard Mode — Frontend, Backend, Env, Logs, Database",
      status: "not-started",
      difficulty: "Boss Fight",
      duration: "08:00 - 20:30",

      hook: "Deploy là nơi nhiều project sinh viên chết. Local chạy ngon nhưng production lỗi env, CORS, build, database, storage, APP_KEY, URL, mixed content. Hôm nay không chỉ deploy, mà học cách nghĩ production.",

      perspectives: [
        {
          label: "Mapping",
          text: "Production flow: user mở frontend domain → frontend gọi backend API URL → backend đọc env → kết nối DB → chạy migration/seed hoặc data thật → log lỗi → trả response. Sai một mắt xích là app chết.",
        },
        {
          label: "Ultralearning",
          text: "Không deploy bằng niềm tin. Mỗi lỗi production phải đọc log, ghi nguyên nhân, cách fix. Đây là kỹ năng junior cực quan trọng.",
        },
        {
          label: "Hard Mode",
          text: "Không để secret trong repo. Không bật debug production. Không hardcode localhost trong frontend. Không nói 'trên máy em chạy được'.",
        },
      ],

      methods: {
        mapping:
          "Map local env sang production env: APP_URL, API_URL, DB, CORS, SESSION/STATEFUL domain nếu dùng cookie.",
        ultralearning:
          "Deploy theo checklist, gặp lỗi thì ghi deployment-debug-log.md.",
        goldilocks:
          "Nếu deploy backend quá nặng, làm deploy plan + frontend deploy trước. Nếu ổn, deploy cả backend.",
        hardMode:
          "Không hardcode env. Không commit secrets. Không deploy khi build fail.",
      },

      goal: [
        "Chuẩn hóa .env.example backend/frontend.",
        "Build frontend production.",
        "Deploy frontend hoặc chuẩn bị deploy-ready.",
        "Deploy backend hoặc chuẩn bị backend deploy plan rõ.",
        "Xử lý CORS/API URL.",
        "Chạy migration trên môi trường deploy.",
        "Biết đọc logs production.",
        "Viết deployment docs.",
      ],

      timeBlocks: [
        {
          id: "day-23-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Deployment Architecture",
          description: "Vẽ đường đi request production trước khi bấm deploy.",
          type: "setup",
          tasks: [
            "Tạo docs/deployment-plan.md.",
            "Vẽ frontend domain → backend API → database.",
            "Liệt kê env backend: APP_ENV, APP_DEBUG, APP_KEY, APP_URL, DB_*, CORS, QUEUE, CACHE.",
            "Liệt kê env frontend: VITE_API_URL.",
            "Liệt kê thứ không được commit: .env, keys, DB password.",
            "Chọn chiến lược deploy: frontend trước, backend sau, hoặc Docker/VPS plan.",
            "Commit: docs: add deployment architecture plan.",
          ],
          output: ["Có deployment plan.", "Có env checklist."],
        },
        {
          id: "day-23-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Frontend Production Build",
          description: "Frontend phải build sạch trước khi deploy.",
          type: "deep",
          tasks: [
            "Kiểm tra .env.example frontend có VITE_API_URL.",
            "Tạo .env.production nếu cần nhưng không commit secret.",
            "Đảm bảo API URL không còn localhost hardcode trong code.",
            "npm run build.",
            "Fix lỗi build.",
            "Preview build local nếu dùng npm run preview.",
            "Test login/API URL với backend local hoặc deployed URL.",
            "Kiểm tra route fallback SPA nếu deploy static hosting.",
            "Commit: fix: prepare frontend production build.",
          ],
          output: [
            "Frontend build sạch.",
            "Không hardcode localhost.",
            "Có frontend env docs.",
          ],
        },
        {
          id: "day-23-block-3",
          time: "10:30 - 10:45",
          label: "Break — Production env sanity",
          description: "Nghỉ và tự hỏi các biến môi trường.",
          type: "break",
          tasks: [
            "Tự trả lời: VITE_API_URL dùng ở đâu?",
            "Tự trả lời: tại sao không commit .env?",
            "Tự trả lời: SPA fallback là gì?",
          ],
          output: ["Hiểu frontend production build."],
        },
        {
          id: "day-23-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Backend Production Prep",
          description:
            "Laravel production cần env, key, cache, migration, logs.",
          type: "deep",
          tasks: [
            "Kiểm tra .env.example backend đầy đủ.",
            "APP_ENV=production trong docs deploy.",
            "APP_DEBUG=false trong docs deploy.",
            "APP_URL đúng domain backend.",
            "DB config không dùng localhost nếu backend chạy container/cloud.",
            "php artisan config:clear local trước khi debug env.",
            "Hiểu config:cache/route:cache dùng khi deploy ổn định.",
            "Kiểm tra storage/logs writable.",
            "Kiểm tra queue worker plan nếu project dùng queue.",
            "Kiểm tra CORS cho frontend domain.",
            "Commit: fix: prepare laravel backend production env.",
          ],
          output: [
            ".env.example backend chuẩn hơn.",
            "Có backend production checklist.",
            "CORS/API URL rõ.",
          ],
        },
        {
          id: "day-23-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không deploy lúc đầu nóng.",
            "Chiều triển khai hoặc mô phỏng triển khai.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-23-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Deploy Attempt / Deploy Simulation",
          description:
            "Thực chiến deploy. Nếu chưa có account deploy, làm simulation chuẩn.",
          type: "deep",
          tasks: [
            "Nếu có nền tảng deploy: tạo service frontend.",
            "Set build command: npm run build.",
            "Set output directory đúng.",
            "Set VITE_API_URL.",
            "Nếu có backend deploy: tạo service backend.",
            "Set PHP/Laravel build/start commands theo nền tảng.",
            "Set env production.",
            "Chạy migration trên production/staging nếu có.",
            "Nếu chưa deploy thật: tạo deployment-runbook.md mô phỏng từng command.",
            "Ghi mọi lỗi vào deployment-debug-log.md.",
            "Commit: docs: add deploy runbook and deployment debug log.",
          ],
          output: [
            "Có deploy attempt hoặc deploy runbook.",
            "Có debug log lỗi deploy.",
            "Biết bước nào đang block.",
          ],
        },
        {
          id: "day-23-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Deploy không được thì không cay, phải biết vì sao.",
          type: "break",
          tasks: [
            "Nếu deploy fail, phân loại: build, env, DB, CORS, permission, route.",
            "Không sửa mò.",
            "Chọn 1 blocker quan trọng nhất để fix.",
          ],
          output: ["Có blocker deploy rõ nhất."],
        },
        {
          id: "day-23-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — CORS, API URL, Logs, Database",
          description: "Bốn lỗi production kinh điển.",
          type: "practice",
          tasks: [
            "Test frontend gọi backend URL.",
            "Nếu CORS lỗi, xác định origin frontend.",
            "Cấu hình CORS backend đúng origin.",
            "Không dùng wildcard bừa nếu có credentials.",
            "Test API health endpoint production/staging.",
            "Kiểm tra backend logs khi API 500.",
            "Kiểm tra DB connection.",
            "Kiểm tra migration status.",
            "Kiểm tra APP_KEY nếu lỗi encryption/session.",
            "Ghi fix vào deployment-debug-log.md.",
            "Commit: fix: resolve deployment cors env database issues.",
          ],
          output: [
            "Hiểu lỗi CORS/API URL.",
            "Biết đọc backend logs.",
            "Biết kiểm tra DB/migration.",
          ],
        },
        {
          id: "day-23-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không deploy thêm feature.",
            "Tối docs và final checks.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-23-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Deployment Docs + Rollback Mindset",
          description: "Deploy xong phải biết rollback và support.",
          type: "review",
          tasks: [
            "Hoàn thiện docs/deployment-plan.md.",
            "Thêm checklist pre-deploy.",
            "Thêm checklist post-deploy.",
            "Thêm cách xem logs.",
            "Thêm cách chạy migration.",
            "Thêm cách rollback code nếu deploy lỗi.",
            "Thêm known deployment issues.",
            "Update README deployment section.",
            "Commit: docs: complete deployment guide.",
          ],
          output: [
            "Có deployment guide.",
            "Có rollback mindset.",
            "Có post-deploy checklist.",
          ],
        },
        {
          id: "day-23-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Deployment Interview Lock",
          description: "Khóa câu trả lời deploy.",
          type: "review",
          tasks: [
            "Trả lời: APP_DEBUG production nên là gì?",
            "Trả lời: CORS lỗi do đâu?",
            "Trả lời: VITE_API_URL khác APP_URL thế nào?",
            "Trả lời: migration production cần cẩn thận gì?",
            "Trả lời: đọc logs deploy thế nào?",
            "Commit: docs: add day 23 deployment reflection.",
          ],
          output: ["Có note Day 23.", "Trả lời được deployment basics."],
        },
      ],

      checklist: [
        "Có deployment architecture plan.",
        "Frontend production build sạch.",
        "Backend production env checklist.",
        "Không hardcode localhost.",
        "Có deploy attempt hoặc runbook.",
        "Có deployment debug log.",
        "Hiểu CORS/API URL.",
        "Biết đọc logs.",
        "Có deployment docs.",
        "Có reflection deploy.",
      ],

      benchmark:
        "Cuối ngày 23 project phải deploy-ready hoặc đã deploy thử, có docs rõ, biết xử lý env/CORS/logs/DB thay vì chỉ chạy local.",
    },

    {
      id: "day-24",
      phaseId: "week-4",
      day: "Day 24",
      title: "Company Mock Task 1 — Nhận feature mới và ship như đi làm",
      status: "not-started",
      difficulty: "Boss Fight",
      duration: "08:00 - 20:30",

      hook: "Công ty không hỏi mày thuộc bao nhiêu cú pháp. Công ty giao task: thêm feature vào hệ thống đang có mà không phá flow cũ. Hôm nay mày nhận một mock task như junior thật: đọc yêu cầu, chia việc, code backend/frontend, test, PR note.",

      perspectives: [
        {
          label: "Mapping",
          text: "Feature mới không bắt đầu bằng code. Nó bắt đầu bằng requirement → acceptance criteria → DB/API/UI impact → test cases → implementation plan.",
        },
        {
          label: "Ultralearning",
          text: "Làm một feature end-to-end trong một ngày. Không lan man thêm công nghệ. Tập trung ship đúng yêu cầu.",
        },
        {
          label: "Hard Mode",
          text: "Không sửa bừa flow cũ. Không phá test cũ. Không làm UI mock mà backend chưa có. Không làm backend endpoint mà frontend không dùng.",
        },
      ],

      methods: {
        mapping:
          "Map task mới: Task comment/attachment/priority escalation → DB migration → API → service → tests → React UI.",
        ultralearning: "Vertical slice từ database tới UI trong một ngày.",
        goldilocks:
          "Nếu feature quá lớn, cắt MVP: comment text trước, attachment sau. Nếu ổn, thêm activity log và notification.",
        hardMode:
          "Mỗi acceptance criteria phải có evidence: test, screenshot, curl, hoặc manual checklist.",
      },

      goal: [
        "Nhận và phân tích mock feature.",
        "Viết acceptance criteria.",
        "Cập nhật DB/API/service/resource.",
        "Cập nhật React UI.",
        "Thêm test backend chính.",
        "Viết PR summary và evidence.",
      ],

      timeBlocks: [
        {
          id: "day-24-block-1",
          time: "08:00 - 09:00",
          label: "Task Brief — Feature: Task Comments + Activity Thread",
          description:
            "Mock task công ty: thêm bình luận và activity thread cho task.",
          type: "setup",
          tasks: [
            "Tạo branch: feat/task-comments-activity-thread.",
            "Tạo docs/tasks/day-24-task-brief.md.",
            "Requirement: manager/technician có thể comment vào task được phép xem.",
            "Requirement: mỗi comment lưu author, body, created_at.",
            "Requirement: task detail hiển thị comments + activity logs dạng timeline.",
            "Requirement: technician không được comment task không assigned.",
            "Requirement: comment body required, max 1000 chars.",
            "Viết acceptance criteria rõ ràng.",
            "Viết API plan: GET /tasks/{task}/comments, POST /tasks/{task}/comments.",
            "Commit: docs: add task comments feature brief.",
          ],
          output: [
            "Có task brief.",
            "Có acceptance criteria.",
            "Có API/UI plan.",
          ],
        },
        {
          id: "day-24-block-2",
          time: "09:00 - 11:00",
          label: "Flow 1 — Backend DB + Model + Policy",
          description: "Tạo nền backend đúng quyền.",
          type: "deep",
          tasks: [
            "Tạo migration task_comments.",
            "Columns: id, task_id, user_id, body, created_at, updated_at.",
            "FK task_id cascadeOnDelete nếu hợp lý.",
            "FK user_id restrict/cascade theo thiết kế.",
            "Index task_id, user_id.",
            "Tạo TaskComment model.",
            "Task hasMany comments.",
            "TaskComment belongsTo task/user.",
            "Cập nhật TaskPolicy: comment hoặc createComment.",
            "Chạy migrate.",
            "Commit: feat: add task comments model migration policy.",
          ],
          output: [
            "DB có task_comments.",
            "Relationship chạy.",
            "Policy có rule comment.",
          ],
        },
        {
          id: "day-24-block-3",
          time: "11:00 - 13:00",
          label: "Flow 2 — Backend API + Service + Resource",
          description: "API comment không để controller ôm logic.",
          type: "deep",
          tasks: [
            "Tạo StoreTaskCommentRequest.",
            "Validate body required string max 1000.",
            "Tạo TaskCommentResource.",
            "Tạo TaskCommentService.",
            "Service check authorization hoặc controller authorize trước.",
            "Endpoint GET comments theo task.",
            "Endpoint POST comment.",
            "Khi tạo comment, ghi activity log.",
            "Response 201 khi tạo thành công.",
            "Response 403 khi không có quyền.",
            "Commit: feat: add task comments api service resource.",
          ],
          output: [
            "GET comments chạy.",
            "POST comment chạy.",
            "Activity log ghi khi comment.",
          ],
        },
        {
          id: "day-24-block-4",
          time: "13:00 - 13:45",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không thêm attachment khi comment chưa xong.",
            "Chiều làm frontend.",
          ],
          output: ["Quay lại 13:45."],
        },
        {
          id: "day-24-block-5",
          time: "13:45 - 15:45",
          label: "Flow 3 — React Task Detail + Comment UI",
          description: "Đưa feature ra UI dùng được.",
          type: "practice",
          tasks: [
            "Tạo taskCommentApi: listComments, createComment.",
            "Tạo hooks useTaskComments, useCreateTaskComment.",
            "Tạo TaskDetailPage nếu chưa có.",
            "Task detail hiển thị task info.",
            "Hiển thị comments list.",
            "Comment form textarea.",
            "Submit comment bằng mutation.",
            "Show validation error body.",
            "Mutation success clear textarea và invalidate comments.",
            "Loading/empty/error states.",
            "Commit: feat: add task detail comments ui.",
          ],
          output: [
            "Task detail page có comments.",
            "Tạo comment từ React được.",
            "Validation error hiển thị.",
          ],
        },
        {
          id: "day-24-block-6",
          time: "15:45 - 17:45",
          label: "Flow 4 — Timeline + Tests",
          description: "Feature phải có evidence.",
          type: "review",
          tasks: [
            "Tạo ActivityTimeline component.",
            "Gộp comments + activity logs hoặc hiển thị tab riêng.",
            "Backend test: authorized user can comment.",
            "Backend test: unauthorized technician cannot comment.",
            "Backend test: body required returns 422.",
            "Backend test: comment creates activity log.",
            "Frontend manual test bằng admin/manager/technician.",
            "Commit: test: add task comment feature tests.",
          ],
          output: [
            "Timeline hiển thị được.",
            "Có feature tests.",
            "Manual role test qua.",
          ],
        },
        {
          id: "day-24-block-7",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không thêm attachment nữa nếu chưa polish.",
            "Tối viết PR notes.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-24-block-8",
          time: "18:30 - 20:00",
          label: "Flow 5 — PR Evidence + Cleanup",
          description: "Đi làm phải biết mô tả mình đã làm gì.",
          type: "review",
          tasks: [
            "Chạy backend tests liên quan.",
            "Chạy frontend build.",
            "Self-review diff.",
            "Viết PR summary: what changed, why, how tested.",
            "Thêm screenshots hoặc mô tả UI.",
            "Ghi risks: comments spam, max length, permission edge cases.",
            "Update API docs task comments.",
            "Commit: docs: add pr notes for task comments feature.",
          ],
          output: [
            "Có PR notes.",
            "Có test evidence.",
            "Feature sẵn sàng review.",
          ],
        },
        {
          id: "day-24-block-9",
          time: "20:00 - 20:30",
          label: "Reflect — Feature Delivery Lock",
          description: "Biến mock task thành kinh nghiệm phỏng vấn.",
          type: "review",
          tasks: [
            "Trả lời: mày phân tích requirement thế nào?",
            "Trả lời: mày đảm bảo permission ra sao?",
            "Trả lời: mày test feature thế nào?",
            "Trả lời: nếu comment spam thì xử lý gì?",
            "Commit: docs: add day 24 feature delivery reflection.",
          ],
          output: ["Có note Day 24.", "Có câu chuyện giao feature."],
        },
      ],

      checklist: [
        "Có task brief/acceptance criteria.",
        "Có task_comments migration/model.",
        "Có policy comment.",
        "Có API GET/POST comments.",
        "Có service/resource/request.",
        "React task detail comments chạy.",
        "Có timeline/activity.",
        "Có tests permission/validation.",
        "Có PR notes/evidence.",
        "Có reflection feature delivery.",
      ],

      benchmark:
        "Cuối ngày 24 phải ship được một feature mới end-to-end như junior thật: requirement rõ, backend/frontend đầy đủ, permission đúng, test có, PR note rõ.",
    },

    {
      id: "day-25",
      phaseId: "week-4",
      day: "Day 25",
      title: "Company Mock Task 2 — Bugfix, Refactor, Code Review như đi làm",
      status: "not-started",
      difficulty: "Very Hard",
      duration: "08:00 - 20:30",

      hook: "Junior không chỉ thêm feature. Phần lớn thời gian đi làm là fix bug, đọc code cũ, hiểu nguyên nhân, viết test chống tái phát. Hôm nay mày nhận một bug report và xử lý như engineer, không phải đoán mò.",

      perspectives: [
        {
          label: "Mapping",
          text: "Bugfix flow chuẩn: reproduce → isolate → root cause → failing test → fix → regression test → PR note. Không có reproduce thì chưa được sửa.",
        },
        {
          label: "Ultralearning",
          text: "Tự tạo 3 bug thật trong project hoặc lấy bug đang có. Fix bằng quy trình, không fix theo cảm giác.",
        },
        {
          label: "Hard Mode",
          text: "Không được chỉ nói 'đã fix'. Phải có test hoặc evidence. Phải ghi root cause.",
        },
      ],

      methods: {
        mapping:
          "Map bug report thành steps to reproduce, expected, actual, environment, suspected area.",
        ultralearning: "Dùng logs, network tab, database, tests để truy bug.",
        goldilocks:
          "Nếu bug quá khó, giảm scope: fix 1 bug chính thật sâu. Nếu ổn, fix 3 bug nhỏ.",
        hardMode: "Bug nào fix xong cũng thêm test hoặc regression checklist.",
      },

      goal: [
        "Luyện bugfix flow chuẩn.",
        "Biết viết bug report và root cause.",
        "Fix ít nhất 2–3 lỗi thật hoặc giả lập.",
        "Thêm regression tests.",
        "Refactor phần code xấu sau bug.",
        "Viết code review notes.",
      ],

      timeBlocks: [
        {
          id: "day-25-block-1",
          time: "08:00 - 08:30",
          label: "Bug Intake — Viết bug report trước khi sửa",
          description: "Không sửa khi chưa hiểu lỗi.",
          type: "setup",
          tasks: [
            "Tạo docs/bugs/day-25-bugfix-log.md.",
            "Chọn bug 1: task status đổi nhưng dashboard count không cập nhật.",
            "Chọn bug 2: technician thấy task không assigned.",
            "Chọn bug 3: form 422 không hiển thị đúng field hoặc optional nếu có.",
            "Với mỗi bug ghi: steps, expected, actual, severity.",
            "Commit: docs: add day 25 bug reports.",
          ],
          output: ["Có bugfix log.", "Có steps reproduce."],
        },
        {
          id: "day-25-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Bug 1: Dashboard Count Stale",
          description: "Bug cache/invalidation rất thực tế.",
          type: "deep",
          tasks: [
            "Reproduce: đổi task status rồi xem dashboard count.",
            "Kiểm tra DashboardService cache.",
            "Kiểm tra event/listener clear cache.",
            "Kiểm tra query tính count.",
            "Viết failing test nếu có thể.",
            "Fix invalidate cache khi task status đổi.",
            "Kiểm tra role-specific cache key nếu có.",
            "Test lại bằng UI.",
            "Ghi root cause.",
            "Commit: fix: invalidate dashboard cache on task status changes.",
          ],
          output: [
            "Bug dashboard stale được reproduce.",
            "Có root cause.",
            "Có fix và evidence.",
          ],
        },
        {
          id: "day-25-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ sau bug đầu.",
          type: "break",
          tasks: [
            "Đứng dậy.",
            "Tự hỏi: bug này do logic, cache hay UI?",
            "Không nhảy bug khi chưa ghi root cause.",
          ],
          output: ["Bug 1 có root cause rõ."],
        },
        {
          id: "day-25-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Bug 2: Permission Leak",
          description: "Bug quyền là bug nguy hiểm.",
          type: "deep",
          tasks: [
            "Login bằng technician.",
            "Gọi API list task.",
            "Kiểm tra technician có thấy task không assigned không.",
            "Nếu có, xác định lỗi ở query scope hay policy.",
            "Viết test: technician only sees assigned tasks.",
            "Fix TaskQuery/Policy/Service.",
            "Đảm bảo frontend chỉ là lớp hiển thị, backend vẫn chặn.",
            "Test API bằng token technician.",
            "Ghi root cause.",
            "Commit: fix: restrict technician task visibility.",
          ],
          output: [
            "Permission leak được fix.",
            "Có test hoặc manual evidence.",
            "Root cause rõ.",
          ],
        },
        {
          id: "day-25-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không fix permission lúc mệt.",
            "Chiều xử frontend/form bug.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-25-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Bug 3: Validation Error UX",
          description:
            "Frontend bug rất hay gặp: backend trả lỗi đúng nhưng UI hiển thị sai.",
          type: "deep",
          tasks: [
            "Reproduce form lỗi 422.",
            "Mở Network tab xem response Laravel.",
            "Kiểm tra normalizeLaravelErrors.",
            "Kiểm tra field name backend/frontend có khớp không.",
            "Fix ProjectForm/TaskForm hiển thị lỗi đúng field.",
            "Đảm bảo khi submit fail, form data vẫn còn.",
            "Đảm bảo submit button hết loading sau lỗi.",
            "Thêm component test nếu có.",
            "Ghi root cause.",
            "Commit: fix: display laravel validation errors correctly.",
          ],
          output: [
            "422 field errors hiển thị đúng.",
            "Form UX tốt hơn.",
            "Root cause rõ.",
          ],
        },
        {
          id: "day-25-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Đừng refactor lan man.",
          type: "break",
          tasks: [
            "Nếu còn bug blocker, ưu tiên fix.",
            "Nếu 3 bug xong, refactor code bẩn liên quan.",
            "Không mở feature mới.",
          ],
          output: ["Bug priority rõ."],
        },
        {
          id: "day-25-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Refactor Sau Bug",
          description:
            "Bug thường chỉ ra design xấu. Fix rồi phải dọn đúng chỗ.",
          type: "practice",
          tasks: [
            "Tìm duplicate error handling frontend.",
            "Tách ApiErrorDisplay hoặc useFormErrors nếu cần.",
            "Tìm query permission lặp backend.",
            "Tách scopeAssignedTo hoặc TaskVisibilityService nếu cần.",
            "Không refactor quá rộng.",
            "Chạy tests sau refactor.",
            "Chạy frontend build.",
            "Commit: refactor: cleanup bug related error and permission logic.",
          ],
          output: ["Code liên quan bug sạch hơn.", "Test/build vẫn qua."],
        },
        {
          id: "day-25-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không sửa thêm trước khi review.",
            "Tối viết PR/code review.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-25-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Code Review Notes + Regression Checklist",
          description: "Bugfix không có regression checklist thì dễ tái phát.",
          type: "review",
          tasks: [
            "Viết PR summary cho bugfix.",
            "Mỗi bug ghi root cause.",
            "Mỗi bug ghi fix summary.",
            "Mỗi bug ghi test evidence.",
            "Tạo docs/regression-checklist.md.",
            "Checklist: dashboard count, technician visibility, 422 form errors.",
            "Self-review diff.",
            "Commit: docs: add bugfix pr notes and regression checklist.",
          ],
          output: [
            "Có bugfix PR notes.",
            "Có regression checklist.",
            "Có evidence rõ.",
          ],
        },
        {
          id: "day-25-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Bugfix Interview Lock",
          description: "Biến bugfix thành câu chuyện đi phỏng vấn.",
          type: "review",
          tasks: [
            "Trả lời: quy trình fix bug của mày là gì?",
            "Trả lời: reproduce nghĩa là gì?",
            "Trả lời: root cause khác symptom thế nào?",
            "Trả lời: regression test để làm gì?",
            "Commit: docs: add day 25 bugfix reflection.",
          ],
          output: ["Có note Day 25.", "Có câu chuyện bugfix chuyên nghiệp."],
        },
      ],

      checklist: [
        "Có bug reports.",
        "Có reproduce steps.",
        "Fix dashboard stale/cache bug.",
        "Fix permission leak bug.",
        "Fix validation UX bug.",
        "Có root cause từng bug.",
        "Có test/evidence từng bug.",
        "Có refactor sau bug.",
        "Có regression checklist.",
        "Có reflection bugfix.",
      ],

      benchmark:
        "Cuối ngày 25 mày phải chứng minh biết fix bug như junior thật: reproduce, root cause, fix, test, regression, PR notes.",
    },

    {
      id: "day-26",
      phaseId: "week-4",
      day: "Day 26",
      title: "Portfolio Packaging — README, API Docs, Screenshots, CV Bullets",
      status: "not-started",
      difficulty: "Hard",
      duration: "08:00 - 20:30",

      hook: "Project tốt mà trình bày dở thì nhà tuyển dụng không thấy giá trị. Hôm nay đóng gói project như một sản phẩm: README đủ chạy, ảnh demo, API docs, kiến trúc, CV bullet, câu chuyện phỏng vấn. Đây là ngày biến code thành cơ hội.",

      perspectives: [
        {
          label: "Mapping",
          text: "Nhà tuyển dụng nhìn repo theo thứ tự: README → screenshot → features → setup → code structure → commit history. Mày phải dẫn họ đi đúng đường.",
        },
        {
          label: "Ultralearning",
          text: "Không viết README sáo rỗng. Mỗi dòng phải giúp người đọc hiểu project, chạy project, hoặc đánh giá năng lực.",
        },
        {
          label: "Hard Mode",
          text: "Không phóng đại. Không nói production-ready nếu chưa production-ready. Ghi rõ limitations và future improvements.",
        },
      ],

      methods: {
        mapping:
          "Map project artifact: README, docs, screenshots, API examples, architecture, CV bullets, interview story.",
        ultralearning:
          "Mỗi phần docs phải có bằng chứng: command, screenshot, sample response, demo account.",
        goldilocks:
          "Nếu docs quá nhiều, ưu tiên README chính + demo script + CV bullets. Nếu ổn, thêm API docs chi tiết.",
        hardMode:
          "Không để README outdated. Chạy lại command theo README để kiểm chứng.",
      },

      goal: [
        "Hoàn thiện README chuyên nghiệp.",
        "Thêm screenshots hoặc sample responses.",
        "Viết API docs đủ dùng.",
        "Viết architecture explanation.",
        "Viết setup guide backend/frontend/Docker.",
        "Viết CV bullets mạnh nhưng thật.",
        "Viết interview story 5 phút.",
      ],

      timeBlocks: [
        {
          id: "day-26-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Recruiter Repo Journey",
          description: "Xem repo bằng mắt nhà tuyển dụng.",
          type: "setup",
          tasks: [
            "Mở repo như người lạ.",
            "Ghi 5 câu hỏi người xem sẽ hỏi: project là gì, chạy sao, có gì nổi bật, tech stack gì, demo đâu.",
            "Tạo docs/portfolio-packaging-plan.md.",
            "Liệt kê artifacts cần có: README, screenshots, API docs, demo script, CV bullets.",
            "Commit: docs: add portfolio packaging plan.",
          ],
          output: ["Có packaging plan.", "Biết README thiếu gì."],
        },
        {
          id: "day-26-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — README Rewrite",
          description:
            "README phải bán được năng lực, không chỉ liệt kê công nghệ.",
          type: "deep",
          tasks: [
            "Viết Project Overview 5–7 dòng.",
            "Viết Problem Statement.",
            "Viết Key Features.",
            "Viết Tech Stack chia Backend/Frontend/Infra/Testing.",
            "Viết Architecture Flow: React → API → Service → DB.",
            "Viết Role Matrix.",
            "Viết Screenshots section placeholder nếu chưa có ảnh.",
            "Viết Setup Backend.",
            "Viết Setup Frontend.",
            "Viết Docker Setup.",
            "Commit: docs: rewrite project readme overview setup.",
          ],
          output: [
            "README mới rõ ràng.",
            "Có setup guide.",
            "Có feature/architecture sections.",
          ],
        },
        {
          id: "day-26-block-3",
          time: "10:30 - 10:45",
          label: "Break — README sanity",
          description: "Nghỉ và đọc README như người ngoài.",
          type: "break",
          tasks: [
            "Đọc README từ đầu.",
            "Nếu người lạ chưa hiểu project trong 30 giây, sửa overview.",
            "Nếu setup thiếu command, bổ sung.",
          ],
          output: ["README dễ hiểu hơn."],
        },
        {
          id: "day-26-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — API Docs + Sample Responses",
          description: "API docs là bằng chứng backend nghiêm túc.",
          type: "deep",
          tasks: [
            "Tạo docs/api.md.",
            "Ghi auth endpoints: login, me, logout.",
            "Ghi project endpoints.",
            "Ghi task endpoints.",
            "Ghi comments/activity endpoints nếu có.",
            "Ghi import/export endpoints.",
            "Mỗi endpoint có method, URL, auth, body, response.",
            "Thêm sample 422 validation error.",
            "Thêm sample 401/403.",
            "Thêm curl examples cho 3 endpoint chính.",
            "Commit: docs: add api documentation with sample responses.",
          ],
          output: [
            "Có docs/api.md.",
            "Có sample responses.",
            "Có curl examples.",
          ],
        },
        {
          id: "day-26-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không viết CV lúc mệt.",
            "Chiều làm screenshots/demo.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-26-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — Screenshots + Demo Script",
          description: "Người xem cần thấy app, không chỉ đọc chữ.",
          type: "deep",
          tasks: [
            "Chạy app local.",
            "Chụp màn hình login.",
            "Chụp dashboard.",
            "Chụp project list.",
            "Chụp task workflow.",
            "Chụp comment/activity hoặc import/export nếu có.",
            "Đưa ảnh vào README hoặc docs/screenshots.md.",
            "Viết demo-script.md 3–5 phút.",
            "Demo script gồm: login admin, dashboard, project CRUD, task status, role denied.",
            "Commit: docs: add screenshots and demo script.",
          ],
          output: ["Có screenshots.", "Có demo script 3–5 phút."],
        },
        {
          id: "day-26-block-7",
          time: "15:30 - 15:45",
          label: "Break — Goldilocks check",
          description: "Docs không cần đẹp quá, cần rõ và thật.",
          type: "break",
          tasks: [
            "Nếu ảnh quá nhiều, giữ 4 ảnh quan trọng nhất.",
            "Nếu demo script dài, cắt còn 5 phút.",
            "Không mất 2 tiếng căn ảnh.",
          ],
          output: ["Docs gọn hơn."],
        },
        {
          id: "day-26-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — CV Bullets + Interview Story",
          description: "Biến project thành câu chuyện ứng tuyển.",
          type: "practice",
          tasks: [
            "Viết 5 CV bullets tiếng Việt.",
            "Viết 5 CV bullets tiếng Anh nếu cần.",
            "Bullet phải có action + tech + result.",
            "Không ghi chung chung 'làm website quản lý'.",
            "Ví dụ: Built role-based Laravel API with React admin dashboard, feature tests, Docker setup.",
            "Viết interview story: context, problem, solution, trade-offs, result.",
            "Viết 3 challenges: auth/role, query performance, Docker/deploy.",
            "Commit: docs: add cv bullets and interview story.",
          ],
          output: [
            "Có CV bullets.",
            "Có interview story.",
            "Có challenges/trade-offs.",
          ],
        },
        {
          id: "day-26-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không viết thêm lan man.",
            "Tối kiểm tra docs bằng clean run.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-26-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Docs Verification",
          description: "Docs phải chạy đúng, không phải viết cho đẹp.",
          type: "review",
          tasks: [
            "Làm theo README từ đầu ở mức có thể.",
            "Kiểm tra command backend.",
            "Kiểm tra command frontend.",
            "Kiểm tra Docker command.",
            "Kiểm tra API docs có endpoint sai không.",
            "Kiểm tra screenshots path đúng.",
            "Kiểm tra .env.example đủ.",
            "Fix docs outdated.",
            "Commit: docs: verify and polish portfolio documentation.",
          ],
          output: ["Docs được kiểm chứng.", "README ít lỗi hơn."],
        },
        {
          id: "day-26-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Portfolio Lock",
          description: "Khóa cách trình bày project.",
          type: "review",
          tasks: [
            "Trả lời: project này chứng minh kỹ năng gì?",
            "Trả lời: điểm mạnh nhất của project là gì?",
            "Trả lời: limitation trung thực là gì?",
            "Trả lời: nếu có thêm 2 tuần sẽ cải thiện gì?",
            "Commit: docs: add day 26 portfolio reflection.",
          ],
          output: ["Có note Day 26.", "Có câu chuyện portfolio rõ."],
        },
      ],

      checklist: [
        "README được rewrite.",
        "Có setup backend/frontend/Docker.",
        "Có API docs.",
        "Có sample responses.",
        "Có screenshots.",
        "Có demo script.",
        "Có CV bullets.",
        "Có interview story.",
        "Docs được verify.",
        "Có reflection portfolio.",
      ],

      benchmark:
        "Cuối ngày 26 repo phải nhìn như project của người sẵn sàng apply junior: README rõ, API docs có, screenshots có, CV bullets có, demo story có.",
    },

    {
      id: "day-27",
      phaseId: "week-4",
      day: "Day 27",
      title: "Interview War Day — Laravel, React, SQL, Docker, Project Defense",
      status: "not-started",
      difficulty: "Boss Fight",
      duration: "08:00 - 20:30",

      hook: "Phỏng vấn không chỉ hỏi mày biết gì. Họ xem mày có giải thích được thứ mày làm không. Hôm nay luyện trả lời như junior thật: rõ, có ví dụ từ project, không vòng vo, không chém quá tay.",

      perspectives: [
        {
          label: "Mapping",
          text: "Interview map: PHP/OOP → Laravel → SQL → API/Auth → React → Testing → Docker/Deploy → Project story. Mỗi nhóm phải có câu trả lời 60–90 giây.",
        },
        {
          label: "Ultralearning",
          text: "Không đọc câu trả lời. Nói thành tiếng, ghi âm nếu được, tự bắt lỗi. Câu nào không trả lời được thì quay lại project tìm ví dụ.",
        },
        {
          label: "Hard Mode",
          text: "Không học vẹt. Mọi câu trả lời phải có ví dụ từ project của mày. Không biết thì nói chưa biết nhưng nêu cách sẽ tìm hiểu.",
        },
      ],

      methods: {
        mapping: "Map mỗi chủ đề phỏng vấn với file/code thật trong project.",
        ultralearning:
          "Active recall: đóng note, trả lời bằng miệng, sau đó kiểm tra lại.",
        goldilocks:
          "Nếu câu quá khó, trả lời bản junior trước. Nếu ổn, thêm trade-off.",
        hardMode: "Mỗi câu trả lời phải ngắn, đúng, có ví dụ. Không lan man.",
      },

      goal: [
        "Chuẩn bị Q&A PHP/OOP/Laravel.",
        "Chuẩn bị Q&A SQL/database.",
        "Chuẩn bị Q&A React/TypeScript.",
        "Chuẩn bị Q&A auth/security/API.",
        "Chuẩn bị Q&A testing/Docker/deploy.",
        "Luyện project walkthrough 5 phút.",
        "Luyện mock interview 60 phút.",
      ],

      timeBlocks: [
        {
          id: "day-27-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Interview Question Bank",
          description: "Tạo bản đồ câu hỏi trước khi luyện.",
          type: "setup",
          tasks: [
            "Tạo docs/interview-question-bank.md.",
            "Chia nhóm: PHP/OOP, Laravel, SQL, React, Auth, Testing, Docker, Project.",
            "Mỗi nhóm viết 10 câu.",
            "Đánh dấu câu yếu bằng 🔥.",
            "Chọn 30 câu bắt buộc trả lời hôm nay.",
            "Commit: docs: add interview question bank.",
          ],
          output: ["Có question bank.", "Có danh sách câu yếu."],
        },
        {
          id: "day-27-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — PHP/OOP/Laravel Q&A",
          description: "Nền backend phải chắc.",
          type: "deep",
          tasks: [
            "Trả lời: class vs object.",
            "Trả lời: interface vs abstract class.",
            "Trả lời: dependency injection là gì?",
            "Trả lời: Service Container Laravel làm gì?",
            "Trả lời: middleware dùng khi nào?",
            "Trả lời: FormRequest dùng để làm gì?",
            "Trả lời: Resource dùng để làm gì?",
            "Trả lời: Policy khác middleware thế nào?",
            "Trả lời: queue job dùng khi nào?",
            "Với mỗi câu, gắn ví dụ từ project.",
            "Commit: docs: add php oop laravel interview answers.",
          ],
          output: ["Có câu trả lời Laravel/OOP.", "Có ví dụ từ project."],
        },
        {
          id: "day-27-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ ngắn.",
          type: "break",
          tasks: [
            "Đứng dậy.",
            "Nói lại 3 câu khó nhất không nhìn note.",
            "Ghi câu vẫn vấp.",
          ],
          output: ["Có danh sách câu còn vấp."],
        },
        {
          id: "day-27-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — SQL/API/Auth/Security Q&A",
          description: "Đây là nhóm câu junior backend rất hay gặp.",
          type: "deep",
          tasks: [
            "Trả lời: INNER JOIN vs LEFT JOIN.",
            "Trả lời: index dùng để làm gì?",
            "Trả lời: N+1 là gì và fix sao?",
            "Trả lời: transaction dùng khi nào?",
            "Trả lời: 401 vs 403 vs 422.",
            "Trả lời: authentication vs authorization.",
            "Trả lời: SQL Injection fix sao?",
            "Trả lời: XSS/CSRF là gì?",
            "Trả lời: rate limit login để làm gì?",
            "Trả lời: upload file cần validate gì?",
            "Commit: docs: add sql api auth security interview answers.",
          ],
          output: [
            "Có câu trả lời SQL/API/Auth.",
            "Biết lấy ví dụ từ project.",
          ],
        },
        {
          id: "day-27-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không nhồi thêm câu mới.",
            "Chiều React/testing/Docker.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-27-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — React/TypeScript/State Q&A",
          description:
            "Fullstack junior phải giải thích được frontend mình viết.",
          type: "deep",
          tasks: [
            "Trả lời: props vs state.",
            "Trả lời: useEffect dùng khi nào?",
            "Trả lời: tại sao không fetch server data bằng useEffect lung tung?",
            "Trả lời: React Query giải quyết gì?",
            "Trả lời: mutation/invalidate là gì?",
            "Trả lời: Zustand dùng cho state nào?",
            "Trả lời: TypeScript generic dùng để làm gì?",
            "Trả lời: discriminated union giúp gì?",
            "Trả lời: ProtectedRoute hoạt động sao?",
            "Trả lời: form error 422 hiển thị thế nào?",
            "Commit: docs: add react typescript interview answers.",
          ],
          output: ["Có câu trả lời React/TS.", "Không trả lời kiểu học vẹt."],
        },
        {
          id: "day-27-block-7",
          time: "15:30 - 15:45",
          label: "Break — Speaking check",
          description: "Đọc trong đầu không đủ, phải nói thành tiếng.",
          type: "break",
          tasks: [
            "Nói thử project walkthrough 2 phút.",
            "Ghi chỗ bị vấp.",
            "Cắt bớt câu lan man.",
          ],
          output: ["Walkthrough bớt lan man."],
        },
        {
          id: "day-27-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Testing/Docker/Deploy Q&A + Project Walkthrough",
          description: "Những câu làm mày khác người học demo.",
          type: "practice",
          tasks: [
            "Trả lời: Unit Test vs Feature Test.",
            "Trả lời: RefreshDatabase dùng làm gì?",
            "Trả lời: Docker image vs container.",
            "Trả lời: volume dùng làm gì?",
            "Trả lời: CI/CD là gì?",
            "Trả lời: deploy lỗi CORS xử lý sao?",
            "Trả lời: APP_DEBUG production vì sao false?",
            "Viết project walkthrough 5 phút: problem, stack, architecture, features, challenges, lessons.",
            "Nói walkthrough thành tiếng 3 lần.",
            "Commit: docs: add testing docker deploy interview answers and walkthrough.",
          ],
          output: ["Có walkthrough 5 phút.", "Có Q&A testing/Docker/deploy."],
        },
        {
          id: "day-27-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: ["Ăn tối.", "Không học thêm câu mới.", "Tối mock interview."],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-27-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Mock Interview 60 phút",
          description: "Tập phỏng vấn thật, không đọc note.",
          type: "review",
          tasks: [
            "Set timer 60 phút.",
            "15 phút: giới thiệu bản thân + project.",
            "15 phút: Laravel/API/auth questions.",
            "15 phút: React/TS/state questions.",
            "15 phút: SQL/Docker/testing questions.",
            "Không nhìn note khi trả lời.",
            "Ghi câu không trả lời được.",
            "Ghi câu trả lời quá dài.",
            "Sửa lại answer bank sau mock.",
            "Commit: docs: add mock interview feedback.",
          ],
          output: [
            "Có mock interview feedback.",
            "Có danh sách câu cần ôn lại.",
          ],
        },
        {
          id: "day-27-block-11",
          time: "20:00 - 20:30",
          label: "Reflect — Interview War Review",
          description: "Khóa kế hoạch trước final day.",
          type: "review",
          tasks: [
            "Chọn 10 câu yếu nhất.",
            "Viết lại câu trả lời ngắn hơn.",
            "Cập nhật project walkthrough cuối.",
            "Chuẩn bị Day 28 final demo.",
            "Commit: docs: add day 27 interview reflection.",
          ],
          output: ["Có top 10 weak questions.", "Có final walkthrough."],
        },
      ],

      checklist: [
        "Có interview question bank.",
        "Có PHP/OOP/Laravel answers.",
        "Có SQL/API/Auth answers.",
        "Có React/TS answers.",
        "Có Testing/Docker/Deploy answers.",
        "Có project walkthrough 5 phút.",
        "Có mock interview feedback.",
        "Có top 10 weak questions.",
        "Có reflection interview.",
      ],

      benchmark:
        "Cuối ngày 27 mày phải nói được về project và kiến thức liên quan như junior thật: rõ ràng, có ví dụ, có trade-off, không học vẹt.",
    },

    {
      id: "day-28",
      phaseId: "week-4",
      day: "Day 28",
      title: "Final Boss — Demo, Apply Package, Roadmap Next 60 Days",
      status: "not-started",
      difficulty: "Final Boss",
      duration: "08:00 - 20:30",

      hook: "Ngày cuối không phải kết thúc. Đây là ngày biến 1 tháng cày cuốc thành bộ hồ sơ junior: project demo, repo sạch, CV bullet, interview story, apply plan, next roadmap. Hôm nay mày đóng gói để bước ra ngoài, không cày trong hang nữa.",

      perspectives: [
        {
          label: "Mapping",
          text: "Junior-ready package gồm: repo show được, demo chạy được, CV viết được, câu chuyện kể được, câu hỏi trả lời được, plan apply rõ.",
        },
        {
          label: "Ultralearning",
          text: "Review bằng output thật. Không tự động viên suông. Cái gì chưa có artifact thì chưa tính.",
        },
        {
          label: "Hard Mode",
          text: "Không đợi hoàn hảo mới apply. Nhưng cũng không apply với repo bừa. Hôm nay chốt bản đủ tốt, ghi limitation, lên lịch cải thiện.",
        },
      ],

      methods: {
        mapping:
          "Map final package: README, screenshots, deploy/runbook, demo script, CV bullets, interview answers, apply list.",
        ultralearning: "Chạy full demo từ đầu đến cuối như đang phỏng vấn.",
        goldilocks:
          "Nếu còn nhiều lỗi, chốt demo path ổn nhất. Nếu ổn, quay video demo hoặc deploy.",
        hardMode:
          "Không nói dối trong CV. Không giấu limitations. Không trì hoãn apply vô hạn.",
      },

      goal: [
        "Chạy final demo end-to-end.",
        "Chốt repo sạch.",
        "Chốt README/docs/screenshots.",
        "Chốt CV bullets và About Me.",
        "Chốt interview story.",
        "Tạo apply package.",
        "Lập kế hoạch 60 ngày tiếp theo.",
      ],

      timeBlocks: [
        {
          id: "day-28-block-1",
          time: "08:00 - 08:30",
          label: "Mapping — Final Package Checklist",
          description: "Chốt tiêu chuẩn cuối cùng.",
          type: "setup",
          tasks: [
            "Tạo docs/final-package-checklist.md.",
            "Checklist repo: README, screenshots, API docs, setup, tests, Docker, known limitations.",
            "Checklist demo: login, dashboard, project CRUD, task workflow, comments, import/export, role denied.",
            "Checklist CV: bullets, project summary, tech stack.",
            "Checklist interview: walkthrough, Q&A, challenges.",
            "Commit: docs: add final package checklist.",
          ],
          output: ["Có final checklist.", "Có demo path cuối."],
        },
        {
          id: "day-28-block-2",
          time: "08:30 - 10:30",
          label: "Flow 1 — Final Demo Rehearsal",
          description: "Chạy demo như đang trước mặt interviewer.",
          type: "deep",
          tasks: [
            "Start backend.",
            "Start frontend.",
            "Login admin.",
            "Show dashboard.",
            "Create project.",
            "Create task.",
            "Update task status.",
            "Add comment.",
            "Show activity timeline.",
            "Test role denied bằng technician/manager.",
            "Import CSV nếu feature ổn.",
            "Export report nếu feature ổn.",
            "Ghi lỗi phát sinh.",
            "Commit: docs: add final demo rehearsal notes.",
          ],
          output: ["Demo path được rehearsal.", "Có lỗi cuối cần fix nếu có."],
        },
        {
          id: "day-28-block-3",
          time: "10:30 - 10:45",
          label: "Break",
          description: "Nghỉ trước khi fix cuối.",
          type: "break",
          tasks: [
            "Đứng dậy.",
            "Chọn lỗi nào thật sự cần fix.",
            "Không mở feature mới.",
          ],
          output: ["Fix priority rõ."],
        },
        {
          id: "day-28-block-4",
          time: "10:45 - 12:45",
          label: "Flow 2 — Final Fixes Only",
          description: "Chỉ fix blocker, không sáng tạo thêm.",
          type: "deep",
          tasks: [
            "Fix bug chặn demo nếu có.",
            "Fix typo README quan trọng.",
            "Fix env docs thiếu.",
            "Fix screenshot path lỗi.",
            "Fix build/test fail nếu có.",
            "Không refactor lớn.",
            "Không thêm feature mới.",
            "Chạy lại demo path phần vừa fix.",
            "Commit: fix: resolve final demo blockers.",
          ],
          output: ["Demo blocker được xử lý.", "Repo ổn định hơn."],
        },
        {
          id: "day-28-block-5",
          time: "12:45 - 13:30",
          label: "Lunch",
          description: "Nghỉ trưa.",
          type: "break",
          tasks: [
            "Ăn trưa.",
            "Không tự phá project bằng feature mới.",
            "Chiều đóng CV/apply package.",
          ],
          output: ["Quay lại 13:30."],
        },
        {
          id: "day-28-block-6",
          time: "13:30 - 15:30",
          label: "Flow 3 — CV + Project Summary",
          description: "Viết để nhà tuyển dụng hiểu được giá trị.",
          type: "deep",
          tasks: [
            "Viết project title rõ: Fullstack Laravel React Admin System.",
            "Viết 3 dòng project summary.",
            "Viết 5 CV bullets backend-focused.",
            "Viết 5 CV bullets fullstack-focused.",
            "Viết tech stack: Laravel, PHP, MySQL, React, Tailwind, React Query, Zustand, Docker, CI.",
            "Viết About Me 4–5 dòng cho junior Laravel/Fullstack.",
            "Viết version tiếng Việt.",
            "Viết version tiếng Anh nếu cần.",
            "Commit: docs: add final cv project summaries.",
          ],
          output: [
            "Có CV bullets final.",
            "Có project summary.",
            "Có About Me.",
          ],
        },
        {
          id: "day-28-block-7",
          time: "15:30 - 15:45",
          label: "Break — Reality check",
          description: "CV phải thật, không chém.",
          type: "break",
          tasks: [
            "Gạch bỏ bullet nào không chứng minh được bằng repo.",
            "Nếu bullet quá chung, thêm action/result.",
            "Không ghi expert.",
          ],
          output: ["CV bullets trung thực hơn."],
        },
        {
          id: "day-28-block-8",
          time: "15:45 - 17:45",
          label: "Flow 4 — Apply Package + Job Targeting",
          description: "Không chỉ học. Phải biết bắn CV đúng chỗ.",
          type: "practice",
          tasks: [
            "Tạo docs/apply-package.md.",
            "Liệt kê target roles: Laravel Intern, PHP Intern, Fullstack Intern, Backend Intern.",
            "Liệt kê 10 công ty/role muốn apply.",
            "Viết email apply template ngắn.",
            "Viết cover note 5–7 dòng cho Laravel/Fullstack.",
            "Chuẩn bị link repo.",
            "Chuẩn bị demo screenshots.",
            "Chuẩn bị câu trả lời: why this role?",
            "Commit: docs: add apply package and target roles.",
          ],
          output: [
            "Có apply package.",
            "Có target roles list.",
            "Có email template.",
          ],
        },
        {
          id: "day-28-block-9",
          time: "17:45 - 18:30",
          label: "Dinner",
          description: "Nghỉ ăn tối.",
          type: "break",
          tasks: [
            "Ăn tối.",
            "Không chỉnh CV vô hạn.",
            "Tối chốt roadmap tiếp.",
          ],
          output: ["Quay lại 18:30."],
        },
        {
          id: "day-28-block-10",
          time: "18:30 - 20:00",
          label: "Flow 5 — Next 60 Days Roadmap",
          description:
            "Junior-ready không phải hết học. Đây là điểm xuất phát mới.",
          type: "review",
          tasks: [
            "Tạo docs/next-60-days-roadmap.md.",
            "30 ngày tiếp: apply + fix project + mock interviews.",
            "Mỗi tuần apply ít nhất 5 vị trí phù hợp.",
            "Mỗi tuần fix 2 limitations trong project.",
            "Mỗi tuần làm 1 mock interview.",
            "Học thêm: Laravel advanced testing, API design, queue/mail, AWS basics nếu cần.",
            "Học thêm: SQL performance, Docker deploy, CI/CD deeper.",
            "Chọn 1 project nhỏ tiếp theo nếu cần: inventory system hoặc booking system.",
            "Commit: docs: add next 60 days roadmap.",
          ],
          output: [
            "Có roadmap 60 ngày.",
            "Có apply cadence.",
            "Có improvement plan.",
          ],
        },
        {
          id: "day-28-block-11",
          time: "20:00 - 20:30",
          label: "Final Reflect — One Month Review",
          description: "Chốt lại hành trình 1 tháng.",
          type: "review",
          tasks: [
            "Viết docs/one-month-review.md.",
            "Tóm tắt đã học: PHP, OOP, SQL, Laravel, React, TS, Docker, CI, Deploy.",
            "Tóm tắt project đã build.",
            "Tóm tắt 5 điểm mạnh hiện tại.",
            "Tóm tắt 5 điểm yếu cần cải thiện.",
            "Viết lời cam kết apply trong 7 ngày tới.",
            "Tạo final tag v1.0.0-junior-ready nếu repo ổn.",
            "Commit: docs: add one month final review.",
          ],
          output: [
            "Có one-month review.",
            "Có final tag nếu ổn.",
            "Có cam kết apply.",
          ],
        },
      ],

      checklist: [
        "Có final package checklist.",
        "Demo path chạy được.",
        "Fix blocker cuối.",
        "README/docs ổn.",
        "Có CV bullets final.",
        "Có project summary.",
        "Có About Me.",
        "Có apply package.",
        "Có target roles list.",
        "Có next 60 days roadmap.",
        "Có one-month review.",
      ],

      benchmark:
        "Cuối Day 28 mày phải có một bộ hồ sơ junior: project show được, repo đọc được, demo nói được, CV viết được, phỏng vấn kể được, apply plan rõ. Đây là lúc bước ra apply thật.",
    },
  ],
};
function applyJuniorCompetitiveUpgrades(roadmap) {
  const globalDefinitionOfDone = [
    "Code chạy được trên máy hiện tại.",
    "Có commit rõ ràng, không dồn commit cuối ngày.",
    "Có test hoặc manual evidence.",
    "Có note lỗi gặp phải và cách fix.",
    "Có benchmark tự chấm cuối ngày.",
    "Có ít nhất 1 câu trả lời phỏng vấn liên quan.",
  ];

  const globalEvidence = [
    "Link commit hoặc git log --oneline.",
    "Screenshot UI/API nếu có.",
    "Test output hoặc manual checklist.",
    "Curl/Postman response nếu là API.",
    "README/docs section nếu có thay đổi docs.",
    "Note lỗi hoặc trade-off.",
  ];

  const patches = {
    "day-1": {
      goal: [
        "Bắt đầu thói quen Definition of Done: học xong phải có code, commit, note, evidence.",
        "Phân biệt rõ validation, sanitization và escaping.",
      ],
      checklist: [
        "Có declare(strict_types=1) trong các file PHP chính nếu phù hợp.",
        "Ghi được validation khác sanitization khác escaping.",
      ],
      appendTasks: {
        "day-1-block-2": [
          "Thêm declare(strict_types=1) vào đầu file PHP chính.",
          "Tạo input bẩn để test: chuỗi rỗng, null, số âm, tiếng Việt, ký tự đặc biệt.",
          "Ghi note: type strict giúp phát hiện lỗi sớm hơn khi truyền sai kiểu.",
        ],
        "day-1-block-10": [
          "Tạo composer.json cho lab nếu chưa có.",
          "Thêm composer scripts nếu setup được: analyse, format.",
          "Ghi Definition of Done cho ngày 1 vào README hoặc notes/day-1.md.",
        ],
      },
    },

    "day-2": {
      goal: [
        "Biết dùng Enum, DTO, Value Object để code Laravel sạch hơn.",
        "Không truyền array raw bừa bãi vào service khi dữ liệu có cấu trúc rõ.",
      ],
      checklist: [
        "Có ít nhất 2 enum: UserRole và WorkOrderStatus hoặc TaskStatus.",
        "Có ít nhất 1 DTO dùng trong service.",
        "Có ít nhất 1 Value Object như Email hoặc Money.",
      ],
      appendTasks: {
        "day-2-block-8": [
          "Tạo enum UserRole: Admin, Manager, Technician, User.",
          "Tạo enum WorkOrderStatus hoặc TaskStatus: Pending, Assigned, InProgress, Blocked, Completed, Verified, Cancelled.",
          "Tạo DTO CreateUserData gồm name, email, role.",
          "Tạo Value Object Email để validate email format.",
          "Ghi note: DTO giúp service không phụ thuộc array raw dễ sai key.",
        ],
        "day-2-block-10": [
          "Refactor UserService nhận CreateUserData thay vì array raw.",
          "Nếu service còn nhận array, ghi rõ lý do và limitation.",
          "Tự trả lời: Enum khác string constant ở đâu?",
        ],
      },
    },

    "day-3": {
      goal: [
        "Thiết kế database theo domain doanh nghiệp, không chỉ bảng CRUD đơn giản.",
        "Biết chọn cascade/restrict/set null có lý do.",
      ],
      checklist: [
        "Có ghi cardinality 1-1, 1-N, N-N cho các bảng chính.",
        "Có ít nhất 2 composite index hoặc composite unique hợp lý.",
        "Có note migration safety: không drop column production bừa.",
      ],
      appendTasks: {
        "day-3-block-2": [
          "Với mỗi bảng, ghi relationship cardinality: 1-1, 1-N, N-N.",
          "Ghi lý do chọn onDelete: cascade, restrict hoặc set null.",
          "Thêm composite unique/index phù hợp, ví dụ unique(machine_id, maintenance_date) hoặc unique(user_id, task_id).",
          "Ghi lý do chọn BIGINT, DECIMAL, VARCHAR, TEXT, JSON.",
        ],
        "day-3-block-10": [
          "Viết migration-safety-notes.md.",
          "Ghi rule: production migration không tùy tiện drop column/drop table.",
          "Ghi cách backup SQL trước khi migrate.",
          "Tự trả lời: rollback migration có thể nguy hiểm ở đâu?",
        ],
      },
    },

    "day-4": {
      goal: [
        "Biết nhìn API theo OWASP API Security mindset.",
        "Có API contract sơ bộ bằng OpenAPI hoặc docs rõ.",
      ],
      checklist: [
        "Có mapping endpoint với risk: auth, authorization, injection, mass assignment.",
        "Có OpenAPI draft hoặc API contract docs.",
        "Có rate limit login.",
      ],
      appendTasks: {
        "day-4-block-1": [
          "Map endpoint với OWASP-style risks: broken authentication, broken authorization, injection, mass assignment, unrestricted resource consumption.",
          "Với mỗi endpoint, ghi rủi ro lớn nhất và cách giảm rủi ro.",
        ],
        "day-4-block-3": [
          "Tự trả lời: mass assignment là gì?",
          "Tự trả lời: broken authorization nguy hiểm hơn ẩn nút frontend ở đâu?",
        ],
        "day-4-block-6": [
          "Tạo docs/openapi-draft.yaml hoặc docs/api-contract.md.",
          "Ghi request body và response cho ít nhất 3 endpoint.",
          "Ghi mẫu response 401, 403, 422, 500.",
        ],
        "day-4-block-8": [
          "Thêm rate limit cho login endpoint nếu có thể.",
          "Test brute force login 6 lần.",
          "Ghi note: CORS không thay thế authentication/authorization.",
        ],
      },
    },

    "day-5": {
      goal: [
        "Không đợi tới tuần 3 mới test. Project PHP thuần cũng phải có test.",
        "Có CI mini sớm để tạo thói quen quality gate.",
      ],
      checklist: [
        "Có PHPUnit hoặc Pest cho project PHP thuần.",
        "Có ít nhất 8-10 test quan trọng.",
        "Có CI mini hoặc docs CI plan.",
      ],
      appendTasks: {
        "day-5-block-6": [
          "Cài Pest hoặc PHPUnit nếu đủ thời gian.",
          "Viết test cho register success.",
          "Viết test duplicate email fail.",
          "Viết test login wrong password fail.",
          "Viết test create entity valid.",
          "Viết test create entity invalid.",
          "Viết test update/delete not found.",
          "Viết test transaction rollback nếu có.",
        ],
        "day-5-block-8": [
          "Tạo GitHub Actions mini nếu có remote.",
          "CI chạy composer install, phpstan analyse, phpunit/pest.",
          "Nếu chưa setup CI được, tạo docs/ci-plan.md ghi workflow dự kiến.",
        ],
      },
    },

    "day-6": {
      goal: [
        "Học Laravel conventions và tooling chính thức, không chỉ artisan make.",
        "Có demo accounts và factory states phục vụ test/demo.",
      ],
      checklist: [
        "Có demo accounts admin/manager/technician.",
        "Có factory states pending/completed/overdue.",
        "Có Laravel Pint hoặc format command.",
      ],
      appendTasks: {
        "day-6-block-2": [
          "Chạy php artisan about để nắm môi trường Laravel.",
          "Chạy php artisan env để biết app đang ở environment nào.",
          "Chạy php artisan route:list sau khi thêm route.",
        ],
        "day-6-block-4": [
          "Tạo demo accounts: admin@example.com, manager@example.com, technician@example.com.",
          "Tạo factory states: pending task, completed task, overdue task.",
          "Seeder phải tạo dữ liệu đủ để demo dashboard và filter.",
        ],
        "day-6-block-8": [
          "Cài/chạy Laravel Pint nếu project hỗ trợ.",
          "Thêm composer scripts: test, format, analyse nếu có.",
        ],
      },
    },

    "day-7": {
      goal: [
        "Có API versioning và global exception response.",
        "Biết dùng tool local để debug request/query/job.",
      ],
      checklist: [
        "API dùng prefix /api/v1.",
        "Có global JSON error format cho 401/403/404/422/500.",
        "Có debug tool local hoặc query logging note.",
      ],
      appendTasks: {
        "day-7-block-2": [
          "Chuẩn hóa route prefix /api/v1.",
          "Ghi note backward compatibility: vì sao API versioning quan trọng.",
        ],
        "day-7-block-4": [
          "Chuẩn hóa global exception JSON response.",
          "ValidationException trả 422.",
          "ModelNotFoundException trả 404.",
          "AuthorizationException trả 403.",
          "AuthenticationException trả 401.",
        ],
        "day-7-block-8": [
          "Cài Laravel Telescope hoặc Debugbar chỉ ở local nếu phù hợp.",
          "Dùng tool debug để xem request/query và tìm N+1.",
          "Nếu không cài, tạo notes/debugging-laravel.md ghi cách xem logs/query.",
        ],
      },
    },

    "day-8": {
      goal: [
        "Thêm runtime validation cho API boundary bằng Zod hoặc schema tương đương.",
        "TypeScript không được bị hiểu nhầm là bảo vệ runtime tuyệt đối.",
      ],
      checklist: [
        "Có schema cho User/WorkOrder/Task.",
        "Có parse API response ở boundary.",
        "Có note compile-time vs runtime validation.",
      ],
      appendTasks: {
        "day-8-block-4": [
          "Cài zod nếu dùng TypeScript frontend.",
          "Tạo UserSchema, WorkOrderSchema hoặc TaskSchema.",
          "Tạo ApiResponseSchema cơ bản nếu làm được.",
          "Parse response từ API ở boundary trước khi đưa vào UI.",
          "Nếu parse fail, show lỗi Invalid API response thay vì crash.",
        ],
        "day-8-block-11": [
          "Trả lời: TypeScript compile-time khác runtime validation thế nào?",
          "Trả lời: vì sao frontend không nên tin API response tuyệt đối?",
        ],
      },
    },

    "day-9": {
      goal: [
        "List/filter/search/pagination phải giống task thật.",
        "Biết debounce search, query key theo filter và reset page khi filter đổi.",
      ],
      checklist: [
        "Search có debounce.",
        "Query key chứa filters/page/search.",
        "Khi search đổi thì page reset về 1.",
        "Có plan MSW mock API nếu backend chưa chạy.",
      ],
      appendTasks: {
        "day-9-block-2": [
          "Query key phải chứa filters, search, page, perPage.",
          "Không dùng queryKey chung chung kiểu ['data'].",
        ],
        "day-9-block-8": [
          "Thêm debounced search 400ms.",
          "Khi search hoặc filter đổi, reset page về 1.",
          "Nếu backend chưa chạy ổn, nghiên cứu MSW để mock API đúng contract.",
        ],
      },
    },

    "day-10": {
      goal: [
        "Có quyết định rõ auth strategy: Bearer token hay Sanctum cookie SPA.",
        "Hiểu trade-off token localStorage và cookie/session.",
      ],
      checklist: [
        "Có docs/auth-strategy.md.",
        "So sánh Bearer token vs Laravel Sanctum SPA auth.",
        "Ghi rõ project chọn hướng nào và vì sao.",
      ],
      appendTasks: {
        "day-10-block-1": [
          "Tạo docs/auth-strategy.md.",
          "So sánh Bearer token với Sanctum cookie SPA auth.",
          "Ghi rủi ro token trong localStorage.",
          "Ghi lợi/hại của cookie httpOnly/session.",
        ],
        "day-10-block-8": [
          "Nếu dùng Bearer token: đảm bảo logout clear token và query cache.",
          "Nếu nghiên cứu Sanctum: ghi flow CSRF cookie, stateful domains, credentials.",
          "Không implement cả hai nếu làm dự án bị loạn; chọn một và giải thích trade-off.",
        ],
      },
    },

    "day-11": {
      goal: [
        "UI system phải usable và accessible cơ bản.",
        "Không chỉ đẹp mắt, phải dùng được bằng keyboard và có error rõ.",
      ],
      checklist: [
        "Modal đóng được bằng ESC.",
        "Input có label thật.",
        "Error text rõ ràng.",
        "Tab qua form không bị kẹt.",
      ],
      appendTasks: {
        "day-11-block-6": [
          "Modal hỗ trợ ESC để đóng nếu phù hợp.",
          "Input phải có label thật, không chỉ placeholder.",
          "Error text nằm gần input.",
          "Button có loading và disabled state rõ.",
        ],
        "day-11-block-7": [
          "Test dùng phím Tab đi qua form.",
          "Test Enter submit form.",
          "Test ESC đóng modal.",
          "Ghi 3 vấn đề accessibility/UX còn yếu.",
        ],
      },
    },

    "day-12": {
      goal: [
        "Nâng domain project thành Factory Maintenance / Work Order Management System.",
        "Chốt AI nhỏ: AI Work Order Assistant, không biến project thành app AI.",
      ],
      checklist: [
        "Domain project đã đổi sang Work Order/Maintenance.",
        "Có entities machines, production_lines, work_orders, assignments.",
        "Có AI scope document rõ: summary, priority suggestion, next action.",
      ],
      appendTasks: {
        "day-12-block-1": [
          "Đổi domain từ Project/Task chung chung thành Factory Maintenance / Work Order Management System.",
          "Entities chính: users, roles, machines, production_lines, work_orders, work_order_assignments, comments, attachments, activity_logs, sla_logs.",
          "Workflow chính: request_created → assigned → in_progress → blocked → completed → verified.",
          "AI scope nhỏ: AI Work Order Assistant chỉ hỗ trợ tóm tắt lịch sử, gợi ý priority/SLA, gợi ý next action, viết report note.",
          "Ghi nguyên tắc: AI không tự cập nhật database, không tự đổi trạng thái work order.",
        ],
        "day-12-block-2": [
          "Tạo migrations hoặc plan cho machines, production_lines, work_orders.",
          "WorkOrder có priority: low, medium, high, urgent.",
          "WorkOrder có sla_due_at để tính quá hạn.",
        ],
        "day-12-block-8": [
          "Dashboard thêm stats: open work orders, overdue work orders, completed today, urgent count.",
          "Ghi rõ đây là domain gần doanh nghiệp hơn CRUD task thường.",
        ],
      },
    },

    "day-13": {
      goal: [
        "Task workflow nâng thành Work Order workflow có SLA và role verification.",
        "Frontend có điểm đặt cho AI Assistant nhưng chưa cần làm lớn.",
      ],
      checklist: [
        "WorkOrder có priority/SLA/status workflow.",
        "Technician chỉ update work order được assign.",
        "Manager verify completed work order.",
        "Có AI Assistant placeholder hoặc design.",
      ],
      appendTasks: {
        "day-13-block-1": [
          "Cập nhật role matrix theo domain: admin, manager, technician.",
          "Admin quản lý machines/users.",
          "Manager tạo/assign/verify work orders.",
          "Technician update assigned work orders và thêm evidence/comment.",
        ],
        "day-13-block-2": [
          "Đổi TaskService thành WorkOrderService nếu đủ sức.",
          "Thêm SLA logic: nếu sla_due_at < now và chưa completed thì overdue.",
          "Rule: technician không được verify completed, manager mới verify.",
          "Ghi activity log khi status đổi.",
        ],
        "day-13-block-4": [
          "Tạo placeholder button: AI Suggest Next Action trên WorkOrderDetail.",
          "Chưa cần gọi AI thật nếu backend chưa sẵn sàng.",
          "Button này sau sẽ gọi endpoint AI để gợi ý bước xử lý tiếp theo.",
        ],
      },
    },

    "day-14": {
      goal: [
        "Boss fight tuần 2 phải demo theo domain work order thật.",
        "Có demo path rõ từ manager tới technician.",
      ],
      checklist: [
        "Demo được manager tạo work order.",
        "Demo được assign technician.",
        "Demo được technician update status/comment.",
        "Dashboard cập nhật overdue/open/completed.",
      ],
      appendTasks: {
        "day-14-block-1": [
          "Demo path mới: admin tạo machine → manager tạo maintenance request/work order → assign technician → technician update status → manager verify completed.",
          "Nếu vẫn dùng Project/Task trong code, README phải ghi rõ mapping: Project = Production Line/Area, Task = Work Order.",
        ],
        "day-14-block-10": [
          "Ghi limitation nếu domain rename chưa refactor hết trong code.",
          "Tạo issue/todo: rename Project/Task sang WorkOrder/Machine nếu chưa làm kịp.",
        ],
      },
    },

    "day-15": {
      goal: [
        "Thêm ADR để giải thích quyết định architecture.",
        "Có decision record cho Service Layer, Auth Strategy và AI Scope.",
      ],
      checklist: [
        "Có ít nhất 3 ADR files.",
        "Có ADR riêng cho AI Assistant scope.",
      ],
      appendTasks: {
        "day-15-block-1": [
          "Tạo docs/adr/0001-service-layer.md.",
          "Tạo docs/adr/0002-auth-strategy.md.",
          "Tạo docs/adr/0003-ai-work-order-assistant-scope.md.",
          "Mỗi ADR có Context, Decision, Consequences, Alternatives considered.",
        ],
        "day-15-block-11": [
          "Trả lời: vì sao AI không được tự update trạng thái work order?",
          "Trả lời: vì sao Service Layer giúp giới hạn side effect của AI?",
        ],
      },
    },

    "day-16": {
      goal: [
        "Bổ sung E2E test cho full flow, không chỉ backend/frontend riêng lẻ.",
      ],
      checklist: [
        "Có Playwright hoặc E2E test plan.",
        "Có E2E login → work order → status update.",
        "Có E2E role denied.",
      ],
      appendTasks: {
        "day-16-block-8": [
          "Cài Playwright nếu đủ thời gian.",
          "Viết E2E test login success.",
          "Viết E2E protected route redirect.",
          "Viết E2E create work order.",
          "Viết E2E update work order status.",
          "Viết E2E role denied page.",
          "Nếu chưa cài kịp, tạo docs/e2e-testing-plan.md.",
        ],
        "day-16-block-10": [
          "Chạy E2E headless nếu setup được.",
          "Ghi cách chạy E2E vào testing-notes.md.",
        ],
      },
    },

    "day-17": {
      goal: ["Docker setup phải dễ chạy hơn bằng Makefile và healthcheck."],
      checklist: [
        "Có Makefile hoặc command shortcuts.",
        "Có healthcheck cho mysql/redis/backend nếu làm được.",
        "Có docs phân biệt dev compose và production compose.",
      ],
      appendTasks: {
        "day-17-block-4": [
          "Thêm healthcheck cho MySQL.",
          "Thêm healthcheck cho Redis nếu có.",
          "Thêm depends_on condition nếu Compose version hỗ trợ.",
        ],
        "day-17-block-10": [
          "Tạo Makefile với commands: make up, make down, make logs, make migrate, make seed, make test.",
          "Ghi note: docker-compose dev khác production image ở đâu.",
        ],
      },
    },

    "day-18": {
      goal: [
        "AI Assistant xử lý qua queue để không làm request chính bị chậm.",
        "Biết failed jobs, retry, backoff và idempotency.",
      ],
      checklist: [
        "Có failed_jobs hoặc note failed jobs.",
        "Có retry/backoff cho job.",
        "Có AI summary job hoặc design rõ.",
      ],
      appendTasks: {
        "day-18-block-4": [
          "Tạo job GenerateWorkOrderAiSummary nếu đã có AI endpoint/service.",
          "Job nhận work_order_id, không nhận object quá nặng.",
          "AI summary chỉ ghi suggestion vào bảng ai_suggestions hoặc activity note, không tự đổi status.",
          "Set tries/backoff cho job.",
          "Tạo failed_jobs table nếu queue driver hỗ trợ.",
          "Test job fail và xem queue:failed nếu làm được.",
        ],
        "day-18-block-11": [
          "Trả lời: job idempotency là gì?",
          "Trả lời: vì sao AI generation nên chạy queue thay vì sync trong request?",
        ],
      },
    },

    "day-19": {
      goal: [
        "Import/export nâng thành business feature có thể phục vụ Work Order domain.",
        "Nếu import lớn, có async import status hoặc limitation rõ.",
      ],
      checklist: [
        "Import work orders từ CSV.",
        "Export work order report.",
        "Có async import plan hoặc import_batches nếu đủ sức.",
      ],
      appendTasks: {
        "day-19-block-1": [
          "Đổi import target thành work_orders.",
          "CSV columns: machine_code, title, description, priority, sla_due_at, assignee_email.",
          "Export target: work order report theo status/priority/overdue.",
        ],
        "day-19-block-4": [
          "Nếu file lớn, tạo plan import_batches.",
          "Upload file → tạo batch → dispatch import job → frontend poll status.",
          "Nếu chưa làm async, ghi limitation: current import is sync and suitable for small CSV only.",
        ],
      },
    },

    "day-20": {
      goal: [
        "Bổ sung AI security: prompt injection, data privacy, rate limit AI endpoint.",
        "Có logging strategy và backup/restore docs.",
      ],
      checklist: [
        "Có AI security notes.",
        "Không gửi token/password/secret vào AI prompt.",
        "Có backup/restore docs.",
      ],
      appendTasks: {
        "day-20-block-1": [
          "Thêm risk matrix cho AI endpoint: prompt injection, sensitive data leakage, hallucinated suggestion, high cost/rate abuse.",
        ],
        "day-20-block-2": [
          "AI endpoint phải yêu cầu auth.",
          "AI endpoint phải rate limit.",
          "Không gửi token/password/secret vào prompt.",
          "Không cho AI output tự cập nhật DB critical fields.",
        ],
        "day-20-block-6": [
          "Tạo docs/logging-strategy.md.",
          "Ghi what to log và what not to log.",
          "Rule: never log password, token, secret, raw sensitive prompt.",
        ],
        "day-20-block-10": [
          "Tạo docs/backup-restore.md.",
          "Ghi cách backup DB local.",
          "Ghi cách restore DB local.",
          "Nếu chưa test restore, ghi limitation.",
        ],
      },
    },

    "day-21": {
      goal: ["Bổ sung changelog và demo video/gif nếu có thể."],
      checklist: ["Có CHANGELOG.md.", "Có demo video/gif hoặc placeholder."],
      appendTasks: {
        "day-21-block-8": [
          "Tạo CHANGELOG.md.",
          "Ghi các version: v0.1 foundation, v0.2 fullstack, v0.3 production hardening, v1.0 demo-ready.",
        ],
        "day-21-block-10": [
          "Quay video demo 3-5 phút nếu có thể.",
          "Nếu chưa quay, tạo docs/demo-video-plan.md ghi script quay.",
        ],
      },
    },

    "day-22": {
      goal: [
        "Branch protection phải thành một phần quy trình, không chỉ nói miệng.",
      ],
      checklist: [
        "Có docs/branch-protection.md.",
        "Có rule main protected, PR required, CI required.",
      ],
      appendTasks: {
        "day-22-block-2": [
          "Tạo docs/branch-protection.md.",
          "Ghi rule: main protected, require PR, require CI pass, disallow direct push.",
          "Ghi cách làm tương đương cho GitHub và GitLab.",
        ],
        "day-22-block-10": [
          "Nếu có quyền repo, bật branch protection thật.",
          "Nếu không có quyền, ghi screenshot/note hướng dẫn owner bật.",
        ],
      },
    },

    "day-23": {
      goal: ["Deploy xong phải có smoke test, không chỉ thấy trang mở được."],
      checklist: [
        "Có post-deploy smoke test checklist.",
        "Có test API health/login/me/dashboard sau deploy.",
      ],
      appendTasks: {
        "day-23-block-8": [
          "Tạo docs/post-deploy-smoke-test.md.",
          "Smoke test: GET /api/health.",
          "Smoke test: POST /api/login.",
          "Smoke test: GET /api/me.",
          "Smoke test: GET /api/dashboard.",
          "Smoke test frontend: /login, /dashboard, role denied page.",
        ],
        "day-23-block-10": [
          "Thêm post-deploy smoke test vào deployment guide.",
          "Ghi rõ nếu smoke test fail thì rollback hoặc fix env/CORS/DB.",
        ],
      },
    },

    "day-24": {
      goal: [
        "Mock company task chuyển thành AI Work Order Assistant Feature nhỏ.",
        "Có ticket format, estimate và actual time.",
      ],
      checklist: [
        "Có ticket AI Assistant rõ requirement.",
        "Có AI endpoint backend.",
        "Có React UI gọi AI suggestion.",
        "Có permission/rate limit.",
        "Có test hoặc manual evidence.",
      ],
      appendTasks: {
        "day-24-block-1": [
          "Mock task mới: AI Work Order Assistant.",
          "Background: manager/technician cần đọc nhanh lịch sử work order dài.",
          "Requirement: AI tóm tắt comments/activity logs của một work order.",
          "Requirement: AI gợi ý priority hoặc next action, nhưng không tự update DB.",
          "Requirement: chỉ user có quyền xem work order mới gọi được AI.",
          "Requirement: rate limit AI endpoint.",
          "Estimate task theo S/M/L hoặc hours.",
          "Sau khi làm xong, ghi actual time vs estimate.",
        ],
        "day-24-block-2": [
          "Tạo bảng ai_suggestions nếu cần: id, work_order_id, user_id, type, prompt_hash, response_text, created_at.",
          "Không lưu prompt chứa dữ liệu nhạy cảm nếu không cần.",
        ],
        "day-24-block-3": [
          "Tạo endpoint POST /api/v1/work-orders/{workOrder}/ai-summary.",
          "Backend lấy comments/activity logs đã được filter quyền.",
          "Tạo AiWorkOrderService build prompt an toàn.",
          "Nếu chưa có API key thật, dùng fake provider/mock response nhưng giữ interface rõ.",
          "Response gồm summary, suggested_priority, suggested_next_action, confidence_note.",
        ],
        "day-24-block-5": [
          "React WorkOrderDetail thêm panel AI Assistant.",
          "Button: Generate AI Summary.",
          "Show loading state vì AI có thể chậm.",
          "Show summary và next action.",
          "Có warning: AI suggestion is advisory, human must verify.",
        ],
        "day-24-block-6": [
          "Test user không có quyền không gọi được AI endpoint.",
          "Test AI endpoint bị rate limit nếu gọi quá nhiều.",
          "Manual test AI loading/error state.",
        ],
      },
    },

    "day-25": {
      goal: [
        "Bugfix có postmortem mini.",
        "Bug liên quan AI cũng phải được kiểm soát.",
      ],
      checklist: [
        "Có mini postmortem cho ít nhất 1 bug.",
        "Có regression test hoặc checklist.",
      ],
      appendTasks: {
        "day-25-block-1": [
          "Thêm bug giả lập AI: AI summary trả lỗi/network timeout nhưng UI loading không dừng.",
          "Thêm bug giả lập AI: user không có quyền vẫn thấy nút AI Assistant.",
        ],
        "day-25-block-8": [
          "Viết mini postmortem cho bug nghiêm trọng nhất: What happened, Impact, Root cause, Fix, Prevention, Tests added.",
        ],
      },
    },

    "day-26": {
      goal: ["Portfolio phải nêu AI như bonus có kiểm soát, không thổi phồng."],
      checklist: [
        "README có AI Assistant section.",
        "CV bullet có AI integration nhỏ nhưng thật.",
        "Có limitation rõ về AI.",
      ],
      appendTasks: {
        "day-26-block-2": [
          "README thêm section AI Work Order Assistant.",
          "Ghi rõ AI làm gì: summarize history, suggest priority, next action.",
          "Ghi rõ AI không làm gì: không tự đổi status, không tự assign technician, không thay decision của manager.",
        ],
        "day-26-block-8": [
          "Thêm CV bullet: Integrated a small AI assistant to summarize work order history and suggest next actions with authorization, rate limiting, and human verification.",
          "Viết limitation: AI output is advisory and requires human verification.",
        ],
      },
    },

    "day-27": {
      goal: ["Thêm live coding, SQL drill và AI integration Q&A."],
      checklist: [
        "Có live coding drills.",
        "Có SQL drills.",
        "Có câu trả lời AI integration trade-off.",
      ],
      appendTasks: {
        "day-27-block-1": [
          "Thêm nhóm câu hỏi Live Coding và AI Integration vào question bank.",
        ],
        "day-27-block-4": [
          "Luyện SQL drill: JOIN 3 bảng work_orders, machines, users.",
          "Luyện SQL drill: GROUP BY status count.",
          "Luyện SQL drill: HAVING overdue count > 5.",
          "Luyện SQL drill: tìm duplicate email.",
        ],
        "day-27-block-6": [
          "Luyện live coding array/string: count frequency, group by status, remove duplicates, filter overdue work orders.",
        ],
        "day-27-block-8": [
          "Trả lời: vì sao AI Assistant không được tự update database?",
          "Trả lời: xử lý AI timeout/error thế nào?",
          "Trả lời: bảo vệ AI endpoint khỏi data leakage/rate abuse thế nào?",
        ],
      },
    },

    "day-28": {
      goal: [
        "Không chỉ chuẩn bị apply. Phải apply thật.",
        "Có application tracker.",
      ],
      checklist: [
        "Gửi ít nhất 5 CV thật nếu đã sẵn sàng.",
        "Có application tracker.",
        "Có follow-up template.",
      ],
      appendTasks: {
        "day-28-block-8": [
          "Tạo application-tracker.md hoặc application-tracker.xlsx.",
          "Columns: company, role, link, date applied, status, next action, note.",
          "Gửi ít nhất 5 CV thật nếu repo/CV đã đủ ổn.",
          "Nếu chưa gửi, ghi rõ blocker và deadline gửi trong 24h.",
          "Viết follow-up message sau 5-7 ngày.",
        ],
        "day-28-block-10": [
          "Roadmap 60 ngày phải có apply cadence: mỗi tuần apply ít nhất 5 vị trí phù hợp.",
          "Mỗi tuần làm 1 mock interview.",
          "Mỗi tuần fix 2 limitations trong project.",
        ],
      },
    },
  };

  function findDay(dayId) {
    return roadmap.days.find((day) => day.id === dayId);
  }

  function appendUnique(targetArray, items) {
    if (!Array.isArray(targetArray)) return items;
    const existing = new Set(targetArray);
    const next = [...targetArray];

    for (const item of items || []) {
      if (!existing.has(item)) next.push(item);
    }

    return next;
  }

  function appendTasksToBlock(day, blockId, tasks) {
    const block = day.timeBlocks?.find((item) => item.id === blockId);
    if (!block) return;

    block.tasks = appendUnique(block.tasks || [], tasks || []);
  }

  for (const [dayId, patch] of Object.entries(patches)) {
    const day = findDay(dayId);
    if (!day) continue;

    day.definitionOfDone = day.definitionOfDone || globalDefinitionOfDone;
    day.evidence = day.evidence || globalEvidence;

    if (patch.goal) {
      day.goal = appendUnique(day.goal || [], patch.goal);
    }

    if (patch.checklist) {
      day.checklist = appendUnique(day.checklist || [], patch.checklist);
    }

    if (patch.appendTasks) {
      for (const [blockId, tasks] of Object.entries(patch.appendTasks)) {
        appendTasksToBlock(day, blockId, tasks);
      }
    }

    if (patch.benchmarkAppend) {
      day.benchmark = `${day.benchmark}\n\nJunior upgrade: ${patch.benchmarkAppend}`;
    }
  }

  roadmap.meta = {
    ...(roadmap.meta || {}),
    finalPositioning:
      "Không phải học Laravel 1 tháng. Mà là 1 tháng tự ép mình thành ứng viên Junior Laravel/React có project, quy trình, test, deploy, docs, demo và câu chuyện phỏng vấn.",
    upgradedProjectDomain: "Factory Maintenance / Work Order Management System",
    aiScope:
      "AI Work Order Assistant: summarize work order history, suggest priority/next action, draft report notes. AI is advisory only and never updates critical database state automatically.",
    competitiveJuniorFocus: [
      "Business domain rõ hơn CRUD task app.",
      "Evidence-based learning: commit, tests, docs, screenshots, demo.",
      "Production mindset: security, performance, logging, Docker, CI/CD, deploy.",
      "Interview readiness: project story, live coding, SQL drill, trade-offs.",
      "Apply readiness: CV bullets, demo script, application tracker.",
    ],
  };
}
function applyRoadmapSupplement(roadmap) {
  const appendUnique = (arr = [], items = []) => {
    const existing = new Set(arr);
    return [...arr, ...items.filter((item) => !existing.has(item))];
  };

  const appendTasksToBlock = (day, blockId, tasks = []) => {
    const block = day.timeBlocks?.find((b) => b.id === blockId);
    if (!block) return;

    block.tasks = appendUnique(block.tasks || [], tasks);
  };

  const patches = {
    "day-7": {
      blockId: "day-7-block-8",
      tasks: [
        "Đặt docblock ngắn cho controller methods: /** @authenticated */ — Scribe đọc được ở Day 30.",
        "Ghi note: Scribe sẽ generate API docs từ annotations này ở Day 30.",
      ],
      checklist: [
        "Controller methods có docblock cơ bản để Scribe/OpenAPI đọc sau.",
      ],
    },

    "day-11": {
      blockId: "day-11-block-1",
      tasks: [
        "Dùng default export cho tất cả page components — dễ lazy import sau.",
        "Code splitting sẽ làm ở Day 30 sau khi có đủ routes.",
      ],
      checklist: [],
    },

    "day-12": {
      blockId: "day-12-block-2",
      tasks: [
        "Thêm softDeletes() vào migration work_orders ngay từ đầu — tránh ALTER TABLE sau.",
        "Thêm SoftDeletes trait vào WorkOrder model.",
        "Restore endpoint sẽ làm ở Day 30.",
      ],
      checklist: [
        "WorkOrder model có SoftDeletes.",
        "deleted_at column trong migration.",
      ],
    },

    "day-16": {
      blockId: "day-16-block-8",
      tasks: [
        "Error Boundary sẽ làm ở Day 30 — class component.",
        "Chuẩn bị: xác định pages nào hay crash nhất để bọc trước.",
      ],
      checklist: ["Có note Error Boundary plan cho Day 30."],
    },

    "day-18": {
      blockId: "day-18-block-1",
      tasks: [
        "Mail + Notification + Broadcasting sẽ làm chuyên sâu ở Day 29.",
        "Chuẩn bị Mailtrap account miễn phí và Soketi/Pusher nếu muốn Broadcasting.",
      ],
      checklist: ["Có plan document Mail + Broadcasting cho Day 29."],
    },
  };

  for (const [dayId, patch] of Object.entries(patches)) {
    const day = roadmap.days.find((d) => d.id === dayId);
    if (!day) continue;

    appendTasksToBlock(day, patch.blockId, patch.tasks);
    day.checklist = appendUnique(day.checklist || [], patch.checklist || []);
  }

  const week4 = roadmap.phases.find((phase) => phase.id === "week-4");
  if (week4) {
    week4.title = "Docker + Deploy + Junior Interview + Mail + Final Ship";
  }

  if (
    typeof day29 !== "undefined" &&
    !roadmap.days.some((d) => d.id === "day-29")
  ) {
    roadmap.days.push(day29);
  }

  if (
    typeof day30 !== "undefined" &&
    !roadmap.days.some((d) => d.id === "day-30")
  ) {
    roadmap.days.push(day30);
  }

  roadmap.meta = {
    ...(roadmap.meta || {}),
    totalDays: 30,
    supplementApplied: true,
    supplementVersion: "1.0.0",
    gapsFixed: [
      "Day 29-30 added",
      "Laravel Mail + Notification + Broadcasting — Day 29",
      "React Error Boundary — Day 30 Patch 2",
      "Code Splitting + bundle measurement — Day 30 Patch 3",
      "API Documentation Scribe/OpenAPI — Day 30 Patch 4",
      "Soft Delete + Restore flow completed — Day 30 Patch 1",
    ],
  };

  return roadmap;
}
applyJuniorCompetitiveUpgrades(mockRoadmap);
applyRoadmapSupplement(mockRoadmap);
export default mockRoadmap;
