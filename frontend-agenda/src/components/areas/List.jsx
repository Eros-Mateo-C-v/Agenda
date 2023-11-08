import React from "react";
import { Spinner, Table } from 'react-bootstrap'
import UseAreas from "../../hooks/UseAreas";

function List(){
    const { areas, loading} = UseAreas()

    if(loading) return <Spinner/>
    return (
        <Table striped bordered hover>
            <thead>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Observaciones</th>
                <th>Status</th>
            </thead>
            <tbody>
                {areas.map(({id,codigo,nombre,observaciones, status }) => (
                    <tr key={`area-row-${id}`}>
                
                <td>{codigo}</td>
                <td>{nombre}</td>
                <td>{observaciones}</td>
                <td>{status ? 'Active': 'Incative' }</td>
                </tr>
                ))}
            </tbody>
        </Table> 
    );
}

export default List