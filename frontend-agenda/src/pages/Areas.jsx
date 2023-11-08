import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import UserList from '../components/areas/List'


function Areas(){
    

    return(
    <Container>
        <Row>
            <Col xs="12">
               <AreaList/> 

               
            </Col>
        </Row>
    </Container>
    )
}

export default Areas