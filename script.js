// Function to handle NFC card authentication
function authenticateNFC() {
    // Read NFC card data (assuming it's stored in the URL)
    const nfcData = window.location.href;

    // Extract token from URL
    const url = new URL(nfcData);
    const token = url.searchParams.get("token");

    // Compare token with expected shared token
    const expectedToken = "YOUR_SHARED_TOKEN"; // Replace with your actual shared token
    if (token === expectedToken) {
        // Authentication successful, redirect user to authenticated page
        window.location.href = "authenticated.html"; // Replace "authenticated.html" with your authenticated page URL
    } else {
        // Authentication failed, display error message
        alert("Authentication failed. Please try again.");
    }
}
