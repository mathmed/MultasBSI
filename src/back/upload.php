<?php

$target_dir = "imgs";

if(!file_exists($target_dir)) {
    mkdir($target_dir, 0777, true);
}


$target_dir = $target_dir . '/' . rand() . "_" . time() . ".jpeg";

if(move_uploaded_file($_FILES['image']['tmp_name'], $target_dir)){
    echo(json_encode('http://191.252.113.227/multas/'.$target_dir));
}else{
    
}


?>
