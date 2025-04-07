function List({ onDelete, onChange, search, result }) {
    return (
        <>
            <h3>Todo List 🌱</h3>
            <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="searchBar"
                onChange={onChange}
                name="search"
                value={search}
            />
            {result.map((item, idx) => (
                <li className="todoList" key={idx}>
                    <input type="checkbox" />
                    <span className="todoContent">{item[0]}</span>
                    <div className="options">
                        <span className="todoDate">{item[1]}</span>
                        <button type="button" className="deleteButton" onClick={() => onDelete(idx)}>
                            삭제
                        </button>
                    </div>
                </li>
            ))}
        </>
    );
}

export default List;
