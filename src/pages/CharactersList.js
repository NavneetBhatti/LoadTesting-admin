import React from 'react';
import { useQuery,gql } from "@apollo/client"

// const GET_CHARACTERS =  gql`
// query{
//   characters{
    
//     results{
//       id
//       name
//       image
//     }
//   }
// }
// `;

// query{
//   characters{
//     results{
//       id
//       name
//       image
//     }
//   }
// }

const GET_CHARACTERS =  gql`
query{
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


export default function CharactersList(){
    const {error, data , loading} = useQuery(GET_CHARACTERS)
    console.log(error, loading, data);
    if (loading) return <div>Spinner---</div>;
    if (error) return <div>wrong------</div>;
    // console.log("this is err");

    // console.log(err.networkError.result.errors);


    
    return(
        <div>

        </div>
    )
}