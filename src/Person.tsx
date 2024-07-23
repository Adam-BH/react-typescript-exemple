import { User } from './Interfaces/User';

export const Person = (props: User) => {
	return (
		<div>
			<h1>{props.name}</h1>
			<h2>{props.country}</h2>
			<h2>{props.age}</h2>
			<h2>{props.email}</h2>
			<h2>{props.isMarried ? 'is married' : 'is single'}</h2>
			{props.friends.map((friend: string, index: number) => (
				<p key={index}>{friend}</p>
			))}
		</div>
	);
};
