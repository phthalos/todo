function Editor({ onSubmit, onChange, post }) {
    return (
        <>
            {/* form과 submit을 사용하면 텍스트 입력+엔터키로도 투두리스트 추가가 됩니다. 그냥 div와 button의 조합은 안 됩니다. */}
            <form className="editorWrapper" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="새로운 Todo..."
                    className="todoInput"
                    onChange={onChange}
                    value={post}
                    name="post"
                />
                <button type="submit" className="todoButton">
                    추가
                </button>
            </form>
        </>
    );
}

export default Editor;
