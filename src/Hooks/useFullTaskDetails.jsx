import { useQuery } from '@tanstack/react-query';
import useAxiosSecureV1 from './useAxiosSecureV1'


export default function useFullTaskDetails(id) {            
  const axios = useAxiosSecureV1();
    const fetchFullTaskDetails = async () => {
     const res = await axios.get(`/${id}`);
      return res;
     };
    const { data: FullTaskDetails, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: [`FullTaskDetails`, id],
       queryFn: () => fetchFullTaskDetails(),
    
     });    

  return {FullTaskDetails, isLoading, isError, error , isSuccess}
}
