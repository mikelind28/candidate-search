// imports
import Candidate from "../interfaces/Candidate.interface";

interface candidateRowProps {
    currentCandidate: Candidate;
}

const CandidateRow = ({currentCandidate}: candidateRowProps) => {

    // removes a user from local storage if the reject button is clicked.
    function handleRemove() {
        const storedCandidates = localStorage.getItem("Potential Candidates");
        if (typeof storedCandidates === 'string') {
            const parsedCandidates = JSON.parse(storedCandidates);
            for (let i = 0; i < parsedCandidates.length; i++) {
                if (parsedCandidates[i].id === currentCandidate.id) {
                    parsedCandidates.splice(i, 1);
                    localStorage.setItem("Potential Candidates", JSON.stringify(parsedCandidates));
                    window.location.reload();
                }
            }
        }
    }

    // renders user info that's been passed in as a prop.
    return (
        <>
            <tr>
                <th scope="row"><img src={`${currentCandidate.avatar_url}`} className="table-img"></img></th>
                <td>{`${currentCandidate.name}`}</td>
                <td>{`${currentCandidate.location}`}</td>
                <td>{`${currentCandidate.email}`}</td>
                <td>{`${currentCandidate.company}`}</td>
                <td><button onClick={handleRemove}>❌</button></td>
            </tr>
        </>
      );
};

export default CandidateRow;
