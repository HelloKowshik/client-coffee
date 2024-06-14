import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Login = () => {
    const { userLogIn } = useContext(AuthContext);
    const [loggedMail, setLoggedMail] = useState(null);

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogIn(email, password)
        .then(result => {
            if(result.user){
                Swal.fire({
                    text: "User Logged In!!!",
                    icon: "success"
                });
                const user = {email, lastLoggedIn: result.user?.metadata?.lastSignInTime};
                setLoggedMail(result.user.email);
                console.log(result.user);
                fetch('https://backend-coffee-7bcd1glbk-kowshikur-rahmans-projects.vercel.app/user',{
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err));
                form.reset();
            }
        })
        .catch(err => console.log(err.message));
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Log In</h1>
                    {loggedMail && <p>{loggedMail}</p>}
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <Link to='/users'>Go To Users</Link>
                        <Link to='/signup'>Go To Sign Up</Link>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
);
};
export default Login;
