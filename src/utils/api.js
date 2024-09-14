const API_KEY = "AIzaSyCesv97hzna_YZgjTRhe-TJHkYHdyPpVe0";
export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=27&key=" +
  API_KEY;

export const SINGLE_VIDEO_API =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY +
  "&id=";
export const CHANNEL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY +
  "&id=";
export const VIDEO_URL = "https://www.youtube.com/embed/";
export const comment_api =
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=30&key=" +
  API_KEY +
  "&videoId=";
export const replies_api =
  "https://www.googleapis.com/youtube/v3/comments?part=snippet&maxResults=50&key=" +
  API_KEY +
  "&parentId=";
  export const SUGGETION_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
  export const video_logo="data:image/png;base64,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"
  export const search_api =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=" +
  API_KEY +
  "&q=";
  export const user_profile="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8zMzMvLy8iIiIwMDAfHx8rKyslJSUoKCgbGxseHh78/PwZGRn29vY0NDTKyspaWlpAQEB+fn7h4eHZ2dmZmZnJycnt7e3w8PBkZGRNTU3R0dGzs7M5OTmvr6+goKBHR0eEhIS+vr5vb2+CgoKmpqZdXV2QkJASEhJzc3OamppUVFSsta06AAAGAklEQVR4nO3d23qqOhAA4JojB1EERBFQxCq1vv/7bai6266qBGKT0G/+615kmtMkDPjyAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8UV6YluvN/H2fxdFCd2Oezo32uwJRijnnmFKe+9vyL0UZVjPOGRl9IsjCKCld3S17jti3ra/RXUwIo6z6Ax059cfoZ3jXruS0WupuoZzF0b4f3weeZ7obKSPLrcfxNf1Id4Mdqu4Wt3TgmZVPdTe1H8/HIvHVEF3rbmwfC4ER+r+3ue7mdhfO2EQ8QmIPLsTFionH16B73U3uxk06DNFzL/JSd6M7qUQXmS8hslB3qzsox50DHI3Yajhp6vJWHtoOV7obLizoOgkv7Eh3ywWldr8ARyzR3XRBh44bxScc6267kGn3dfQKDaMTd727cERwqrv1AsL+AdbHjEB38wW8c4kIycj8s6LrC50J76Hmn/jD/utMg5k/TNdyEZLc+NQtkFloamPT8293JTUN603f9InoyQ3Ser8w/bAf9jk3fcV2ukNoMe2bdV+hle4QWpSyo5RMdIfQQnKzqFm6Q2ghHyHXHUKLvx9hJj0Pke4QWpRUNsJCdwgtItn9EB10h9BiKbsfWlvdIbRwZ72uSj9h459fSNzSfLCNv6mRusSocU93BG16XwefDeA+0ZObiHijO4B2rz0fWlwiNP2I/yJ15d0MUuOvaSTvMQZwmVjb90/cyMz4lbTh5b3XmiGsM43eJ6iBdGGt6DcTJ84gZmEj7XfAQL7uhovb9hqnzgD2wiuva0VUYzyo8r1w1HkqYtMPhv+Iu5bUWEPIZr7Juu37lj+8eu+sy4JqnYYV4HLf1G+VjvBcxId6q4/2Q4kyCjB2mmUjEqwSJvZr89cTio8DKPtyY/+t2SmcY71wLHdYYL1hpEllUlT3uDU+xGYvOHV81/cr8KEZc+tJWzcimjQbfXb5XyDbN7lwP9rRz6lnzZpbs0WAH23+hBZNB7qVTa5V4cjZmTpWvYp9C4ZY82bERUeH3xmryJ7tm9NE9P29BcYqI88Y6ezHPSJefVx+hnNmW+SfKAnCb4ePl9fcyvp30eWFgbem87cbewN6252z6WlVMIwthj4wjq1Rsj4XeGXkRhcj417AWCR3UhhmB5dZtYj3r4m/Wq1Oh2OVRedxuFwX9PYQdhKjKtyi4v6SyehhfbuxXrrN6d2swCqMWXDcl5g8zF4QRskm/Z6wuGG5XdGH6TkaGbNvlLwtPSOM8/x0nGdlPJ3G5b5KCoR/rC8/QuSGFEXHjtBBiTQLzBm3kNjZyjGiF9N7u90zmFAVHU4kS/UeQrn2u5tlnxsZcRN20p3eBJIPRFtxzUXDmWxhQjtb6zXxYvyLq8wFGetMbpJfnYQXOitOpQugxFBtb5d6sjXdgtBJ182GdJWeKF3V7aq6sKmM1tOJpaMowHrH0DIT3URVF+oq0YjUdWG9nOpIT+e/na99xXVc28iWWXZCZuoDlC4G7mas/tJmo3KQ1sNUfWGt3Kuinakv/3ZV5TNXWPV+oXSvaDiqJ6KynPRKeW66laqT7cFS/eGTg9qFRkMBeKFyv2+ofltIooa0b4S52mvFheoAR4SovZAKVS80o5HiD2VF95/7/RbVmWlaqM1LEVVeveBtVXYjn+l4lDgtVOU1yNnqKXnzqgcf0H0eggt9D0rDk3j9YV8W1fsSRlmIFOf1x3igu+rE2+S/95gb4cSAx9wviwr9TozIPhhSjPER49PjY7Zv0jfblxv21O2RsPHBiEqTL9xshft91PNneAizQHsNxi1pkD8slxWMz+Knve71865FljCxr5TfDc+ZVSYsnw+E+wRT1mu4IsuebeMhvJKwyI5szAVL184mhOFxUaW6y4PEeenGxw5mImESxKmdB5mxc+8uN1oHq9zCnKGbgRKEkIUxmiXzIf8iyzIqN0FymhFOHYqbn5lpfmkGU4pZXvi7KktDg7b1/txlGKZxud5v3t/fN/t1Vk6jcDGcSQcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiPsPW3BdUudCjfcAAAAASUVORK5CYII="

  export const notImage="data:image/png;base64,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"