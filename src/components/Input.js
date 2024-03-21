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

const MessageField = styled.div`
	background-color: ${(props) => (props.messageColor ? "lightskyblue" : "lightcoral")};
	color: white;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	margin: 5px 0;
`;

const Input = () => {
	const [todo, setTodo] = useState("");
	const [message, setMessage] = useState("")
	const [ messageColor, setMessageColor ] = useState(true);
	const { dispatch } = useContext(TodoContext);

	const getID = () => {
		return Math.random().toString(36).substr(2);
	}

	const changeTodo = (e) => {
		setTodo(e.target.value);
	}

	const addTodo = () => {
		if(todo === '') {
			setMessageColor(false);
			setMessage("入力してください。");
			setTimeout(() => setMessage(""), 2500);
			return;
		};
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
			<InputArea type="text" onChange={changeTodo} value={todo} onKeyDown={handleKeyPress} maxLength={10}/>
			<Button onClick={dispatch} >追加</Button>
			<MessageField messageColor={messageColor} >
				{message}
			</MessageField>
			<Item setMessage={setMessage} setMessageColor={setMessageColor} />
		</InputField>
	)
}

export default Input;