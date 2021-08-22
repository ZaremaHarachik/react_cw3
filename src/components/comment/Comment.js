export default function Comment({item,choseComment}) {

    const onClickCommentChose = () => {
        choseComment(item);
    }
    return (
        <div>
            {item.id}
            - {item.title}
            <button onClick={onClickCommentChose}>details</button>
            {/*<hr/>*/}
        </div>

    );
}