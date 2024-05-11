import { useGetPokemonByNameQuery } from './services/pokemon'

export default function Pokemon({ name, pollingInterval }: { name: string, pollingInterval: number }) {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery(name)
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <section className='transition-all shadow-lg hover:shadow-xl px-4 flex flex-row gap-4 border border-spacing-2 border-slate-300 cursor-pointer bg-slate-200/70 hover:border-yellow-600 rounded-lg m-4 text-xl justify-center items-center'>
          <h3 className='capitalize'>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} className='h-32' />
        </section>
      ) : null}
    </div>
  )
}