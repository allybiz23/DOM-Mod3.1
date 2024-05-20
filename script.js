function displayWelcomeMessage(username) {
    var welcomeElement = document.getElementById("welcomeMessage");
    welcomeElement.innerText = "Hello, " + username + "!";
    welcomeElement.style.display = "block";
}

function onLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulate login process
    var loginSuccessful = simulateLogin(username, password);

    if (loginSuccessful) {
        displayWelcomeMessage(username);
        document.getElementById("errorMessage").innerText = "";
    } else {
        displayErrorMessage();
    }
}

function simulateLogin(username, password) {
    // This function simulates the login process
    // Replace this with actual login logic
    return username === "JohnDoe" && password === "password123";
}

function displayErrorMessage() {
    document.getElementById("errorMessage").innerText = "Incorrect login. Please try again.";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function showFormFields() {
    var ticketType = document.getElementById("ticketType").value;
    document.getElementById("computerFields").style.display = "none";
    document.getElementById("softwareFields").style.display = "none";
    document.getElementById("networkFields").style.display = "none";

    if (ticketType === "computer") {
        document.getElementById("computerFields").style.display = "block";
    } else if (ticketType === "software") {
        document.getElementById("softwareFields").style.display = "block";
    } else if (ticketType === "network") {
        document.getElementById("networkFields").style.display = "block";
    }
}

function showTicketSummary() {
    var ticketType = document.getElementById("ticketType").value;
    var issueDetail = "";
    if (ticketType === "computer") {
        issueDetail = document.getElementById("computerIssue").value;
    } else if (ticketType === "software") {
        issueDetail = document.getElementById("softwareIssue").value;
    } else if (ticketType === "network") {
        issueDetail = document.getElementById("networkIssue").value;
    }

    document.getElementById("summary").innerHTML =
        "Ticket Type: " + ticketType + "<br>" +
        "Issue Detail: " + issueDetail;
    document.getElementById("summary").style.display = "block";
}

