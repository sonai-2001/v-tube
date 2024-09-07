import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useSuggetions from "../hooks/useSuggetions";
import Vcard from "./Vcard";
import { useSelector } from "react-redux";

const Search = () => {
  const [suggetions, setSuggetions] = useState(null);
  const { search } = useParams();
  const { isMenuOpen } = useSelector((store) => store.toggle);

  const data = useSuggetions(search);
  useEffect(() => {
    if (data) {
      setSuggetions(data);
    }
  }, [data]);
  if (suggetions === null) {
    return;
  }

  return (
    <div
      className={`p-3 ${
        isMenuOpen ? "w-[85vw]" : "w-[95vw]"
      } h-[90vh] overflow-y-auto `}
    >
      <div className="max-w-screen-lg">
        {suggetions.map((v, index) => {
          return (
            <Link to={`/watch/${v.id.videoId}`} key={v.id.videoId}>
              <Vcard details={v} sug={true} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
