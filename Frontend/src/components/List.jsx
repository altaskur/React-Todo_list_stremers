import { useEffect } from "react";
import useStreams from "../hooks/useStreamers";
import "./list.css";

export default function List() {
  const { streamers, updateStreamers } = useStreams();

  useEffect(() => {
    console.log(streamers);
  }, []);

  const updateLike = (streamer) => {
    return () => {
      fetch(`http://localhost:8084/api/set/${streamer}`, { method: "POST" });
      updateStreamers();
    };
  };

  return (
    <ul className="list">
      {streamers.length ? (
        streamers.map((streamer, i) => (
          <li
            className="streamer"
            key={`streamer_${i}_${streamer.name}`}
            onClick={updateLike(streamer.name)}
          >
            <img src={streamer.avatar} alt={`imagen de ${streamer.name}`} />
            <p>{streamer.name}</p>
            {streamer.like ? (
              <button onClick={updateLike(streamer.name)} className="like">
                ❤️
              </button>
            ) : (
              <button onClick={updateLike(streamer.name)} className="like">
                💙
              </button>
            )}
          </li>
        ))
      ) : (
        <li>
          <h1>Cargando</h1>
        </li>
      )}
    </ul>
  );
}
