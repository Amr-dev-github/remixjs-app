import { API } from '@config/constants';
import { useEffect,useState } from 'react'
import axios from '@config/lib/axios/index.js'
export default function getHook({api = API,url,params}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    axios({url:`${api}/${url}`,params:params,signal:controller.signal}).then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log(err.response.status);
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
    return () => {
      controller.abort()
    }
  }, [api, url, params])
  return {
    data,
    loading,
    error
  };
}