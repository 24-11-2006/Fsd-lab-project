 function submitQuiz(event) {
 event.preventDefault();
 const answers = document.querySelectorAll('input[type="radio"]:checked');
 const correctAnswers = {
 q1: "Maximum number of linearly independent rows or columns",
 q2: "A matrix that when multiplied by the original matrix gives the identity matrix",
 q3: "The sum of the products of corresponding components of the two vectors",
 q4: "Scalars that satisfy the equation A*v = λ*v",
 q5: "A vector perpendicular to both vectors",
 q6: "A scalar value that can be computed from the elements of the matrix",
 q7: "A square matrix with ones on the diagonal and zeros elsewhere",
 q8: "The result of multiplying each row of A with each column of B",
 q9: "A set of vectors that is closed under vector addition and scalar multiplication",
 q10: "A single numerical value"
 };
 let score = 0;
 answers.forEach(answer => {
 const questionName = answer.name;
 if (answer.value === correctAnswers[questionName]) {
 score++;
 }
 });
 localStorage.setItem('quizScore', score);
 window.location.href = 'r1.html';
 }