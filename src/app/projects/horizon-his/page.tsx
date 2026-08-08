import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { CaseHero } from '@/components/case-study/case-hero';
import { CaseMedia } from '@/components/case-study/case-media';
import { CaseNavigation } from '@/components/case-study/case-navigation';
import { CaseSection } from '@/components/case-study/case-section';

export const metadata: Metadata = {
  title: 'HORIZON HIS — Product Design Case Study | Nelson Secco',
  description:
    "Product Design case study showing how SALUX's HORIZON HIS vision became a high-fidelity navigable prototype presented at Hospitalar 2025.",
};

const heroMetadata = [
  { label: 'Role', value: 'UX Lead / Product Designer' },
  { label: 'Domain', value: 'Healthtech / Hospital Information System' },
  { label: 'Year', value: '2025' },
  { label: 'Deliverable', value: 'High-fidelity navigable prototype' },
  { label: 'Context', value: 'Presented at Hospitalar 2025' },
];

export default function HorizonHisPage() {
  return (
    <>
      <SiteHeader />
      <main className="case-study">
        <CaseHero
          eyebrow="HORIZON HIS"
          title="Turning a complex HIS vision into a navigable product experience"
          description="Product Design-led prototype for SALUX's next hospital information system."
          metadata={heroMetadata}
          image={{
            alt: 'Editorial composition featuring the HORIZON HIS prototype interface in a clinical journey.',
            width: 1920,
            height: 1080,
            light: {
              640: '/assets/projects/horizon-his/cover/light/cover-640.webp',
              1024: '/assets/projects/horizon-his/cover/light/cover-1024.webp',
              1440: '/assets/projects/horizon-his/cover/light/cover-1440.webp',
              1920: '/assets/projects/horizon-his/cover/light/cover-1920.webp',
            },
            dark: {
              640: '/assets/projects/horizon-his/cover/dark/cover-640.webp',
              1024: '/assets/projects/horizon-his/cover/dark/cover-1024.webp',
              1440: '/assets/projects/horizon-his/cover/dark/cover-1440.webp',
              1920: '/assets/projects/horizon-his/cover/dark/cover-1920.webp',
            },
          }}
        />

        <CaseSection
          id="context"
          title="SALUX's next Hospital Information System"
          intro="SALUX wanted to materialize its vision for a new Hospital Information System in a market with established platforms such as MV and Tasy. The goal of this phase was to make that vision tangible enough to experience, discuss, validate and present before committing to a complete production implementation."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">The work started from a strategic product question, not from a production roadmap.</p>
          </div>
        </CaseSection>

        <CaseSection
          id="challenge"
          title="Making a broad HIS vision tangible before full implementation"
          intro="A HIS can contain a large number of workflows, users, states and dependencies. The challenge was to decide what needed to exist in the prototype so the product vision could become concrete, navigable and presentable for Hospitalar 2025."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">The phase had to stay focused on clarity, not on premature build scope.</p>
          </div>
        </CaseSection>

        <CaseSection
          id="role"
          title="End-to-end Product Design ownership"
          intro="Nelson was UX Lead at SALUX and the Product Designer directly responsible for HORIZON HIS. No other Product Designer was dedicated to HORIZON, while the other designers he led remained focused on other SALUX initiatives. That focus allowed him to concentrate on the HIS vision."
        >
          <ul className="case-bullets" aria-label="HORIZON responsibilities">
            <li className="case-bullets__item">Journey selection</li>
            <li className="case-bullets__item">Experience structure</li>
            <li className="case-bullets__item">UX</li>
            <li className="case-bullets__item">UI</li>
            <li className="case-bullets__item">Component strategy</li>
            <li className="case-bullets__item">Prototype construction</li>
            <li className="case-bullets__item">Product-vision presentation</li>
          </ul>
        </CaseSection>

        <CaseSection
          id="journeys"
          title="Selecting the journeys that made the vision understandable"
          intro="The goal was not to reproduce every possible HIS workflow. The Product Design decision was to identify the journeys and states necessary to communicate how HORIZON should behave as a coherent product experience."
          mediaFirst
        >
          <div className="case-section__stack">
            <CaseMedia
              image={{
                src: '/assets/projects/horizon-his/evidence/journey-map-overview-2048.webp',
                alt: 'Overview of the HORIZON HIS journey map showing multiple connected interface flows and states.',
              }}
              caption="Journey-map overview used to communicate scale and connected product flows."
            />
            <p className="case-section__copy">
              The overview establishes breadth. The details below highlight selected areas of the mapped experience at a readable size.
            </p>
            <div className="case-section__detail-grid">
              <CaseMedia
                image={{
                  src: '/assets/projects/horizon-his/evidence/journey-map-detail-01-1536.webp',
                  alt: 'Detailed section of the HORIZON HIS journey map showing connected interface states.',
                }}
              />
              <CaseMedia
                image={{
                  src: '/assets/projects/horizon-his/evidence/journey-map-detail-02-1536.webp',
                  alt: 'Detailed section of the HORIZON HIS journey map showing connected interface states.',
                }}
              />
              <CaseMedia
                image={{
                  src: '/assets/projects/horizon-his/evidence/journey-map-detail-03-1536.webp',
                  alt: 'Detailed section of the HORIZON HIS journey map showing connected interface states.',
                }}
              />
              <CaseMedia
                image={{
                  src: '/assets/projects/horizon-his/evidence/journey-map-detail-04-1536.webp',
                  alt: 'Detailed section of the HORIZON HIS journey map showing connected interface states.',
                }}
              />
            </div>
          </div>
        </CaseSection>

        <CaseSection
          id="choices"
          title="Building the experience, not the infrastructure around it"
          intro="A complete Design System was intentionally not the priority for this phase. The focus was to build the reusable component foundation necessary for consistency, prioritize journeys and prototype work, and keep iteration fast."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">This was a phase-specific Product Design decision, not a general statement about design systems.</p>
          </div>
        </CaseSection>

        <CaseSection
          id="prototype"
          title="Designing the product before committing to building it"
          intro="The high-fidelity navigable prototype made the future HIS tangible. It supported experiencing proposed flows, understanding behavior, discussing product direction, and validating the experience before full implementation."
        >
          <CaseMedia
            image={{
              src: '/assets/projects/horizon-his/evidence/triage-prototype-1600.webp',
              alt: 'HORIZON HIS triage prototype screen with intake, vital signs, and generated data.',
            }}
          />
        </CaseSection>

        <CaseSection
          id="validation"
          title="Presented to the CEO as the proposed Hospitalar experience"
          intro="The approach and prototype were presented to the CEO as the Product Design direction intended for Hospitalar 2025. The purpose was to demonstrate that the intended experience could be materialized and validated without making full implementation the first step."
        >
          <CaseMedia
            image={{
              src: '/assets/projects/horizon-his/evidence/case-results-slide-1280.webp',
              alt: 'HORIZON HIS case results slide showing the prototype and supporting narrative.',
            }}
            caption="Executive presentation evidence."
          />
        </CaseSection>

        <CaseSection
          id="hospitalar"
          title="The product experience at Hospitalar 2025"
          intro="HORIZON was presented at Hospitalar 2025. SALUX positioned HORIZON as its main product at the event, and visitors at the SALUX presence could experience the product vision."
        >
          <CaseMedia
            image={{
              src: '/assets/projects/horizon-his/evidence/hospitalar-2025-evidence-960.webp',
              alt: 'Photographic record of the prototype presentation at Hospitalar 2025 with the kiosk in the background.',
            }}
            caption="Hospitalar 2025 presentation context."
          />
        </CaseSection>

        <CaseSection
          id="outcome"
          title="From abstract vision to navigable product experience"
          intro="SALUX moved from an abstract HIS ambition to a concrete product experience that could be navigated, discussed, validated and presented."
        >
          <ul className="case-bullets" aria-label="HORIZON outcome highlights">
            <li className="case-bullets__item">Selected journeys structured</li>
            <li className="case-bullets__item">Coherent interface created</li>
            <li className="case-bullets__item">Focused reusable component foundation</li>
            <li className="case-bullets__item">Navigable prototype delivered</li>
            <li className="case-bullets__item">Executive discussion supported</li>
            <li className="case-bullets__item">Hospitalar presentation enabled</li>
          </ul>
        </CaseSection>

        <CaseSection
          id="learning"
          title="High-fidelity prototyping as strategic product work"
          intro="High-fidelity prototyping can be a strategic Product Design tool when the primary uncertainty is the product experience itself. A product phase does not always require the maximum possible infrastructure; it requires the level of structure necessary to answer the current product question."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">This is author reflection, not a business claim.</p>
          </div>
        </CaseSection>

        <CaseNavigation />
      </main>
    </>
  );
}