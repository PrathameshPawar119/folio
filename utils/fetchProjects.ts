import { Projects } from "@/typing";


export const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`, {
        headers: {
            Accept: "application/json"
        }
    });
    const data = await res.json();

    const projects: Projects[] = data.projects;

    return projects;
}