import React, { useContext } from 'react'
import { Context } from '../context/context';

export const Water = () => {
     //context stuff
     const {handleChange, lumpSum, totalWaterBill, waterBillMonth,handleLumpSum, waterError, waterMonthError} = useContext(Context);
    return (
    <div className="formbold-mb-5 formbold-pt-3">
        <label className="formbold-form-label formbold-form-label-2">
        Water Bill
        </label>
        {/**
         * Lump sum? 
         */}
         <div className="formbold-mb-5">
            <label htmlFor="year" className="formbold-form-label"> Lump Sum </label>
            <select className="formbold-form-input" onChange={handleLumpSum}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
        </div>
        {lumpSum  
         
        ? (
            <div className="formbold-mb-5">
                <label htmlFor="waterbill" className="formbold-form-label"> Water Bill </label>
                <input
                onChange={handleChange}
                value={totalWaterBill} 
                type="number"
                name="waterbill"
                className="formbold-form-input"
                pattern="[0-9]+"
                required
                />
                {waterError ? <span className="inputErr" >Water is invalid !</span>: null }
            </div>
        ) : (
            <>
            <div className="formbold-mb-5">
                <label htmlFor="total-water-bill" className="formbold-form-label"> Total water Bill </label>
                <input
                onChange={handleChange}
                value={totalWaterBill} 
                type="number"
                name="total-water-bill"
                min={0}
                className="formbold-form-input"
                pattern="[0-9]+"
                required
                />
                {waterError ? <span className="inputErr" >Water is invalid !</span>: null }
            </div>
            <div className="formbold-mb-5">
                <label htmlFor="water-bill-months" className="formbold-form-label"> Bill after how many months?</label>
                <input
                onChange={handleChange}
                value={waterBillMonth} 
                type="number"
                name="water-bill-months"
                min={1}
                max={12}
                className="formbold-form-input"
                pattern="[0-9]+"
                />
                {waterMonthError ? <span className="inputErr" >Month is invalid !</span>: null }
            </div>
            </>
        )
        }
    </div>
    )
}
