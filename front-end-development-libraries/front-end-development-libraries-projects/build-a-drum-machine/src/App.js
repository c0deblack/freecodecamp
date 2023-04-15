import './App.css';

const soundClips = [
    {key: "Q", url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
    {key: "W", url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
    {key: "E", url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
    {key: "A", url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
    {key: "S", url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
    {key: "D", url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
    {key: "Z", url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
    {key: "X", url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
    {key: "C", url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
];

function DrumPad({audioClipUrl, shortcutKey, handlePlayClip}) {
    return (
        <div className='drum-pad' onClick={handlePlayClip(shortcutKey)}>
            {shortcutKey}
            <audio
                src={audioClipUrl}
                id={shortcutKey}
             > 
            </audio>
        </div>
    );   
}

const handleClick = (key) => {
    let audio = document.getElementById("key");
    audio.play();
}
function DrumMachine(){
    return (
        <div id="drum-machine">
            <h1>Drum Machine</h1>
            <secion id="display">
                
            </secion>
            <section id="drum-keys">
                 {soundClips.map((clip, index) => {
                    return ( <DrumPad 
                        className="drum-pad"
                        key={clip.url.split("/")[-1]} 
                        shortcutKey={clip.key} 
                        audioClipUrl={clip.url} 
                        handlePlayClip={handleClick}
                        />
                    )
                })}
            </section>
        </div>
    );
}

function Container({children}) {
    return (
        <div id="root" className='container'>
            {children}
        </div>
    );   
}

function App() {
  return (
      <Container>
        <DrumMachine className="center" />
      </Container>
  );
}

export default App;
