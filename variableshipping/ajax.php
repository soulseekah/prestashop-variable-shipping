<?php
	include_once('../../config/config.inc.php');
	include_once('../../init.php');
	include_once('../../modules/variableshipping/variableshipping.php');

	$context = Context::getContext();

	if (!Tools::getValue('ajax') || Tools::getValue('token') != sha1(_COOKIE_KEY_.'variableshipping'))
		die;

	// Set shipping for this customer and cart
	file_put_contents(sys_get_temp_dir() . '/psvs-' . _DB_NAME_ . '-' . Tools::getValue('id_cart') . '-' . Tools::getValue('id_customer'), round(floatval(Tools::getValue('value')), 2));
?>
