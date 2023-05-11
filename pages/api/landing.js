// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client, gql } from "@/graph";

export default async function handler(req, res) {
  const query = gql`
    query LandingPages {
      landingPages {
        arrayFeat
        description
        heading1
      }
    }
  `;
  try {
    const { landingPages } = await client.request(query);
    res.status(200).json({
      data: landingPages[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
}
