<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$modal__select = $_POST['modal__select'];
$message = $_POST['message'];
$email__modal = $_POST['email__modal'];
$email = $_POST['email'];
$comment = $_POST['comment'];


// Формирование самого письма
$title = "Новое обращение Universal";
$body = "
<h2>Новое обращение</h2>
<b>Тема:</b> $modal__select<br>
<b>Email:</b> $email__modal<br>
<b>Email:</b> $email<br><br>
<b>Сообщение:</b><br>$message<br><br>
<b>Комментарий:</b><br>$comment
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
//    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'vil74work@gmail.com'; // Логин на почте
    $mail->Password   = '071047inna'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('vil74work@gmail.com', 'Инна Васильева'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('strel-kate@mail.ru');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";}
    else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
//echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
header ('Location: thankyou.html');