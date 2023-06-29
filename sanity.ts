import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";



export const config = {
   projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // "pv8y60vp"
     dataset : process.env.NEXT_PUBLIC_SANITY_DATASET, // "production"
     apiVersion : process.env.NEXT_PUBLIC_SANITY_API_VERSION, // "2023-05-03"
     useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
   };
   
   
   export const client = createClient(config);

   const builder = imageUrlBuilder(client);
   export function urlFor(source: SanityImageSource) {
      return builder.image(source)
   }
   
   // const builder = imageUrlBuilder(client);
   // export function urlFor(source: string | any[] | { _type: string; _ref: string }): string {
   //    return builder.image(source).toString();
   // }
