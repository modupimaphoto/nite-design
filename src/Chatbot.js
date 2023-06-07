import chaticon from './img/chaticon.svg';
import cross from './img/cross.svg'
import bot  from './img/bot.svg';

import { useState } from 'react';

const Chatbot = () =>{
    const [isOnline, setIsOnline] = useState(false);

    const handleChat = () =>{
        const chatting = document.getElementById('chatting');
        const chat = document.getElementById('chat');
        chat.style.display = 'none'; 
        chatting.style.display = 'block';
    }
    const handleClose = () =>{
        const chatting = document.getElementById('chatting');
        const chat = document.getElementById('chat');
        chat.style.display = 'block'; 
        chatting.style.display = 'none';
    }
    return(
        <>
            <div className="chat-icon" onClick={ handleChat } id="chat">
                <img src={ chaticon} alt="chat icon" />
            </div>
            
            {/* Chat Section */}
            <div className="chat-section" id="chatting">
                <div className="px-4">
                    <div className="card overflow-hidden">
                        <div className="p-4 dark-navy">
                            <img src={ bot } alt="Bot" className="svg" />

                            { (isOnline) ? 'online' : 'Offline'}

                            <img src={ cross } alt="Cross" className="cross" onClick={ handleClose } />
                        </div>
                        <div className="card-body chatting">
                            <p className="bg-light rounded width-50 p-2">
                                &#128075; Hello
                            </p>
                            <p className="bg-light rounded width-50 p-2">
                                How can i help you....
                            </p>
                            <div className="mb-2">
                                <button className='btn btn-primary rounded-5'>&#9889; Free trial</button>
                                <button className='btn btn-primary rounded-5 mx-2'>&#128178; Pricing</button>
                            </div>
                            <div>
                                <button className='btn btn-primary rounded-5'>&#11088; Product features</button>
                                <button className='btn btn-primary rounded-5 mx-1'>&#128105; Contact to agent</button>
                                {/* <button className='btn btn-primary rounded-5 mx-2'>&#128072; Got to menu</button> */}
                            </div>
                        </div>
                        <div className>
                            <textarea placeholder="Type your message here..." className="form-control resize-none"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Chatbot;