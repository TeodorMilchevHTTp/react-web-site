import { useState, useEffect } from "react";  
import {data} from '../../SpeakerData';
  
function useRequestSpeakers(delayTime = 1000){
  const [speakerData, setSpeakerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  useEffect(() => {
    async function delayFunc(){
      try {
      await delay(delayTime);
      //throw "Had Error."
      setIsLoading(false);
      setSpeakerData(data)        
      } catch (error) {
        setIsLoading(false)
        setHasError(true)
        setErrMessage(error)
      }
    }
    delayFunc();
  }, []);

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
  return {
    speakerData,
    isLoading,
    hasError,
    errMessage,
    onFavoriteToggle
  };
}

export default useRequestSpeakers;