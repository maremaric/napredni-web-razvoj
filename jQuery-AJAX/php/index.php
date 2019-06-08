<?php
    header('Access-Control-Allow-Methods:POST');
    if(isset($_POST['name'])) {
        $name = $_POST['name'];
        $name = $name.' is new user ';

        echo json_encode(['name' => $name]);
    }


?>