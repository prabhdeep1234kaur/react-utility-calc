import React, { useContext } from 'react'
import { Context } from '../context/context';

const Gas = () => {
     //context stuff
     const {handleChange,gas, gasError} = useContext(Context);
    return (
        
        <div className="w-full sm:w-half formbold-px-3">
            <div className="formbold-mb-5">
                <label htmlFor="gas" className="formbold-form-label"> Gas </label>
                <input
                onChange={handleChange}
                value={gas} 
                type="number"
                name="gas"
                min={0}
                className="formbold-form-input"
                pattern="[0-9]+"
                required
                />
                {gasError ? <span className="inputErr" >Gas is invalid !</span>: null }
            </div>
        </div>
    )
}

export default Gas