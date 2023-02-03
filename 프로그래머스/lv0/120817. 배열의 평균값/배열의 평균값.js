function solution(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        // console.log(numbers[i])
        sum = sum + numbers[i] 
    }
    console.log(sum)
    var answer = sum/numbers.length;
    return answer;
}