// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client, gql } from "@/graph";

export default async function handler(req, res) {
  const query = gql`
    query Members {
      members {
        member {
          name
          bio
          image {
            url
          }
          team
          email
          githubLink
          other
        }
        leads {
          name
          bio
          image {
            url
          }
          team
          email
          githubLink
          other
        }
        others {
          name
          bio
          image {
            url
          }
          team
          email
          githubLink
          other
        }
      }
    }
  `;
  try {
    const { members } = await client.request(query);
    res.status(200).json({
      data: members[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
}
