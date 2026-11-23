import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { valeursPedagogiques } from '@/data/site'

export function ApprochePage() {
  return (
    <>
      <section className="bg-brand-sky-light py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Approche pédagogique"
            title="Apprendre un métier, pas seulement une théorie"
            description="Nos parcours alternent apports concrets, projets et accompagnement individualisé pour préparer efficacement l’entrée dans l’emploi."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {valeursPedagogiques.map((valeur) => (
            <article
              key={valeur.titre}
              className="card border border-sky-100 bg-base-100 shadow-sm"
            >
              <div className="card-body">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-sky-light text-brand-sky-dark">
                  <CheckCircle2 size={22} aria-hidden="true" />
                </span>
                <h2 className="card-title mt-3 text-brand-ink">{valeur.titre}</h2>
                <p className="text-sm leading-relaxed text-slate-600">{valeur.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-8 rounded-box bg-base-200 p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-2xl font-bold text-brand-ink">Un parcours en trois temps</h2>
            <ol className="mt-6 space-y-5">
              <li>
                <span className="badge badge-primary">Étape 1</span>
                <p className="mt-2 font-semibold text-brand-ink">Cadrer votre projet</p>
                <p className="text-sm text-slate-600">
                  Un échange pour comprendre votre parcours, vos objectifs et votre situation.
                </p>
              </li>
              <li>
                <span className="badge badge-primary">Étape 2</span>
                <p className="mt-2 font-semibold text-brand-ink">Se former et pratiquer</p>
                <p className="text-sm text-slate-600">
                  Des cours, des TD et des TP, puis un projet fil rouge en entreprise.
                </p>
              </li>
              <li>
                <span className="badge badge-primary">Étape 3</span>
                <p className="mt-2 font-semibold text-brand-ink">Intégrer l’emploi</p>
                <p className="text-sm text-slate-600">
                  Un accompagnement à la recherche d’alternance et à la préparation des entretiens.
                </p>
              </li>
            </ol>
          </div>
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-brand-ink">Envie de nous rencontrer ?</h2>
              <p className="text-sm text-slate-600">
                Posez vos questions à l’équipe pédagogique ou inscrivez-vous à une réunion
                d’information (lien externe à confirmer avec la cliente).
              </p>
              <div className="card-actions mt-4">
                <Link className="btn btn-primary" to="/contact">
                  Nous contacter
                </Link>
                <Link className="btn btn-outline btn-primary" to="/equipe">
                  Découvrir l’équipe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
