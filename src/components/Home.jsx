import React, { useContext } from 'react'
import { Context } from '../context/context';

const Home = () => {

    //years
    const dropDownYear = (new Date()).getFullYear();
    const years = Array.from(new Array(20),( val, index) => index + dropDownYear);

    //months
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    //tenant-percentage
    const pert = Array.from({ length: 100 }, (_, i) => i + 1);

    //context stuff
    const { year, setYear, month, setMonth, percentage, setPercentage, tenantCount, setTenantCount, handleSubmit, } = useContext(Context);

    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <form>
                <div className="formbold-mb-5">
                    <label htmlFor="year" className="formbold-form-label"> Year </label>
                    <select value={year} onChange={(e)=>setYear(e.target.value)}className="formbold-form-input">
                        {
                            years.map((yearVal, index) => {
                                return <option 
                                key={`year${index}`} 
                                value={yearVal}>{yearVal}</option>
                            })
                        }
                    </select>
                </div>
                <div className="formbold-mb-5">
                    <label htmlFor="month" className="formbold-form-label"> Month </label>
                    <select value={month} onChange={(e)=>setMonth(e.target.value)}className="formbold-form-input">
                    { months.map((monthVal, index)=>{
                       return <option key={index} value={index}>{monthVal}</option>
                    })}    
                    </select>
                </div>
                <div className="formbold-mb-5">
                    <label htmlFor="percentage" className="formbold-form-label"> Tenant Percentage</label>
                    <select value={percentage} 
                    onChange={(e)=>setPercentage(e.target.value)}
                    className="formbold-form-input">
                    { pert.map((perc, index)=>{
                       return <option key={index} value={perc}>{perc}</option>
                    })}    
                    </select>
                </div>
                <div className="formbold-mb-5">
                        <label htmlFor="tenant_count" className="formbold-form-label"> No. of tenants </label>
                        <input
                        type="number"
                        name="tenant_count"
                        className="formbold-form-input"
                        value={tenantCount}
                        onChange={(e)=>setTenantCount(e.target.value)}
                        min={1}
                        />
                    </div>
                <div>
                    <button className="formbold-btn" type="button" onClick={handleSubmit}>Next</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Home