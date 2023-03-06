import { useState } from "react";
import PropTypes from 'prop-types';

function useSubmit() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const submit = async (url, data) => {
    setLoading(true);
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
     const result = await res.json();
     setResponse(result);
    // try{
    //   await res.json();
    //   if(error) {
    //     throw new Error('Something went wrong');
    //   }
    //   setResponse({
    //     type: 'success',
    //     message: 'Thanks for registration, you have successfully registered'
    //   })
    // }
    // catch(error) {
    //   setResponse({
    //     type: 'error',
    //     message: 'Something Went Wrong, please try again'
    //   })
    // }
    // finally{
    //   setLoading(false);
    // }
   
  }
  return {loading, response, submit};
}

useSubmit.protoTypes = {
    url: PropTypes.string
}
export default useSubmit
