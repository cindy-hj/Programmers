function solution(n) {
    let Arr =  [];
    for (let i = 1; i <= n; i++){
       if(i%2) {
           Arr.push(i);
       }
    }
    var answer = Arr;
    return answer;
}