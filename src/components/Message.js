import React,{ Component } from 'react';

import { Avatar } from '@material-ui/core';

class Message extends Component {
    render() {
        return <div className="message">
                <Avatar />
                <div className="messageInfo">
                    <h4>
                        user
                        <span className="messageTimestamp">Timestamp</span>
                    </h4>

                    <p>message</p>
                </div>
            </div>
    }
}

export default Message
