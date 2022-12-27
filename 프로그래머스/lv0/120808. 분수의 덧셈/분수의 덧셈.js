function solution(denum1, num1, denum2, num2) {
    const denum = (denum1*num2 + denum2*num1);
    const num = (num1*num2);
    let min = Math.min(denum, num);
    
    while(true) {
        if(denum%min === 0) {
            if(num%min === 0) {
                let answer = [denum/min, num/min];
                return answer;
            }
        }
        min--;   // else가 붙으면 바깥 if 조건만 만족 못했을때!
        // else 없으면 바깥, 안 if 조건 둘 중 하나라도 만족 못했을때!
    }
    // while은 (조건)이 참인동안 계속 반복하므로 return을 while밖에서 잡으면 답이 안나옴.. 무한 while 도는중
}