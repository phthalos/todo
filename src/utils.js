// 날짜 객체 생성
const dateConstructor = new Date();

// 날짜 객체는 월과 요일도 숫자로 반환합니다. 예: 일요일의 경우 0이라고 출력됨
// 그래서 반환된 값을 아래 배열의 index로 삼으면 해당 숫자에 맞는 문자열 값을 출력할 수 있습니다.
const monthString = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Sep", "Oct", "Nov", "Dec"];
const dayString = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// 날짜 객체에 있는 메소드 중 연, 월, 일, 요일을 가져옵니다.
const year = dateConstructor.getFullYear();
const month = dateConstructor.getMonth();
// 일은 원래 한 자리만 뜹니다. 근데 예제는 숫자 앞에 0을 붙이고 싶다니까 그렇게 합시다.
// 근데 12일 같이 2자리면 012가 되는데.. 이상하니까 .slice(-2)를 사용하여 항상 맨 끝 2자리만 출력되도록 합니다.
const date = dateConstructor.getDate();
const day = dateConstructor.getDay();

export { dateConstructor, monthString, dayString, year, month, date, day };
