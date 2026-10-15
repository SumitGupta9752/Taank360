import {
  Award, BarChart3, BriefcaseBusiness, Check, Code2, Database, FileText, Globe2,
  Handshake, Heart, Layers3, Lightbulb, Mail, MapPin, Megaphone, MessageCircle,
  PhoneCall, Play, Rocket, Search, Settings2, Share2, ShieldCheck, Smartphone,
  Target, TrendingUp, Users, Workflow, Wrench, type LucideIcon,
} from 'lucide-react'

export const iconMap: Record<string, LucideIcon> = {
  award: Award, 'bar-chart-3': BarChart3, briefcase: BriefcaseBusiness, check: Check,
  code: Code2, database: Database, 'file-text': FileText, globe: Globe2,
  handshake: Handshake, heart: Heart, layers: Layers3, lightbulb: Lightbulb,
  mail: Mail, 'map-pin': MapPin, megaphone: Megaphone, message: MessageCircle,
  phone: PhoneCall, play: Play, rocket: Rocket, search: Search, settings: Settings2,
  'share-2': Share2, 'shield-check': ShieldCheck, smartphone: Smartphone, target: Target,
  'trending-up': TrendingUp, users: Users, workflow: Workflow, tool: Wrench,
}

export function getIcon(name?: string): LucideIcon {
  return (name && iconMap[name]) || Layers3
}
