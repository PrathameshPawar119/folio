import { Projects } from "@/typing";


export const fetchProjects = async () => {
    const res = await fetch(`https://nenczzw5.api.sanity.io/v2021-10-21/data/query/folio?query=*%5B_type%20%3D%3D%20%22projects%22%5D%20%7B%0A%20%20...%2C%0A%20%20technologies%5B%5D%20-%3E%0A%20%20%20%20%0A%7D`, {
        headers: {
            Accept: "application/json"
        }
    });
    const data = await res.json();

    const projects: Projects[] = data.result as Projects[];

    return projects;
}