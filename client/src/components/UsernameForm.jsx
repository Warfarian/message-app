import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function UsernameForm({ setUsername }){
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()){
            setUsername(input.trim());
            navigate('/chat');
        }
    }

    return(
        <div>
            <form action="" method="post"  onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Enter a username" value={input} onChange={(e) => setInput(e.target.value)}/>
                <label htmlFor="username"></label>
                <button type="submit">Lets go!</button>
            </form>
        </div>
    )
}