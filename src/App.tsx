import { Input } from './components/Input';
import React from 'react';
import { Timer } from './components/Timer';
import { JsxElement } from 'typescript';


class CityPair {
  constructor(private f: string, private s: string) {

  }

  getF() {
    return this.f;
  }

  getS() {
    return this.s;
  }
}


function App() {
  const properties: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap"
  }
  const row: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column'
  }
  const [pair, setPair] = React.useState<CityPair[]>([]);

  function creatingCities(value: string): string {
    const cities: string[] = value.split('#');
    let message = '';
    if(cities.length % 2 != 0) {
      message = "number of cities/countries should be even";
      setPair([]);
    } else {
      setPair(getCities(cities).slice());
    }
    return message;
  }

  function getCities(cities: string[]): CityPair[] {
    const pair: CityPair[] = [];
    for(let i=0; i<cities.length; i=i+2) {
      pair.push(new CityPair(cities[i], cities[i+1]));
    }
    return pair;
  }

  function getDivs(pair: CityPair[]): JSX.Element[] {
    return pair.map(pair => {
      return (<section style={row}>
          <Timer cityOrCountry={pair.getF()}></Timer>
          <Timer cityOrCountry={pair.getS()}></Timer>
      </section>)
    })
  }

return <section style={{display: "flex",flexDirection:"column"}}>
   <Input placeHolder={'enter city/coutry separated by #'} inputProcess={creatingCities}/> 
    <section style={properties}>
   {getDivs(pair)}
    </section>

  </section>
}
export default App;
