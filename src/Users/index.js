import {useEffect, useState} from 'react';
import {Api} from '../services/api';
import * as Styled from './Styled';

export default function Users() {
	const [users, setUsers] = useState([]);

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

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<Styled.Container>
			{users?.map((user) => {
				return (
					<Styled.Box key={user.id.value}>
						<img src={user.picture.large} alt='' />
						<li>Primeiro nome: {user.name.first}</li>
						<li>Último nome: {user.name.last}</li>
						{console.log(user)}
					</Styled.Box>
				);
			})}
			<Styled.Options>
				<Styled.Button type='button' background='#107b71' onClick={() => getNewUser()}>
					Novo Usuário
				</Styled.Button>
				<Styled.Button type='button' background='red' onClick={() => removeUser()} disabled={users.length < 2}>
					Remover Último Usuário
				</Styled.Button>
			</Styled.Options>
		</Styled.Container>
	);
}
