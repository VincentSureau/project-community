<?php

namespace App\Utils;

class GeneratePassword
{
  public function generate() {
    $chara = '0123456789azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN';
    $password = '';
    for ($passwordIndex = 0; $passwordIndex < 10; $passwordIndex++) {
        $password .= $chara[mt_rand(0, strlen($chara))];
    }
    return $password;
  }
}