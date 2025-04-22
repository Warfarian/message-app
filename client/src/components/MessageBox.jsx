import { useState,useEffect } from 'react';

export default function MessageBox() {
    const [message, setMessage] = useState('');
    const [allMessages, setAllMessages] = useState([])

    useEffect(() => {
        fetchMessages();
    },[])

    const fetchMessages = () =>{
        fetch("http://localhost:3000/messages")
        .then(response => response.json())
        .then(data => setAllMessages(data))
        .catch(err => console.error(err))
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const formData = new URLSearchParams();
        formData.append('message', message);

        try{
            const res = await fetch('http://localhost:3000/messages' , {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formData.toString()
            });

            if (res.ok){
                setMessage('');
                fetchMessages();
            }
            else{
                console.error("Failed to send message")
            }
        }catch (error){
            console.error('Submit error', error)
        }
    }

    return (
        <div className='container'>
        <div className='convoBox'>
            <div>
                <ul>
                    {allMessages.map((Message) => {
                        return <li key={Message.id}>{Message.username} <br />{Message.Message}</li>
                    })}
                </ul>
            </div>
            
        <div id='MessageBox'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={message} name='message' placeholder='Enter message here' onChange={(e) => setMessage(e.target.value)}/>
                <button type="submit" id='submit'>Click</button>
            </form>
        </div>
        </div>
        </div>
    );
}
