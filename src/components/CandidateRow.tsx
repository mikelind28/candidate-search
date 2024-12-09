// imports
import Candidate from "../interfaces/Candidate.interface";

interface candidateRowProps {
    currentCandidate: Candidate;
}

const CandidateRow = ({currentCandidate}: candidateRowProps) => {
    console.log(`this is current candidate id: ${currentCandidate.id}`);

    function handleRemove() {
        const storedCandidates = localStorage.getItem("Potential Candidates");
        if (typeof storedCandidates === 'string') {
            const parsedCandidates = JSON.parse(storedCandidates);
            for (let i = 0; i < parsedCandidates.length; i++) {
                if (parsedCandidates[i].id === currentCandidate.id) {
                    console.log(i);
                    console.log(parsedCandidates[i].id);
                    console.log(currentCandidate.id);
                    parsedCandidates.splice(i, 1);
                    console.log(parsedCandidates);
                    localStorage.setItem("Potential Candidates", JSON.stringify(parsedCandidates));
                    window.location.reload();
                }
            }
        }
    }

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
