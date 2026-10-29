"use client";

import { useState } from "react";

const EMAIL = "adeleodderskov@gmail.com";
const SUBJECT = "Hello from adelewegner.com";

// The message box on the typewriter's paper. The site has no server to send
// mail from, so Send opens the visitor's own mail app with the message
// already written and addressed to Adele; they press send there.
export default function MessageForm() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  function send(event: React.FormEvent) {
    event.preventDefault();
    if (!message.trim()) {
      setError(true);
      return;
    }
    const body = name.trim() ? `${message}\n\n${name.trim()}` : message;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      SUBJECT,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={send} className="mt-[3cqw]" noValidate>
      {/* Set out like a letter: the greeting, the message, then a
          signature line and Send. */}
      <p className="text-[3.4cqw]">Dear Adele,</p>
      <label htmlFor="message" className="sr-only">
        Your message
      </label>
      <textarea
        id="message"
        rows={7}
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
          setError(false);
        }}
        placeholder="Write your message here…"
        aria-invalid={error}
        aria-describedby={error ? "message-error" : undefined}
        className="mt-[1.5cqw] block w-full resize-none bg-transparent text-[3.4cqw] leading-[1.7] text-black outline-none placeholder:text-black/40"
      />
      {error && (
        <p id="message-error" className="text-[2.6cqw]">
          Write a message first.
        </p>
      )}
      <div className="mt-[3cqw] flex items-end justify-between gap-[3cqw]">
        <label className="min-w-0 flex-1 text-[3.4cqw]">
          <span className="sr-only">Your name</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="— your name"
            autoComplete="name"
            className="w-full bg-transparent text-black outline-none placeholder:text-black/40"
          />
        </label>
        <button
          type="submit"
          className="shrink-0 rounded-full border-2 border-black bg-[#ff7eb6] px-[3cqw] py-[0.8cqw] text-[3cqw] text-black shadow-[2px_2px_0_#000] transition duration-200 ease-out hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_#000] motion-reduce:transition-none"
        >
          Send &rarr;
        </button>
      </div>
    </form>
  );
}
