<meta http-equiv='refresh' content='10; url=http://thecode.local/'>
<meta charset="UTF-8" />
<?php

$name = $_POST['name'];
$surname = $_POST['suraname'];
$text = $_POST['text'];

$mes = 'Имя: $name \n Фамилия: $surname \n Сообщение: $text';
$send = mail($email, $header, $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
if ($send == 'true') {echo "Сообщение отправлено";}
else {echo "Ой, что-то пошло не так";}

?>