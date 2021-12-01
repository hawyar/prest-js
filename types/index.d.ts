interface Table {
	schema: string;
	name: string;
	type: string;
	owner: string;
}

interface ClientOptions {
	beep?: boolean;
}

interface Database {
	name: string;
}

interface Schema {
	name: string;
}

export class Client {
	constructor(url: string, options: ClientOptions);
}

export function createClient(url: string, options: ClientOptions): Promise<Client>