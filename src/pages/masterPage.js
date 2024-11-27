
import wixWindow from 'wix-window';
import wixLocation from 'wix-location';
import wixData from 'wix-data';


$w.onReady(function () {
const inputField = $w('#subscribe-input');  // Replace #inputField with your actual input ID
const submitButton = $w('#subscribe-button');  // Replace #submitButton with your button ID
const errorMessage = $w('#errorMessage')
$w('#errorMessage').hide()

 let url     =   wixLocation.url;
    console.log("url",url)
	if(url.includes("service")){
		$w('#service').customClassList.add("textActive")
		$w('#services-line').customClassList.add("activeLine")
	}else if(url.includes("about")){
		$w('#aboutus').customClassList.add("textActive")
		$w('#aboutus-line').customClassList.add("activeLine")
		// $w("#circleContainer").customClassList.add("stopAnimation")
	}else if(url.includes("process")){
		$w('#aboutus').customClassList.add("textActive")
		$w('#aboutus-line').customClassList.add("activeLine")
		// $w("#circleContainer").customClassList.add("stopAnimation")
	}else if(url.includes("team")){
		$w('#aboutus').customClassList.add("textActive")
		$w('#aboutus-line').customClassList.add("activeLine")
		// $w("#circleContainer").customClassList.add("stopAnimation")
	}else if(url.includes("insights")){
		$w('#insights-line').customClassList.add("activeLine")
		$w('#insights').customClassList.add("textActive")
		// $w("#circleContainer").customClassList.add("stopAnimation")
	}else if(url.includes("blogs")){
		$w('#insights-line').customClassList.add("activeLine")
		$w('#insights').customClassList.add("textActive")
		// $w("#circleContainer").customClassList.add("stopAnimation")
	}else if(url.includes("contact") ){
		
		$w('#contact-line').customClassList.add("activeLine")
		$w('#contact').customClassList.add("textActive")
		// $w("#circleContainer").customClassList.add("stopAnimation")
	}
	
	
})



$w('#subscribe-button').onClick((event) => {
	const inputField = $w('#subscribe-input');  // Replace #inputField with your actual input ID
const submitButton = $w('#subscribe-button');  // Replace #submitButton with your button ID
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inputField.value)) {  // Check if input is empty
   inputField.style.borderColor = "red"; // Add a red border
   $w('#errorMessage').show()
  } else {
    // Proceed with your form submission or next steps
	inputField.style.borderColor = "#d2d2d2"; // Add a red border
    console.log("Input is valid:", inputField.value);
	 $w('#errorMessage').hide()

	 $w("#form1").setFieldValues({
            "email": inputField.value // Set the value of the 'email' field in the form
        })
      $w("#form1").submit()
            .then(() => {
                console.log("Form submitted successfully.");
				inputField.value = ""
				inputField.style.borderColor = "#d2d2d2"; // Add a red border
            })
            .catch((err) => {
                console.error("Form submission failed:", err);
				inputField.value = ""
				inputField.style.borderColor = "#d2d2d2"; // Add a red border
            });


//  wixData.insert("subscribeEMial", {
//     title: inputField.value
//   }) .then(() => {
//     console.log("Entry added to collection, automation email should be triggered.");
//   })
//   .catch((err) => {
//     console.error("Failed to add entry:", err);
   
//   });
  }    
})