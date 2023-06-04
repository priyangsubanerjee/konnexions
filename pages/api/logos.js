// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client, gql } from "@/graph";

const handler = async(req, res) => {
  const query = gql`
    query Logos {
      logos {
        konnexion {
          url
        }
        kiit {
          url
        }
        ksac {
          url
        }
      }
    }
  `;
  
  await client.request(query).then((data) => {
    console.log(data);
    res.status(200).json({
      data: data.logos[0],
    });
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  });
}

export default handler;