import { RequestHandler } from "express";
import Video from "./Video";

export const createVideos: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({ url: req.body.url });
  if (videoFound)
    return res.status(301).json({ message: "The url already exist" });

  const video = new Video(req.body);
  const savedVideo = await video.save();
  res.json(savedVideo);
};

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    return res.send(videos);
  } catch (error) {
    res.json(error);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findById(req.params.id);
  if (!videoFound) return res.status(204).json();
  return res.json(videoFound);
};

export const deleteVideo: RequestHandler = async (req, res) => {
  const videoDeleted = await Video.findByIdAndDelete(req.params.id);
  if (!videoDeleted) return res.status(204).json();
  return res.send(videoDeleted);
};

export const updateVideos: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { title, description, url } = req.body;

  try {
    const updateVideo = await Video.findByIdAndUpdate(
      id,
      {
        title,
        description,
        url,
      },
      { new: true }
    );
    if (!updateVideo) return res.status(404).send("video not found");
    return res.send(updateVideo);
  } catch (error) {
    res.send(error);
  }
};
