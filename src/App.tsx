import './App.css'
import { useState } from 'react'
import Pokemon from './Pokemon'

const pokemon = ['pikachu', 'ditto', 'bulbasaur']

export default function App() {
  const [pollingInterval, setPollingInterval] = useState(0)

  return (
    <div className="App">
      <select
        onChange={(change) => setPollingInterval(Number(change.target.value))}
      >
        <option value={0}>Off</option>
        <option value={1000}>1s</option>
        <option value={5000}>5s</option>
      </select>
      <div className='max-w-fit flex justify-center mt-6'>
        {pokemon.map((poke, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Pokemon key={index} name={poke} pollingInterval={pollingInterval} />
        ))}
      </div>
    </div>
  )
}