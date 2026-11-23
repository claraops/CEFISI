import { ArrowRight, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Formation } from '@/types/domain'

interface FormationCardProps {
  formation: Formation
}

export function FormationCard({ formation }: FormationCardProps) {
  return (
    <article className="card h-full border border-sky-100 bg-base-100 shadow-sm transition-shadow hover:shadow-md">
      <div className="card-body gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="badge badge-primary">{formation.niveau}</span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500">
            <Clock3 size={14} aria-hidden="true" />
            {formation.duree}
          </span>
        </div>
        <h3 className="card-title text-xl text-brand-ink">{formation.titre}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{formation.descriptionCourte}</p>
        <div className="card-actions mt-auto pt-2">
          <Link
            className="link link-primary font-semibold inline-flex items-center gap-1"
            to={`/formations/${formation.slug}`}
            aria-label={`Découvrir la formation ${formation.titre}`}
          >
            Découvrir la formation
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
