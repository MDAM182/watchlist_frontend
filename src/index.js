  const endPoint = "http://localhost:3000/api/v1/programs"

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM is Loaded");
  getPrograms()
  const app = new App();
  app.attachEventListeners();

  const createProgramForm = document.querySelector("#create-program-form")
  createProgramForm.addEventListener("submit", (e) => createFormHandler(e))

  const programContainer = document.querySelector('#program-container')
      programContainer.addEventListener('click', e => {
        const id = parseInt(e.target.closest('[data-id]').dataset.id)
        const program = Program.findById(id)
        console.log(program)
        document.querySelector('#update-program').innerHTML += program.renderPatchForm()


    })
  })

  function getPrograms() {
    fetch(endPoint)
    .then(res => res.json())
    .then(programs => {
      programs.data.forEach(program => {
      let newProgram = new Program(program, program.attributes)
         document.querySelector('#program-container').innerHTML += newProgram.renderProgramCard()
    })
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
      document.querySelector('#program-container').innerHTML += newProgram.renderProgramCard()
   })
 }

 // function updateFormHandler(e) {
 //   e.preventDefault();
 //   const id = parseInt(e.target.dataset.id);
 //   const program = Program.findById(id);
 //   const title = e.target.querySelector('#input-title').value;
 //   const quote = e.target.querySelector('#input-quote').value;
 //   const image_url = e.target.querySelector('#input-url').value;
 //   const media_type = e.target.querySelector('#media_type').value
 //   const genre_id = parseInt(e.target.querySelector('#genres').value);
 //   patchProgram(program, title, quote, image_url, media_type, genre_id)
 // }
 //
 // function patchProgram(title, favorite_quote, image_url, media_type, genre_id) {
 //   program = Program.findById(id)
 //   const bodyJSON = {title, favorite_quote, image_url, media_type, genre_id}
 //   fetch(`http://localhost:3000/api/v1/programs/${program.id}`, {
 //     method: "PATCH",
 //     headers: {'Content-Type': 'application/json'},
 //     body: JSON.stringify(bodyJSON),
 //   })
 //     .then(res => res.json())
 //     .then(updatedProgram => {
 //       console.log(updatedProgram)
 //       // debugger
 //         // const program = Program.findById(updatedProgram.data.id);
 //         // program.update(updatedProgram.data.attributes);
 //         // document.querySelector('#program-container').innerHTML = '';
 //         // Program.all.forEach(program => document.querySelector('#program-container').innerHTML += program.renderProgramCard());
 //         // document.querySelector('#update-program').innerHTML = '';
 //    })
 //  }
