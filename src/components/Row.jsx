import React from "react";
const Row = (props) => {
    return (
        <tr>

            {
                Object.keys(props.data).map(function (key,index) {
                    if(index%4 === 0 && index !==0)
                        return <td> <img src={props.data[key]} /></td>

                    return <td>{props.data[key]}</td>
                })
            }
        </tr>
    )
}
export default Row;
