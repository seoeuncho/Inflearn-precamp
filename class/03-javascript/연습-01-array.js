let classmates = ['철수', '영희', '훈이'];
classmates[0]; // 철수
classmates[1]; // 영희
classmates[2]; // 훈이
classmates.includes('철수'); // true
classmates.includes('맹구'); // false
classmates.length; // 3
classmates.push('맹구'); // true
classmates.includes('맹구'); // true
classmates.pop('맹구');
classmates.includes('맹구'); // false

// developer 라는 변수를 만들고, 자신이 원하는 개발자로의 성공 키워드가 5개 담겨있는 배열을 할당한 뒤,
// 가장 중요하다고 생각하는 키워드를 index를 이용하여 콘솔에 표시해 보세요.
let developer = ['워라벨', '지적능력향상', '연봉', '능력', '개발자의 명성'];
console.log(developer[2]);
// dream이라는 변수에 ['커리어점프', '성공', '할수있다'] 배열 할당한 뒤
// developer 배열과 하나로 합쳐보세요.
let dream = ['커리어점프', '성공', '할수있다'];
developer.concat(dream);