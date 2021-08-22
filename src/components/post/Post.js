export default function Post({item,chosePost}) {

    const onClickPostChose = () => {
        chosePost(item);
    }
    return (
        <div>
            {item.id} - {item.title}
            <button onClick={onClickPostChose}>details</button>
        </div>

    );
}
