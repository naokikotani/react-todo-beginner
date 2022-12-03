import React, { useState } from 'react';
import TodoCard from './components/TodoCard';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function App() {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');

  const handleTitle = e => setTitle(e.target.value);
  const handleContent = e => setContent(e.target.value);
  const handleStatus = e => setStatus(e.target.value);

  const handleSubmit = event => {
    event.preventDefault()
    if (title === '' || content === '' || status === '') return
    setTodos(todos => [...todos, { id, title, content, status }])
    setId(id + 1);
    setTitle('')
    setContent('')
    setStatus('')
  }

  const handleRemoveTask = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            id="standard-textarea"
            label="タイトル"
            placeholder="掃除"
            multiline
            variant="standard"
            value={title}
            onChange={handleTitle}
          />
        </div>
        <div>
          <TextField
            id="standard-textarea"
            label="タスクの詳細"
            placeholder="トイレをきれいにする"
            multiline
            variant="standard"
            value={content}
            onChange={handleContent}
          />
        </div>
        <div>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">ステータス</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
              <FormControlLabel value="0" control={<Radio />} label="未着手" onChange={handleStatus} checked={status === "0"} />
              <FormControlLabel value="1" control={<Radio />} label="進行中" onChange={handleStatus} checked={status === "1"} />
              <FormControlLabel value="2" control={<Radio />} label="完了" onChange={handleStatus} checked={status === "2"} />
            </RadioGroup>
          </FormControl>
        </div>
        <Button variant="contained" type="submit">
          タスクを追加
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
