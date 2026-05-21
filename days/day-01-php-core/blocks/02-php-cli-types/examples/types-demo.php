<?php

declare(strict_types=1);

echo "=============================\n";
echo "Types Demo\n";
echo "=============================\n\n";

echo "1. String\n";

$name = "Le Viet Ngoc";

echo '$name = ';
var_dump($name);

echo "\n";

echo "2. Int\n";

$age = 22;

echo '$age = ';
var_dump($age);

echo "\n";

echo "3. Float\n";

$height = 1.71;

echo '$height = ';
var_dump($height);

echo "\n";

echo "4. Bool\n";

$isStudent = true;

echo '$isStudent = ';
var_dump($isStudent);

echo "\n";

echo "5. Null\n";

$nickname = null;

echo '$nickname = ';
var_dump($nickname);

echo "\n";

echo "6. Indexed Array\n";

$skills = ["PHP", "Laravel", "React"];

echo '$skills = ';
var_dump($skills);

echo "\n";

echo "First skill: " . $skills[0] . "\n";

echo "\n";

echo "7. Associative Array\n";

$user = [
    "name" => $name,
    "age" => $age,
    "height" => $height,
    "is_student" => $isStudent,
    "nickname" => $nickname,
    "skills" => $skills,
];

echo '$user = ';
var_dump($user);

echo "\n";
