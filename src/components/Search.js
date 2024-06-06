import React, { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';

const Search = ({ data,setFilteredData }) => {
    const [input, setInput] = useState("");

    useEffect(() => {
        const filtered = data.filter((item) => {
            return (
                item.id.toString().includes(input) ||
                item.title.toLowerCase().includes(input.toLowerCase()) ||
                item.body.toLowerCase().includes(input.toLowerCase())
            );
        });
        setFilteredData(filtered);
    }, [input, data, setFilteredData]);

    const searchInput = (e) => {
        setInput(e.target.value)
        }

    return (
        <div>
            <TextField id="standard-basic"  variant="standard" value={input} onChange={searchInput} />
        </div>
    )
}

export default Search;