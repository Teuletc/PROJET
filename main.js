const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '39aa8ca102msh1ecb732c070e2cbp116262jsn31156896eaf9',
		'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
	},
	body: '{"search_terms":"python programmer","location":"Chicago, IL","page":"1"}'
};

fetch('https://linkedin-jobs-search.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));