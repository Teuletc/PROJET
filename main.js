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
    .then(response => {
        const jobs = response.jobs;
        const jobsList = document.getElementById('jobsList');
        jobs.forEach(job => {
            const li = document.createElement('li');
            const title = document.createElement('h2');
            const company = document.createElement('p');
            const location = document.createElement('p');
            const applyLink = document.createElement('a');

            title.textContent = job.title;
            company.textContent = `Company: ${job.company}`;
            location.textContent = `Location: ${job.location}`;
            applyLink.href = job.apply_url;
            applyLink.target = '_blank';
            applyLink.textContent = 'Apply';

            li.appendChild(title);
            li.appendChild(company);
            li.appendChild(location);
            li.appendChild(applyLink);

            jobsList.appendChild(li);
        });
    })
    .catch(err => console.error(err));