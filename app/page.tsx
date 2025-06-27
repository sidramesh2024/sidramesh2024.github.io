import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { CertificationsSection } from '@/components/certifications-section'
import { EducationSection } from '@/components/education-section'
import { NavigationHeader } from '@/components/navigation-header'
import { BreadcrumbNavigation } from '@/components/breadcrumb-navigation'
import { StructuredData } from '@/components/structured-data'
import { SEOOptimizer } from '@/components/seo-optimizer'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData />
      <SEOOptimizer />
      <NavigationHeader />
      <BreadcrumbNavigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  )
}
