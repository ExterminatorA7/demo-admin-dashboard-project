import React from 'react'

const Login = () => {

    return (
        <form>
            <h3>Login</h3>
            <div className="mb-3">
                <label>UserName</label>
                <input
                    required
                    type="email"
                    className="form-control"
                    placeholder="Enter user name"
                />
            </div>
            <div className="mb-3">
                <label>Passwords</label>
                <input
                    required
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                />
            </div>
            <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input
                        required
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                        Remember me
                    </label>
                </div>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </div>
            <p className="forgot-password text-right">
                Don't have an account ? <a href="/sign-up">Sign-up</a>
            </p>
        </form>
    )

}

export default Login;