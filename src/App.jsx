import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import CoffeeCard from './components/CoffeeCard';

const App = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className='m-20'>
      <h2 className='text-5xl text-center my-20 font-bold text-purple-600'>Coffee Home Page</h2>
      <hr/>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees && coffees?.map(coffee => <CoffeeCard 
            key={coffee._id} 
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}/>)
        }
      </div>
    </div>
  )
}

export default App
