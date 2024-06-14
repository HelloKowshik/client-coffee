import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, coffeeName, quantity, taste, chef, price, details, supplier, category, photoURL} = coffee;

    const handleDeleteCoffee = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://backend-coffee-7bcd1glbk-kowshikur-rahmans-projects.vercel.app/coffee/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire({
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remainingCoffees = coffees.filter(cof => cof._id !== id);
                        setCoffees(remainingCoffees);
                    }
                })
                .catch(err => console.log(err));
            }
        });
};

    return (
        <div className='grid grid-cols-3 gap-3 mt-3 border p-2'>
            <div><img src={photoURL} /></div>
            <div>
                <h2 className="card-title">Name: {coffeeName}</h2>
                <p>Taste: {taste}</p>
                <p>Price: {price} Taka</p>
            </div>
            <div>
                <div className="join join-vertical space-y-4">
                    <button className="btn join-item">
                        <Link to={`/show-coffee/${_id}`}>
                            View Details
                        </Link>
                    </button>
                    <button className="btn join-item">
                        <Link to={`/show/${_id}`}>
                            Edit
                        </Link>
                    </button>
                    <button className="btn join-item bg-red-500" onClick={() => handleDeleteCoffee(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};
export default CoffeeCard;
