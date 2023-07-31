//Load Foundations library
$(document).foundation()
// Get the heading element using ID
const headingElement = document.getElementById("HeadingText");

// Add a click event to the heading
headingElement.addEventListener("click", function () {
    // Change the text when clicked
    headingElement.textContent = "You have few unread messages!";
});

document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo");

  // Change logo on mouseover
  logo.addEventListener("mouseover", function () {
    logo.src = "images/Jobsess-logo-hover.png";
  });

  logo.addEventListener("mouseout", function () {
    logo.src = "images/Jobsess-Logo.png";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to update job post count
  const updateJobPosted = function () {
    const jobPostedInput = document.getElementById("jobPostedInput");
    const jobPostedCount = parseInt(jobPostedInput.value);
    const jobPostedCountSpan = document.getElementById("jobPostedCount");
    jobPostedCountSpan.textContent = jobPostedCount;

    // Save the job post count in Local Storage
    localStorage.setItem("jobPostedCount", jobPostedCount);
  };

  // Check if jobPostedCount is stored in Local Storage, and set the default value to 20 if not found
  const jobPostedInput = document.getElementById("jobPostedInput");
  const storedCount = localStorage.getItem("jobPostedCount");
  jobPostedInput.value = storedCount ? storedCount : "20";

  // Call the updateJobPosted function to set the default value when the page loads
  updateJobPosted();
});

// Interaction: Toggle Sign-in Button
 $(document).ready(function() {
    $('.topbar-responsive-button').on('click', function() {
      alert('Please create an Account!');
    });
  });

  //Interaction: Display Job Postings Count
    $(document).ready(function() {
      const jobPostingsCounts = [25, 34, 67]; 
      $('.card-section').each(function(index) {
        $(this).html('Job Posted: ' + jobPostingsCounts[index]);
      });
    });

    //Change Banner Image on Mouseover
    $(document).ready(function() {
      $('.banner img').on('mouseover', function() {
        $(this).attr('src', 'images/new.png');
      }).on('mouseout', function() {
        $(this).attr('src', 'images/dashboard.png');
      });
    });

  // Function to update the numbers randomly
  function updateNumbersRandomly() {
    const cards = document.querySelectorAll(".number");

    cards.forEach(card => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      card.textContent = randomNumber;
    });
  }

  // Function to reset the numbers to their original values
  function resetNumbers() {
    const cards = document.querySelectorAll(".number");

    const originalNumbers = [26, 13, 12, 40, 30, 20];

    cards.forEach((card, index) => {
      card.textContent = originalNumbers[index];
    });
  }

  // Attach event listeners to buttons
  const updateButtons = document.querySelectorAll(".button1");
  updateButtons[0].addEventListener("click", updateNumbersRandomly);
  updateButtons[1].addEventListener("click", resetNumbers);
