<?php

declare(strict_types=1);

echo "==========================\n";
echo"String Functions Demo \n";
echo "==========================\n";

echo"1.trim() \n";
$dirtyName = " Le    Viet   Ngoc ";
echo "Before trim : [" .$dirtyName. "]\n";
echo "After trim : [" .trim($dirtyName). "]\n";

echo "\n";

echo "2.strtolower()\n";

$dirtyEmail = " NAME@EXAMPLE.COM ";

echo "Before: [" .$dirtyEmail. "]\n";
echo "After: [" .strtolower($dirtyEmail). "] \n";

echo"\n";

echo"3.mb_strtolower()\n";

$vietName = "LÊ VIẾT NGỌC";
echo"Before: [" .$vietName. "]\n";
echo"After: [" .mb_strtolower($vietName, "UTF-8"). "]\n";

echo"\n";
echo"4.strlen() vs mb_strlen()\n";

$englishName = "Ngoc";
$vietName = "Ngọc";
echo "English name: [" .$englishName."]\n";
echo "strlen name: [" .strlen($englishName)."]\n";
echo "mb_strlen name: [" .mb_strlen($englishName, "UTF-8")."]\n";
echo"VietName\n";
echo "Vient name: [" .$vietName."]\n";
echo "strlen name: [" .strlen($vietName)."]\n";
echo "mb_strlen name: [" .mb_strlen($vietName, "UTF-8")."]\n";

echo"\n";
echo"5.explode()\n";

$skillText = "PHP,Laravel,React";

$skills = explode(",", $skillText);

echo "Original string: ".$skillText. "\n";

echo "After explode: \n";
var_dump($skills);
echo"\n";

echo "6. implode()\n";
$joinedSkills = implode(" | ", $skills);
echo "Before implode:\n";
var_dump($skills);
echo "After implode: " . $joinedSkills . "\n";
echo "\n";


echo "7. str_replace()\n";
$sentence = "I am learning PHP and Laravel";
$updatedSentence = str_replace("Laravel", "React", $sentence);
echo "Before: " . $sentence . "\n";
echo "After : " . $updatedSentence . "\n";
echo "\n";
