import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import ReactModal from 'react-modal';
let checkData =true;
let originalState =[];

ReactModal.setAppElement('#root')
function CountryDetails()
{
    
    
    const[countrylist,GetCountriesList] = useState([])
    const[countrydetails,GetCountryInfo] = useState([])
    const[countryName,AddCountries] = useState("")
   
    const[capitalName,SetCapital] = useState("")
    const[language,SeLanguage] = useState("")
    const[currency,SetCurrency] = useState("")
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
        },
        {
            "name": "Test pop",
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
            "population": 6000,
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
         
      ]
    
    
    useEffect(() =>
    {
     
           debugger;
           
           if (countrylist.length==0 && checkData)
            {
               /// API No longer working so Used Json Data
                originalState=jsondata;
               GetCountriesList(jsondata);
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
       
        
         const countryInfo = countrylist.filter(function (el) {
        
            return  (el.name.toLowerCase().indexOf(countryName.toLowerCase()) !== -1 )
           
        });
     
        SeLanguage(countryInfo[0].languages[0].name);
        SetCapital(countryInfo[0].capital);
        SetCurrency(countryInfo[0].currencies[0].symbol + countryInfo[0].currencies[0].name);
       
        setModalIsOpen(true);

      };

      const handleFilter = function(e)
      {
         
          GetCountriesList(originalState)
          filterCountries(originalState,e);
          
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
        PopulationSort(sortbyDirection);

      }

      function PopulationSort(sortbyDirection) {
    
        const countries =originalState.slice().sort((a, b) => {
        if (sortbyDirection=="ASC")
        return a.population - b.population;
        else if (sortbyDirection=="DESC")
        return b.population - a.population;
      });
    
      GetCountriesList(countries)
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
                        <th scope="col">Population <button  onClick={() => SortbyAscDesc("ASC")} >Sort ASC</button><button  onClick={() => SortbyAscDesc("DESC")} >Sort Desc</button></th> 
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
                 
                    
                    <table>
                    <tr><td>
                        Capital Name : 
                    </td><td>{capitalName}</td>
                    </tr>
                    <tr><td>
                        Language : 
                    </td><td>{language}</td>
                    </tr>
                    <tr><td>
                        Currency  : 
                    </td><td>{currency}</td>
                    </tr>
                     </table>
                     <br/><br/>
                
                
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
