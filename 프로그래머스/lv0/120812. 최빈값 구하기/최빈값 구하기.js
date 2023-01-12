function solution(array) {
    const sortedArray = array.sort((a, b) => a - b);
    console.log(array);
    let beforeNum = -1; // 이전 숫자
    let cnt = 0; // 현재 숫자 반복 횟수
    let modeNum = -1; // 최빈값
    let modeCnt = 0; // 최빈값 반복 횟수
    
    for(let i = 0; i < sortedArray.length; i++) {
        if(beforeNum === sortedArray[i]) {
            cnt++;
        } else {
            cnt = 1;
        }
    
        if(cnt > modeCnt) {
            modeCnt = cnt;
            modeNum = sortedArray[i];
        }
        
        if(cnt === modeCnt && modeNum !== sortedArray[i]) {
            modeNum = -1;    
        }

        beforeNum = sortedArray[i];
    }
    const answer = modeNum;
    return answer;
    
    // 오름차 순으로 나열
    // 이전숫자와 같은 숫자가 나오는 경우-> 반복 횟수 증가 -> 최빈값과 횟수 저장
    // 이전숫자와 다른 숫자가 나오는 경우-> 반복 횟수 1기록
    // 최빈값 횟수가보다 현재 반복 횟수가 큰 경우 최빈값과 최빈값 횟수 교체
    // 반복수가 같은경우 -1 반환
}