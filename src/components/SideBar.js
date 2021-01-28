import React,{ Component } from 'react';
import SideBarChannel from './SideBarChannel';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';



class SideBar extends Component {
    render() {
        return <div className="sidebar">
                <div className="sidebarTop">
                    <h1>Channel</h1>
                    <ExpandMoreIcon />
                </div>
                <div className="sidebarChannels">
                    <div className="sidebarChannelsHeader">
                        <div className="sidebarHeader">
                            <ExpandMoreIcon />
                            <h2>Text Channels</h2>
                        </div>
                        <AddIcon className="sidebarAddChannel" />
                    </div>

                    <div className="sidebarChannelsList">
                        <SideBarChannel />
                        <SideBarChannel />
                        <SideBarChannel />
                    </div>
                </div>

                <div className="sidebarVoice">
                    <SignalCellularAltIcon className="sidebarVoiceIcon" fontSize="large" />
                    <div className="sidebarVoiceInfo">
                        <h3>Voice Connected</h3>
                        <p>Stream</p>
                    </div>
                    <div className="sidebarVoiceIcons">
                        <InfoOutlinedIcon />
                        <CallIcon />
                    </div>
                </div>

                <div className="sidebarProfil">
                    <Avatar />
                    <div className="sidebarProfilInfo">
                        <h3>User</h3>
                        <p>#id</p>
                    </div>
                    <div className="sidebarProfilIcons">
                        <MicIcon />
                        <HeadsetIcon />
                        <SettingsIcon />
                    </div>
                </div>

            </div>
    }
}

export default SideBar;
