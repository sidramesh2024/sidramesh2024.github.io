
export interface PersonalInfo {
  name: string
  title: string
  location: string
  email: string
  linkedin: string
  twitter: string
  github: string
  years_of_experience: number
}

export interface WorkExperience {
  position: string
  company: string
  location: string
  duration: string
  duration_years: string
  description: string
  key_achievements: string[]
  technologies_used: string[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  year: string
  status: string
  thesis_area?: string
}

export interface Certification {
  name: string
  date: string
  issuer: string
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  impact: string
  company: string
}

export interface TechnicalSkills {
  cloud_platforms: {
    aws: string[]
    aws_gen_ai: string[]
    azure: string[]
  }
  gen_ai_technologies: string[]
  vector_databases: string[]
  programming_languages: string[]
  databases: string[]
  big_data_technologies: string[]
  etl_tools: string[]
  reporting_tools: string[]
  web_development: string[]
  automation_tools: string[]
  data_warehouses: string[]
  operating_systems: string[]
}

export interface PortfolioData {
  personal_info: PersonalInfo
  professional_summary: {
    headline: string
    description: string
  }
  areas_of_expertise: string[]
  technical_skills: TechnicalSkills
  work_experience: WorkExperience[]
  education: Education[]
  certifications: Certification[]
  key_projects: Project[]
  achievements_metrics: Array<{
    metric: string
    value: string
    description: string
  }>
  career_progression: Array<{
    level: string
    years: string
    duration: string
  }>
  specializations: string[]
  industry_experience: string[]
}
