import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Vcard from "./Vcard";
import useVideos from "../hooks/useVideos";
import { VIDEO_API } from "../utils/api";
//o
const VideoCardContainer = () => {
  const menu = useSelector((store) => store.toggle.isMenuOpen);
  const { category } = useSelector((store) => store.category);
  const [videos, setVideos] = useState([]);
  const [token, setToken] = useState(null);
  const containerRef = useRef(null);

  const data = useVideos();

  // Reset videos, token, and scroll position when category changes
  useEffect(() => {
    if (data.items) {
      setVideos(data.items);
      setToken(data.pageToken);
      if (containerRef.current) {
        containerRef.current.scrollTop = 0; // Reset scroll position to top
      }
    }
  }, [ data.items]);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (
        container &&
        container.scrollTop + container.clientHeight >= container.scrollHeight - 50 // Adjust this threshold as needed
      ) {
        console.log("Reached bottom, load more data...");
        fetchMoreVideos();
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [videos, token]); // Re-run effect when videos or token changes

  const fetchMoreVideos = async () => {
    if (!token) return;

    const categoryId = category === "" ? "" : `&videoCategoryId=${category}`;
    const apiUrl = `${VIDEO_API}${categoryId}&pageToken=${token}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.items) {
        setVideos((prevVideos) => [...prevVideos, ...data.items]);
        setToken(data.nextPageToken);
      }
    } catch (error) {
      console.error("Error fetching more videos:", error);
    }
  };

  if (videos.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <div
      ref={containerRef}
      className={`${
        menu ? "w-[100vw] md:w-[85vw]" : " w-[84vw] md:w-[95vw]"
      } h-[90vh] overflow-y-auto flex justify-center gap-3 flex-wrap p-3`}
    >
      {videos.map((v) => (
        <Vcard details={v} key={v.id} />
      ))}
    </div>
  );
};

export default VideoCardContainer;
