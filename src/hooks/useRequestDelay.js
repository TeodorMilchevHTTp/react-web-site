import { useState, useEffect } from "react";  

export const REQUEST_STATUS = {
  SUCCESS: 'success',
  LOADING: 'loading',
  FAILURE: 'failure'
}
  
function useRequestDelay(delayTime = 1000, initialData=[]){
  const [data, setData] = useState(initialData);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)
  const [errMessage, setErrMessage] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  useEffect(() => {
    async function delayFunc(){
      try {
      await delay(delayTime);
      //throw "Had Error."
      setRequestStatus(REQUEST_STATUS.SUCCESS)
      setData(data)        
      } catch (error) {
        setRequestStatus(REQUEST_STATUS.FAILURE)
        setErrMessage(error)
      }
    }
    delayFunc();
  }, []);

  function updateRecord(recordUpdated){
    const newRecords = data.map(function(rec){
      return rec.id === recordUpdated.id ? recordUpdated : rec
    });
    async function delayFunction(){
      try{
        await delay(delayTime);
        setData(newRecords);
      }catch(err){
        console.log("Error was thrown: ", err)
      }
    }
    delayFunction();
  } 

  return {
    data,
    requestStatus,
    errMessage,
    updateRecord
  };
}

export default useRequestDelay;