import { Experience } from "@/typing";


export const fetchExperience = async () => {
    const res = await fetch(`https://nenczzw5.api.sanity.io/v2021-10-21/data/query/folio?query=%20%20%20%20*%5B_type%20%3D%3D%20%22experience%22%5D%20%7B%0A%20%20%20%20...%2C%0A%20%20%20%20technologies%5B%5D%20-%3E%0A%20%20%20%20%7D%0A`, {
        headers: {
            Accept: "application/json"
        }
    });
    const data = await res.json();

    const experience: Experience[] = data.result as Experience[];

    return experience;
}