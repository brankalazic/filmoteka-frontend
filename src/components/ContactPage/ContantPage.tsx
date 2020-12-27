import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Container } from "react-bootstrap";

export class ContactPage extends React.Component{
    render() {
        return (
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <FontAwesomeIcon icon = { faPhone }></FontAwesomeIcon>
                            Contact details
                        </Card.Title>
                        <Card.Text>
                            Contact details will be shown here...
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Container>
        );
    }
}