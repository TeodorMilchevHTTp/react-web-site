import Speaker from "./Speaker";
import {data} from '../../SpeakerData';
import { useState, useEffect } from "react";

function SpeakersList({showSessions}) {
  
  const [speakerData, setSpeakerData] = useState([]);

  function onFavoriteToggle(id){
    const speakerRecPrevious = speakerData.find(function(rec) {
      return rec.id === id;
    });
    const speakerRecUpdated = {
      ...speakerRecPrevious,
      favorite: !speakerRecPrevious.favorite
    };
    const speakerDataNew = speakerData.map(function(rec) {
      return rec.id === id
             ?speakerRecUpdated
             :rec;
    });
    setSpeakerData(speakerDataNew);
  }

  return (
        <div className="container speakers-list">
          <div className="row">
            {speakerData.map(function (speaker) {
              return(
                <Speaker 
                key={speaker.id} 
                speaker={speaker}
                showSessions={showSessions}
                onFavoriteToggle={() => {
                  onFavoriteToggle(speaker.id);
                }}
                />
              ) 
            })}
          </div>
        </div>
    )
}

export default SpeakersList;