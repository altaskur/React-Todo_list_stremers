import { useEffect, useState } from "react";

export default function useStreams() {
  const [streamers, setStreamers] = useState([]);
  const _update = () => {
    fetch("http://localhost:8084/api/get")
      .then((respose) => respose.json())
      .then((streamers) => {
        setStreamers(streamers);
      });
  };

  useEffect(() => {
    _update();
  }, []);

  return {
    streamers,
    updateStreamers: _update
  }
}
