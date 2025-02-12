document.getElementById("takeoff-btn").addEventListener("click", function() {
    document.getElementById("status").textContent = "Houston, we have liftoff!";
});

let abortBtn = document.getElementById("abort-btn");

abortBtn.addEventListener("mouseover", function() {
    abortBtn.style.backgroundColor = "red";
});

abortBtn.addEventListener("mouseout", function() {
    abortBtn.style.backgroundColor = "";
});

abortBtn.addEventListener("click", function() {
    let confirmAbort = confirm("Are you sure you want to abort the mission?");
    if (confirmAbort) {
        document.getElementById("status").textContent = "Mission aborted! Space shuttle returning home.";
    }
});
