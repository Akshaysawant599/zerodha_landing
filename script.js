// Smooth scroll to bottom when top signup button clicked
document.getElementById("signup-btn").addEventListener("click", function() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});

// Bottom signup -> show a placeholder alert (replace with real redirect)
document.getElementById("signup-btn-bottom").addEventListener("click", function() {
  // Replace the alert line with a real redirect URL when available:
  // window.location.href = "https://your-signup-url.example";
  alert("Redirecting to signup page!");
});
