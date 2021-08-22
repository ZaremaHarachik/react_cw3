import "./Comments.css"
import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.service";
import Comment from "../comment/Comment";
import CommentDetails from "../comment_details/CommentDetails";


export default function Comments() {

    let[comments,setComments] = useState([]);
    let[comment,setComment] = useState(null);
    let[commentDetails,setCommentDetails] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments([...value]));
    },[]);

    const choseComment=(comment) => {
        console.log(comment);
        setComment({...comment});
        getComments(comment.id).then(value => setCommentDetails([...value]));
    }

    return (
        <div className={"wrap"}>
            <div className={"comments-box"}>
                {
                    comments.map(value => <Comment key={value.id} item={value} choseComment={choseComment}/>)
                }
            </div>
            {
                comment && <div className={"chosen-one"}>{JSON.stringify(comment)}</div>
            }
            <CommentDetails commentDetails={commentDetails}/>
        </div>
    );
}