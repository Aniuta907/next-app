import { useState } from "react";

export function SearchBox({onSearch}) {
    const [value, setValue] = useState('');

    return (
    <form
        onSubmit={e => {
            e.preventDefault();
            onSearch(value);
        }}
    >
        <div>
            <input 
            type="text" 
            placeholder="Search something..." 
            value={value} 
            onChange={e => setValue(e.target.value)}
            />
            <button type="submit">search</button>
        </div>
    </form>
    )
}