import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import ReactModal from 'react-modal';
//import { Overlay,content } from 'react-bootstrap';
let checkData =true;
let originalSate =[];

//ReactModal.setAppElement('#root')
function CountryDetails()
{
    
    
    const[countrylist,GetCountriesList] = useState([])
    const[countrydetails,GetCountryInfo] = useState([])
    const[countryName,AddCountries] = useState("")
    const[name,SetName] = useState("")
    const[modalInfo,SetModalInfo] = useState("")
    const[modalIsOpen,setModalIsOpen] = useState(false)
    const jsondata=[
        {
              "name": "Germany",
              "topLevelDomain": [
                  ".de"
              ],
              "alpha2Code": "DE",
              "alpha3Code": "DEU",
              "callingCodes": [
                  "49"
              ],
              "capital": "Berlin",
              "altSpellings": [
                  "DE",
                  "Federal Republic of Germany",
                  "Bundesrepublik Deutschland"
              ],
              "region": "Europe",
              "subregion": "Western Europe",
              "population": 81770900,
              "latlng": [
                   51,
                   9
              ],
               "demonym": "German",
               "area": 357114,
               "gini":  28.3,
               "timezones": [
                   "UTC+01:00"
              ],
              "borders": [
                  "AUT",
                  "BEL",
                  "CZE",
                  "DNK",
                  "FRA",
                  "LUX",
                  "NLD",
                  "POL",
                  "CHE"
              ],
              "nativeName": "Deutschland",
              "numericCode": "276",
              "currencies": [
                  {
                      "code": "EUR",
                      "name": "Euro",
                      "symbol": "€"
                  }
              ],
              "languages": [
                  {
                      "iso639_1": "de",
                      "iso639_2": "deu",
                      "name": "German",
                      "nativeName": "Deutsch"
                  }
              ],
              "translations": {
                  "br": "Alemanha",
                  "de": "Deutschland",
                  "es": "Alemania",
                  "fa": "آلمان",
                  "fr": "Allemagne",
                  "hr": "Njemačka",
                  "it": "Germania",
                  "ja": "ドイツ",
                  "nl": "Duitsland",
                  "pt": "Alemanha"
              },
              "flag": "https://restcountries.eu/data/deu.svg",
              "regionalBlocs": [
                  {
                      "acronym": "EU",
                      "name": "European Union"
                  }
              ],
              "cioc": "GER"
          },
          {
            "name": "Afghanistan",
            "topLevelDomain": [
                ".af"
            ],
            "alpha2Code": "AF",
            "alpha3Code": "AFG",
            "callingCodes": [
                "93"
            ],
            "capital": "Kabul",
            "altSpellings": [
                "AF",
                "Afġānistān"
            ],
            "region": "Asia",
            "subregion": "Southern Asia",
            "population": 27657145,
            "latlng": [
                33,
                65
            ],
            "demonym": "Afghan",
            "area": 652230,
            "gini": 27.8,
            "timezones": [
                "UTC+04:30"
            ],
            "borders": [
                "IRN",
                "PAK",
                "TKM",
                "UZB",
                "TJK",
                "CHN"
            ],
            "nativeName": "افغانستان",
            "numericCode": "004",
            "currencies": [
                {
                    "code": "AFN",
                    "name": "Afghan afghani",
                    "symbol": "؋"
                }
            ],
            "languages": [
                {
                    "iso639_1": "ps",
                    "iso639_2": "pus",
                    "name": "Pashto",
                    "nativeName": "پښتو"
                },
                {
                    "iso639_1": "uz",
                    "iso639_2": "uzb",
                    "name": "Uzbek",
                    "nativeName": "Oʻzbek"
                },
                {
                    "iso639_1": "tk",
                    "iso639_2": "tuk",
                    "name": "Turkmen",
                    "nativeName": "Türkmen"
                }
            ],
            "translations": {
                "br": "Afeganistão",
                "de": "Afghanistan",
                "es": "Afganistán",
                "fa": "افغانستان",
                "fr": "Afghanistan",
                "hr": "Afganistan",
                "it": "Afghanistan",
                "ja": "アフガニスタン",
                "nl": "Afghanistan",
                "pt": "Afeganistão"
            },
            "flag": "https://restcountries.eu/data/afg.svg",
            "regionalBlocs": [
                {
                    "acronym": "SAARC",
                    "name": "South Asian Association for Regional Cooperation"
                }
            ],
            "cioc": "AFG"
        }
         
      ]
    
    
    useEffect(() =>
    {
     
        
           
           if (countrylist.length==0 && checkData)
            {
               /// we have to call Api for Demo Pupose we Used Json Data
                originalSate=jsondata;
               GetCountriesList(jsondata)
            }
           
    });
    useEffect(() =>
    {
       
        if(countryName!="")
        {

          axios.get("https://restcountries.eu/rest/v2/name/" +countryName)
          .then(res => 
            GetCountryInfo(res.data)
            )
          .catch(err => {
            console.log(err) })
          }
    });

    const handleClick = function(countryName)
    {
        debugger;
        //toggle();
        var langArr=[]; var currencyArr=[];
        
         const countryInfo = countrylist.filter(function (el) {
           debugger;
            return  (el.name.toLowerCase().indexOf(countryName.toLowerCase()) !== -1 )
           
        });
        debugger;
        // countryInfo[0].languages.filter(function (el) {
        //     //
        //  return langArr.push(el.name);
        // });
        // countryInfo[0].currencies.filter(function (el) {
        //     //
        //  return currencyArr.push(el.symbol +el.name);
        // });
        
        SetModalInfo( "Captial Of " + countryName  +" is " + countryInfo[0].capital + " , Lanaguges " + countryInfo[0].languages[0].name
        + " , Currency  is : " +countryInfo[0].currencies[0].symbol + countryInfo[0].currencies[0].name
        );
        
        setModalIsOpen(true);

      };

      const handleFilter = function(e)
      {
         
          GetCountriesList(originalSate)
          filterCountries(originalSate,e);
          
     };

     function filterCountries(countrylist, val) {

       
        const countries = countrylist.filter(function (el) {
           
            return  (el.name.toLowerCase().indexOf(val.toLowerCase()) !== -1 )
            || (el.callingCodes.indexOf(val) !== -1)
        });
       
            checkData=false;
            GetCountriesList(countries);
       
      }

      const SortbyAscDesc = function(sortbyDirection)
      {
        PopulationSort1();

      }

      function PopulationSort1() {
        
        
        const countries =countrylist.sort((a, b) => {

          if (a.population > b.population)
          return -1;
          if (a.population < b.population)
          return 1;
         return 0;

          
      });
      GetCountriesList(countries)
     
       
   }

      function PopulationSort(countrylist) {
        
        var populations=[];
         countrylist.filter(function (el) {
            //
         return populations.push(el.population);
     });
       const countries = populations.sort((a, b) => {
          if (a > b)
              return -1;
          if (a < b)
              return 1;
          return 0;
      });
       
   }

    return(
      
<div className="container">
        <div>
           
        <div>
            <label>Search by Country Name or Code  </label>
        <input placeholder=" Enter Value" id="txt_Name" type="text" onChange={e => handleFilter(e.target.value)} ></input>
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
    
      <td ><a href="#" className="button-default" onClick={() => handleClick(countries.name)} >{countries.name}</a></td>
    
    
      <td >{countries.capital}
      </td>
   
    
      <td >{countries.population}</td>
    </tr>
               )}
                </tbody>
                </table>
                </div></div>
           
            <div >
           
            <ReactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
             style ={
{
                Overlay:{
                    backgroundColor :'grey'
                },
                content:{
                    color :'orange'
                }
}
             }>
                <h2>
                  {modalInfo}
                </h2>
                
                <div>
                <button  onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </ReactModal>
          </div> 

           
        </div>
        </div>
    )
}


export default CountryDetails;
