const resultsDiv = document.getElementById("results");
fetch(`http://localhost:3000/jobs`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data['jobs']);
    const jobs = data['jobs'];
    resultsDiv.innerHTML = "";
    jobs.forEach((job) => {
      const div = document.createElement("div");
      div.classList.add("job");
      div.innerHTML = `
         <h3>company : ${job.company}</h3>
         <h1>${job.title}</h1>
         <p>Location : ${job.location}</p>
         <div class="platform">${job.jobProviders.map(x => (
           `<div><p>${x.jobProvider}</p>
           <a href=${x.url} target="_blank">Go to site</a></div>`
    ))}</div>
       `;
      resultsDiv.appendChild(div);
    });
  });
