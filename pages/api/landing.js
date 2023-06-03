// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client, gql } from "@/graph";

const handler = async(req, res) => {
  const query = gql`
    query LandingPages {
      landingPages {
        mainHeading
        arrayFeat
        description
        socialMedias {
          name
          link
          icon {
            url
          }
        }
        serviceHeading
        serviceDescription
        services {
          name
          icon {
            url
          }
          description
        }
        eventsHeading
        eventsDescription
        events {
          name
          image {
            url
          }
          description
          date
          state
          regLink
        }
        newsHeading
        newsDescription
        newsContent
      }
    }
  `;

  await client.request(query).then((data) => {
    console.log(data);
    res.status(200).json({
      data: data.landingPages[0],
    });
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  });
}

export default handler;