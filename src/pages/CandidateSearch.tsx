import { useState, useEffect, ReactNode, SetStateAction } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {

  const [randomUserName, setRandomUserName] = useState<string>("");

  useEffect(() => {
    searchGithub()
    .then((userArray) => {
      const username = userArray[0].login;
      setRandomUserName(username);
    });
  }, []);

  console.log(`this is username: ${randomUserName}`);

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

  return (
    <>
      <h1>Candidate Search</h1>
      <CandidateCard 
      currentCandidate={currentCandidate}
      />
      <button onClick={handleDeny}>❌</button>
      <button onClick={handleAccept}>✅</button>
    </>
  );
};

export default CandidateSearch;

