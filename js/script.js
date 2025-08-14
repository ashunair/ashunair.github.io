document.querySelectorAll(".toggle-btn").forEach(button => {
    button.addEventListener("click", function() {
        let jobId = this.getAttribute("data-job");
        let jobDetails = document.getElementById(`job-${jobId}`);

        // Toggle visibility
        if (jobDetails.style.display === "none" || jobDetails.style.display === "") {
            jobDetails.style.display = "block";
            this.textContent = "−"; // Change "+" to "−"
        } else {
            jobDetails.style.display = "none";
            this.textContent = "+"; // Change back to "+"
        }
    });
});

document.querySelectorAll(".toggle-btn2").forEach(button => {
    button.addEventListener("click", function() {
        let jobId = this.getAttribute("data-job");
        let jobDetails = document.getElementById(`job-${jobId}`);

        // Toggle visibility
        if (jobDetails.style.display === "none" || jobDetails.style.display === "") {
            jobDetails.style.display = "block";
            this.textContent = "−"; // Change "+" to "−"
        } else {
            jobDetails.style.display = "none";
            this.textContent = "+"; // Change back to "+"
        }
    });
});

