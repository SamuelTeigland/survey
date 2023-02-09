const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    if (document.getElementById("email-entry").value === "") {
        alert("Please enter a valid email address.");
        window.location.reload();
    }
    else if (document.getElementById("first-name").value === "") {
        alert("Please enter a valid first name.");
        window.location.reload();
    }
    else if (document.getElementById("last-name").value === "") {
        alert("Please enter a valid last name.");
        window.location.reload();
    }
    else {
        event.preventDefault();
        const formData = new FormData(form);
        const obj = Object.fromEntries(formData);
        
        const json = JSON.stringify(obj);
        localStorage.setItem('form', json);
    
        window.location.href = "pages/submission.html";
    }
})