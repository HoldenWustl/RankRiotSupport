// Function to copy the email to the clipboard
function copyEmail() {
    const email = "hweinberg123@gmail.com";
    
    navigator.clipboard.writeText(email).then(() => {
        // Show the success message
        const msg = document.getElementById("copyMessage");
        msg.classList.remove("hidden");
        msg.classList.add("visible");
        
        // Hide the success message after 2.5 seconds
        setTimeout(() => {
            msg.classList.remove("visible");
            msg.classList.add("hidden");
        }, 2500);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
}

// Automatically set the current year in the footer so it's never outdated
document.getElementById("year").textContent = new Date().getFullYear();