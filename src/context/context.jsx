import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState((new Date().getFullYear()));
  const [percentage, setPercentage] = useState(50);
  const [tenantCount, setTenantCount] = useState(1);
  //hydro
  const [hydro, setHydro] = useState(0); 
  const [totalHydro, setTotalHydro] = useState(0);
  const [hydroPerPerson, setHydroPerPerson] = useState(0);
  //internet
  const [internet, setInternet] = useState(90);
  const [totalInternet, setTotalInternet] = useState(0);
  const [internetPerPerson, setInternetPerPerson] = useState(0);
  //gas
  const [gas, setGas] = useState(0); 
  const [totalGas, setTotalGas] = useState(0);
  const [gasPerPerson, setGasPerPerson] = useState(0);
  //water
  const [lumpSum, setLumpSum] = useState(true);
  const [totalWaterBill, setTotalWaterBill] = useState(100); //no lump sump
  const [waterBillMonth, setWaterBillMonth] = useState(1); //months
  const [waterPerPerson, setWaterPerPerson] = useState(0);
  const [totalWater, setTotalWater] = useState(0); //total for month

  //total utilities
  const [totalUitlity, setTotalUtility] = useState(0);
  const [totalUitlityPerPerson, setTotalUtilityPerPerson] = useState(0);

  //validations
  const [hydroError, setHydroError] = useState(false);
  const [gasError, setGasError] = useState(false);
  const [intError, setIntError] = useState(false);
  const [waterError, setWaterError] = useState(false);
  const [waterMonthError, setWaterMonthError] = useState(false);

  //handle info
  function handleSubmit(e) {
      navigate('/utility-cal/');
  }

  //handleChange for validations
  function handleChange(e){
    const field = e.target.name;
    const valInput = e.target.value;
    if(field === "hydro"){
      if(valInput === '' || valInput < 0 ){
        setHydroError(true);
      }else{
        setHydroError(false);
      }
      setHydro(e.target.value);
    }

    if(field === "internet"){
      if(valInput === '' || valInput < 0 ){
        setIntError(true);
      }else{
        setIntError(false);
      }
      setInternet(e.target.value);
    }

    if(field === "gas"){
      if(valInput === '' || valInput < 0 ){
        setGasError(true);
      }else{
        setGasError(false);
      }
      setGas(e.target.value);
    }

    if(field === "total-water-bill" || field === "waterbill"){
      if(valInput === '' || valInput < 0 ){
        setWaterError(true);
      }else{
        setWaterError(false);
      }
      setTotalWaterBill(e.target.value);
    }

    if(field === "water-bill-months"){
      if(valInput === '' || valInput < 0 ){
        setWaterMonthError(true);
      }else{
        setWaterMonthError(false);
      }
      setWaterBillMonth(e.target.value);
    }
   
  }
  //handling the lump sum toggle 
  function handleLumpSum(e){
    const selectedValue = e.target.value === 'true'; 
    setLumpSum(selectedValue);
    setWaterError(false);
    setWaterMonthError(false);
    setTotalWaterBill(100);
    setWaterBillMonth(1);
  }

  //handle total utilities here
  function handleUtilitySubmit(e){
    //calculate hydro
    const hydroPerMonth = hydro*(percentage/100); //total  hydro for month
    const hydroPerPerson = hydroPerMonth/tenantCount;
    setTotalHydro(hydroPerMonth);
    setHydroPerPerson(hydroPerPerson);

    //calculate Gas
    const gasPerMonth = gas*(percentage/100); //total  gas for month
    const gasPerPerson = gasPerMonth/tenantCount;
    setGasPerPerson(gasPerMonth);
    setTotalGas(gasPerPerson);

    //Calculate internet
    const internetPerMonth = internet*(percentage/100); //total  hydro for month
    const internetPerPerson = internetPerMonth/tenantCount;
    setTotalInternet(internetPerMonth);
    setInternetPerPerson(internetPerPerson);


    //calculate water 
    if(lumpSum){
      const ww = 100;
      const wwp = ww / tenantCount;
      setWaterBillMonth(0);
      setWaterPerPerson(wwp);
      setTotalWater(100);
    }else{
      //getTotalBill entered by user
      const totalInputWater = totalWaterBill - (waterBillMonth*100); 
      const ww = totalInputWater*(percentage/100);
      const wwp = ww / tenantCount;
      setWaterBillMonth(waterBillMonth);
      setTotalWater(ww);
      setWaterPerPerson(wwp);
    }
    
    const totalUtilityCal = (totalHydro + totalGas + totalInternet +  totalWater) + 100;
    const totalUitlityPerPersonCal = (hydroPerPerson + gasPerPerson + internetPerPerson + waterPerPerson) + (100/tenantCount);

    setTotalUtility(totalUtilityCal);
    setTotalUtilityPerPerson(totalUitlityPerPersonCal);
    navigate('/utility-view/');
  }


  const contextValue = {
    month, 
    setMonth,
    year,
    setYear,
    percentage,
    setPercentage,
    tenantCount,
    setTenantCount,
    //hydro
    hydro, 
    totalHydro, //total hydro for month : tenant
    hydroPerPerson, //per person
    //internet
    internet, 
    totalInternet,  //total internet bill for month : tenant
    internetPerPerson, //per person
    //gas
    gas, 
    totalGas, //total gas for month : tenant
    gasPerPerson, //per person
    //lump sum water bill
    lumpSum, 
    setLumpSum,
    //not lump sum : 100 ? total from user
    totalWaterBill, 
    waterBillMonth, 
    //calculated total water bill
    totalWater, // water bill for month : tenant (100 for LS, calculated for other)
    waterPerPerson, //100 / tenant counr | calculated / tenant count
    //totals
    totalUitlity,
    totalUitlityPerPerson,
    //handles
    handleSubmit,
    handleLumpSum,
    handleUtilitySubmit,
    //validation
    handleChange,
    hydroError,
    intError,
    gasError,
    waterError,
    waterMonthError,
  }

  // Add other state variables and functions as needed

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };