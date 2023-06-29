import { groq } from 'next-sanity';
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from "../../sanity"
import { Experience } from '@/typing';

const query = groq`
    *[_type == "experience"] {
    ...,
    technologies[] ->
    }
`

type Data = {
    experience: Experience[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const experience: Experience[] = await client.fetch(query);
    res.setHeader('Content-Type', 'application/json');

    res.status(200).json({ experience })
}