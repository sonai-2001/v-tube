import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useSuggetions from "../hooks/useSuggetions";
import Vcard from "./Vcard";
import { useSelector } from "react-redux";
import { search_api } from "../utils/api";

const Search = () => {
  const [suggetions, setSuggetions] = useState([]);
  const [pageToken, setPageToken] = useState(null); // For pagination
  const { search } = useParams();
  const { isMenuOpen } = useSelector((store) => store.toggle);
  const container = useRef(null);

  const data = useSuggetions(search);

  // Load initial suggestions when the search term changes
  useEffect(() => {
    if (data && data.items) {
      setSuggetions(data.items);
      setPageToken(data.nextPageToken);
      if (container.current) {
        container.current.scrollTop = 0; // Reset scroll position when search changes
      }
    }
  }, [data]);

  const fetchMoreSuggetions = async () => {
    if (!pageToken) return;

    try {
      const apiUrl =  search_api+`${search}&pageToken=${pageToken}`; // Update with your actual API

      const response = await fetch(apiUrl);
      const newData = await response.json();

      if (newData.items) {
        setSuggetions((prev) => [...prev, ...newData.items]);
        setPageToken(newData.nextPageToken); // Update the pageToken for the next batch
      }
    } catch (error) {
      console.error("Error fetching more suggestions:", error);
    }
  };

  const handleScroll = () => {
    const curr = container.current;
    if (curr) {
      const { scrollTop, scrollHeight, clientHeight } = curr;

      // Check if the user has scrolled near the bottom
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        fetchMoreSuggetions(); // Fetch more data
      }
    }
  };

  useEffect(() => {
    const curr = container.current;
    if (curr) {
      curr.addEventListener("scroll", handleScroll);
      return () => {
        curr.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pageToken]); // Trigger on pageToken changes to keep fetching new suggestions

  if (!suggetions || suggetions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div
      ref={container}
      className={`p-3 ${
        isMenuOpen ? "w-[85vw]" : "w-[95vw]"
      } h-[90vh] overflow-y-auto`}
    >
      <div className="max-w-screen-lg">
        {suggetions.map((v) => (
          <Link to={`/watch/${v.id.videoId}`} key={v.id.videoId}>
            <Vcard details={v} sug={true} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
