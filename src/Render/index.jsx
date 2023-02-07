import { useState } from 'react'
// import {Dialog} from "@reach/dialog"
import "@reach/dialog/styles.css";
import * as Dialog from '@radix-ui/react-dialog';
import "./index.css"



const Render = props => {
    const {msgList} = props 
    const [dialog, setOnDialog] = useState(false)

    const eventHandler = () => {
        setOnDialog(prevState => !prevState)
    }

    return (
        <div className="msgContainer">
        <h2>id : {msgList.id}</h2>
        <h2>sub : {msgList.subject}</h2>
        <h3>type  : {msgList.type}</h3>
        <h4>view_href : {msgList.view_href}</h4>
        <Dialog.Root>
            <Dialog.Trigger asChild className='btn'>
                <button className='Button Violet'>OpenBox</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='DialogOverlay'>
                    <Dialog.Content className='DialogContent'>
                        <Dialog.Title className='DialogTItle'><b>ID</b> : {msgList.id}</Dialog.Title>
                        <Dialog.Description className='DialogDescription'><b>Subject</b> : {msgList.subject}</Dialog.Description>
                        <Dialog.Description className='DialogDescription'><b>view_href</b> : <a className = "link" href={msgList.view_href} target ="_blank">{msgList.view_href}</a></Dialog.Description>
                        <Dialog.Close asChild>
                            <button>Close</button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
       
        </div>
    )
}

export default Render