// Function to convert image to Base64 string
function imageToBase64(file, callback) {
    var reader = new FileReader();
    reader.onload = function() {
        var base64String = reader.result.split(',')[1];
        callback(base64String);
    };
    reader.readAsDataURL(file);
}

// Event listener for file input change
document.getElementById('imageFileInput').addEventListener('change', function(event) {
    var inputFile = event.target.files[0];
    if (inputFile) {
        imageToBase64(inputFile, function(base64String) {
            document.getElementById('base64Output').textContent = base64String;
        });
    }
});
