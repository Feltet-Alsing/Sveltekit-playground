export async function getDB() {
	const db = new Map();
	await fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then((response) => {
			for (let i = 0; i < response.length; i++) {
				if (!db.has(response[i].title)) {
					db.set(response[i].id, {
						title: response[i].title,
						body: response[i].body,
						id: response[i].id,
						userId: response[i].userId
					});
				}
			}
		});
	return db;
}
