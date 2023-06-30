import { Skills } from "@/typing";


export const fetchSkills = async ()=> {
    const res = await fetch(`https://nenczzw5.api.sanity.io/v2021-10-21/data/query/folio?query=%20%20%20%20*%5B_type%20%3D%3D%20%22skills%22%5D%0A%0A`, {
        headers: {
            Accept: "application/json"
        }
    });
    const data = await res.json();

    const skills: Skills[] = data.result as Skills[];

    return skills;
}