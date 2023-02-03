function solution(n) {
    for(let i = 1; i <= 600; i++ ) {
        // console.log((6*i/n)%1)
        if((6*i/n)%1 === 0) {
            let answer = i
            return answer;
        }
    }
}