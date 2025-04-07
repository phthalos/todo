import "./App.css"; // 현재 폴더(src) 하위에 위치한 App.css 파일을 불러옵니다
import List from "./components/List"; // 현재 폴더/components 폴더/List 라는 파일을 불러옵니다 .jsx는 생략됨
// import Header에서 Header는 Potato로 바꿔도 작동하지만...
// 그냥 컴포넌트 이름과 똑같이 쓰는 게 알아보기 편하겠죠
import Potato from "./components/Header";
import Editor from "./components/Editor";
import { useEffect, useState } from "react";
import { date, month, year } from "./utils";

function App() {
    const today = year + ". " + (month + 1) + ". " + date + ".";
    const [post, setPost] = useState("");
    const [list, setList] = useState([
        ["과제하기", "2025. 4. 8."],
        ["동아리가기", "2025. 4. 7."],
    ]);
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const onChange = (e) => {
        if (e.target.name == "post") {
            setPost(e.target.value);
        } else if (e.target.name == "search") {
            setSearch(e.target.value);
            setResult(list.filter((item) => item[0].includes(e.target.value)));
        }
    };
    const onSubmit = (e) => {
        e.preventDefault(); // form은 새로고침 동작이 있다. 이를 방지하기 위함
        if (post === "") return;
        setList((arr) => [[post, today], ...arr]);
        setPost("");
    };
    const onDelete = (idx) => {
        // 기존 리스트 상태(prev)를 받고, 조건에 맞는 요소만 남깁니다.
        // item은 쓰지 않으니까 두 번째 요소인 index를 i로 받아옵니다.
        // i와 일치하지 않는 것(삭제 버튼이 눌리지 않은 요소들)만 반환합니다.
        setList((prev) => prev.filter((_, i) => i !== idx));
    };
    useEffect(() => {
        setResult(list.filter((item) => item[0].includes(search)));
    }, [search, list]);

    // 함수 return 값은 1개여야 합니다. 그래서 항상 최상위 요소는 빈 요소 <></> 또는 <div></div>로 감싸줍니다. (다른 언어도 그렇지만)
    return (
        // div 요소에 App이라는 별명을 붙였습니다. BlueBerry라고 붙여도 상관없습니다.
        <div className="App">
            <Potato />
            <Editor onSubmit={onSubmit} onChange={onChange} post={post} />
            <List onDelete={onDelete} onChange={onChange} search={search} result={result} />
        </div>
    );
}

export default App;
