import React ,{useState,useEffect} from 'react'
import axios from 'axios';
function CountryDetails()
{
    
    const[countrylist,GetCountriesList] = useState([])
    const[countrydetails,GetCountryInfo] = useState([])
    const[countryName,AddCountries] = useState("")
    const[name,SetName] = useState("")
    const[code,SetCode] = useState("")
     
    useEffect(() =>
    {
          axios.get("https://restcountries.eu/rest/v2/all")
          .then(res => 
            //console.log(  res.data )
           GetCountriesList(res.data)
            )
          .catch(err => {console.log(err) })
    });
    useEffect(() =>
    {
       
        if(countryName!="")
        {

          axios.get("https://restcountries.eu/rest/v2/name/" +countryName)
          .then(res => 
            //console.log(  res.data )
            GetCountryInfo(res.data)
            )
          .catch(err => {
            console.log(err) })
          }
    });

    const handleClick = function(countryName)
    {
         AddCountries(countryName);

      };

      const handleFilter = function()
      {
          debugger;

        //   const countries = countrylist.filter(function (e) {
        //     return e.name == name.toUpperCase;
        // });
        debugger;
           //console.log(countrylist)
          filterCountries(countrylist,name.toUpperCase);
     };

     function filterCountries(countrylist, query) {
           const countries = countrylist.filter(function (el) {
               //debugger;
            return  el.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 || el.alpha2Code.toLowerCase().indexOf(code.toLowerCase()) !== -1
        });
        debugger;
          
      }

      const SortbyAscDesc = function(sortbyDirection)
      {
        //debugger;
     // const countries = countrylist.filter(function (el) {
      //   debugger;
      //    countrylist.sort((a, b) => {
      //    // debugger;
      //     if (a.population > b.population)
      //     return a.population-b.population;
      //     if (a.population < b.population)
      //         return b.population-a.population;
      //    // return 0;

      //     debugger;
      // });
      PopulationSort1();

      }

      function PopulationSort1() {
        
        debugger;
        const countries =countrylist.sort((a, b) => {
         // debugger;
          if (a.population > b.population)
          return -1;
          if (a.population < b.population)
          return 1;
         return 0;

          debugger;
      });
      GetCountriesList(countries)
     debugger;
       
   }

      function PopulationSort(countrylist) {
        debugger;
        var populations=[];
         countrylist.filter(function (el) {
            //debugger;
         return populations.push(el.population);
     });
       const countries = populations.sort((a, b) => {
          if (a > b)
              return -1;
          if (a < b)
              return 1;
          return 0;
      });
     debugger;
       
   }

     

    return(
      
<div className="container">
        <div>
             
        <div>
       <input placeholder=" Country Name" id="txt_Name" type="text" onChange={e => SetName(e.target.value)} ></input>
            <input  placeholder="Country Code " type="text_Code" onChange={e => SetCode(e.target.value)}></input>
            <button  onClick={() => handleFilter()} >Filter</button>
        </div>
            
               
              
                <div className="card">
  <div className="card-header">
   
  </div>
  <div className="card-body">
                <table className="table table-striped ">
                    <thead>
                    <tr>
                      
                        <th  className="" scope="col">Country Name</th> 
                        <th scope="col">Capital
                        
                        </th> 
                        <th scope="col"><button  onClick={() => SortbyAscDesc("Desc")} >Sort Population</button>Population</th> 
                </tr></thead>
                <tbody>
               {
                 
                countrylist.map((countries,idx) =>
                <tr>
    
      <td ><a href="#" onClick={() => handleClick(countries.name)} >{countries.name}</a></td>
    
    
      <td >{countries.capital}
      </td>
   
    
      <td >{countries.population}</td>
    </tr>
               )}
                </tbody>
                </table>
                </div></div>
            
        </div>
        </div>
    )
}


export default CountryDetails;