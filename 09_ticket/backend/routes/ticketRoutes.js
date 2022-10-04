const express = require('express');
const router = express.Router();
const {
  getTicket,
  getTickets,
  createTicket,
  updateTicket,
  deleteTicket,
} = require('../controllers/ticketController');
const { protect } = require('../middleware/authMiddleware');

router.get('/:id', protect, getTicket);
router.get('/', protect, getTickets);
router.post('/', protect, createTicket);
router.put('/:id', protect, updateTicket);
router.delete('/:id', protect, deleteTicket);

module.exports = router;
