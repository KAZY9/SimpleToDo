import styled from "styled-components";
import Input from "./Input";
import { TodoProvider } from "../context/TodoContext";

const Field = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  margin-top: 50px;
`;

const Main = () => {
  return (
    <TodoProvider>
      <Field>
        <Input />
      </Field>
    </TodoProvider>
  );
}

export default Main;
