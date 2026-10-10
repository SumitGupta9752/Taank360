import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { isPreviewing, setPreview, CONTENT_CHANGED_EVENT } from '../lib/contentLoader'

export function PreviewBar() {
  const location = useLocation(); const navigate = useNavigate(); const [active, setActive] = useState(isPreviewing)
  useEffect(() => { const update = () => setActive(isPreviewing()); window.addEventListener(CONTENT_CHANGED_EVENT, update); return () => window.removeEventListener(CONTENT_CHANGED_EVENT, update) }, [])
  if (!active || location.pathname === '/admin') return null
  return <div className="preview-bar" role="status"><span>Previewing your local draft. Visitors cannot see this.</span><div><button type="button" onClick={() => navigate('/admin')}>Back to editor</button><button type="button" onClick={() => { setPreview(false); navigate(location.pathname) }}>Exit preview</button></div></div>
}
