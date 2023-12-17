const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all contacts" });
});

const getContact = async (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
};

const createContact = asyncHandler(async (req, res) => {
  console.log("req body is:", req.body);
  const { name, Number, email } = req.body;
  if (!name || !Number || !email) {
    res.status(400);
    throw new Error("All Fields are Mandatory!");
  }
  res.status(201).json({ message: "Create contacts" });
});

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});
module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
