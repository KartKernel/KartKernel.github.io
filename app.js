async function fetchRepositoryContents(){
    const owner = 'KartKernel';
    const repo = 'AI-DL-PROJECTS';
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents`);
    const contents = await response.json();
    const projectslist = document.getElementById('projectslist');
    projectslist.innerHTML - '';

    contents.forEach(item => {
        if(item.type === 'dir'){
            const listItem = document.createElement('p');
            const link = document.createElement('a');
            link.href = item.html_url;
            link.textContent = item.name;
            link.className = 'pLists';
            listItem.appendChild(link);
            projectslist.appendChild(listItem);
            }
    });
}

fetchRepositoryContents();

function downloadResume(){
    const path='https://raw.githubusercontent.com/KartKernel/KartKernel.github.io/main/KARTTIKEYA_RESUME(H).pdf';

    const link = document.createElement('a');
    link.style.display='none';
    link.href = path;
    link.download = 'KarttikeyaResume.pdf';


    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}