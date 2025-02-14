import './clients.scss'
import Header from "../../components/header/header.jsx";
import BlockHeader from "../../components/blockHeader/blockHeader.jsx";
import ClientsChat from "../../components/clientsChat/clientsChat.jsx";
import {useState} from "react";

const Clients = () => {
    const [openChat,setOpenChat] = useState(false);

    const clients = [
        { id: 1, name: 'Константин Самохин', number: 98 },
        { id: 2, name: 'Светлана Уварова', number: 98 },
        { id: 3, name: 'Константин Самохин', number: 98 },
        { id: 4, name: 'Светлана Уварова', number: 98 },
        { id: 5, name: 'Константин Самохин', number: 98 },
        { id: 6, name: 'Светлана Уварова', number: 98 },

    ];
    const handCreate = () =>{
        setOpenChat(!openChat)
    }
    return <div className='clients-wrapper G-flex'>
        <section className='clients-section'>
            <Header/>
            <BlockHeader bntClass={'clients-bnt'} searchClass={'clients-search'} title='Клиенты'
                         buttonText={'Создать категорию/товар'}/>

            <div className='clients-list '>

                {clients.map(client => (
                    <div onClick={handCreate} key={client.id} className='client-item G-align-center'>
                        <h3 className='client-name'>{client.name}</h3>
                        <div className='client-actions G-align-center'>
                            <div className='client-number G-center'>
                                <span>{client.number}</span>
                            </div>
                            <div className='client-chat-icon G-center'>
                                <i className='icon chat-icon'></i>
                            </div>
                            <div className='client-more-icon G-center'>
                                <i className='icon client-more'></i>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>

        <ClientsChat open={openChat}/>

    </div>


};

export default Clients;