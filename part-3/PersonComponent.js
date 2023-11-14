const MAX_NAME_CHARS_TO_DISPLAY = 8;

function PersonComponent({name, age, hobbies}) {
  const voteText = age >= 18 ? 'Please go vote!' : 'You must be 18 to vote.';

  const hobbiesLis = hobbies.map(hobby => <li>{hobby}</li>);



  return (
    <div>
      <h2>{name.slice(0, MAX_NAME_CHARS_TO_DISPLAY)}</h2>
      <h3>{voteText}</h3>
      <p>Learn some information about this person:</p>
      <h4>Hobbies:</h4>
      <ul>
        {hobbiesLis}
      </ul>
    </div>
  );
}