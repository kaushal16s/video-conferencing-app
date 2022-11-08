import React, { useEffect, useRef } from 'react';
import './video.css'
export const VideoPlayer = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <div>
      Uid: {user.uid}
      <div class={'videocontainerx'}
        ref={ref}
        style={{ width: '200px', height: '200px' , borderRadius:'3px',borderColor:'yellow'}}
      ></div>
    </div>
  );
};