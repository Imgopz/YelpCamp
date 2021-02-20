// Get alert element
let alert = document.querySelector("#myAlert");
// Create Bootstrap alert instance
let bsAlert = new bootstrap.Alert(alert);

// Dismiss time out
setTimeout(() => {
  bsAlert.close();
}, 2000);