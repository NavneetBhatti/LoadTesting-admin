import React from 'react';
import { useQuery,gql } from "@apollo/client"

const GET_CHARACTERS =  gql`
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

export default function CharactersList(){
    const {error, data , loading} = useQuery(GET_CHARACTERS)
    console.log(error, loading, data);
    if (loading) return <div>Spinner---</div>;
    
    return(
        <div>

        </div>
    )
}