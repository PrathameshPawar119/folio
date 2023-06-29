import { groq } from 'next-sanity';
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from "../../sanity"
import { Social } from '@/typing';

const query = groq`
    *[_type == "socials"]
`

type Data = {
    socials: Social[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const socials: Social[] = await client.fetch(query);
    res.setHeader('Content-Type', 'application/json');


    res.status(200).json({ socials })
}