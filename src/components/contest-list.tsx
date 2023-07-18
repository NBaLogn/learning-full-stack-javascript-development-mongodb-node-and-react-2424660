import { useEffect, useState } from "react";

import { fetchContestList } from "../api-client";

import ContestPreview from "./contest-preview";
import Header from "./header";

const ContestList = ({ initialContests, onContestClick }) => {
  const [contests, setContest] = useState(initialContests ?? []);

  useEffect(() => {
    if (!initialContests) {
      fetchContestList().then((contests) => {
        setContest(contests);
      });
    }
  }, [initialContests]);

  return (
    <>
      <Header message="Naming Contests" />
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
    </>
  );
};

export default ContestList;
