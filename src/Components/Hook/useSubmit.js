import PropTypes from 'prop-types';
import {useState} from 'react';

function useSubmit() {
  const [response, setResponse] =useState()
  const submit = (url, data) => {fetch(url, {
      method: 'POST',
      headers: {
          'accept': 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
        }).then((response)=> {
        setResponse(response);
        }).catch((err) => {
        throw new Error(`Please, try again ... ${err}`)
        });  
  }
  return { response, submit};

}

useSubmit.protoTypes = {
    url: PropTypes.string
}
export default useSubmit;
