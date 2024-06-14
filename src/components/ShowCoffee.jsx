import { useLoaderData, Link } from 'react-router-dom';

const ShowCoffee = () => {
    const coffee = useLoaderData();
    const {coffeeName, quantity, taste, chef, price, details, supplier, category, photoURL} = coffee;
    return (
        <div>
            <h2 className='text-5xl text-center my-10 font-bold text-purple-600'>Coffee Store</h2>
            <hr/>
            <h2 className='text-3xl text-center my-5 font-bold'>Coffee Details</h2>
            <div className='mt-5 flex justify-center'>
                <div className='mr-10'>
                    <h2 className='text-4xl font-bold mb-2'>{coffeeName}</h2>
                    <p className='text-2xl mb-2'>Quantity: {quantity}</p>
                    <p className='text-2xl mb-2'>Taste: {taste}</p>
                    <p className='text-2xl mb-2'>Chef: {chef}</p>
                    <p className='text-2xl mb-2'>Price: <b>{price} Taka</b></p>
                    <p className='text-2xl mb-2'>Details: {details}</p>
                    <p className='text-2xl mb-2'>Supplier: {supplier}</p>   
                    <Link to='/' className="btn btn-accent">Go Back To Home</Link> 
                </div>
                <div className='w-80 rounded'>
                    <img src={photoURL} />
                </div>
            </div>
        </div>
    );
}
export default ShowCoffee;
