const question = new Map();
question.set('question', 'what year is it?');
question.set(1, 2018);
question.set(2, 2019);
question.set(3, 2020);
question.set('correct', 1);
question.set(true, 'correct');
question.set(false, 'Wrong');

//refers to the key, aka the first argument
question.get(1);
question.size;

// if(question.has(3)) {
//    console.log('Answer 3 exists');
// }

// question.forEach((value, key) =>
//    console.log(`This is ${key}, and it is set to ${value}`));
console.log(question.get('question'));
for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}
//brings up a prompt window. the parseInt turns the answer into a number
const ans = parseInt(prompt('Write the correct answer.'));
//finds the question set with the key 'correct' and checks if the value matches that of the prompt answer. the true and false sets respond depending on the outcome.
console.log(question.get(ans === question.get('correct')));



   // question.delete(3);
  // question.clear();
