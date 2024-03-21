import { useState, useContext } from "react";
import styled from "styled-components";
import Item from "./Item";
import { TodoContext } from "../context/TodoContext";

const InputField = styled.div`
	display: block;
	margin: 5px 0;
`;

const InputArea = styled.input`
	height: 21px;
`;

const Button = styled.button`
	width: 50px;
	height: 28px;
`;

const Input = () => {
	const [todo, setTodo] = useState("");
	const { dispatch } = useContext(TodoContext);

	const getID = () => {
		return Math.random().toString(36).substr(2);
	}

	const changeTodo = (e) => {
		setTodo(e.target.value);
	}

	const addTodo = () => {
		if(todo === '') return;
		dispatch({
			type: "add",
			payload: {id: getID(), comment: todo}
		})
		setTodo("");
	}

	const handleKeyPress = (e) => {
		if (e.key === 'Enter' && e.shiftKey) {
			e.preventDefault();
			addTodo(e);
		}
	}

	return (
		<InputField>
			<div>
				<InputArea type="text" onChange={changeTodo} value={todo} onKeyDown={handleKeyPress}　/>
				<Button onClick={dispatch} >追加</Button>
			</div>
			<Item />
		</InputField>
	)
}

export default Input;