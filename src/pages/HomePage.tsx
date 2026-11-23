import { ArrowRight, ArrowUpRight, CalendarDays, CheckCircle2, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FormationCard } from '@/components/formations/FormationCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { env } from '@/config/env'
import {
  chiffresCles,
  financements,
  formations,
  labelsEtPartenaires,
  prochainesSessions,
} from '@/data/site'
import type { StatutRecrutement } from '@/types/domain'

const libellesStatut: Record<StatutRecrutement, string> = {
  ouvert: 'Recrutement ouvert',
  complet: 'Complet',
  'a-venir': 'Bientôt ouvert',
}

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-sky-light">
        <div className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-white/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <span className="badge badge-primary gap-2 px-4 py-3">
              <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              Recrutement ouvert pour la prochaine rentrée
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              Formez-vous aux métiers de l’informatique
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Reconversion ou alternance : CEFISI vous accompagne vers un métier d’avenir avec des
              formations concrètes, reconnues et pensées avec les entreprises.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn btn-primary btn-lg" to="/formations">
                Découvrir nos formations
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a
                className="btn btn-outline btn-primary btn-lg"
                href={env.candidatureUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Candidater
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="card border border-sky-200 bg-base-100/90 shadow-xl backdrop-blur">
            <div className="card-body">
              <h2 className="card-title text-xl text-brand-ink">Prochaines rentrées</h2>
              <ul className="mt-2 space-y-3">
                {prochainesSessions.slice(0, 3).map((session) => {
                  const formation = formations.find((item) => item.id === session.formationId)
                  return (
                    <li
                      key={session.id}
                      className="flex flex-col gap-1 rounded-xl border border-sky-100 p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="font-semibold text-brand-ink">{formation?.titre}</p>
                        <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                          <CalendarDays size={15} aria-hidden="true" />
                          {session.dates}
                          <span aria-hidden="true">·</span>
                          <MapPin size={15} aria-hidden="true" />
                          {session.lieu}
                        </p>
                      </div>
                      <span
                        className={`badge ${
                          session.statutRecrutement === 'ouvert' ? 'badge-success' : 'badge-info'
                        }`}
                      >
                        {libellesStatut[session.statutRecrutement]}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Chiffres clés" className="border-b border-sky-100 bg-base-100">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {chiffresCles.map((chiffre) => (
            <div key={chiffre.libelle} className="text-center">
              <dt className="sr-only">{chiffre.libelle}</dt>
              <dd>
                <span className="block text-3xl font-extrabold text-brand-sky-dark sm:text-4xl">
                  {chiffre.valeur}
                </span>
                <span className="mt-2 block text-sm text-slate-600">{chiffre.libelle}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nos formations"
          title="Un parcours adapté à votre projet"
          description="Quatre spécialités pour répondre aux besoins des entreprises et aux ambitions de chaque apprenant."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {formations.map((formation) => (
            <FormationCard key={formation.id} formation={formation} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link className="btn btn-outline btn-primary" to="/formations">
            Voir tout le catalogue
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-base-200 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Financement"
              title="Votre formation peut être financée"
              description="Plusieurs dispositifs existent selon votre situation. L’équipe vous aide à identifier le plus adapté."
            />
            <ul className="mt-6 space-y-3">
              {financements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-accent"
                    size={18}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Labels & partenaires"
              title="Des garanties pour les candidats"
              description="Des repères pour choisir votre organisme de formation en toute confiance."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {labelsEtPartenaires.map((label) => (
                <span
                  key={label}
                  className="badge badge-lg badge-outline border-primary text-primary"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-box border border-sky-100 bg-base-100 p-6">
              <p className="font-semibold text-brand-ink">Besoin d’en savoir plus ?</p>
              <p className="mt-2 text-sm text-slate-600">
                Échangez avec l’équipe pédagogique ou inscrivez-vous à une réunion d’information.
              </p>
              <Link className="link link-primary mt-3 inline-block font-semibold" to="/contact">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="card items-center gap-6 bg-brand-sky-dark p-8 text-center text-white sm:p-12">
          <div className="card-body items-center">
            <h2 className="card-title text-3xl text-white sm:text-4xl">
              Prêt à donner un nouvel élan à votre carrière ?
            </h2>
            <p className="max-w-2xl text-sky-100">
              Candidater est simple : le lien vous redirige vers la plateforme dédiée, qui reste
              inchangée.
            </p>
            <a
              className="btn btn-lg bg-white text-brand-sky-dark hover:bg-sky-50"
              href={env.candidatureUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Candidater maintenant
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
