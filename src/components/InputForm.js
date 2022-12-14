import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Button,
  Radio,
} from "@mui/material";
import { useState } from "react";

export const InputForm = ({ setTodos }) => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleContent = (e) => setContent(e.target.value);
  const handleStatus = (e) => setStatus(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === "" || content === "" || status === "") return;
    setTodos((todos) => [...todos, { id, title, content, status }]);
    setId(id + 1);
    setTitle("");
    setContent("");
    setStatus("");
  };
  return (
    <div className="form-list">
      <form onSubmit={handleSubmit} className="create-task-form">
        <h3 className="create-task-form-title">新規タスク追加</h3>
        <div className="new-task-title">
          <TextField
            id="new-task-title"
            label="タイトル"
            placeholder="掃除"
            multiline
            variant="standard"
            value={title}
            onChange={handleTitle}
          />
        </div>
        <div className="new-task-content">
          <TextField
            id="new-task-content"
            label="タスクの詳細"
            placeholder="トイレをきれいにする"
            multiline
            variant="standard"
            value={content}
            onChange={handleContent}
          />
        </div>
        <div className="new-task-status">
          <FormControl>
            <FormLabel id="new-task-status">ステータス</FormLabel>
            <RadioGroup
              row
              aria-labelledby="new-task-status"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="未着手"
                onChange={handleStatus}
                checked={status === "0"}
              />
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="進行中"
                onChange={handleStatus}
                checked={status === "1"}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="完了"
                onChange={handleStatus}
                checked={status === "2"}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <Button variant="contained" type="submit" className="submit-new-task">
          タスクを追加する
        </Button>
      </form>
    </div>
  );
};
