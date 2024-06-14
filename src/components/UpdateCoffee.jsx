import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, coffeeName, quantity, taste, chef, price, details, supplier, category, photoURL} = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const coffeeName = form.name.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const details = form.details.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const photoURL = form.photoURL.value;
        const coffeeObject = {coffeeName, quantity, taste, chef, price, details, supplier, category, photoURL};

        fetch(`https://backend-coffee-7bcd1glbk-kowshikur-rahmans-projects.vercel.app/update-coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeObject)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({icon:'success', text:"Coffee Updated Successfully!", confirmButtonText:'Close'});
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h1 className='text-3xl font-extrabold text-center'>Update Coffee: {coffeeName}</h1>
            <form onSubmit={handleUpdateCoffee}>
                <div className='md:flex mb-4'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Coffee Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={coffeeName} className="input input-bordered w-full" />
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text'>Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' defaultValue={quantity} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='md:flex mb-4'>    
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Taste</span>
                        </label>
                        <input type="text" name='taste' defaultValue={taste} className="input input-bordered w-full" />
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text'>Details</span>
                        </label>
                        <input type="text" name='details' defaultValue={details} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='md:flex mb-4'>    
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Supplier</span>
                        </label>
                        <input type="text" name='supplier' defaultValue={supplier} className="input input-bordered w-full" />
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text'>Category</span>
                        </label>
                        <input type="text" name='category' defaultValue={category} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='md:flex mb-4'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Chef Name</span>
                        </label>
                        <input type="text" name='chef' defaultValue={chef} className="input input-bordered w-full" />
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text'>Price</span>
                        </label>
                        <input type="text" defaultValue={price} name='price' className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='mb-4'>    
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Photo</span>
                        </label>
                        <input type="text" defaultValue={photoURL} name='photoURL' className="input input-bordered w-full" />
                    </div>
                </div>
                <input type='submit' className="btn btn-block bg-error" value='Update Coffee' />
            </form>
        </div>
    );
};

export default UpdateCoffee;
