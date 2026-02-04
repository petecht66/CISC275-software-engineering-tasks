import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import catPhoto from "./Seven Intro Photo.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

console.log(catPhoto);

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1> Header Text for Task 3 </h1>
            <img src={catPhoto} alt="a picture of my cat Seven" />; Ordered List
            of Pets
            <ol>
                <li>Dogs</li>
                <li>Cats</li>
                <li>Fish</li>
                <li>Snakes</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        {" "}
                        Red Rectangle
                        <div
                            style={{
                                width: "100px",
                                height: "150px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
