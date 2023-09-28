import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Carnival"
        | "St. Patrick's Day"
        | "Pi Day"
        | "Halloween"
        | "Qixi Festival";

    const alphabetical: Record<Holiday, Holiday> = {
        Carnival: "Halloween",
        Halloween: "Pi Day",
        "Pi Day": "Qixi Festival",
        "Qixi Festival": "St. Patrick's Day",
        "St. Patrick's Day": "Carnival"
    };

    const time: Record<Holiday, Holiday> = {
        Carnival: "Pi Day",
        "Pi Day": "St. Patrick's Day",
        "St. Patrick's Day": "Qixi Festival",
        "Qixi Festival": "Halloween",
        Halloween: "Carnival"
    };

    const emoji: Record<Holiday, string> = {
        Carnival: "🎭",
        "St. Patrick's Day": "☘️",
        "Pi Day": "🥧",
        Halloween: "🎃",
        "Qixi Festival": "🎎"
    };

    const [holiday, setHoliday] = useState<Holiday>("Carnival");

    return (
        <div>
            <Button onClick={() => setHoliday(alphabetical[holiday])}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(time[holiday])}>
                Advance by Date In Year
            </Button>
            <div>
                <span>Holiday: {emoji[holiday]}</span>
            </div>
        </div>
    );
}
