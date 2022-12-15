import { useEffect, useState, useRef } from "react";
import { Api } from "../services/api";
import * as Styled from "./Styled";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(null);

  const inputRef = useRef();
  const formRef = useRef();

  async function getUsers() {
    let response = await Api();
    setUsers(response.results);
  }

  async function getNewUser() {
    let response = await Api();
    setUsers([...response.results, ...users]);
  }

  function removeUser() {
    return setUsers(users.splice(1));
  }

  function resetForm() {
    formRef.current.reset();
    setSearch(null);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Styled.Container>
      <Styled.Options>
        <Styled.Form ref={formRef}>
          <Styled.Input
            ref={inputRef}
            placeholder="Buscar por nome..."
            onChange={() => setSearch(inputRef.current.value)}
          />
          <Styled.FormButton
            type="button"
            background="#107b71"
            onClick={resetForm}
            disabled={!inputRef.current?.value}
          >
            Limpar
          </Styled.FormButton>
        </Styled.Form>
        <Styled.Button
          type="button"
          background="#107b71"
          onClick={() => getNewUser()}
        >
          Novo Usuário
        </Styled.Button>
        <Styled.Button
          type="button"
          background="red"
          onClick={() => removeUser()}
          disabled={users.length < 2}
        >
          Remover Último Usuário
        </Styled.Button>
      </Styled.Options>
      <Styled.List>
        {users
          .filter((val) => {
            if (search === "" || search === null) {
              return val;
            } else if (
              val.name.first?.toLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return val;
            } else {
              return null;
            }
          })
          ?.map((user) => {
            return (
              <Styled.Box key={user.id.value}>
                <img src={user.picture.large} alt="" />
                <li>Primeiro nome: {user.name.first}</li>
                <li>Último nome: {user.name.last}</li>
              </Styled.Box>
            );
          })}
      </Styled.List>
    </Styled.Container>
  );
}
