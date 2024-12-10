import type Candidate from '../interfaces/Candidate.interface';

type CandidateCardProps = {
  currentCandidate: Candidate;
};

// the component used to render a random user.
const CandidateCard = ({ currentCandidate }: CandidateCardProps) => {
  return (
    <>
        <section>
          <figure>
            <img src={`${currentCandidate.avatar_url}`} alt={`${currentCandidate.username}`} />
          </figure>
          <article>
            <h2>{currentCandidate.name ? `${currentCandidate.name}` : "No name provided"} (username: {`${currentCandidate.username}`})</h2>
            <p>
                <strong>Location:</strong> {currentCandidate.location ? `${currentCandidate.location}` : "No location provided" }
            </p>
            <p>
                <strong>Email:</strong> {currentCandidate.email ? `${currentCandidate.email}` : "No email provided"}
            </p>
            <p>
                <strong>Company:</strong> {currentCandidate.company ? `${currentCandidate.company}` : "No company provided"}
            </p>
            <a href={`${currentCandidate.html_url}`} target='_blank'>GitHub Profile</a>
          </article>
        </section>
    </>
  );
};

export default CandidateCard;
