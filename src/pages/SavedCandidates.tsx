import Candidate from "../interfaces/Candidate.interface";
import CandidateRow from "../components/CandidateRow";

const SavedCandidates = () => {
  if (!localStorage.getItem("Potential Candidates")) {
    return (
      <>
        <h1>You have not added any candidates yet!</h1>
      </>
    );
  } else {
    let storedCandidates = localStorage.getItem("Potential Candidates");
    console.log(storedCandidates);
    if (typeof storedCandidates === 'string') {
      const parsedCandidates = JSON.parse(storedCandidates);
      return (
        <>
          <h1>Potential Candidates</h1>
          <table>
            <caption>Saved Candidates</caption>
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Location</th>
                <th scope="col">Email</th>
                <th scope="col">Company</th>
                <th scope="col">Bio</th>
                <th scope="col">Reject</th>
              </tr>
            </thead>
            <tbody>
              {parsedCandidates.map((candidate: Candidate) => (
                <CandidateRow
                  key={candidate.id}
                  currentCandidate={candidate} />
              ))}
            </tbody>
          </table>
        </>
      )
    }
  }
};

export default SavedCandidates;
