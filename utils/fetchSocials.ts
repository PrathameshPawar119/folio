import { Social } from "@/typing";


export const fetchSocials = async () =>{
    const res = await fetch(`https://nenczzw5.api.sanity.io/v2021-10-21/data/query/folio?query=%20%20%20%20*%5B_type%20%3D%3D%20%22socials%22%5D%0A%0A%0A`, {
        headers:{
            Accept: "application/json"
        }
    });
    const data = await res.json();
    const socials: Social[] = data.result as Social[];
    return socials;
    
}