import { useEffect, useState } from "react";
import ContestPreview from "./contest-preview";
import { fetchContests } from "../api-client";

const ContestList = ({ initialContests, onContestClick }) => {
  const [contests, setContest] = useState(initialContests);

  useEffect(() => {
    // fetchContests().then((contests) => {
    //   setContest(contests);
    // });
  }, []);

  return (
    <div className="contest-list">
      {contests.map((contest) => {
        return (
          <ContestPreview
            key={contest.id}
            contest={contest}
            onClick={onContestClick}
          />
        );
      })}
    </div>
  );
};

export default ContestList;
