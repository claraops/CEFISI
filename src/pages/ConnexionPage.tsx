import { Info, LockKeyhole } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

export function ConnexionPage() {
  const [identifiant, setIdentifiant] = useState('')
  const [motDePasse, setMotDePasse] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Branchement prévu au lot 3 : POST /api/auth/login (besoin F8).
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-8 text-center">
        <span className="mx-auto grid size-12 place-items-center rounded-xl bg-brand-sky-light text-brand-sky-dark">
          <LockKeyhole size={24} aria-hidden="true" />
        </span>
        <h1 className="mt-4 text-3xl font-extrabold text-brand-ink">Se connecter</h1>
        <p className="mt-2 text-sm text-slate-600">
          Accès réservé aux étudiants, enseignants et administrateurs.
        </p>
      </div>

      <div className="alert alert-info mb-6 text-sm">
        <Info size={18} aria-hidden="true" />
        <span>
          Écran de structure : l’authentification réelle (identifiant ou email, mot de passe,
          réinitialisation et blocage après échecs) sera branchée sur l’API au lot 3 (F8, F10).
        </span>
      </div>

      <form className="card border border-sky-100 bg-base-100 shadow-sm" onSubmit={handleSubmit}>
        <div className="card-body gap-5">
          <div className="form-control w-full">
            <label className="label" htmlFor="login-identifiant">
              <span className="label-text font-semibold">Identifiant ou email</span>
            </label>
            <input
              id="login-identifiant"
              className="input input-bordered w-full"
              autoComplete="username"
              value={identifiant}
              onChange={(event) => setIdentifiant(event.target.value)}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label" htmlFor="login-mot-de-passe">
              <span className="label-text font-semibold">Mot de passe</span>
            </label>
            <input
              id="login-mot-de-passe"
              className="input input-bordered w-full"
              type="password"
              autoComplete="current-password"
              value={motDePasse}
              onChange={(event) => setMotDePasse(event.target.value)}
              required
            />
          </div>

          <div className="text-right text-sm">
            <Link className="link link-primary" to="/contact">
              Mot de passe oublié ?
            </Link>
          </div>

          <button className="btn btn-primary w-full" type="submit">
            Se connecter
          </button>

          <p className="text-center text-xs text-slate-500">
            Les comptes sont créés par un administrateur, sans auto-inscription (hypothèse H1).
          </p>
        </div>
      </form>
    </div>
  )
}
