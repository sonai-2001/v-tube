import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { VIDEO_API } from "../utils/api";

const useVideos = () => {
  const { category } = useSelector((store) => store.category);
  const [videos, setVideos] = useState(null);
  const [pageToken, setPageToken] = useState(null);
//ojm
  useEffect(() => {
    getVideos();
  }, [category]);

  const getVideos = async () => {
    const categoryId = category === "" ? "" : `&videoCategoryId=${category}`;
    const apiUrl = `${VIDEO_API}${categoryId}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    setVideos(data.items);
    setPageToken(data.nextPageToken);
    console.log("Fetched videos:", data.items);
  };

  return { pageToken, items: videos };
};

export default useVideos;
