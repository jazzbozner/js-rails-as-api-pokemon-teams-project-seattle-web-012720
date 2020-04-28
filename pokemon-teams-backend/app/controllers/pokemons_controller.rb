class PokemonsController < ApplicationController

    def index
        pokemons = Pokemon.all
        render json: pokemons, include: [:trainer]
    end

    def show
        pokemon = Pokemon.find (params[:id])
        render json: pokemon, include: [:trainer]
    end

    def new
        pokemon = Pokemon.new
    end

    def create
        name = Faker::Name.first_name
        species = Faker::Games::Pokemon.name
        pokemon = Pokemon.create(nickname: name, species: species, trainer_id: trainer.id)
        render json: pokemon, only:[:nickname, :species, :trainer_id]
    end

    def destroy
        pokemon = Pokemon.find (params[:id])
        pokemon.destroy
    end

end
