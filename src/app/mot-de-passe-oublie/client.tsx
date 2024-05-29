"use client";
import { FormEvent, useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    // try {
    //   await firebase.auth().sendPasswordResetEmail(email);
    //   setSuccess(true);
    // } catch (e) {
    //   setError(e.message);
    // }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Mot de passe oublié</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={loading}
        >
          Envoyer
        </button>
        {error && <p className="text-danger">{error}</p>}
        {success && (
          <p className="text-success">
            Un email vous a été envoyé pour réinitialiser votre mot de passe.
          </p>
        )}
      </form>
    </div>
  );
}
