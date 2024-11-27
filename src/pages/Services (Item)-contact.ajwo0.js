// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code
		setTimeout(() => {
		const selectedServiceName = $w('#dynamicText').text;

		$w('#serviceForm').setFieldValues({ service_name:selectedServiceName });
	}, 2000);


});