import React from 'react';
import soundfile from '../../public/TWICE Heart Shaker MV.mp3';
import Sound from 'react-sound';


export default class bgMusic extends React.Component {

    render() {
        return(
            <Sound
                url={soundfile}
                playStatus={Sound.status.PLAYING}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
   />
        )
    }
}