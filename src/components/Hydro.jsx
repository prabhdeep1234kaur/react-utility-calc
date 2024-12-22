import React, { useContext, useEffect } from 'react'
import { Context } from '../context/context';

const Hydro = () => {
    //context stuff
    const { hydro,hydroError,handleChange} = useContext(Context);
    
    return (
        <div className="w-full sm:w-half formbold-px-3">
            <div className="formbold-mb-5 w-full">
                <label htmlFor="hydro" className="formbold-form-label">Hydro </label>
                <input
                //onChange={(e)=>setHydro(e.target.value)}
                onChange={handleChange}
                value={hydro} 
                type="number"
                name="hydro"
                min={0}
                className="formbold-form-input"
                pattern="[0-9]+"
                required
                />
                {hydroError ? <span className="inputErr" >Hydro is invalid !</span>: null }
                
            </div>
        </div>
    )
}

export default Hydro