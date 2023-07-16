import { useEffect, useState } from "react";
import ContestPreview from "./contest-preview";
import Header from './header';
// import { fetchContestList } from "../api-client";

const ContestList = ({ initialContests, onContestClick }) => {
  const [contests, setContest] = useState(initialContests);

  useEffect(() => {
    // fetchContestList().then((contests) => {
    //   setContest(contests);
    // });
  }, []);

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
