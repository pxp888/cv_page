async function sendNotification(data: any) {
	const url = `http://52.56.34.125/test`;

	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		throw new Error(`Error: ${response.statusText}`);
	}

	const responseData = await response.json();
	console.log(responseData); // This will contain the NTFY response
}

export {sendNotification};
