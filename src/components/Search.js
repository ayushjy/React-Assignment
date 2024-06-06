import React,{useState} from 'react'
import TextField from '@mui/material/TextField';

const Search = ({data}) => {
    const [input, setInput] = useState("");


    const ItInput=(e)=>{
        setInput(e.target.value)
        data.filter((item)=>{
            return item.id||item.title||item.body===input;
         })
    }
  return (
    <div>
        <TextField id="standard-basic" label="Standard" variant="standard" value={input}  onChange={ItInput}/>
    </div>
  )
}

export default Search;