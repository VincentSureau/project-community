<?php

namespace App\Utils;

class GeneratePassword
{
  /**
   * generate a password with letters, numbers and special characters
   *
   * @return string
   */
  public function generate() {
    $chara = '0123456789azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN';
    $specialChara = '#$^+=!*()@%&';
    $password = '';
    for ($passwordIndex = 0; $passwordIndex < 15; $passwordIndex++) {
        if ($passwordIndex % 2 == 0) {
          $password .= $specialChara[mt_rand(0, (strlen($specialChara) - 1))];
        } else {
          $password .= $chara[mt_rand(0, (strlen($chara) - 1))];
        }
    }
    return $password;
  }
}