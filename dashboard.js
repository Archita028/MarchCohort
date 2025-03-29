document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const inputData = document.getElementById('inputData').value;
    const resultOutput = document.getElementById('resultOutput');
  
    let parsedData;
    try {
        parsedData = JSON.parse(inputData);
    } catch(err) {
        resultOutput.innerHTML = '<span style="color: red;">Invalid JSON format. Please correct your input.</span>';
        return;
    }
  
    resultOutput.innerHTML = 'Processing...';
  
    // Simulated call to the ML model API using a delay
    setTimeout(() => {
        // Dummy logic: if "feature1" is defined and below a threshold, assume "Low Risk", otherwise "High Risk".
        let prediction = 'Insufficient data';
        if(parsedData.feature1 !== undefined) {
            prediction = parsedData.feature1 < 50 ? 'Low Risk' : 'High Risk';
        }
      
        resultOutput.innerHTML = '<strong>' + prediction + '</strong>';
    }, 1500);
});