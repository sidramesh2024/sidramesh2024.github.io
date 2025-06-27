'use client'

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sidharth Ramesh",
    "jobTitle": "Lead Data Engineer",
    "description": "Lead Data Engineer with 8+ years expertise in Gen AI, AWS, Azure, and scalable data solutions. Specialized in MLOps, data pipelines, and intelligent automation.",
    "url": "https://sidharthramesh.github.io",
    "image": "https://sidharthramesh.github.io/pro_pic.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/sidharthramesh/",
      "https://x.com/sidhu177",
      "https://github.com/sidhu177"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Tiger Analytics"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Georgia Institute of Technology",
        "description": "Master of Science in Computer Science"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Rose-Hulman Institute of Technology",
        "description": "Master of Science in Mechanical Engineering"
      }
    ],
    "knowsAbout": [
      "Data Engineering",
      "Gen AI",
      "Machine Learning",
      "MLOps",
      "AWS",
      "Azure",
      "Python",
      "Apache Spark",
      "Snowflake",
      "Data Pipelines",
      "ETL",
      "Big Data",
      "Artificial Intelligence"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Edison",
      "addressRegion": "New Jersey",
      "addressCountry": "US"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sidharth Ramesh Portfolio",
    "url": "https://sidharthramesh.github.io",
    "description": "Lead Data Engineer & AI Specialist Portfolio",
    "author": {
      "@type": "Person",
      "name": "Sidharth Ramesh"
    },
    "publisher": {
      "@type": "Person",
      "name": "Sidharth Ramesh"
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tiger Analytics",
    "url": "https://www.tigeranalytics.com",
    "employee": {
      "@type": "Person",
      "name": "Sidharth Ramesh",
      "jobTitle": "Lead Data Engineer"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
    </>
  )
} 