let word1:(string | number)[] = [1,'data', 3, 'result']
let word2:[string,string,string,string,string] = ['bejo','has','4','sport','car']

const getResult = (a:any):string => {
  return a.join(' ')
  
}

console.log(getResult(word1));
console.log(getResult(word2));