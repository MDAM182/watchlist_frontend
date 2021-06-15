class Program {
  constructor(program, programAttributes) {
    this.id = program.id
    this.title = programAttributes.title
    this.favorite_quote = programAttributes.favorite_quote
    this.media_type = programAttributes.media_type
    this.image_url = programAttributes.image_url
    this.genre = programAttributes.genre
    Program.all.push(this)
  }

  render(){

    return `

        <div data-id=${this.id}>
          <img src=${this.image_url} height="350" width="250">
          <h3>${this.title}</h3>
          <p>"${this.favorite_quote}"</p>
          <p>${this.media_type}</p>
          <p>${this.genre.name}</p>
          <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`
    }
}

Program.all = []
