import React from 'react'

const Login = () => {
    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                
                <div className="pageHeading"><h2>Login</h2></div>
                
                {/** email Address */}
                <div className="formbold-mb-5">
                    <label htmlFor="emailAddress" className="formbold-form-label"> Email </label>
                    <input
                    type="email"
                    name="emailAddress"
                    className="formbold-form-input"
                    required
                    />
                </div>
    
                {/** Password */}
                <div className="formbold-mb-5">
                    <label htmlFor="pwd" className="formbold-form-label"> Password </label>
                    <input
                    type="password"
                    name="pwd"
                    className="formbold-form-input"
                    required
                    />
                </div>

                {/*** register button */}
                <button className="formbold-btn" type="button">Login</button>
            </div>
        </div>
      )
}

export default Login