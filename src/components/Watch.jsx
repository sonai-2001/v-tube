import React, { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import useVideoData from "../hooks/useVideoData";
import PlayVideo from "./PlayVideo";
import useComment from "../hooks/useComment";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../utils/commentsSlice";
import { setPageToken } from "../utils/commentTokenSlice";
import { comment_api } from "../utils/api";
import Comment from "./Comment";
import { sideBarClose } from "../utils/toggleSlice";
import ChatBox from "./ChatBox";
import Suggetion from "./Suggetion";

const Watch = () => {
  const {videoId}=useParams()
  const [messages, setMessages] = useState([]);

  console.log(videoId)
  
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  const [videoDetail, setVideoDetail] = useState(null);
  const { token } = useSelector((store) => store.token);
  const { comments } = useSelector((store) => store.comments);
  const reference = useRef(null);
  const videoDetails = useVideoData(videoId);
  console.log("useVideo details",videoDetails)
  const commentsData = useComment(videoId);
  const [commentShow, setCommentShow] = useState(false);
  const [categoryId,setCategoryId] = useState('');

  // video iframe details
  useEffect(() => {
    if (videoDetails) {
      setVideoDetail(videoDetails);
      setCategoryId(videoDetails.items[0].snippet.categoryId);
      dispatch(sideBarClose(false));
      if (reference.current) {
        reference.current.scrollTop = 0; // Reset scroll position to top
      }

    }
  }, [videoDetails,videoId]);

  // comment initial detail handle
  useEffect(() => {
    if (commentsData) {
      console.log("comments data", commentsData.items);
      dispatch(setComments(commentsData.items));
      dispatch(setPageToken(commentsData.nextPageToken));
      setMessages([])
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
      className="w-[100vw] h-[90vh] overflow-y-auto lg:flex  overflow-x-hidden"
    >
      {/* playVideo and comment */}
      <div className="w-full lg:w-[65%] p-3 md:pl-6">
        <PlayVideo detail={videoDetail} />
        <hr className="mt-2 h-4 shadow-xl" />
        {/* comment section */}
        <div
          className={`w-full ${
            commentShow ? "block" : "hidden"
          } lg:block relative`}
        >
          <span
            onClick={() => setCommentShow(false)}
            className="absolute top-1 right-1  lg:hidden"
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
        {/* see comments btn */}
        <div
          onClick={() => setCommentShow(true)}
          className={`w-[50%] mx-auto text-center rounded-lg bg-sky-200 mt-4 ${
            commentShow ? "hidden" : "block"
          } lg:hidden`} // Ensure this only hides the button for larger screens
        >
          See comments
        </div>
      </div>

      {/* live chat and suggetions */}
      <div className="w-full lg:w-[35%]   px-2">
        {/* live chat */}
        <h1 className="text-center">Live chat</h1>
        <ChatBox messages={messages} setMessages={setMessages} />
        <hr className="mt-3 h-[1px] bg-slate-300" />
        {/* suggetions */}
        <Suggetion categoryId={categoryId} videoId={videoId}/>
      </div>
    </div>
  );
};

export default Watch;
