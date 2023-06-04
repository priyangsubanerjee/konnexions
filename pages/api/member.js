// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client, gql } from "@/graph";

const handler = async(req, res) => {
  const query = gql`
    query Members {
      memberPages {
        heading
        description
        member {
          name
          email
          domain
          image {
            url
          }
          techLink
          other
        }
        leads {
          name
          email
          domain
          image {
            url
          }
          techLink
          other
        }
        others {
          name
          email
          domain
          image {
            url
          }
          techLink
          other
        }
      }
    }
  `;
  
  await client.request(query).then((data) => {
    console.log(data);
    res.status(200).json({
      data: data.memberPages[0],
    });
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  });
}

export default handler;