import Speaker from "./Speaker";
import ReactPlaceHolder from 'react-placeholder';
import useRequestSpeakers from "../hooks/useRequestSpeakers";

function SpeakersList({showSessions}) {

  const{
    speakerData,
    isLoading,
    hasError,
    errMessage,
    onFavoriteToggle
  } = useRequestSpeakers(2000);

  if(hasError === true) {
    return(
      <div className="text-danger">
      ERROR: <b>Loading Speaker Data Failed: {errMessage}</b>
      </div>
    )
    
  }


  return (
        <div className="container speakers-list">
          <ReactPlaceHolder
          type='media'
          rows={15}
          className='speakerslist-placeholder'
          ready={isLoading===false}
          >
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
        </ReactPlaceHolder>
        </div>
    )
}

export default SpeakersList;