import React, { useState } from 'react';
import InputText from "./InputText";

export default function UseInputHook({ type, label, mode, active }) {
    const [value, setValue] = useState("");
    const input = <InputText active={active} mode={mode} value={value} onChange={e => setValue(e.target.value)} type={type} label={label}/>;
    return [value, input];
}