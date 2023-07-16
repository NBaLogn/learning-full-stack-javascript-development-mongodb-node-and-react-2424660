import { useEffect, useState } from "react";
import ContestPreview from "./contest-preview";
import { fetchContests } from "../api-client";

const ContestList = ({ initialContests }) => {
  const [contests, setContest] = useState(initialContests);

  useEffect(() => {
    fetchContests().then((data) => {
      setContest(data.contests);
    });
  }, []);

  return (
    <div className="contest-list">
      {contests.map((contest) => {
        return (
          <ContestPreview key={contest.id} contest={contest} />
        );
      })}
    </div>
  );
};

export default ContestList;
