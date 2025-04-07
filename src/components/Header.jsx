import { dayString, monthString, day, month, date, year } from "../utils";
function Header() {
    return (
        // return 값의 최상위 요소를 <></>로 설정하면, 이것은 브라우저에서 div로 바뀝니다!
        <>
            {/* 제목의 중요도(글자크기X 중요도O)에 따라 h1~h6까지 구분할 수 있습니다. */}
            <h2>오늘은 🗓️</h2>
            <h1>
                {/* Tue Apr 08 2025 */}
                {dayString[day]} {monthString[month]} {("0" + date).slice(-2)} {year}
            </h1>
        </>
    );
}

export default Header;
