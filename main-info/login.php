<?php
	header('Content-Type: application/json');

	if (!isset($_POST['login-email']) || !isset($_POST['login-password'])) {
		exit;
	}

	$login_email = $_POST['login-email'];
	$login_password = $_POST['login-password'];

	$members = json_decode(file_get_contents('users.json'), true);

	if (isset($members[$login_email]) && $members[$login_email]['pw'] === $login_password) {
		echo json_encode(array('login-email' => $login_email, 'user_name' => $members[$login_email]['name']));
	} else {
		echo json_encode(array('error' => 'Invalid email or password.'));
	}
?>
