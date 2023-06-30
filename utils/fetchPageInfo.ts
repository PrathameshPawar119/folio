import { PageInfo } from "@/typing";


export const fetchPageInfo = async () => {
    const res = await fetch(`https://nenczzw5.api.sanity.io/v2021-10-21/data/query/folio?query=%20%20%20%20*%5B_type%20%3D%3D%20%22pageInfo%22%5D%5B0%5D%0A%0A`, {
        headers:{
            Accept:"application/json"
        }
    });
    const data = await res.json();
    // console.log(data.result as PageInfo);

    const pageInfo: PageInfo = data.result as PageInfo   ;

    return pageInfo;
}