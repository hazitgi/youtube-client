import  { useState } from 'react'

const inputCustomHook = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }
    return [value, bind]
}

export default inputCustomHook
