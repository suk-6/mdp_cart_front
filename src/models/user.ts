export type UserModel = {
	id: string;
	email: string;
	name: string;
};

export type DBUserModel = {
	id: string;
	email: string;
	name: string;
	createdAt: Date;
	updatedAt: Date;
};

export type RegisterDTO = {
	id: string;
	email: string;
	password: string;
	name: string;
};
