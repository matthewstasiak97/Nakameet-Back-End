import Event from "../models/event.js";

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

    export const getEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const foundEvent = await Event.findById(eventId);

    if (!foundEvent) {
      res.status(404);
      throw new Error("Event not found.");
    }

    res.status(200).json(foundEvent);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

export const createEvent = async (req, res) => {
  try {
    const createdEvent = await Event.create(req.body);
    res.status(201).json(createdEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

        const updatedEvent = await Event.findByIdAndUpdate(eventId, req.body);

    if (!updatedEvent) {
      res.status(404);
      throw new Error("Event not found.");
    }

    res.status(200).json(updatedEvent);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      res.status(500).json({ err: err.message });
    }
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

  const deleted = await Event.findByIdAndDelete(eventId);

    if (!deleted) {
      res.status(404);
      throw new Error("Event not found.");
    }

    res.status(200).json(deleted);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      res.status(500).json({ err: err.message });
    }
  }
};
