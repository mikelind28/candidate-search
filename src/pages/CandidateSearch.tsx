import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

// this is the homepage. 
const CandidateSearch = () => {

  const [randomUserName, setRandomUserName] = useState<string>("");

  // finds a random user using the searchGithub function, saves the username to randomUserName.
  useEffect(() => {
    searchGithub()
    .then((userArray) => {
      const username = userArray[0].login;
      setRandomUserName(username);
    });
  }, []);

  // when you click the deny button, it loads another random user.
  function handleDeny() {
    searchGithub()
    .then((userArray) => {
      const username = userArray[0].login;
      setRandomUserName(username);
    });
  }

  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    id: 0,
    name: "",
    username: "",
    location: "",
    avatar_url: "",
    email: "",
    html_url: "",
    company: ""
  });

  // builds a Candidate object based off of the username of the found user. the username is passed into another API call, the searchGithubUser function.
  useEffect(() => {
    searchGithubUser(randomUserName)
    .then((user) => {
      const newCandidate: Candidate = {
      id: user.id,
      name: user.name,
      username: user.login,
      location: user.location,
      avatar_url: user.avatar_url,
      email: user.email,
      html_url: user.html_url,
      company: user.company
      };
      setCurrentCandidate(newCandidate);
    });
  }, [randomUserName]);

  // if you accept the user, it saves them to local storage. 
  function handleAccept() {
    if (!localStorage.getItem("Potential Candidates")) {
      let potentialCandidates: Candidate[] = [];
      potentialCandidates.push(currentCandidate);
      localStorage.setItem("Potential Candidates", JSON.stringify(potentialCandidates));
      handleDeny();
    } else {
      const storedCandidates = localStorage.getItem("Potential Candidates");
      let parsedCandidates: Candidate[] = [];
      if (typeof storedCandidates === 'string') {
        parsedCandidates = JSON.parse(storedCandidates);
      }
      parsedCandidates.push(currentCandidate);
      localStorage.setItem("Potential Candidates", JSON.stringify(parsedCandidates));
      handleDeny();
    }
  }

  // render the current randomly found github user.
  return (
    <>
      <h1>Candidate Search</h1>
      <CandidateCard 
      currentCandidate={currentCandidate}
      />
      <div>
        <button onClick={handleDeny}>❌</button>
        <button onClick={handleAccept}>✅</button>
      </div>
    </>
  );
};

export default CandidateSearch;

