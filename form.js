const form = document.getElementById('feed-form');

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("thank you for your feedback");

    form.reset();
});