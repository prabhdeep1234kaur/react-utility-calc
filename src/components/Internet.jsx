import React, { useContext } from 'react'
import { Context } from '../context/context';

const Internet = () => {
     //context stuff
    const {handleChange, internet, intError} = useContext(Context);
    return (
    <div className="w-full sm:w-half formbold-px-3">
        <div className="formbold-mb-5">
            <label htmlFor="internet" className="formbold-form-label"> Internet - Bell </label>
            <input
            onChange={handleChange}
            value={internet} 
            type="number"
            name="internet"
            className="formbold-form-input"
            pattern="[0-9]+"
            required
            />
            {intError ? <span className="inputErr" >Internet is invalid !</span>: null }
        </div>
    </div>
    )
}

export default Internet