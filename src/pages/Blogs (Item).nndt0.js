// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixData from 'wix-data';
$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code
	setTimeout(() => {
const category = $w('#category').text
const blogName = $w('#blogname').text
 // Filter the dataset to exclude the current service
 console.log("blogName",blogName)
  $w("#blogdata").setFilter(wixData.filter().ne("title",blogName))
  .then(() => {
        // Get the number of items after the filter is applied
        const count = $w("#blogdata").getTotalCount();
        
		if(count == 0){
			$w("#realtedInsights").hide()
		}else{
			$w("#realtedInsights").show()
		}
    })

 
},500)

});