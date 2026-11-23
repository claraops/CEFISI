import { describe, expect, it } from 'vitest'
import { formatDate, pluralize, slugify } from './format'

describe('formatDate', () => {
  it('formate une date ISO en français', () => {
    expect(formatDate('2026-12-11')).toBe('11 décembre 2026')
  })

  it('signale une date invalide', () => {
    expect(formatDate('pas-une-date')).toBe('Date invalide')
  })
})

describe('slugify', () => {
  it('retire les accents et normalise les séparateurs', () => {
    expect(slugify('Concepteur Développeur d’Applications')).toBe(
      'concepteur-developpeur-d-applications',
    )
  })
})

describe('pluralize', () => {
  it('gère le singulier et le pluriel', () => {
    expect(pluralize(1, 'formation')).toBe('formation')
    expect(pluralize(3, 'formation')).toBe('formations')
  })
})
