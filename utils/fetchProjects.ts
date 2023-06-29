import { Projects } from "@/typing";


export const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`, {
        headers: {
            Accept: "application/json"
        }
    });
    console.log(res);

    const data = await res.json();

    const projects: Projects[] = data.projects;

    return projects;
}