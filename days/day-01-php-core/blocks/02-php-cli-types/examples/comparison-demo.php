<?php

declare(strict_types=1);

echo "=======================\n";
echo "Comparison Demo\n";
echo "=======================\n";

echo "1.String number vs Interger\n";

$stringNumber = "1";
$integerNumber = 1;

echo '"1" == 1 : ';
var_dump($stringNumber == $integerNumber);

echo '"1" ===1 : ';

var_dump($stringNumber === $integerNumber);

echo "\n";

echo "2. Zero vs False \n";
$zero = 0;
$isFalse = false;

echo '0 == false : ';
var_dump($zero == $isFalse);

echo '0 === false : ';
var_dump($zero === $isFalse);

echo"\n";


echo "3.Empty string vs false \n";
$emptyString = "";
$isFalse = false;

echo '""==false : ';
var_dump($emptyString == $isFalse);

echo '"" ===false : ';
var_dump($emptyString === $isFalse);

echo"\n";

echo "4. Null vs False \n";
$nothing = null;
$isFalse = false;

echo 'null == false : ';
var_dump($nothing == $isFalse);

echo 'null === false : ';
var_dump($nothing === $isFalse);

echo "\n";
