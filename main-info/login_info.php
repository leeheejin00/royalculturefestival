<?php
	// if(!isset($_POST['user_id']) || // id와 패스워드를 입력했는지 체크
	// !isset($_POST['user_pw'])) exit;

	// $user_id = $_POST['user_id']; // 입력한 id와  패스워드 변수에 대입
	// $user_pw = $_POST['user_pw'];

	// $members = array( // id를 기준으로 패스워드와 이름이 있음.
	// 	'korean'=>array('pw'=>'12345', 
	// 	'name'=>'박부장'),
	// 	'seoul'=>array('pw'=>'56789', 
	// 	'name'=>'홍대리')
	// );

	// if(isset($members[$user_id]) &&  // id가 있고,
	// $members[$user_id]['pw'] == $user_pw) { // id가 가진 패스워드가 입력받은 패스워드와 일치하면,
	// 	echo '{"user_id":"'.$user_id.'", 
	// 	"user_name": "'.$members[$user_id]['name'].'"}'; // id와 이름을 되돌려 줌(echo)
	// }

	// login.php

	// JSON 파일 경로
	$jsonFilePath = 'users.json';

	// POST 데이터 받기
	$email = $_POST['email'];
	$password = $_POST['password'];

	// JSON 파일 읽기
	$jsonData = file_get_contents($jsonFilePath);
	$users = json_decode($jsonData, true);

	$response = array('success' => false, 'message' => '로그인 실패');

	// 사용자가 있는지 확인
	foreach ($users as $user) {
		if ($user['email'] === $email && $user['password'] === $password) {
			$response['success'] = true;
			$response['message'] = '로그인 성공';
			break;
		}
	}

	echo json_encode($response);
?>
