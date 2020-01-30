import React,{Component} from "react";
import Row from "./Row";

export default class DataTable extends Component{

    constructor(props){
        super(props)
    }
    render() {
        return(
            <table>
                <thead>
                {this.props.columnDef && this.props.columnDef.map(column =>{
                   return <th>{column}</th>
                })}
                </thead>
                <tbody>
                {this.props.rows && this.props.rows.map(row =>{
                    return <Row data={row}/>
                })
                }
                </tbody>
        </table>)
    }
}
