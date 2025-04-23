"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <main className="px-4 py-10">
      <h1 className="text-5xl mb-6 text-center">Contact</h1>
      <div className="text-lg leading-relaxed max-w-prose mx-auto text-center mb-10">
        <p>Thank you for visiting my portfolio.</p>
        <p>If you’re interested in working together, have any questions, or just want to say hi—please feel free to get in touch!</p>
        <p>You can reach me via the form below or through my social links.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-2 border rounded h-32"
          required
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>
        {status === "success" && <p className="text-green-600">Message sent successfully!</p>}
        {status === "error" && <p className="text-red-600">Something went wrong. Please try again.</p>}
      </form>
    </main>
  );
}
