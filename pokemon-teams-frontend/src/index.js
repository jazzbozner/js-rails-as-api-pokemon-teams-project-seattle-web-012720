const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const main = document.querySelector('main')

document.addEventListener('DOMContentLoaded', () => {
    getTrainers()
})

// fetch all trainers
function getTrainers() {
    fetch(TRAINERS_URL) 
    .then(resp => resp.json())
    .then(trainers => {
        trainers.forEach(trainer => loadTrainerCard(trainer))
    })
}

// fetch one trainer
function getTrainer(id) {
    fetch(TRAINERS_URL)
}

// build one trainer card
function loadTrainerCard(trainer){
    let div = document.createElement('div')
    let p = document.createElement('p')
    let btn = document.createElement('button')
    let ul = document.createElement('ul')

    div.className = 'card'
    div.id = trainer.id
    p.innerText = trainer.name
    btn.id = trainer.id
    btn.innerText = 'Add Pokemon'

    div.appendChild(p)    
    div.appendChild(btn)
    div.appendChild(ul)
    main.appendChild(div)

    // event listner add pokemon
    btn.addEventListener('click', postPokemon)

    // adds pokemon to list
    trainer.pokemons.forEach(pokemon => {
        let li = document.createElement('li')
        let deleteBtn = document.createElement('button')

        li.innerText = `${pokemon.nickname} (${pokemon.species})`
        deleteBtn.id = pokemon.id
        deleteBtn.classList = 'release'
        deleteBtn.innerText = "Realse"

        // event listner remove pokemon
        deleteBtn.addEventListener('click', deletePokemon)

        li.appendChild(deleteBtn)
        ul.appendChild(li)
    })
}

// handlers

function postPokemon(){
    console.log(event.target.id)
    fetch(POKEMONS_URL, {
        method: "POST",
        header: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({trainer_id : event.target.id})
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
}

function deletePokemon() {
    fetch()
    console.log(event.target)
    removePokemon(pokemon.id)
    li.remove()
}
