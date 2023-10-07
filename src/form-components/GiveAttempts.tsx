import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;

    const [leftAttempts, setAttempts] = useState<number>(3);
    const [attemptsRequested, setRequested] = useState<number>(0);

    function removeAttempt() {
        setAttempts(leftAttempts - 1);
    }

    function addAttempt() {
        let attempts = leftAttempts;
        if (!Number.isInteger(attemptsRequested)) {
            attempts = leftAttempts;
        } else {
            attempts = leftAttempts + attemptsRequested;
        }
        setAttempts(attempts);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="Attempts">
                <Form.Label>Attempts: {leftAttempts}</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: ChangeEvent) =>
                        setRequested(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            <div>
                <Button onClick={removeAttempt} disabled={leftAttempts === 0}>
                    Use
                </Button>
                <Button onClick={addAttempt}>Gain</Button>
            </div>
        </div>
    );
}
