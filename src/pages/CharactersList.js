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
`


export default function CharactersList(){
    const {error, data , loading} = useQuery(GET_CHARACTERS)
    console.log(error, loading, data);
    if (loading) return <div>Spinner---</div>;
    if (error) return <div>wrong------</div>;

    

    
    return(
        <div>
             <h1>Recordings</h1>
             
             {data.allRecordings.map((character) => {
                 return(
                   <div>
                                  <h1>Recordings 6</h1>


                     <h2>{character.id}</h2> 
                     <h2>{character.startTime}</h2> 
                     <h2>{character.endTime}</h2> 

                     {character.urlInfoList.map((t) => {
                        return(
                          <div>
                     <h1>{t.url}</h1> 
                     <h1>{t.start}</h1> 
                     <h1>{t.end}</h1> 

                     </div>
                        );
                     })
                     }


                   </div>  

                 );
             })
            }
        </div>
    )
}