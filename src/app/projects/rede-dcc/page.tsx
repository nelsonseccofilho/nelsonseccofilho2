import type { Metadata } from 'next';
import { CaseHero } from '@/components/case-study/case-hero';
import { CaseMedia } from '@/components/case-study/case-media';
import { CaseNavigation } from '@/components/case-study/case-navigation';
import { CaseSection } from '@/components/case-study/case-section';
import { SiteHeader } from '@/components/layout/site-header';

export const metadata: Metadata = {
  title: 'REDE DCC 1.0 — Product Design Case Study | Nelson Secco',
  description:
    'Interaction Design case study for a Dynamic Currency Conversion payment journey implemented in REDE’s product.',
};

const heroMetadata = [
  { label: 'Role', value: 'Senior Product Designer' },
  { label: 'Client', value: 'REDE' },
  { label: 'Company', value: 'Môre Talent Tech' },
  { label: 'Domain', value: 'Payments / Dynamic Currency Conversion' },
  { label: 'Year', value: '2023' },
  { label: 'Engagement', value: '8 months' },
  { label: 'Languages', value: 'Portuguese / English' },
  { label: 'Deliverable', value: 'End-to-end transaction journey' },
  { label: 'Status', value: 'Implemented in REDE’s product' },
];

export default function RedeDccPage() {
  return (
    <>
      <SiteHeader />
      <main className="case-study">
        <CaseHero
          eyebrow="REDE DCC 1.0"
          title="Designing clarity across a multi-state payment journey"
          description="Interaction Design for a Dynamic Currency Conversion experience that helped international cardholders make a clear currency choice during an active payment transaction."
          metadata={heroMetadata}
          image={{
            alt: 'Payment interface composition showing transaction flow states and confirmation screens.',
            width: 1920,
            height: 1080,
            light: {
              640: '/assets/projects/rede-dcc/cover/light/cover-640.webp',
              1024: '/assets/projects/rede-dcc/cover/light/cover-1024.webp',
              1440: '/assets/projects/rede-dcc/cover/light/cover-1440.webp',
              1920: '/assets/projects/rede-dcc/cover/light/cover-1920.webp',
            },
            dark: {
              640: '/assets/projects/rede-dcc/cover/dark/cover-640.webp',
              1024: '/assets/projects/rede-dcc/cover/dark/cover-1024.webp',
              1440: '/assets/projects/rede-dcc/cover/dark/cover-1440.webp',
              1920: '/assets/projects/rede-dcc/cover/dark/cover-1920.webp',
            },
          }}
        />

        <CaseSection
          id="international-payments"
          title="International payments at the terminal"
          intro="During the final eight months of my time at Môre Talent Tech, I worked with REDE on digital payment experiences. One of the initiatives was a Dynamic Currency Conversion service for international Mastercard and Visa cardholders using REDE payment terminals in Brazil."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">The focus was to make a financial choice understandable inside a live transaction flow.</p>
          </div>
        </CaseSection>

        <CaseSection
          id="high-stakes-choice"
          title="Making a financial choice clear inside a high-stakes transaction"
          intro="International cardholders needed to decide whether to complete a purchase in BRL or in their home currency while already inside an active payment flow."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">
              The experience needed to communicate that decision clearly across Portuguese and English while remaining coherent through multiple transactional states, including processing, authorization, errors, approval and decline.
            </p>
          </div>
        </CaseSection>

        <CaseSection
          id="end-to-end-design"
          title="End-to-end interaction design"
          intro="As Senior Product Designer, I structured the end-to-end journey, interaction flows and interfaces for the DCC experience, prioritizing clarity, safety and ease of use."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">
              I worked within a multidisciplinary squad, using REDE’s existing Design System while designing and documenting additional components required by the new journey.
            </p>
          </div>
        </CaseSection>

        <CaseSection
          id="international-cardholders"
          title="Designing for international cardholders"
          intro="The experience was designed for international cardholders using cards linked to foreign accounts."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">The interaction language had to remain legible at terminal speed.</p>
          </div>
        </CaseSection>

        <CaseSection
          id="bilingual-structure"
          title="Designing across Portuguese and English"
          intro="Language was part of the transaction design itself. The experience needed to remain understandable for international cardholders while preserving the same decision structure, hierarchy and transactional feedback across Portuguese and English."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">Consistency between languages protected both clarity and confidence during payment.</p>
          </div>
        </CaseSection>

        <CaseSection
          id="transaction-states"
          title="Orchestrating the transaction states"
          intro="What appeared to be a simple currency choice unfolded across a complete payment journey: currency selection, conversion information, PIN entry, processing, authorization, approval or decline, errors and receipt states."
        >
          <CaseMedia
            image={{
              src: '/assets/projects/rede-dcc/evidence/transaction-state-sequence-1600.webp',
              alt: 'Curated sequence of REDE DCC transaction states from currency selection to completion.',
            }}
            caption="Curated transaction-state sequence used to review the complete journey."
          />
        </CaseSection>

        <CaseSection
          id="clarity-before-progression"
          title="Clarity before progression"
          intro="Each state needed to communicate what was happening, what decision was required and what the user should expect next without disrupting the speed of a payment-terminal interaction."
        >
          <div className="case-section__stack">
            <div className="case-section__detail-grid">
              <CaseMedia
                image={{
                  src: '/assets/projects/rede-dcc/evidence/currency-choice-800.webp',
                  alt: 'DCC transaction state showing currency choice options during payment.',
                }}
              />
              <CaseMedia
                image={{
                  src: '/assets/projects/rede-dcc/evidence/pin-entry-800.webp',
                  alt: 'DCC transaction state showing PIN entry after currency selection.',
                }}
              />
              <CaseMedia
                image={{
                  src: '/assets/projects/rede-dcc/evidence/processing-800.webp',
                  alt: 'DCC transaction state showing processing and authorization feedback.',
                }}
              />
              <CaseMedia
                image={{
                  src: '/assets/projects/rede-dcc/evidence/approval-receipt-800.webp',
                  alt: 'DCC transaction state showing approval and receipt outcome.',
                }}
              />
            </div>
          </div>
        </CaseSection>

        <CaseSection
          id="no-prototype"
          title="Knowing when not to prototype"
          intro="A navigable prototype was not necessary for this delivery. The interaction model could be sufficiently reviewed through the structured transaction states, final interfaces and stakeholder validation."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">
              Avoiding unnecessary prototyping kept the work focused on the artifacts required to move the journey toward implementation.
            </p>
          </div>
        </CaseSection>

        <CaseSection
          id="review"
          title="Reviewing the complete transaction journey"
          intro="The proposed experience, states and interfaces were presented and reviewed with stakeholders before delivery, allowing the complete transaction sequence to be evaluated as a coherent system rather than as isolated screens."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">Stakeholder review validated continuity across the full payment sequence.</p>
          </div>
        </CaseSection>

        <CaseSection
          id="delivery"
          title="From interaction states to the final product"
          intro="The DCC journey was documented and delivered for implementation in REDE’s product, including the required transaction states, interface behavior and supporting components."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">Delivery covered both journey integrity and implementation-facing specification detail.</p>
          </div>
        </CaseSection>

        <CaseSection
          id="outcome"
          title="A complete journey for a new payment capability"
          intro="The work transformed a new currency-conversion requirement into a structured, bilingual payment journey covering the complete interaction from currency choice through transaction completion."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">
              The result was a validated and documented experience implemented within REDE’s existing payment ecosystem.
            </p>
          </div>
        </CaseSection>

        <CaseSection
          id="learning"
          title="Designing the moments between decisions"
          intro="Payment experiences are not defined only by their main action. Processing, waiting, errors, authorization and confirmation are equally important parts of the experience."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">
              DCC reinforced the importance of designing transactional states as one continuous system rather than a collection of individual screens.
            </p>
          </div>
        </CaseSection>

        <CaseNavigation label="← Back to projects" />
      </main>
    </>
  );
}
