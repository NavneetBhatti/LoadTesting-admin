import React from 'react';

function Video(props){
    return(
        <div>
            <h1>test</h1>
            {/* <a href={props.item.url}>{props.item.title}</a> - Author: {props.item.author.name} */}
            {/* <a href={props.item.startTime}>{props.item.endTime}</a> -  */}
            Author: {props.item.urlInfoList.start}
           
        </div>
        
    );
}

export default Video;

// {
//     allRecordings{
//       id
//       startTime
//       endTime
//       urlInfoList{
//         start
//         end
//         url
//       }
//     }
//   }