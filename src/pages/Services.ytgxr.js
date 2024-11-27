// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {
$w("#arrow").hide()
	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code

});


$w('#section5').onViewportLeave((event) => {
        $w("#arrow").show()
})

$w('#section5').onViewportEnter((event) => {
         $w("#arrow").hide()
})