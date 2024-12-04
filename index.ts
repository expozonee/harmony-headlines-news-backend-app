import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fetchNews } from "./utils/fetchNews";
import { changeMood, initialMoods } from "./utils/moodHandle";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello Backend!");
});

app.get("/news", async (req, res) => {
  const news = await fetchNews();
  res.json(news);
});

app.post("/initial-mood", async (req, res) => {
  const data = req.body;
  const moods = await initialMoods(data.titles);
  res.json({ moods });
});

app.post("/change-mood", async (req, res) => {
  const { desiredNews, desiredMood } = req.body;
  const less = await changeMood(desiredNews, desiredMood);
  res.json({ less });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
