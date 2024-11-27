// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {
  $w('#service-1').show();
      $w('#service-2').hide();
      $w('#service-3').hide();
       $w('#service-4').hide();
      $w('#service-5').hide();
      $w('#service-6').hide();
	$w('#service-1-text').customClassList.add("textactive")
	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code

});

	var index = 0;

$w('#services').onViewportEnter((event) => {


  setInterval(() => {
      // Hide all services initially
      $w('#service-1').hide();
      $w('#service-2').hide();
      $w('#service-3').hide();
       $w('#service-4').hide();
      $w('#service-5').hide();
      $w('#service-6').hide();

      // Increment index and loop back if it exceeds the item count
      index++;
      if (index > 6) { // If you have 3 services, reset the index
        index = 1;
      }

$w('#box-service-1-image').src = "https://static.wixstatic.com/media/06329b_62bb20a088994e5782dfacb932459bf9~mv2.png"
$w('#box-service-2-image').src = "https://static.wixstatic.com/media/06329b_62bb20a088994e5782dfacb932459bf9~mv2.png"
$w('#box-service-3-image').src = "https://static.wixstatic.com/media/06329b_62bb20a088994e5782dfacb932459bf9~mv2.png"
$w('#box-service-4-image').src = "https://static.wixstatic.com/media/06329b_62bb20a088994e5782dfacb932459bf9~mv2.png"
$w('#box-service-5-image').src = "https://static.wixstatic.com/media/06329b_62bb20a088994e5782dfacb932459bf9~mv2.png"
$w('#box-service-6-image').src = "https://static.wixstatic.com/media/06329b_62bb20a088994e5782dfacb932459bf9~mv2.png"
$w('#service-1-text').customClassList.remove("textactive")
$w('#service-2-text').customClassList.remove("textactive")
$w('#service-3-text').customClassList.remove("textactive")
$w('#service-4-text').customClassList.remove("textactive")
$w('#service-5-text').customClassList.remove("textactive")
$w('#service-6-text').customClassList.remove("textactive")

      if (index == 1) {
        $w('#service-1').show();
		$w('#box-service-1-image').src = "https://static.wixstatic.com/media/06329b_68a96018714c4bbfb1399f0b3772430a~mv2.jpeg"
		$w('#service-1-text').customClassList.add("textactive")
		
      }
      if (index == 2) {
        $w('#service-2').show();
			$w('#box-service-2-image').src = "https://static.wixstatic.com/media/06329b_83bb74a34eb44f348b4da85c5776832e~mv2.jpeg"
			$w('#service-2-text').customClassList.add("textactive")
      }
      if (index == 3) {
        $w('#service-3').show();
			$w('#box-service-3-image').src = "https://static.wixstatic.com/media/06329b_a46aa6a003e34af2b623c5a9e535931c~mv2.jpeg"
			$w('#service-3-text').customClassList.add("textactive")
      }
 if (index == 4) {
        $w('#service-4').show();
			$w('#box-service-4-image').src = "https://static.wixstatic.com/media/06329b_56cbbe74e57c44de8db6a3f21d12642b~mv2.jpeg"
			$w('#service-4-text').customClassList.add("textactive")
      }
 if (index == 5) {
        $w('#service-5').show();
			$w('#box-service-5-image').src = "https://static.wixstatic.com/media/06329b_47d77884d28f4ca0b074c88af92cc67c~mv2.jpeg"
			$w('#service-5-text').customClassList.add("textactive")
      }
 if (index == 6) {
        $w('#service-6').show();
			$w('#box-service-6-image').src = "https://static.wixstatic.com/media/06329b_f6b01f5a25df4f35a63603c1c0aac778~mv2.jpeg"
			$w('#service-6-text').customClassList.add("textactive")
      }


     

    }, 4000); // Runs every 2 seconds

   
})

$w('#service-mobile').onViewportEnter((event) => {
      var index1 = 0;
setInterval(() => {
   index1++;
      if (index1 > 6) { // If you have 3 services, reset the index
        index1 = 1;
      }

$w('#box-service1-imag-mobile').src = "https://static.wixstatic.com/media/06329b_62bb20a088994e5782dfacb932459bf9~mv2.png"
$w('#box-service2-imag-mobile').src = "https://static.wixstatic.com/media/06329b_62bb20a088994e5782dfacb932459bf9~mv2.png"
$w('#box-service3-imag-mobile').src = "https://static.wixstatic.com/media/06329b_62bb20a088994e5782dfacb932459bf9~mv2.png"
$w('#box-service4-imag-mobile').src = "https://static.wixstatic.com/media/06329b_62bb20a088994e5782dfacb932459bf9~mv2.png"
$w('#box-service5-imag-mobile').src = "https://static.wixstatic.com/media/06329b_62bb20a088994e5782dfacb932459bf9~mv2.png"
$w('#box-service6-imag-mobile').src = "https://static.wixstatic.com/media/06329b_62bb20a088994e5782dfacb932459bf9~mv2.png"
  if (index1 == 1) {
       
    $w('#box-service1-imag-mobile').src = "https://static.wixstatic.com/media/06329b_68a96018714c4bbfb1399f0b3772430a~mv2.jpeg"
  
      }
      if (index1 == 2) {
       
      $w('#box-service2-imag-mobile').src = "https://static.wixstatic.com/media/06329b_83bb74a34eb44f348b4da85c5776832e~mv2.jpeg"
    
      }
      if (index1 == 3) {
      
      $w('#box-service3-imag-mobile').src = "https://static.wixstatic.com/media/06329b_a46aa6a003e34af2b623c5a9e535931c~mv2.jpeg"
    
      }
       if (index1 == 4) {
      
      $w('#box-service4-imag-mobile').src = "https://static.wixstatic.com/media/06329b_56cbbe74e57c44de8db6a3f21d12642b~mv2.jpeg"
    
      }
       if (index1 == 5) {
      
      $w('#box-service5-imag-mobile').src = "https://static.wixstatic.com/media/06329b_47d77884d28f4ca0b074c88af92cc67c~mv2.jpeg"
    
      }
       if (index1 == 6) {
      
      $w('#box-service6-imag-mobile').src = "https://static.wixstatic.com/media/06329b_f6b01f5a25df4f35a63603c1c0aac778~mv2.jpeg$0"
    
      }

}, 4000);
    
})