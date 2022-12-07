import { Select, MenuItem } from "@mui/material";

export const StatusSelect = ({ filter, setFilter }) => {
  return (
    <Select
      className="filter-todo-button"
      labelId="filter-todo-label"
      id="filter-todo-button"
      label="絞りこみ"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <MenuItem value="all">全て</MenuItem>
      <MenuItem value="0">未着手</MenuItem>
      <MenuItem value="1">進行中</MenuItem>
      <MenuItem value="2">完了</MenuItem>
    </Select>
  );
};
