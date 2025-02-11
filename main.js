let repos = [
  {
    id:1,
    name: 'Repo1',
    description: 'Here is a description of my repo',
    language: 'Javascript',
    keywords: [
      'Javascript',
      'React',
      'Hackerthon'
    ],
    pinned: true,
    type: 'repository'
  },
  {
    id:2,
    name: 'Repo1',
    description: 'Here is a description of my repo',
    language: 'Javascript',
    keywords: [
      'Javascript',
      'React',
      'Hackerthon'
    ],
    pinned: true,
    type: 'repository'
  },
  {
    id:3,
    name: 'Repo1',
    description: 'Here is a description of my repo',
    language: 'Javascript',
    keywords: [
      'Javascript',
      'React',
      'Hackerthon'
    ],
    pinned: true,
    type: 'repository'
  },
  {
    id:4,
    name: 'Repo1',
    description: 'Here is a description of my repo',
    language: 'Javascript',
    keywords: [
      'Javascript',
      'React',
      'Hackerthon'
    ],
    pinned: true,
    type: 'repository'
  }
]

let projects = [
  {
    id: 1,
    name: 'Project1',
    description: 'Here is a description',
    type: 'project'
  },
  {
    id: 2,
    name: 'Project1',
    description: 'Here is a description',

  },
  {
    id: 3,
    name: 'Project1',
    description: 'Here is a description',
     type: 'project'
  },
  {
    id: 4,
    name: 'Project1',
    description: 'Here is a description',
     type: 'project'
  },
  {
    id: 5,
    name: 'Project1',
    description: 'Here is a description',
     type: 'project'
  }
]

let packages = [
  {
    id:1,
    name: "Package1",
    description: "Here is a description",
    linkUrl: 'www.website.com',
    type: 'package'
  },
  {
    id:1,
    name: "Package1",
    description: "Here is a description",
    linkUrl: 'www.website.com',
    type: 'package'
  },
  {
    id:1,
    name: "Package1",
    description: "Here is a description",
    linkUrl: 'www.website.com',
    type: 'package'
  },
  {
    id:1,
    name: "Package1",
    description: "Here is a description",
    linkUrl: 'www.website.com',
    type: 'package'
  }
]

let renderToDom = (divId, htmlToRender) => {
    let docSelect = document.querySelector(divId)
    docSelect.innerHTML = htmlToRender
}



let newFunc = () => {
  let domString = `<p>Here is a brief sentence wrapped in a p tag.</p>`
  renderToDom('#app', domString)
}

let projectsOnDom = () => {
  let domString = ''
  for (project of projects) {
    domString += `<div id='repoCard' class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">${project.name}</div>
  <div class="card-body">
    <p class="card-text">${project.description}</p>
    <p>${project.keywords}</p>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
  </div>
</div>`

}
renderToDom("#pinned", domString)
}

let packagesOnDom = () => {
  let domString = ''
  for (package of packages) {
    domString += `<div id='repoCard' class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">${package.name}</div>
  <div class="card-body">
    <p class="card-text">${package.description}</p>
    <p>${package.linkUrl}</p>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
  </div>
</div>`

}
renderToDom("#pinned", domString)
}


let reposOnDom = () => {
  let domString = ''
  for (repo of repos) {
    domString += `<div id='repoCard' class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">${repo.name}</div>
  <div class="card-body">
    <p class="card-text">${repo.description}</p>
    <p>${repo.keywords}</p>
    <div class="form-check form-check-inline">
</div>
  </div>
</div>`

}
renderToDom("#pinned", domString)
}

let renderPinned = () => {
  let domString = ''
  for (repo of repos) {
    domString += `<div id='repoCard' class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">${repo.name}</div>
  <div class="card-body">
    <p class="card-text">${repo.description}</p>
    <p>${repo.keywords}</p>
    <div class="form-check form-check-inline">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
  </div>
</div>`

  }

  renderToDom('#pinned', domString)
}

let formHeader = `<h3>Create New Repo</h3>`

let newRepoForm =  `<form>
<label for="exampleFormControlInput1" class="form-label">Repo Name</label>
<input type="text" class="form-control" id="exampleFormControlInput1" >
<label for="exampleFormControlTextarea1" class="form-label">Description</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
 <button 
            type="submit" 
            class="btn btn-success" 
          >
            Submit
          </button>
</form>`

formHeader += newRepoForm



// let newRepoForm = () => {
//   let domString = 'Create new repo'
//   domString += `
//   <form>
//   <label for="exampleFormControlInput1" class="form-label">Repo Name</label>
//   <input type="text" class="form-control" id="exampleFormControlInput1" >
//   <label for="exampleFormControlTextarea1" class="form-label">Description</label>
//   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//  <input class="btn btn-primary" type="submit" value="Submit">
// </form>
// `
// renderToDom('#form', domString)
// }


let renderTabs = (e) => {
  e.preventDefault()
  
  if (e.target.id.includes('repo')) {
    reposOnDom()
    renderToDom("#form", formHeader)
  }
  

  e.preventDefault()
  if (e.target.id.includes('projects')) {
    projectsOnDom()
    newProjectForm()
  }

  e.preventDefault()
  if(e.target.id.includes('packages')) {
    packagesOnDom()
    newPackageForm()
  }
}



let submitBtn = () => {
  console.log('clicked')
  let domString = `<input class="btn btn-primary" type="submit" value="Submit">`
  renderToDom("#form", domString)
}








let newPackageForm = () => {
  let domString = 'Create new package'
  domString += `<div class="mb-3">
  <form>
  <label for="exampleFormControlInput1" class="form-label">Package Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <input id='subBtn' class="btn btn-primary" type="submit" value="Submit">
  </form>
</div>
` 
renderToDom('#form', domString)
}

let newProjectForm  = () => {
    let domString = 'Create new project'
  domString += `<div class="mb-3">
  <form>
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
   <button 
            type="submit" 
            class="btn btn-success" 
          >
            Submit
          </button>
  </form>
</div>
` 
 renderToDom('#form', domString)
}

let submitForm = (e) => {
  e.preventDefault()
  let obj = {
    id: repos.length + 1,
    name: document.querySelector("#exampleFormControlInput1").value,
    description: document.querySelector("#exampleFormControlTextarea1").value,
    pinned: true
  }
  console.log('clicked')
  
  
  repos.push(obj)
  reposOnDom()
  document.querySelector('form').reset()
}

let footerFunc = () => {
  let domString = `
  <div id='footerDiv'><ul id='footUl'>
  <li><a>Link</a></li>
  <li><a>Link</a></li>
  <li><a>Link</a></li>
  <li><a>Link</a></li>
  <li><a>Link</a></li>
  </ul>
  </div>`
  renderToDom("#foot", domString)
}


 let events = () => {
  newProjectForm()
  renderPinned()
  
footerFunc()

  document.querySelector("#main").addEventListener("click", renderTabs)
  let formDoc = document.querySelector("form")
  formDoc.addEventListener("submit", submitForm)
 
 }

 events()
