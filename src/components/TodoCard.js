import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function TodoCard(props) {
  const status_list = ["未着手", "進行中", "完了"];

  const handleRemoveTask = index => {
    const newTodos = [...props.todos]
    newTodos.splice(index, 1)
    props.setTodos(newTodos)
  }

  return (
    <Card variant="outlined" className='task-card'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} className='card-status' gutterBottom>
          {status_list[props.todo.status]}
        </Typography>
        <Typography variant="h5" component="div">
          {props.todo.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.todo.content}
        </Typography>
      </CardContent>
      <div className='card-button-list'>
        <CardActions>
          <Button variant="outlined" className='card-delete-button' onClick={() => handleRemoveTask(props.index)}>
            削除する
          </Button>
        </CardActions>
        <CardActions>
          <Button variant="outlined" className='card-edit-button' onClick={() => props.handleOpenEditForm(props.todo.id, props.todo.title, props.todo.content, props.todo.status)}>
            編集する
          </Button>
        </CardActions>
      </div>
    </Card>
  )
}

export default TodoCard;
