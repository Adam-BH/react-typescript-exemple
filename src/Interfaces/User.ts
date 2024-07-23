export interface User {
	name: string;
	country: Country;
	age: number;
	email: string;
	isMarried: boolean;
	friends: string[];
}

export enum Country {
	TN = 'Tounes',
	DZ = 'Algeria',
	LB = 'Libya',
}
