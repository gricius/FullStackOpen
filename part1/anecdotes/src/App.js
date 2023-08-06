import { useState } from 'react'

const TopVotedAnecdote = ({ anecdotes, votes }) => {
  const maxVotes = Math.max(...votes);
  const topVotedIndex = votes.indexOf(maxVotes);
  if (maxVotes === 0) {
    return (
      <div>
        <h2>Anecdote with the most votes</h2>
        <div>No votes so far, please vote for the one or more.</div>
      </div>
    );
  } else {
      return (
        <div>
          <h2>Anecdote with the most votes</h2>
          <div>{anecdotes[topVotedIndex]}</div>
          <p>Votes: {votes[topVotedIndex]}</p>
        </div>
      );
    };
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.',
  ];

  const anecdoteOfTheDay = Math.floor(Math.random() * anecdotes.length);
  const [selected, setSelected] = useState(anecdoteOfTheDay);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const selectRandomAnecdote = () => {
    const randomNr = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNr);
    console.log(randomNr);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <div>
        <h2>Anecdote of the Day</h2>
        <div>{anecdotes[selected]}</div>
        <p>Votes: {votes[selected]}</p>
        <button onClick={handleVote}>Vote</button>
        <button onClick={selectRandomAnecdote}>Next Anecdote</button>
      </div>
      <TopVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
