import React,{ Component } from 'react';
import ChatHeader from './ChatHeader';
import Message from './Message';

import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

class Chat extends Component {
    render() {
        return <div className="chat">
                <ChatHeader />

                <div className="chatMessages">
                    <Message />
                    <Message />
                    <Message />
                </div>

                <div className="chatInput">
                    <AddCircleIcon fontsize="large" />
                    <form>
                        <input placeholder={"Message #testChannel"} />
                        <button className="chatInputButton" type="submit">
                            Send message
                        </button>
                    </form>

                    <div className="chatInputIcons">
                        <CardGiftcardIcon fontsize="large" />
                        <GifIcon fontsize="large" />
                        <EmojiEmotionsIcon fontsize="large" />
                    </div>

                </div>
            </div>
    }
}

export default Chat
