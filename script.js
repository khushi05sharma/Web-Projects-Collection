// Select all FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Add click event listeners to all buttons
faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    // Find the answer associated with the clicked question
    const answer = question.nextElementSibling;

    // Toggle the visibility of the answer
    if (answer.classList.contains('visible')) {
      answer.classList.remove('visible');
    } else {
      answer.classList.add('visible');
    }
  });
});
