const calculateResults = questions => {
  let correct = 0;
  let incorrect = 0;
  let empty = 0;

  questions.forEach(question => {
    if (!question.userAnswer) {
      empty++;
    } else if (question.userAnswer === question.correctAnswer) {
      correct++;
    } else {
      incorrect++;
    }
  });

  const net = correct - incorrect / 4;
  return { correct, incorrect, empty, net };
};

export default calculateResults;
