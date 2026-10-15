import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { PageBanner } from '../components/PageBanner'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { Seo } from '../components/Seo'
import { Input, Select, Textarea } from '../components/FormFields'
import { buildMailtoUrl, buildWhatsAppUrl, buildGmailWebUrl, sanitize, validators, type FormData } from '../lib/forms'
import { isContentEnabled } from '../lib/content'

function ContactForm({ project }: { project: boolean }) {
  const content = useContent()
  const recipientEmail = 'thetaank360@gmail.com'
  const recipientWhatsApp = content.contact.whatsapp || '918966068380'

  const [values, setValues] = useState<FormData>({
    'Service required': project ? '' : 'CRM'
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const statusRef = useRef<HTMLDivElement>(null)

  const fields = project
    ? ['Name', 'Email', 'Phone', 'Company', 'Service required', 'Project type', 'Budget', 'Timeline', 'Message']
    : ['Name', 'Email', 'Phone', 'Company', 'Service required', 'Budget', 'Timeline', 'Message']

  const serviceOptions = [
    'CRM',
    ...content.services
      .filter((item) => isContentEnabled(item.status))
      .map((item) => item.name)
      .filter((name) => name !== 'CRM')
  ]

  useEffect(() => {
    if (submitted) {
      statusRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [submitted])

  const setValue = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const validate = () => {
    const next: Record<string, string> = {}
    fields.forEach((field) => {
      const value = values[field] || ''
      if (['Name', 'Email', 'Phone', 'Service required', 'Message'].includes(field)) {
        next[field] = validators.required(value)
      }
      if (field === 'Email' && value) {
        next[field] = validators.email(value)
      }
      if (field === 'Phone' && value) {
        next[field] = validators.indianPhone(value)
      }
      if (field === 'Message' && value) {
        next[field] = validators.minLength(10)(value)
      }
    })
    const clean = Object.fromEntries(Object.entries(next).filter(([, val]) => val))
    setErrors(clean)
    return Object.keys(clean).length === 0
  }

  const sanitizedData = Object.fromEntries(
    Object.entries(values).map(([k, v]) => [k, sanitize(v)])
  )

  const subject = project
    ? `[Taank360 Project Enquiry] ${values['Service required'] || 'New Project'} - ${values.Name || ''}`
    : `[Taank360 General Enquiry] ${values['Service required'] || 'Enquiry'} - ${values.Name || ''}`

  const gmailWebUrl = buildGmailWebUrl(sanitizedData, recipientEmail, subject)
  const mailtoUrl = buildMailtoUrl(sanitizedData, recipientEmail, subject)
  const whatsAppUrl = buildWhatsAppUrl(sanitizedData, recipientWhatsApp)

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      const firstError = Object.keys(errors)[0] || fields[0]
      document.getElementById(firstError.toLowerCase().replace(/[^a-z0-9]+/g, '-'))?.focus()
      return
    }
    setSubmitted(true)
    // Directly opens Gmail web composer with To: thetaank360@gmail.com, Subject, and full Body filled
    window.open(gmailWebUrl, '_blank', 'noopener,noreferrer')
  }

  const handleSendWhatsApp = () => {
    if (!validate()) {
      return
    }
    setSubmitted(true)
    window.open(whatsAppUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="contact-form" onSubmit={handleSendEmail} noValidate>
      {fields.map((field) => {
        if (field === 'Message') {
          return (
            <Textarea
              key={field}
              name={field}
              label={field}
              value={values[field] || ''}
              onChange={(e) => setValue(field, e.target.value)}
              error={errors[field]}
              placeholder="Tell us about your requirement or project goals..."
              required
              rows={5}
            />
          )
        }

        if (field === 'Email') {
          return (
            <Input
              key={field}
              name={field}
              type="email"
              label={field}
              value={values[field] || ''}
              onChange={(e) => setValue(field, e.target.value)}
              error={errors[field]}
              placeholder="name@company.com"
              required
            />
          )
        }

        if (field === 'Phone') {
          return (
            <Input
              key={field}
              name={field}
              type="tel"
              label={field}
              value={values[field] || ''}
              onChange={(e) => setValue(field, e.target.value)}
              error={errors[field]}
              placeholder="+91 98765 43210"
              required
            />
          )
        }

        if (field === 'Company') {
          return (
            <Input
              key={field}
              name={field}
              label={field}
              value={values[field] || ''}
              onChange={(e) => setValue(field, e.target.value)}
              error={errors[field]}
              placeholder="Company or Business name (optional)"
            />
          )
        }

        if (field === 'Budget') {
          return (
            <Select
              key={field}
              name={field}
              label={field}
              value={values[field] || ''}
              onChange={(e) => setValue(field, e.target.value)}
              options={content.formOptions.budgets}
            />
          )
        }

        if (field === 'Timeline') {
          return (
            <Select
              key={field}
              name={field}
              label={field}
              value={values[field] || ''}
              onChange={(e) => setValue(field, e.target.value)}
              options={content.formOptions.timelines}
            />
          )
        }

        if (field === 'Project type') {
          return (
            <Select
              key={field}
              name={field}
              label={field}
              value={values[field] || ''}
              onChange={(e) => setValue(field, e.target.value)}
              options={content.formOptions.projectTypes}
              error={errors[field]}
            />
          )
        }

        if (field === 'Service required') {
          return (
            <Select
              key={field}
              name={field}
              label={field}
              value={values[field] || ''}
              onChange={(e) => setValue(field, e.target.value)}
              options={serviceOptions}
              error={errors[field]}
              required
            />
          )
        }

        return (
          <Input
            key={field}
            name={field}
            label={field}
            value={values[field] || ''}
            onChange={(e) => setValue(field, e.target.value)}
            error={errors[field]}
            placeholder="Your full name"
            required={field === 'Name'}
          />
        )
      })}

      <div className="contact-form__submit-row">
        <button className="button button--primary" type="submit">
          Send to thetaank360@gmail.com
        </button>
        <button
          className="button button--whatsapp"
          type="button"
          onClick={handleSendWhatsApp}
        >
          Send via WhatsApp
        </button>
      </div>

      {submitted && (
        <div className="form-status form-status--success" ref={statusRef} tabIndex={-1}>
          <div className="form-status__header">
            <strong>✓ Enquiry Formatted & Ready to Send</strong>
            <p>
              Your enquiry has been formatted and targeted to <strong>{recipientEmail}</strong>.
              If Gmail did not open in a new tab, choose an option below:
            </p>
          </div>
          <div className="button-row">
            <a
              className="button button--primary"
              href={gmailWebUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Gmail (thetaank360@gmail.com)
            </a>
            <a
              className="button button--secondary"
              href={mailtoUrl}
            >
              Default Mail App
            </a>
            <a
              className="button button--whatsapp"
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open WhatsApp (+91 {recipientWhatsApp.slice(-10)})
            </a>
          </div>
        </div>
      )}
    </form>
  )
}
export function Contact() { const content = useContent(); const location = useLocation(); const [tab, setTab] = useState(new URLSearchParams(location.search).get('tab') === 'project' ? 'project' : 'general'); const methods = [{ label: 'Call', value: content.contact.phone, href: `tel:${content.contact.phone}` }, { label: 'WhatsApp', value: content.contact.whatsapp, href: `https://wa.me/${content.contact.whatsapp}` }, { label: 'Email', value: content.contact.email, href: `mailto:${content.contact.email}` }, { label: 'Address', value: content.contact.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.contact.address)}` }].filter((method) => method.value); const selectTab = (next: string) => setTab(next); const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); const next = tab === 'general' ? 'project' : 'general'; selectTab(next); document.getElementById(`tab-${next}`)?.focus() } }; return <><Seo entry={content.seo.find((item) => item.route === '/contact')} /><PageBanner banner={content.banners.find((item) => item.page === 'contact')} /><Reveal><Section title="Contact methods"><div className="card-grid card-grid--four">{methods.map((method) => <a className="card card-link" href={method.href} key={method.label}><h3>{method.label}</h3><p>{method.value}</p>{method.label === 'Address' && <span className="text-link">Get directions</span>}</a>)}</div></Section></Reveal><Reveal><Section title="Send an enquiry"><div className="tabs" role="tablist" aria-label="Enquiry type"><button id="tab-general" role="tab" aria-selected={tab === 'general'} className={tab === 'general' ? 'tab is-active' : 'tab'} onKeyDown={onTabKeyDown} onClick={() => selectTab('general')}>General enquiry</button><button id="tab-project" role="tab" aria-selected={tab === 'project'} className={tab === 'project' ? 'tab is-active' : 'tab'} onKeyDown={onTabKeyDown} onClick={() => selectTab('project')}>Start a project</button></div><div role="tabpanel"><ContactForm project={tab === 'project'} /></div></Section></Reveal></> }
