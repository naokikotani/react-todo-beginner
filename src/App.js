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
  const [editId, setEditId] = useState();
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editStatus, setEditStatus] = useState('');

  const handleTitle = e => setTitle(e.target.value);
  const handleContent = e => setContent(e.target.value);
  const handleStatus = e => setStatus(e.target.value);
  const handleEditTitle = e => setEditTitle(e.target.value);
  const handleEditContent = e => setEditContent(e.target.value);
  const handleEditStatus = e => setEditStatus(e.target.value);


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

  const handleOpenEditForm = (id, title, content, status) => {
    setEditId(id)
    setEditTitle(title)
    setEditContent(content)
    setEditStatus(status)
  }

  const handleEditSubmit = event => {
    event.preventDefault()
    const newTodos = [...todos]

    setTodos(() =>
      newTodos.map((todo) =>
        todo.id === editId ? { ...todo, id: editId, title: editTitle, content: editContent, status: editStatus } : todo
      )
    )
    console.log(todos)
    setEditId()
    setEditTitle('')
    setEditContent('')
    setEditStatus('')
  }

  return (
    <div className="App">
      <div className='form-list'>
        <form onSubmit={handleSubmit} className="creat-task-form">
          <h3 className='creat-task-form-title'>
            新規タスク追加
          </h3>
          <div className='new-task-title'>
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
          <div className='new-task-content'>
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
          <div className='new-task-status'>
            <FormControl>
              <FormLabel id="new-task-status">ステータス</FormLabel>
              <RadioGroup row aria-labelledby="new-task-status" name="row-radio-buttons-group" >
                <FormControlLabel value="0" control={<Radio />} label="未着手" onChange={handleStatus} checked={status === "0"} />
                <FormControlLabel value="1" control={<Radio />} label="進行中" onChange={handleStatus} checked={status === "1"} />
                <FormControlLabel value="2" control={<Radio />} label="完了" onChange={handleStatus} checked={status === "2"} />
              </RadioGroup>
            </FormControl>
          </div>
          <Button variant="contained" type="submit" className='submit-new-task'>
            タスクを追加する
          </Button>
        </form>
        <form onSubmit={handleEditSubmit} className='edit-task-form'>
          <h3 className='edit-task-form-title'>
            タスクの編集
          </h3>
          <div className='edit-task-title'>
            <TextField
              id="edit-task-title"
              label="タイトル"
              placeholder="掃除"
              multiline
              variant="standard"
              value={editTitle}
              onChange={handleEditTitle}
            />
          </div>
          <div className='edit-task-content'>
            <TextField
              id="edit-task-content"
              label="タスクの詳細"
              placeholder="トイレをきれいにする"
              multiline
              variant="standard"
              value={editContent}
              onChange={handleEditContent}
            />
          </div>
          <div>
            <FormControl className='edit-task-status'>
              <FormLabel id="edit-task-status">ステータス</FormLabel>
              <RadioGroup row aria-labelledby="edit-task-status" name="row-radio-buttons-group" >
                <FormControlLabel value="0" control={<Radio />} label="未着手" onChange={handleEditStatus} checked={editStatus === "0"} />
                <FormControlLabel value="1" control={<Radio />} label="進行中" onChange={handleEditStatus} checked={editStatus === "1"} />
                <FormControlLabel value="2" control={<Radio />} label="完了" onChange={handleEditStatus} checked={editStatus === "2"} />
              </RadioGroup>
            </FormControl>
          </div>
          <Button variant="contained" type="submit" className='submit-edit-task'>
            タスクを更新する
          </Button>
        </form>
      </div>
      <ul className='task-card-list'>
        {todos.map((todo, index) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            index={index}
            handleRemoveTask={handleRemoveTask}
            handleOpenEditForm={handleOpenEditForm}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
