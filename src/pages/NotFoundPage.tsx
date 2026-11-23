import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="text-7xl font-extrabold text-brand-sky-light">404</p>
      <h1 className="mt-4 text-3xl font-extrabold text-brand-ink">Cette page est introuvable</h1>
      <p className="mt-3 text-slate-600">
        La page demandée n’existe pas ou a été déplacée. Vous pouvez revenir à l’accueil ou
        parcourir nos formations.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link className="btn btn-primary" to="/">
          Retour à l’accueil
        </Link>
        <Link className="btn btn-outline btn-primary" to="/formations">
          Voir les formations
        </Link>
      </div>
    </section>
  )
}
