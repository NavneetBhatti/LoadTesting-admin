import { useQuery,gql } from "@apollo/client"


export const GRAPHQL_API = "https://admin-testing-tool.herokuapp.com/graphql";

// export const GET VIDEOS QUERY =
// export  const GET_VIDEOS_QUERY =  `
// query{
//   allRecordings{
//     id
//     startTime
//     endTime
//     urlInfoList{
//       start
//       end
//       url
//     }
//   }
// }
// `;

export  const GET_VIDEOS_QUERY =  `
{
  allRecordings{
    id
    startTime
    endTime
    urlInfoList{
      start
      end
      url
    }
  }
}
`;

