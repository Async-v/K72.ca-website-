import React from 'react'


const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay loop muted src='https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1758003634~exp=1758007234~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=d7e055cca5451878708ba5611edad28ac9886be0e64cd054b41f908d8205b4d3&r=dXMtd2VzdDE%3D'></video>
    </div>
  )
}

export default Video