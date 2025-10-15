import Message from '../models/Message.js';

export const submitMessage = async (req, res) => {
  try {
    const msg = await Message.create(req.body);
    res.status(201).json({ ok: true, messageId: msg._id });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
