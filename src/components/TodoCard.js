import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import { useState } from "react";

function TodoCard({ todo, setTodos, todos }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState();
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editStatus, setEditStatus] = useState("");

  const status_list = ["未着手", "進行中", "完了"];

  const handleRemoveTask = (id) => {
    setTodos(() => todos.filter((todo) => id !== todo.id));
  };

  const handleOpenEditForm = (id, title, content, status) => {
    setEditId(id);
    setEditTitle(title);
    setEditContent(content);
    setEditStatus(status);
    setIsEdit(!isEdit);
  };

  return (
    <>
      <Card
        variant="outlined"
        className="task-card"
        style={{ position: "relative" }}
      >
        <CardContent>
          {isEdit ? (
            <>
              <div className="new-task-title">
                <TextField
                  id="new-task-title"
                  placeholder={todo.title}
                  multiline
                  variant="standard"
                >
                  {todo.title}
                </TextField>
              </div>
              <div className="new-task-content">
                <TextField
                  id="new-task-content"
                  placeholder={todo.content}
                  multiline
                  variant="standard"
                >
                  {todo.content}
                </TextField>
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
                      // checked={todo.status === "0"}
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="進行中"
                      // checked={todo.status === "1"}
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="完了"
                      // checked={todo.status === "2"}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </>
          ) : (
            <>
              <Typography
                sx={{ fontSize: 14 }}
                className="card-status"
                gutterBottom
              >
                {status_list[todo.status]}
              </Typography>
              <Typography variant="h5" component="div">
                {todo.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {todo.content}
              </Typography>
            </>
          )}
        </CardContent>
        <div className="card-button-list">
          <CardActions>
            <Button
              variant="outlined"
              className="card-delete-button"
              onClick={() => handleRemoveTask(todo.id)}
            >
              削除する
            </Button>
          </CardActions>
          <CardActions>
            <Button
              variant="outlined"
              className="card-edit-button"
              onClick={() =>
                handleOpenEditForm(
                  todo.id,
                  todo.title,
                  todo.content,
                  todo.status
                )
              }
            >
              編集する
            </Button>
          </CardActions>
        </div>
      </Card>
    </>
  );
}

export default TodoCard;
