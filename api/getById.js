// Get id from link
export default function getId(url) {
     const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
     let match = url.match(regExp);
  return (match && match[7] && match[7].length==11)? match[7] : false;
} 