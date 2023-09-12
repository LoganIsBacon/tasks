import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "./images/image.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "#2a0335" }}
            >
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Logan Geiser
            </p>
            <h1>Logan Geisers Page</h1>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First column.
                        <div
                            style={{
                                height: "100px",
                                width: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second Column.
                        <div
                            style={{
                                height: "100px",
                                width: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <img
                            src={img}
                            alt="Picture of wizard frog"
                            width="200"
                            height="200"
                        />
                    </Col>
                </Row>
            </Container>
            <div>
                Things I like:
                <ul>
                    <li>Skateboarding</li>
                    <li>Playing video games</li>
                    <li>Frogs</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
