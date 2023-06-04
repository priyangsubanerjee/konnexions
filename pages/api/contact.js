// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client, gql } from "@/graph";

export default async function handler(req, res) {
  const query = gql`
    mutation {
      createContact(
        data: {
          name: "${req.body.name}"
          email: "${req.body.email}"
          message: "${req.body.message}"
        }
      ) {
        id
        name
        email
        message
      }
    }
  `;

  await client.request(query).then((details) => {
    console.log(details);
    res.status(200).json({ message: "success" });
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ message: "error" });
  });
}