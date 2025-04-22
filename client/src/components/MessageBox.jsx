import { useState } from 'react';

export default function MessageBox() {
    const [message, setMessage] = useState('');
    const [submittedMessage, setSubmittedMessage] = useState('');
    const [allMessages, setAllMessages] = useState([])


    function addMessage(newMessage){
        setAllMessages(prevMessage => [...prevMessage, newMessage])
    }

    function display(){
        setSubmittedMessage(message)
        addMessage(message)
        setMessage('')
    }


    return (
        <div className='container'>
        <div className='convoBox'>
            <div>
                <ul>
                    {allMessages.map((msg,index) => {
                        return <li key={index}>{msg}</li>
                    })}
                </ul>
            </div>
            
        <div id='MessageBox'>
            <form action="http://localhost:3000/sendMessage" method='post'>
                <input type="text" value={message} name='message' placeholder='Enter message here' onChange={(e) => setMessage(e.target.value)}/>
                <button type="submit" id='submit' >Click</button>
            </form>
        </div>
        </div>
        </div>
    );
}
