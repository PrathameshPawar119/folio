import { groq } from 'next-sanity';
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from "../../sanity"
import { Skills } from '@/typing';

const query = groq`
    *[_type == "skills"]
`

type Data = {
    skills: Skills[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const skills: Skills[] = await client.fetch(query);
    res.setHeader('Content-Type', 'application/json');


    res.status(200).json({ skills })
}