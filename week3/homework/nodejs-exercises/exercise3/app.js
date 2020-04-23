const fetch = require('node-fetch');
const url = 'https://reservation100-sandbox.mxapps.io/api/reservations';
const inviter = {
    "name": "Mohammad Fakhera",
    "numberOfPeople": 3
};

	fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(inviter)
	})
		.then((res) => res.text())
		.then((text) => {
			console.log(text);
		})
		.catch((err) => {
			console.log(err);
		});

