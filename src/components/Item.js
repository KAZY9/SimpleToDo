import styled from "styled-components";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Title = styled.h3`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

const ItemArea = styled.div`
  margin: 8px 10px;
`;

const Item = ({setMessage, setMessageColor}) => {
  const {state, dispatch} = useContext(TodoContext);

  const completeTodo = (id) => {
    dispatch({type: "complete", payload: id});
    setMessageColor(true);
    setMessage("よくできました！");
		setTimeout(() => setMessage(""), 2500);
	}

  return (
    <ItemArea>
      <Title>本日のToDo</Title>
      {state.todoList.map(todo => {
        return (
          <List key={todo.id}>
            {todo.comment}
            <button onClick={() => completeTodo(todo.id)}>完了</button>
          </List>
        )
      })}
    </ItemArea>
  )
}

export default Item;