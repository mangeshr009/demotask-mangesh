const event = require("../model/eventSchema");

const createEvent = async (req, res) => {
  try {
    let { eventname, createdBy, invitedUsers } = req.body;
    createdBy = req.user.token_payload.userid
    const result = await event.create({ eventname, createdBy, invitedUsers });
    res.status(200).json({
      message: "Event created successfully",
      data:result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const result = await event.find();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getEventById = async (req, res) => {
  try {
    const eventId = req.params.id;
    const result = await event.findById(eventId);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const { eventname, createdBy, invitedUsers } = req.body;
    const updatedEvent = await event.findByIdAndUpdate(
      eventId,
      { eventname, createdBy, invitedUsers },
      { new: true }
    );

    if (updatedEvent) {
      res.status(200).json({
        message: "Event updated successfully",
        data: updatedEvent,
      });
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const deletedEvent = await event.findByIdAndDelete(eventId);

    if (deletedEvent) {
      res.status(200).json({
        message: "Event deleted successfully",
        data: deletedEvent,
      });
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
