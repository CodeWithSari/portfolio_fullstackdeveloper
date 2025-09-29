import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required!");
    } else {
      setError("");
      alert("Message sent successfully!");
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          label="Message"
          name="message"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={form.message}
          onChange={handleChange}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Box mt={2}>
          <Button type="submit" variant="contained">Send</Button>
        </Box>
      </form>
    </Box>
  );
}

export default Contact;
