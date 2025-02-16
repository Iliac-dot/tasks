import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [colors, setColors] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColors(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="ChangeColorForm">
                <Form.Label>Select a Color</Form.Label>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id={"colors-" + color}
                        key={color}
                        style={{ backgroundColor: color }}
                        label={color}
                        value={color}
                        checked={colors === color}
                    />
                ))}
            </Form.Group>
            <div>
                You have Selected{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: colors }}
                >
                    {" "}
                    {colors}
                </span>
            </div>
        </div>
    );
}
