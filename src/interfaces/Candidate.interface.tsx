// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    [x: string]: any;
    id: number | null;
    name: string | null;
    username: string;
    location: string | null;
    avatar_url: string | null;
    email: string | null;
    html_url: string | null;
    company: string | null;
}