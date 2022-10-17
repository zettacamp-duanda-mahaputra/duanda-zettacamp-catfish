type typeData = (string|number)[] //type aliases
let word1:typeData = [1,'data', 3, 'result']
let word2:string[] = ['bejo','has','4','sport','car']

const getResult = (a:typeData):string => {
  return a.join(' ');
  
}
const getResult2 = (a:(string|number)[]):string => {
  return a.join(' ');
  
}
console.log(getResult(word1));
console.log(getResult(word2));


console.log(getResult2(word1))
console.log(getResult2(word2))
