import { useRef } from 'react'
import type { PortfolioItem } from '../data/types'
import { safeUrl } from '../lib/safeUrl'

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const open = () => dialogRef.current?.showModal()
  const close = () => { dialogRef.current?.close(); triggerRef.current?.focus() }
  const image = item.images.find((path) => safeUrl(path))
  const link = safeUrl(item.link)
  return <article className="portfolio-card">{image ? <img className="portfolio-card__cover" src={image} alt={item.clientName} loading="lazy" /> : <div className="portfolio-card__cover portfolio-card__cover--empty" aria-hidden="true" />}{item.logo && <img className="portfolio-card__logo" src={item.logo} alt="" loading="lazy" />}<p className="eyebrow">{item.industry}</p><h2>{item.clientName}</h2><p className="clamp-text">{item.description}</p><div className="chip-list">{item.services.map((service) => <span className="chip" key={service}>{service}</span>)}</div><button ref={triggerRef} className="button button--secondary" type="button" onClick={open}>View project</button><dialog ref={dialogRef} className="portfolio-dialog" onClick={(event) => { if (event.target === dialogRef.current) close() }}><button className="dialog-close" type="button" onClick={close} aria-label="Close project details">×</button><h2>{item.clientName}</h2><p>{item.description}</p><div className="chip-list">{item.services.map((service) => <span className="chip" key={service}>{service}</span>)}</div>{item.images.length > 0 && <div className="portfolio-gallery">{item.images.map((path) => safeUrl(path) && <img key={path} src={path} alt={`${item.clientName} project`} loading="lazy" />)}</div>}{link && <a className="button button--primary" href={link} target="_blank" rel="noopener noreferrer">View project website</a>}</dialog></article>
}
