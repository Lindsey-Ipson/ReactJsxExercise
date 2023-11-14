function TweetComponent({username, name, date, message}) {
  return (
    <div className='tweet'>
      <span className='tweet-data'>{username}</span>
      <span className='tweet-data'>{name}</span>
      <span className='tweet-data'>{date}</span>
      <p className='message'>{message}</p>
    </div>
  );
}