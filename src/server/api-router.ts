import express from "express";

const router = express.Router();

import testData from '../test-data.json'

router.get("/contests", (req, res) => {
    //get the data from mongodb
    res.send(testData)
});

export default router;
