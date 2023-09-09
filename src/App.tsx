import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import cat from "./assets/images/cat.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with Yuhan Lin and React Hooks and TypeScript
            </header>
            <h1>This is my cat.</h1>
            <p>Hello World!</p>
            <img src={cat} width="500" alt="A picture of my cat" />
            <br></br>
            Her three favorite things:
            <ol>
                <li>Sleeping</li>
                <li>Feather</li>
                <li>Snacks</li>
            </ol>
            <br></br>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <br></br>
            <Container>
                <Row>
                    <Col>
                        First column.
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        Second column.
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
