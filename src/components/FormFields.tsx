import type { ChangeEvent, SelectHTMLAttributes, TextareaHTMLAttributes, InputHTMLAttributes } from 'react'

type BaseProps = { label: string; name: string; error?: string; required?: boolean }
type InputProps = BaseProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'name'>
type SelectProps = BaseProps & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'name'> & { options: string[] }
type TextareaProps = BaseProps & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'>
type CheckboxProps = BaseProps & { checked: boolean; onChange: (event: ChangeEvent<HTMLInputElement>) => void }

function fieldId(name: string) { return name.toLowerCase().replace(/[^a-z0-9]+/g, '-') }
function fieldProps(name: string, error?: string) { const id = fieldId(name); return { id, name, 'aria-invalid': Boolean(error), 'aria-describedby': error ? `${id}-error` : undefined } }
function ErrorText({ name, error }: { name: string; error?: string }) { const id = fieldId(name); return error ? <p className="form-error" id={`${id}-error`} role="alert">{error}</p> : null }

export function Input({ label, name, error, required, ...props }: InputProps) { const id = fieldId(name); return <div className="form-field"><label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label><input {...props} {...fieldProps(name, error)} required={required} /> <ErrorText name={name} error={error} /></div> }
export function Select({ label, name, error, required, options, ...props }: SelectProps) { const id = fieldId(name); return <div className="form-field"><label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label><select {...props} {...fieldProps(name, error)} required={required}><option value="">Select an option</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select><ErrorText name={name} error={error} /></div> }
export function Textarea({ label, name, error, required, ...props }: TextareaProps) { const id = fieldId(name); return <div className="form-field"><label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label><textarea {...props} {...fieldProps(name, error)} required={required} /><ErrorText name={name} error={error} /></div> }
export function Checkbox({ label, name, error, required, checked, onChange }: CheckboxProps) { return <div className="form-field form-field--checkbox"><label><input type="checkbox" {...fieldProps(name, error)} checked={checked} onChange={onChange} required={required} /> {label}{required && <span aria-hidden="true"> *</span>}</label><ErrorText name={name} error={error} /></div> }
