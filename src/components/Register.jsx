import React from 'react'

const Register = () => {
  return (
    <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
            
            <div className="pageHeading"><h2>Register</h2></div>
            {/** firstname */}
            <div className="formbold-mb-5">
                
                <label htmlFor="firstname" className="formbold-form-label"> First Name </label>
                <input
                type="text"
                name="firstname"
                className="formbold-form-input"
                required
                />
            </div>

            {/**last name */}
            <div className="formbold-mb-5">
                <label htmlFor="lastname" className="formbold-form-label"> Last Name </label>
                <input
                type="text"
                name="lastname"
                className="formbold-form-input"
                required
                />
            </div>

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
            <div className="formbold-mb-5">
                <label htmlFor="confirmPwd" className="formbold-form-label"> Confirm Password </label>
                <input
                type="password"
                name="confirmPwd"
                className="formbold-form-input"
                required
                />
            </div>
            {/** Registering as Owner */}

            <div className="formbold-mb-5">
                <label htmlFor="user_type" className="formbold-form-label"> Register As Land Owner?  </label>
                <select className="formbold-form-input">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </div>

            {/** if yes continue, if not: ask them to enter owner's email address or coupon */}

            <div className="formbold-mb-5">
                <label htmlFor="owner_coupon" className="formbold-form-label"> Ownder Code </label>
                <input
                type="text"
                name="owner_coupon"
                className="formbold-form-input"
                required
                />
            </div>
            {/*** register button */}
            <button className="formbold-btn" type="button">Register</button>
        </div>
    </div>
  )
}

export default Register