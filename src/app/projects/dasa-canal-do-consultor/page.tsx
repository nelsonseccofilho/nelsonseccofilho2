import type { Metadata } from 'next';
import { CaseHero } from '@/components/case-study/case-hero';
import { CaseMedia } from '@/components/case-study/case-media';
import { CaseNavigation } from '@/components/case-study/case-navigation';
import { CaseSection } from '@/components/case-study/case-section';
import { SiteHeader } from '@/components/layout/site-header';

export const metadata: Metadata = {
  title: 'DASA — Canal do Consultor — Product Design Case Study | Nelson Secco',
  description:
    'Discovery-led Product Design case study on translating healthcare consultation research into business rules, priorities and implementation direction.',
};

const heroMetadata = [
  { label: 'Role', value: 'Product Designer' },
  { label: 'Client', value: 'DASA' },
  { label: 'Company', value: 'Môre Talent Tech' },
  { label: 'Year', value: '2022' },
  { label: 'Core Team', value: 'PM/PO · UX Researcher · Product Designer · Lead Developer' },
  { label: 'Deliverable', value: 'Discovery-to-delivery decision structure' },
  { label: 'Scope', value: 'Canal do Consultor / MV Soul / Feegow / Tasy' },
  { label: 'Status', value: 'Existing pilot and future backlog input' },
];

export default function DasaCanalDoConsultorPage() {
  return (
    <>
      <SiteHeader />
      <main className="case-study">
        <CaseHero
          eyebrow="DASA — Canal do Consultor"
          title="Translating healthcare discovery into a structured product decision system"
          description="Product Design work connecting large-scale research, business-rule mapping and technical prioritization for a complex consultant journey while preserving confidentiality constraints."
          metadata={heroMetadata}
          image={{
            alt: 'Editorial composition of the Canal do Consultor discovery work with maps, synthesis, and business rules.',
            width: 1920,
            height: 1080,
            light: {
              640: '/assets/projects/dasa-canal-do-consultor/cover/light/cover-640.webp',
              1024: '/assets/projects/dasa-canal-do-consultor/cover/light/cover-1024.webp',
              1440: '/assets/projects/dasa-canal-do-consultor/cover/light/cover-1440.webp',
              1920: '/assets/projects/dasa-canal-do-consultor/cover/light/cover-1920.webp',
            },
            dark: {
              640: '/assets/projects/dasa-canal-do-consultor/cover/dark/cover-640.webp',
              1024: '/assets/projects/dasa-canal-do-consultor/cover/dark/cover-1024.webp',
              1440: '/assets/projects/dasa-canal-do-consultor/cover/dark/cover-1440.webp',
              1920: '/assets/projects/dasa-canal-do-consultor/cover/dark/cover-1920.webp',
            },
          }}
        />

        <CaseSection
          id="context"
          title="Context and challenge"
          intro="Canal do Consultor required a coherent journey across clinical and operational touchpoints. The work focused on turning fragmented evidence into a decision structure that could guide product evolution with shared understanding across disciplines."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">
              The product context involved healthcare consultants navigating information spread across multiple systems with different rules, vocabulary and expectations.
            </p>
          </div>
        </CaseSection>

        <CaseSection
          id="research-scale"
          title="Research scale and ecosystem coverage"
          intro="Discovery combined qualitative and structural mapping to establish a defensible baseline for product decisions."
        >
          <ul className="case-bullets" aria-label="DASA discovery scale">
            <li className="case-bullets__item">37 participants interviewed</li>
            <li className="case-bullets__item">3 NACs visited — RJ, SP and Brasília</li>
            <li className="case-bullets__item">4 systems analyzed</li>
            <li className="case-bullets__item">Canal do Consultor, MV Soul, Feegow and Tasy</li>
            <li className="case-bullets__item">290 research quotes mapped</li>
            <li className="case-bullets__item">57 business rules and features mapped</li>
          </ul>
        </CaseSection>

        <CaseSection
          id="evidence-board"
          title="Editorial evidence board"
          intro="A confidentiality-safe synthesis board was used to communicate scale, ecosystem dependencies and decision logic without exposing final product interfaces."
        >
          <CaseMedia
            image={{
              src: '/assets/projects/dasa-canal-do-consultor/evidence/discovery-editorial-board-1536.webp',
              alt: 'Editorial board summarizing research scale, ecosystem, rules, themes, and the connection to Delivery.',
            }}
            caption="Editorial reconstruction used for portfolio communication."
          />
        </CaseSection>

        <CaseSection
          id="diagrams"
          title="Discovery diagrams and synthesis artifacts"
          intro="The synthesis was structured through complementary diagrams linking context, evidence and delivery implications."
        >
          <div className="case-section__detail-grid">
            <CaseMedia
              image={{
                src: '/assets/projects/dasa-canal-do-consultor/evidence/diagrams/01-ecosystem.svg',
                alt: 'Diagram representing the Canal do Consultor ecosystem and connected systems.',
              }}
            />
            <CaseMedia
              image={{
                src: '/assets/projects/dasa-canal-do-consultor/evidence/diagrams/02-research-scale.svg',
                alt: 'Diagram summarizing the discovery research scale and participant coverage.',
              }}
            />
            <CaseMedia
              image={{
                src: '/assets/projects/dasa-canal-do-consultor/evidence/diagrams/03-discovery-process.svg',
                alt: 'Diagram describing the discovery process from interviews to synthesis.',
              }}
            />
            <CaseMedia
              image={{
                src: '/assets/projects/dasa-canal-do-consultor/evidence/diagrams/04-research-to-rules.svg',
                alt: 'Diagram connecting research evidence to mapped business rules and features.',
              }}
            />
            <CaseMedia
              image={{
                src: '/assets/projects/dasa-canal-do-consultor/evidence/diagrams/05-information-fragmentation.svg',
                alt: 'Diagram illustrating information fragmentation across systems.',
              }}
            />
            <CaseMedia
              image={{
                src: '/assets/projects/dasa-canal-do-consultor/evidence/diagrams/06-theme-map.svg',
                alt: 'Theme map diagram clustering recurrent research topics and pain points.',
              }}
            />
            <CaseMedia
              image={{
                src: '/assets/projects/dasa-canal-do-consultor/evidence/diagrams/07-complexity-examples.svg',
                alt: 'Diagram with representative complexity examples from the consultant journey.',
              }}
            />
            <CaseMedia
              image={{
                src: '/assets/projects/dasa-canal-do-consultor/evidence/diagrams/08-discovery-delivery.svg',
                alt: 'Diagram showing the Discovery to Delivery narrative and handoff structure.',
              }}
            />
          </div>
        </CaseSection>

        <CaseSection
          id="validation"
          title="Validation across operational and product stakeholders"
          intro="Synthesis and prioritization were repeatedly validated with the people closest to operations and product decisions."
        >
          <ul className="case-bullets" aria-label="DASA validation stakeholders">
            <li className="case-bullets__item">Validation with NAC coordinators</li>
            <li className="case-bullets__item">Validation with consultants</li>
            <li className="case-bullets__item">Validation with the Canal do Consultor tribe</li>
          </ul>
        </CaseSection>

        <CaseSection
          id="rules-to-delivery"
          title="From research to rules, then from discovery to delivery"
          intro="The core outcome was a navigable decision structure that connected discovery findings to implementation priorities."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">
              Front-end and back-end alignment was built through a shared prioritization layer for interface and API decisions, reducing ambiguity before delivery discussions.
            </p>
            <p className="case-section__copy">
              The structure supported an existing pilot and generated reliable input for future backlog definition.
            </p>
          </div>
        </CaseSection>

        <CaseSection
          id="confidentiality"
          title="Confidentiality and publication boundaries"
          intro="This case intentionally avoids exposing confidential final-product interfaces."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">
              All visuals in this page are editorial representations or synthesis artifacts prepared for portfolio communication and do not reveal production UI screens.
            </p>
          </div>
        </CaseSection>

        <CaseNavigation label="← Back to projects" />
      </main>
    </>
  );
}