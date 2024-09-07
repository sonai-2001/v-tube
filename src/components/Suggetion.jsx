import React, { useEffect, useState } from "react";
import useVideos from "../hooks/useVideos";
import Vcard from "./Vcard";
import { Link } from "react-router-dom";

const Suggetion = ({ categoryId, videoId }) => {
  console.log(categoryId)
  const suggetionsData = useVideos(categoryId);
  const [sug, setSug] = useState(null);
  useEffect(() => {
    if (suggetionsData.items) {
      console.log("suggetion items", suggetionsData.items);
      const newItems = suggetionsData.items
        .filter((item, index) => item.id != videoId)
        .slice(0, 10);
      setSug(newItems);
    }
  }, [suggetionsData.items,videoId]);

  if (sug === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full py-2 px-1">
      <h1 className="text-center">Related Videos</h1>
      <div className="mt-2">
        {sug.map((v, i) => {
          return (
            <Link to={`/watch/${v.id}`} key={v.id}>
              <Vcard details={v} sug={true} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Suggetion;
