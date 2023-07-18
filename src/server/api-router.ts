import express from "express";
import cors from "cors";
import { connectClient } from "./db";
import { Db } from "mongodb";

const router = express.Router();
router.use(cors());
router.use(express.json());

router.get("/contests", async (req, res) => {
  const client: Db = await connectClient();

  const contests = await client
    .collection("contests")
    .find()
    .project({
      _id: 0,
      id: 1,
      categoryName: 1,
      contestName: 1,
    })
    .toArray();
  res.send({ contests });
});

router.get("/contest/:contestId", async (req, res) => {
  const client: Db = await connectClient();

  const contest = await client
    .collection("contests")
    .findOne({ id: req.params.contestId });

  res.send({ contest });
});

router.post("/contest/:contestId", async (req, res) => {
  const client: Db = await connectClient();

  const { newNameValue } = req.body;

  const doc = await client
    .collection<{}>('contests')
    .findOneAndUpdate(
      { id: req.params.contestId },
      {
        $push: {
          names: {
            id: newNameValue.toLowerCase().replace(/\s/g, "-"),
            name: newNameValue,
            timeStamp: new Date(),
          },
        },
      },
      { returnDocument: "after" },
    );

  res.send({ updatedContest: doc.value });
});

export default router;
