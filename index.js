var sentence = "Learning Typescript is different than Javascript";
var getSentence = function (sentence, start, end) {
    return sentence.slice(start, end);
};
console.log(getSentence(sentence, 9, 19));