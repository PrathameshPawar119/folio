import { Experience } from "@/typing";


export const fetchExperience = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`, {
        headers: {
            Accept: "application/json"
        }
    });
    const data = await res.json();

    const experience: Experience[] = data.experience;

    return experience;
}