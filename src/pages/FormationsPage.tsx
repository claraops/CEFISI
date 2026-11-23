import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { FormationCard } from '@/components/formations/FormationCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { formations } from '@/data/site'

export function FormationsPage() {
  const [recherche, setRecherche] = useState('')
  const [niveau, setNiveau] = useState('Tous les niveaux')

  const niveaux = useMemo(
    () => ['Tous les niveaux', ...new Set(formations.map((formation) => formation.niveau))],
    [],
  )

  const resultats = useMemo(() => {
    const terme = recherche.trim().toLocaleLowerCase('fr')
    return formations.filter((formation) => {
      const correspondAuTerme =
        terme === '' ||
        formation.titre.toLocaleLowerCase('fr').includes(terme) ||
        formation.descriptionCourte.toLocaleLowerCase('fr').includes(terme)
      const correspondAuNiveau = niveau === 'Tous les niveaux' || formation.niveau === niveau
      return correspondAuTerme && correspondAuNiveau
    })
  }, [recherche, niveau])

  return (
    <>
      <section className="bg-brand-sky-light py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Catalogue"
            title="Nos formations"
            description="Explorez les parcours proposés, filtrez par niveau et trouvez celui qui correspond à votre objectif."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="card mb-10 border border-sky-100 bg-base-100 shadow-sm">
          <div className="card-body grid gap-4 sm:grid-cols-2">
            <div className="form-control w-full">
              <label className="label" htmlFor="recherche-formations">
                <span className="label-text font-semibold">Rechercher une formation</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <Search size={18} aria-hidden="true" className="text-slate-400" />
                <input
                  id="recherche-formations"
                  className="grow"
                  type="search"
                  placeholder="Ex. : blockchain, développement…"
                  value={recherche}
                  onChange={(event) => setRecherche(event.target.value)}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label" htmlFor="filtre-niveau">
                <span className="label-text font-semibold">Niveau</span>
              </label>
              <select
                id="filtre-niveau"
                className="select select-bordered w-full"
                value={niveau}
                onChange={(event) => setNiveau(event.target.value)}
              >
                {niveaux.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <p className="mb-6 text-sm text-slate-500" role="status" aria-live="polite">
          {resultats.length} formation{resultats.length > 1 ? 's' : ''} trouvée
          {resultats.length > 1 ? 's' : ''}
        </p>

        {resultats.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resultats.map((formation) => (
              <FormationCard key={formation.id} formation={formation} />
            ))}
          </div>
        ) : (
          <div className="card border border-dashed border-sky-200 bg-base-200 p-10 text-center">
            <p className="text-lg font-semibold text-brand-ink">Aucune formation trouvée</p>
            <p className="mt-2 text-sm text-slate-600">
              Essayez un autre mot-clé ou sélectionnez « Tous les niveaux ».
            </p>
            <button
              className="btn btn-outline btn-primary mt-5"
              type="button"
              onClick={() => {
                setRecherche('')
                setNiveau('Tous les niveaux')
              }}
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </section>
    </>
  )
}
