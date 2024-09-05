import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useVideoData from "../hooks/useVideoData";
import PlayVideo from "./PlayVideo";
import useComment from "../hooks/useComment";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../utils/commentsSlice";
import { setPageToken } from "../utils/commentTokenSlice";
import { comment_api } from "../utils/api";
import Comment from "./Comment";
import { sideBarClose, sideBarToggler } from "../utils/toggleSlice";

const Watch = () => {
  const [urlSearchParam] = useSearchParams();
  const videoId = urlSearchParam.get("v");
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  const [videoDetail, setVideoDetail] = useState(null);
  const { token } = useSelector((store) => store.token);
  const { comments } = useSelector((store) => store.comments);
  const reference = useRef(null);
  const videoDetails = useVideoData(videoId);
  const commentsData = useComment(videoId);
  const [commentShow, setCommentShow] = useState(false);

  // video iframe details
  useEffect(() => {
    if (videoDetails) {
      setVideoDetail(videoDetails);
      dispatch(sideBarClose(false));
    }
  }, [videoDetails]);

  // comment initial detail handle
  useEffect(() => {
    if (commentsData) {
      console.log("comments data", commentsData.items);
      dispatch(setComments(commentsData.items));
      dispatch(setPageToken(commentsData.nextPageToken));
    }
  }, [commentsData]);

  // scroll event initial handle
  useEffect(() => {
    console.log("scroll effect called");
    const container = reference.current;

    //scroll handler
    const handleScroll = () => {
      console.log("handleScrollded called");
      console.log("container.scrollTop", container.scrollTop);
      console.log("container.clientHeight", container.clientHeight);
      console.log("container.scrollHeight", container.scrollHeight);
      if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 50
      ) {
        // fetch more comments
        fetchMoreComments();
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
  }, [comments]);

  const fetchMoreComments = async () => {
    if (!token) {
      return;
    }
    setLoad(true);
    const pageToken = "&pageToken=" + token;
    const api = comment_api + videoId + pageToken;
    const raw = await fetch(api);
    const data = await raw.json();

    dispatch(setComments([...comments, ...data.items]));
    dispatch(setPageToken(data.nextPageToken));
    setLoad(false);
  };

  if (videoDetail === null) {
    return;
  }
  return (
    <div
      ref={reference}
      className="w-[100vw] h-[90vh] overflow-y-auto md:flex  overflow-x-hidden"
    >
      {/* playVideo and comment */}
      <div className="w-full md:w-[65%] p-3 md:pl-6">
        <PlayVideo detail={videoDetail} />
        <hr className="mt-2 h-4 shadow-xl" />
        {/* comment section */}
        <div className={`w-full ${commentShow?"block":"hidden"} md:block relative`}>
          <span
            onClick={() => setCommentShow(false)}
            className="absolute top-1 right-1  md:hidden"
          >
            <i className="ri-close-line"></i>
          </span>
          <h2 className="font-bold text-xl">Comments</h2>
          {comments &&
            comments.map((c, i) => {
              return (
                <Comment
                  key={c.id}
                  detail={c.snippet.topLevelComment.snippet}
                  commentId={c.id}
                />
              );
            })}
          {load && <div>Loading....</div>}
        </div>
        {/* dummy comment */}
        <div onClick={()=>setCommentShow(true)} className={`w-[50%] mx-auto text-center rounded-lg bg-sky-200 ${commentShow?"hidden":"block"} md:hidden`}>
          See comments
        </div>
      </div>

      {/* live chat and suggetions */}
      <div className="w-[35%] bg-green-400">live chat</div>
    </div>
  );
};

export default Watch;
