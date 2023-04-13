import React from 'react'

import Timeline from "@mui/lab/Timeline"
import  TimelineContent  from '@mui/lab/TimelineContent'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import { Event } from '@mui/icons-material'
import  Typography  from '@mui/material/Typography'
const TimeLine = ({timelines=[]}) => {
  return (
    <div >
        <Timeline position="alternate">
    {
 timelines.map((item, index)=>(
  <TimelineItem key={index}>
    <TimelineOppositeContent sx={{ m:"auto 0"}}
        justifyContent="center"
              align='right'
  variant='body2'
      color='text.secondary'>
 {item.date.toString().split("T")[0]}
</TimelineOppositeContent>
   <TimelineSeparator>
    <TimelineDot>
     <Event/>
     </TimelineDot>
     <TimelineConnector/>
   </TimelineSeparator>
   <TimelineContent sx={{py:"12px", px:2}}>
  <Typography variant='h4'>{item.title}</Typography>
    <Typography >{item.description}</Typography>
 </TimelineContent>
  </TimelineItem>  ))}
        </Timeline>
    </div>
  )
}

export default TimeLine