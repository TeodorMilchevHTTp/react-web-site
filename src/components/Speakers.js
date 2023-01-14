import { data } from '../../SpeakerData';
import SpeakersList from './SpeakersList';
import Header from './Header';
import SpeakersToolbar from './SpeakersToolbar'
import { useState } from 'react';

function Speakers() {
const [showSessions, setShowSessions] = useState(true);
const [theme, setTheme] = useState("light");

    return(
        <div className={
            theme === "Light" 
            ? "container-fluid light"
            : "container-fluid dark"
        }>
          <Header 
          theme={theme}
          />

          <SpeakersToolbar 
          theme={theme}
          setTheme={setTheme}
          showSessions={showSessions}
          setShowSessions={setShowSessions}
          />
          
          <SpeakersList 
          data={data} 
          showSessions={showSessions}
          />
        </div>
    )
}

export default Speakers;