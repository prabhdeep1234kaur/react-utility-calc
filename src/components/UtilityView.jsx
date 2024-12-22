import React, { useContext } from 'react'
import { Context } from '../context/context';
import {Link} from 'react-router-dom'


const UtilityView = () => {
    const { 
        month,
        tenantCount,
        totalHydro,
        hydroPerPerson,
        totalInternet,
        internetPerPerson,
        totalGas,
        gasPerPerson,
        totalWater,
        waterPerPerson,
        totalUitlity, 
        totalUitlityPerPerson, 
        
        } = useContext(Context);

    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <div className="details">
                    <div className="hydro">
                        <p className="hydroPerMonth">
                            <b>Hydro Per Month : </b>${totalHydro}
                        </p>
                        <p className="hydroPerPerson">
                            <b>Hydro Per Person : </b>${hydroPerPerson}
                        </p>
                    </div>
                    <span className='sepLine'></span>
                    <div className="gas">
                        <p className="gasPerMonth"><b>Gas Per Month : </b>${totalGas}</p>
                        <p className="gasPerPerson"><b>Gas Per Person : </b>${gasPerPerson}</p>
                    </div>
                    <div className="internet">
                        <p className="internetPerMonth">
                            <b>Internet Per Month : </b>${totalInternet}
                        </p>
                        <p className="internetPerPerson">
                            <b>Internet Per Person : </b>${internetPerPerson}
                        </p>
                    </div>
                    <div className="water">
                        <p className="waterPerMonth">
                            <b>Water Per Month : </b>${totalWater}
                        </p>
                        <p className="waterPerPerson">
                            <b>Water Per Person : </b>${waterPerPerson}
                        </p>
                    </div>
                    <div className="total"><p><b>Total Utilites for {month} for {tenantCount} people : </b>${totalUitlity}</p></div>
                    <div className="perperson"><p><b>Total Utilities Per Person : </b>${totalUitlityPerPerson}</p></div>
                    <div>
                        <div className="formbold-btn"><Link to="/">Home</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UtilityView