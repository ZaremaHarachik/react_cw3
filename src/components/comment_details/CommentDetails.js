export default function CommentDetails({id,title,body}) {

    return (
        <div>
            <p>
                {id}
                {title}<br/>
                {body}
            </p>
        </div>
    );
}