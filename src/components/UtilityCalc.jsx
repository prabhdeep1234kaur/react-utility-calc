import React, { useContext } from 'react'
import { Context } from '../context/context';
import {Link} from 'react-router-dom'
import Hydro from './Hydro';
import Internet from './Internet';
import Gas from './Gas';
import { Water } from './Water';

const UtilityCalc = () => {

    //context stuff
    const {hydroError,intError, gasError, year, month, percentage, tenantCount, handleUtilitySubmit, waterError, waterMonthError} = useContext(Context);
    
    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <div className="details">
                    <p><b>Year Selected : </b> {year} | <b>Month Selected : </b>{month}</p>     
                    <p><b>Tenant Percentage : </b>{percentage} % |  <b> No. of Tenants : </b>{tenantCount}</p> 
                </div>
                

                <div className="flex flex-wrap formbold--mx-3">
                    
                    <Hydro />
                    <Internet />
                    <Gas />
                </div>

                <Water />
                
                <div>
                    {
                    !waterMonthError && !waterError && !hydroError && !intError && !gasError
                    ?
                    <button className="formbold-btn" type="button" onClick={handleUtilitySubmit}>Next</button>
                    :
                    <span className='inputErr'> Please check the errors </span>
                    }
                </div>
                <div>
                    <div className="formbold-btn-bck"><Link to="/">Back</Link></div>
                </div>
            </div>
        </div>
    )
}

export default UtilityCalc