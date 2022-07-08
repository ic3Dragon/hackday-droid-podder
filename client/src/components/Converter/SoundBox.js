/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

const Playback = audio => {
  const [playing, setPlaying] = useState(false);
  const audioContext = new AudioContext();

  const playSound = audioContext.createBufferSource();
  playSound.buffer = audio;
  playSound.connect(audioContext.destination);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (playing) {
      playSound.start(audioContext.destination);
    } else {
      playSound.suspend(audioContext.destination);
    }
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const SoundBox = ({
  isLoading, submitted, audio,
}) => {
  const [playing, toggle] = Playback(audio);

  const handleLoading = () => {
    if (isLoading && submitted) {
      return <p> Sound is loading...</p>;
    } if (!isLoading && submitted) {
      return <button type="button" onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>;
    }
    return null;
  };

  return (
    <div>
      {handleLoading()}
    </div>
  );
};

// const SoundBox = ({ audioSrc }) => {
//   const [togglePlay, setTogglePlay] = usestate(false);
//   const audio = '';
//   useEffect(() => {
//     if (audioSrc) {
//       togglePlay
//     }
//   }, [audioSrc]);

//   return (
//     <div>
//       <button onClick={}></button>
//     </div>

//   );
// };

export default SoundBox;
