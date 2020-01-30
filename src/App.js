import React, {Component} from 'react';
import './App.css';
import DataTable from "./components/DataTable";

export default class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      rows: []
    }
  }

  componentDidMount(): void {

    fetch('https://jsonplaceholder.typicode.com/photos').then(response =>
    {return response.json()}).then( rows => {
      this.setState({rows : rows})
    })
  }

  render(){
    const columnDef = [ "Album Id","Id","Title","Url","Thumbnail"]
    return (
        <div className="App">
          <DataTable columnDef = {columnDef} rows={this.state.rows}/>
        </div>
    );
  }



}

