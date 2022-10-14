const sentence:string = "Learning Typescript is different than Javascript"

const getSentence = (sentence:string, start:number, end:number):string => {
  return sentence.slice(start, end)
}

console.log(getSentence(sentence, 9, 19));


