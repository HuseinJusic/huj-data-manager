import React, { useState } from 'react';
import InputText from "./InputText";

export default function UseInputHook({ type, label }) {
    const [value, setValue] = useState("");
    const input = <InputText value={value} onChange={e => setValue(e.target.value)} type={type} label={label}/>;
    return [value, input];
}