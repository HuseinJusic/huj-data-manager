import React, { useState } from 'react';
import InputText from "./InputText";

export default function UseInputHook({ type, label, mode, active, secret = false, secretToggle = false }) {
    const [value, setValue] = useState({text: "", secret: secret});
    const input = <InputText
                        active={active}
                        mode={mode}
                        secret={value.secret}
                        value={value.text}
                        secretToggle={secretToggle}

                        onChange={e => setValue({...value, text: e.target.value})}
                        onSecretToggle={() => setValue({...value, secret: !value.secret})}
                        type={type}
                        label={label}
                    />;
    return [value, input];
}