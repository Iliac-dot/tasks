import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event?.target.checked);
    }

    function printMessage(): JSX.Element {
        if (isStudent) {
            return <div>{name} is a student</div>;
        } else {
            return <div> {name} is not a student</div>;
        }
    }

    function ifEdit(): JSX.Element {
        if (mode) {
            return <div> In Edit Mode </div>;
        } else {
            return <div> Not In Edit Mode </div>;
        }
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="mode">
                <Form.Check
                    type="switch"
                    id="edit"
                    label={ifEdit()}
                    checked={mode}
                    onChange={updateEdit}
                />
                <div>
                    {mode ? (
                        <Form.Group controlId="modeForm">
                            <Form.Label>Enter your name:</Form.Label>
                            <Form.Control value={name} onChange={updateName} />
                            <Form.Check
                                type="checkbox"
                                id="switch-student"
                                label="Is Student?"
                                name="student"
                                checked={isStudent}
                                onChange={updateStudent}
                            />
                        </Form.Group>
                    ) : (
                        <div>{printMessage()}</div>
                    )}
                </div>
            </Form.Group>
        </div>
    );
}
