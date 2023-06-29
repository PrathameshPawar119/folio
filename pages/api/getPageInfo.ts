import { groq } from 'next-sanity';
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from "../../sanity"
import { PageInfo } from '@/typing';

const query = groq`
    *[_type == "pageInfo"][0]
`

type Data = {
    pageInfo: PageInfo
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const pageInfo: PageInfo = await client.fetch(query);
    res.setHeader('Content-Type', 'application/json');


    res.status(200).json({ pageInfo })
}