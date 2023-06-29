import { groq } from 'next-sanity';
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from "../../sanity"
import { Projects } from '@/typing';

const query = groq`
*[_type == "projects"] {
  ...,
  technologies[] ->
}`

type Data = {
    projects: Projects[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const projects: Projects[] = await client.fetch(query);
    res.setHeader('Content-Type', 'application/json');


    res.status(200).json({ projects })
}