// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client, gql } from "@/graph";

export default async function handler(req, res) {
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
