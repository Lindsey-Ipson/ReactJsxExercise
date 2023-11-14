function App () {
return (
  <div>
    <TweetComponent username='username1' name='User1' date={new Date().toDateString()} message='Hello, this is the first tweet.' />
    <TweetComponent username='username2' name='User2' date={new Date().toDateString()} message='Hello, this is the second tweet.' />
    <TweetComponent username='username3' name='User3' date={new Date().toDateString()} message='Hello, this is the third tweet.' />
  </div>
)
}