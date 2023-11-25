import { useState, useRef, useEffect } from "react";
import Action from "./Action";
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';

const Comment = ({
  handleInsertComment,
  handleEditComment,
  handleDeleteComment,
  comment,
  userDetail
}) => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);
  const [editReply, setEditReply] = useState(comment.name);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [editMode]);

  const handleNewComment = () => {
    setShowInput(true);
  };

  const onAddComment = () => {
    if (editMode) {
      handleEditComment(comment.id, editReply);
    } else {
      handleInsertComment(comment.id, input);
      setShowInput(false);
      setInput("");
    }

    if (editMode) setEditMode(false);
  };

  const handleDelete = () => {
    handleDeleteComment(comment.id);
  };

  return (
    <div>
      <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
        {comment.id === 1 ? (
          <>
            <TextField
                margin="normal"
                required
                fullWidth
                id="comment"
                label="Comment"
                name="comment"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
            />
            <Action
              className="reply comment"
              type="Comment"
              handleClick={onAddComment}
            />
          </>
        ) : (
          <>
            <div className="messageRow">
                <Avatar
                    className="orange"
                ></Avatar>
                <div className="">
                    <div className="messageBlue">
                    <label style={{fontWeight:"bold"}}>{userDetail.name}</label>
                        {!editMode ? <p
                            ref={inputRef}
                            style={{ wordWrap: "break-word", textAlign: "left" }}
                        >
                            {comment.name}
                        </p>:
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="editReply"
                            label="Edit"
                            name="editReply"
                            value={editReply}
                            onChange={(e) => setEditReply(e.target.value)}
                            autoFocus
                        />}
                    </div>
                    <div style={{ display: "flex", marginTop: "5px", marginLeft: "18px" }}>
                    {editMode ? (
                        <>
                        <Action
                            className="reply"
                            type="Save"
                            handleClick={onAddComment}
                        />
                        <Action
                            className="reply"
                            type="Cancel"
                            handleClick={() => {
                            if (inputRef.current)
                                inputRef.current.innerText = comment.name;
                                setEditMode(false);
                            }}
                        />
                        </>
                    ) : (
                        <>
                        <Action
                            className="reply"
                            type={
                            <>
                                Reply
                            </>
                            }
                            handleClick={handleNewComment}
                        />
                        <Action
                            className="reply"
                            type="Edit"
                            handleClick={() => {
                            setEditMode(true);
                            }}
                        />
                        <Action
                            className="reply"
                            type="Delete"
                            handleClick={handleDelete}
                        />
                        </>
                    )}
                    </div>
                </div>
            </div>
          </>
        )}
      </div>

      <div style={{ display: "block" , paddingLeft: 25 }}>
        {showInput && (
          <div className="inputContainer">
            <TextField
                margin="normal"
                required
                fullWidth
                id="reply"
                label="Reply"
                name="reply"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
            />
            <Action className="reply" type="Reply" handleClick={onAddComment} />
            <Action
              className="reply"
              type="Cancel"
              handleClick={() => {
                setShowInput(false);
              }}
            />
          </div>
        )}

        {comment?.items?.map((cmnt) => {
          return (
            <Comment
              key={cmnt.id}
              handleInsertComment={handleInsertComment}
              handleEditComment={handleEditComment}
              handleDeleteComment={handleDeleteComment}
              comment={cmnt}
              userDetail={userDetail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
