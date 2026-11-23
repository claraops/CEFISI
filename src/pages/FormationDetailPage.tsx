import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock3 } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FormationCard } from '@/components/formations/FormationCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { env } from '@/config/env'
import { formations } from '@/data/site'
import { NotFoundPage } from '@/pages/NotFoundPage'

type Onglet = 'programme' | 'blocs'

export function FormationDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [onglet, setOnglet] = useState<Onglet>('programme')
  const formation = formations.find((item) => item.slug === slug)

  if (!formation) {
    return <NotFoundPage />
  }

  const autresFormations = formations.filter((item) => item.id !== formation.id).slice(0, 3)

  return (
    <>
      <section className="bg-brand-sky-light py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            className="link link-primary inline-flex items-center gap-1 text-sm"
            to="/formations"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Toutes les formations
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="badge badge-primary">{formation.niveau}</span>
            <span className="inline-flex items-center gap-1 text-sm text-slate-600">
              <Clock3 size={16} aria-hidden="true" />
              {formation.duree}
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
            {formation.titre}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">{formation.descriptionCourte}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="btn btn-primary"
              href={env.candidatureUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Candidater à cette formation
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button
              className="btn btn-outline btn-primary"
              type="button"
              disabled
              title="Disponible avec l’API au lot 3"
            >
              Télécharger la plaquette PDF
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-10 lg:col-span-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-ink">Objectifs de la formation</h2>
            <ul className="mt-5 space-y-3">
              {formation.objectifs.map((objectif) => (
                <li key={objectif} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-accent"
                    size={18}
                    aria-hidden="true"
                  />
                  {objectif}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="tabs tabs-bordered" role="group" aria-label="Contenu de la formation">
              <button
                type="button"
                className={`tab text-base ${onglet === 'programme' ? 'tab-active font-semibold text-brand-sky-dark' : ''}`}
                onClick={() => setOnglet('programme')}
                aria-pressed={onglet === 'programme'}
              >
                Programme
              </button>
              <button
                type="button"
                className={`tab text-base ${onglet === 'blocs' ? 'tab-active font-semibold text-brand-sky-dark' : ''}`}
                onClick={() => setOnglet('blocs')}
                aria-pressed={onglet === 'blocs'}
              >
                Blocs de compétences
              </button>
            </div>

            <ul className="mt-6 space-y-3">
              {(onglet === 'programme' ? formation.programme : formation.blocsCompetences).map(
                (item) => (
                  <li key={item} className="rounded-xl border border-sky-100 p-4 text-slate-700">
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="card border border-sky-100 bg-base-200">
            <div className="card-body">
              <h2 className="card-title text-lg text-brand-ink">Informations pratiques</h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-brand-ink">Durée</dt>
                  <dd className="text-slate-600">{formation.duree}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-ink">Financement</dt>
                  <dd className="text-slate-600">{formation.financement}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-ink">Niveau</dt>
                  <dd className="text-slate-600">{formation.niveau}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="card border border-sky-100">
            <div className="card-body">
              <h2 className="card-title text-lg text-brand-ink">Débouchés</h2>
              <ul className="space-y-2 text-sm text-slate-600">
                {formation.debouches.map((debouche) => (
                  <li key={debouche} className="flex items-start gap-2">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {debouche}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Suite" title="Découvrir une autre formation" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {autresFormations.map((item) => (
            <FormationCard key={item.id} formation={item} />
          ))}
        </div>
      </section>
    </>
  )
}
