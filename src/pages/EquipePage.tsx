import { SectionHeading } from '@/components/ui/SectionHeading'
import { equipe } from '@/data/site'

function initiales(nom: string): string {
  return nom
    .split(' ')
    .map((partie) => partie.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function EquipePage() {
  return (
    <>
      <section className="bg-brand-sky-light py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="L’équipe"
            title="Des formateurs à vos côtés"
            description="Une équipe pédagogique impliquée, composée de professionnels du numérique et de l’accompagnement à l’emploi."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {equipe.map((membre) => (
            <article key={membre.id} className="card border border-sky-100 bg-base-100 shadow-sm">
              <div className="card-body items-center text-center">
                <div className="avatar placeholder">
                  <div className="w-20 rounded-full bg-brand-sky-light text-brand-sky-dark">
                    <span className="text-2xl font-bold" aria-hidden="true">
                      {initiales(membre.nom)}
                    </span>
                  </div>
                </div>
                <h2 className="card-title mt-3 text-brand-ink">{membre.nom}</h2>
                <p className="text-sm font-semibold text-brand-sky-dark">{membre.fonction}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{membre.biographie}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-slate-500">
          Identités et biographies fictives — contenus de démonstration à remplacer par les données
          validées par la cliente (F4).
        </p>
      </section>
    </>
  )
}
