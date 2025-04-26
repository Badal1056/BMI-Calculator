function getbmivalue(){
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;

  // Validate if the inputs are numbers and not empty
  if (isNaN(weight) || weight === "") {
      document.getElementById('healthStatus').textContent = "Enter a valid Weight";
      return; // Exit function if input is invalid
  }

  if (isNaN(height) || height === "") {
      document.getElementById('healthStatus').textContent = "Enter a valid Height";
      return; // Exit function if input is invalid
  }

  // Convert height from feet to meters (height in feet * 12 inches/foot * 0.0254 meters/inch)
  height = height * 12; // Convert height to inches
  height = height * 0.0254; // Convert inches to meters

  // Calculate BMI
  var newbmivalue = weight / Math.pow(height, 2);
  newbmivalue = Math.round(newbmivalue); // Round the result

  // Display the BMI value
  document.getElementById('bmivalue').value = newbmivalue;

  // Variables for the health message and status
  var message = "";
  var healthStatus = "";

  // Check BMI value and provide health status with tips
  if (newbmivalue >= 25) {
      healthStatus = "High BMI";
      message = "Your BMI indicates that you are overweight. It's important to adopt a healthy lifestyle with regular exercise and balanced nutrition.";
      document.getElementById('bmiMessage').className = "high"; // Add class for styling
  } else if (newbmivalue <= 19) {
      healthStatus = "Low BMI";
      message = "Your BMI is considered underweight. It's important to eat a balanced diet and consult a healthcare provider for advice.";
      document.getElementById('bmiMessage').className = "low"; // Add class for styling
  } else {
      healthStatus = "Perfect BMI";
      message = "Congratulations! Your BMI is in the healthy range. Keep up the good work!";
      document.getElementById('bmiMessage').className = "perfect"; // Add class for styling
  }

  // Update the health status and message
  document.getElementById('healthStatus').textContent = healthStatus;
  document.getElementById('bmiMessage').innerHTML = `<strong>${healthStatus}</strong>: ${message}`;
}
