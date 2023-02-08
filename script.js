const api_url = "https://official-joke-api.appspot.com/random_joke";
let setup = document.querySelector("#joke .setup");
let punchLine = document.querySelector("#joke .punch-line");
async function jokeGenerator() {
	const response = await fetch(api_url);
	var data = await response.json();
	console.log(data);
	setup.textContent = `${data.setup}`;
	punchLine.textContent = `${data.punchline}`;
}
//quoteGenerator();
