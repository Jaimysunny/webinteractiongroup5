//Change Banner Image on Mouseover
$(document).ready(function() {
    $('.banner img').on('mouseover', function() {
      $(this).attr('src', 'images/newpost1.png');
    }).on('mouseout', function() {
      $(this).attr('src', 'images/newpost2.png');
    });
});

let formValid = false;
let formSubmit = false;
document.querySelector("#submitBtn").disabled = true;
document.querySelector("#form-error").style.display = "none";
document.querySelector(".successmessage").style.display = "none";

let formData = {
    jobtitle: "",
    location:"",
    salary:"",
    jobtype:"fulltime",
    description:"",
    requirements:"",
    benefits:""
};


function formValidate(field) {
    formData[field] = document.querySelector(`#${field}`).value;
    if (formData.jobtitle && formData.location && formData.salary && formData.jobtype && formData.description && formData.requirements && formData.benefits) {
        document.querySelector("#form-error").style.display = "none";
        document.querySelector("#submitBtn").disabled = false;
        document.querySelector(".successmessage").style.display = "none";
        
        formValid = true;
    } else {
        document.querySelector("#form-error").style.display = "block";
        document.querySelector("#submitBtn").disabled = true;
        formValid = false;
    }
}

function submitForm(event) {
    event.preventDefault();
    document.querySelector(".successmessage").style.display = "block";
    document.querySelector("#postForm").style.display = "none";
}
