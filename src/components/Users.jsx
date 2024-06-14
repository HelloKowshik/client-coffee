import { useLoaderData, Link } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDeleteUser = id => {
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
                fetch(`https://backend-coffee-7bcd1glbk-kowshikur-rahmans-projects.vercel.app/users/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire({
                            text: "User has been deleted.",
                            icon: "success"
                        });
                        const remainingUsers = users.filter(usr => usr._id !== id);
                        setUsers(remainingUsers);
                    }
                })
                .catch(err => console.log(err));
            }
        });
}

    return (
        <div>
            <h2>Users List:{loadedUsers.length}</h2>
            <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>User Email</th>
                        <th>User Creation Time</th>
                        <th>Last Logged In</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => {
                            return <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user?.email}</td>
                                <td>{user?.createdAt}</td>
                                <td>{user?.lastLoggedIn}</td>
                                <td><button className='btn btn-error' onClick={() => handleDeleteUser(user._id)}>X</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        <Link to='/signup'>Back To SignUp</Link>
    </div>
);
};
export default Users;
