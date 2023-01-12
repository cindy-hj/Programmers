function solution(array) {
    // const min = Math.min.apply(null, array);
    // console.log(min);
    // 이렇게 하면 최소값 자체는 쉽게 찾지만 배열의 다른 값들과 비교가 골치아픔
    let min = 1000;
    let newArray = [];
   
    for(let j = 0; j < array.length; j++){
        // 원래 배열 내에서 최소값을 찾는 반복문
        for(let i = 0; i < array.length; i++){
            if(min > array[i]){
                min = array[i];
            } 
        }
        // 최소값을 새로운 배열에 넣기
        newArray.push(min);
        // 새로운 배열에 들어간 최소값을 원래 배열에서 제거
        for(let i = 0; i < array.length; i++){
            if(min === array[i]){
                array[i] = 1000;
                min = 1000;
            } 
        }
    // 위의 과정을 원래 배열의 길이만큼 반복
    }
    console.log(newArray[Math.floor(array.length/2)]);
    var answer = newArray[Math.floor(array.length/2)];
    return answer;      
}


// 최소값 찾는 반복문이 끝나고 최소값을 새배열에 넣어야 한다.
// 최소값을 새배열에 넣었으면 이 값을 제거 해야됨. 
// 제거 하고 나서 다음 최소값을 찾는 반복문 돌려야함-> 반복문 이중으로!


