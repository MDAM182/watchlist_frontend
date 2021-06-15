  const endPoint = "http://localhost:3000/api/v1/programs"

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is Loaded");
  getPrograms()
  const createProgramForm = document.querySelector("#create-program-form" )
  createProgramForm.addEventListener("submit", (e) => createFormHandler(e))
})

  function getPrograms() {
    fetch(endPoint)
    .then(res => res.json())
    .then(programs => {
      programs.data.forEach(program => {



    const newProgram = new Program(program, program.attributes)
         document.querySelector('#program-container').innerHTML += newProgram.render()
    })
   })
  }
function postFetch(title, favorite_quote, image_url, media_type, genre_id ){
  const bodyData = {title, favorite_quote, image_url, media_type, genre_id}
  fetch(endPoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(res => res.json())
  .then(program => {

      const newProgram = new Program(program.data, program.data.attributes)
     document.querySelector('#program-container').innerHTML += newProgram.render()
  })
}

function createFormHandler(e){
  e.preventDefault()
  const titleInput = document.querySelector('#input-title').value
  const quoteInput = document.querySelector('#input-quote').value
  const imgInput = document.querySelector('#input-url').value
  const mediaTypeInput = document.querySelector('#media_type').value
  const genreInput = parseInt(document.querySelector('#genres').value)

  postFetch(titleInput, quoteInput, imgInput, mediaTypeInput, genreInput)

}

  // .catch(err => console.log(err))
