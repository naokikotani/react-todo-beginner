import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function TodoCard(props) {
  const status_list = ["未着手", "進行中", "完了"];

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {status_list[props.status]}
        </Typography>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" onClick={() => props.handleRemoveTask(props.index)}>
          削除する
        </Button>
      </CardActions>
    </Card>
  )
}

export default TodoCard;
