import useSWR from "swr";


const fetcher=url=>fetch(url).then(res=>res.json())


export   function getHello(){
    return useSWR('/api/hello',fetcher)
}
 
export const getBlogsData = ({offset,filter}, initialData) => {
    
    return useSWR(`
    /api/blogs?offset=${offset || 0}&date=${filter.date.asc ? 'asc' : 'desc'}`,
     fetcher,
     { initialData })
}
   
    
 
