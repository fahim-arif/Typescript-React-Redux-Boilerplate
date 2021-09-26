import { useState } from "react";
import { useSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { data, loading, error } = useSelector((state) => state.repositories);

  const { SearchRepositories } = useActions();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    SearchRepositories(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setTerm(e.target.value)} type='text' />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading....</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;