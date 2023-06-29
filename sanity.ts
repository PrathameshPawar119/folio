import {createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'


export const config = {
     projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // "pv8y60vp"
     dataset : process.env.NEXT_PUBLIC_SANITY_DATASET, // "production"
     apiVersion : process.env.NEXT_PUBLIC_SANITY_API_VERSION, // "2023-05-03"
    useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
    // const apiVersion = "2023-05-03"
}


export const client = createClient(config);

export const urlFor = (source :any) =>{
    createImageUrlBuilder(config).image(source);
}

// const data = await client.fetch(groq`*[]`)

// const builder = imageUrlBuilder(client)
// export function urlFor(source : any) {
//     return builder.image(source)
// }