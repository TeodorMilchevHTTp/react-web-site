import Speaker from "./Speaker";
import ReactPlaceHolder from 'react-placeholder';
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import {data} from '../../SpeakerData';

function SpeakersList({showSessions}) {

  const{
    data: speakerData,
    requestStatus,
    errMessage,
    updateRecord,
  } = useRequestDelay(2000, data);

  if(requestStatus === REQUEST_STATUS.FAILURE) {
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
          ready={requestStatus === REQUEST_STATUS.SUCCESS}
          >
          <div className="row">
            {speakerData.map(function (speaker) {
              return(
                <Speaker 
                key={speaker.id} 
                speaker={speaker}
                showSessions={showSessions}
                onFavoriteToggle={() => {
                  updateRecord({
                    ...speaker,
                    favorite: !speaker.favorite,
                  });
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