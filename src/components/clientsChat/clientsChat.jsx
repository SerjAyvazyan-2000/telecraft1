import './clientsChat.scss'
import Button from "../../ui/button/button.jsx";


const ClientsChat = ({open}) => {

    return <div className={`clients-chat-box ${open ? 'active' : ''}`}>
        <h3 className='client-chat-name'>Константин Самохин</h3>
        <h2 className='chat-title'>Чат</h2>
        <div className='chat-cnt'>

            <div className='incoming-message '>
                <div className='message-text'>
                    <p>Текст сообщения от Константина Самохина, который сделан на несколько строк</p>
                </div>

                <p className='message-author'>Константин Самохин</p>
            </div>
            <div className='outgoing-message '>

                <div className='message-text'>
                    <p>Текст сообщения от Константина Самохина, который сделан на несколько строк</p>
                </div>

                <p className='message-author'>Вы</p>
            </div>


            <div className='incoming-message '>
                <div className='message-text'>
                    <p>Текст сообщения от Константина Самохина, который сделан на несколько строк</p>
                </div>

                <p className='message-author'>Константин Самохин</p>
            </div>
            <div className='outgoing-message '>

                <div className='message-text'>
                    <p>Текст сообщения от Константина Самохина, который сделан на несколько строк</p>
                </div>

                <p className='message-author'>Вы</p>
            </div>

        </div>
        <div className='chat-message-text'>
            <label className='message-text-label'>
                <textarea placeholder='Текст сообщения' name="messageText"></textarea>
            </label>
        </div>
        <div className='chat-btn-cnt'>
            <Button  variant={'btn-green'} text={'Отправить'}/>
        </div>
    </div>
};

export default ClientsChat;