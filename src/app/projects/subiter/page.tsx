import type { Metadata } from 'next';
import { CaseHero } from '@/components/case-study/case-hero';
import { CaseMedia } from '@/components/case-study/case-media';
import { CaseNavigation } from '@/components/case-study/case-navigation';
import { CaseSection } from '@/components/case-study/case-section';
import { SiteHeader } from '@/components/layout/site-header';

export const metadata: Metadata = {
  title: 'SUBITER — Product Design Case Study | Nelson Secco',
  description:
    'Product Design case study about structuring Subiter Web Portal inspection operations with traceability, AI assistance and production delivery.',
};

const heroMetadata = [
  { label: 'Role', value: 'UX Lead / Senior Product Designer' },
  { label: 'Domain', value: 'Deep Tech / Industrial Inspection' },
  { label: 'Period', value: '2025–2026' },
  { label: 'Product', value: 'Subiter Web Portal' },
  { label: 'AI', value: 'Marina — AI Assistant' },
  { label: 'Status', value: 'Production' },
];

export default function SubiterPage() {
  return (
    <>
      <SiteHeader />
      <main className="case-study">
        <CaseHero
          eyebrow="SUBITER"
          title="Turning operational complexity into a structured inspection experience"
          description="Product Design leadership for a production web platform connecting inspection data, traceability, AI and operational management."
          metadata={heroMetadata}
          image={{
            alt: 'Editorial interface composition with inspection workflow grid, trend line and review summary panels.',
            width: 1920,
            height: 1080,
            light: {
              640: '/assets/projects/subiter/cover/light/cover-640.webp',
              1024: '/assets/projects/subiter/cover/light/cover-1024.webp',
              1440: '/assets/projects/subiter/cover/light/cover-1440.webp',
              1920: '/assets/projects/subiter/cover/light/cover-1920.webp',
            },
            dark: {
              640: '/assets/projects/subiter/cover/dark/cover-640.webp',
              1024: '/assets/projects/subiter/cover/dark/cover-1024.webp',
              1440: '/assets/projects/subiter/cover/dark/cover-1440.webp',
              1920: '/assets/projects/subiter/cover/dark/cover-1920.webp',
            },
          }}
        />

        <CaseSection
          id="context"
          title="From inspection data to operational management"
          intro="Subiter is a deep-tech company working with advanced inspection technologies for complex industrial assets. As its digital ecosystem evolved, the Web Portal became an important layer connecting inspection data, reports, asset history and operational management."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">This case focuses on product structure, continuity and operational usability.</p>
          </div>
        </CaseSection>

        <CaseSection
          id="challenge"
          title="Moving beyond static inspection reports"
          intro="Inspection information needed to serve different people across the operation — clients, inspectors and management — while remaining understandable, traceable and useful beyond the delivery of an individual report."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">
              The challenge was to evolve the digital experience around the inspection lifecycle, connecting operational needs, business priorities and technical feasibility.
            </p>
          </div>
        </CaseSection>

        <CaseSection
          id="role"
          title="Hands-on design leadership from structure to delivery"
          intro="As UX Lead / Senior Product Designer, I worked hands-on across product strategy and UX/UI execution for Subiter’s digital products."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">
              My responsibilities included evolving the Web Portal, structuring information architecture and user flows, designing interfaces and visual patterns, improving product documentation, developing reusable components and Design System practices, and supporting prioritization alongside Engineering, inspection specialists and company leadership.
            </p>
          </div>
        </CaseSection>

        <CaseSection id="users" title="Designing across the inspection ecosystem">
          <ul className="case-bullets" aria-label="Subiter user groups">
            <li className="case-bullets__item">
              <strong>Clients:</strong> Access to information, history and results related to inspections.
            </li>
            <li className="case-bullets__item">
              <strong>Inspectors / Internal team:</strong> Operational inspection workflows and management of inspection information.
            </li>
            <li className="case-bullets__item">
              <strong>Management:</strong> Visibility across assets, operational data and inspection activity.
            </li>
          </ul>
        </CaseSection>

        <CaseSection
          id="product-structure"
          title="Giving structure to a complex operational system"
          intro="A significant part of the design work involved translating inspection processes into a coherent digital structure: assets, inspections, re-inspections, reports, users and operational information needed to work together as part of the same product ecosystem."
        >
          <CaseMedia
            image={{
              src: '/assets/projects/subiter/editorial/inspection-map-1400.webp',
              alt: 'Editorial representation of an inspection map with industrial assets and connected operational information.',
            }}
            caption="Editorial representation, not a literal product screenshot."
          />
        </CaseSection>

        <CaseSection
          id="inspection-lifecycle"
          title="Connecting the inspection lifecycle"
          intro="The experience was designed around continuity rather than isolated deliverables. Inspection results could become part of an asset’s history, creating a persistent layer of information that supported follow-up inspections, reporting and operational visibility."
        >
          <CaseMedia
            image={{
              src: '/assets/projects/subiter/editorial/post-inspection-flow-1400.webp',
              alt: 'Editorial representation of a multi-step post-inspection flow connecting records and operational follow-up.',
            }}
            caption="Editorial representation."
          />
        </CaseSection>

        <CaseSection
          id="marina"
          title="Introducing Marina — AI inside the product"
          intro="As the Portal evolved, Marina was introduced as Subiter’s AI assistant, bringing conversational assistance into the product experience."
        >
          <div className="case-section__stack">
            <p className="case-section__copy">
              Marina was designed to support users and management within the inspection ecosystem, helping make complex information more accessible and useful during operational workflows.
            </p>
            <CaseMedia
              image={{
                src: '/assets/projects/subiter/editorial/ai-review-1400.webp',
                alt: 'Editorial representation of AI-assisted review integrated into inspection operations.',
              }}
              caption="Editorial representation. Marina supports decision-making workflows and does not replace human decisions."
            />
          </div>
        </CaseSection>

        <CaseSection
          id="ai-assisted-product-work"
          title="Using AI beyond the interface"
          intro="AI also became part of the broader product workflow, supporting activities such as report optimization, vessel imagery, task creation, business-rule definition and process documentation."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">
              The goal was not to replace product decisions, but to use AI as an accelerator while keeping domain knowledge, design judgment and operational validation in the loop.
            </p>
          </div>
        </CaseSection>

        <CaseSection
          id="design-continuity"
          title="Building consistency while the product evolved"
          intro="As the product matured, reusable components, interface patterns, documentation and Design System practices helped establish greater consistency and continuity across the digital experience."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">
              This foundation also improved communication between Product Design and Engineering as new initiatives were prioritized and delivered.
            </p>
          </div>
        </CaseSection>

        <CaseSection
          id="production"
          title="From design decisions to a live product"
          intro="The Web Portal and improvements to the inspection-report experience were delivered to production and became part of Subiter’s operational product ecosystem."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">Production adoption is presented as ecosystem continuity, not as an isolated release claim.</p>
          </div>
        </CaseSection>

        <CaseSection
          id="international-operation"
          title="Supporting a real international inspection operation"
          intro="As Subiter’s digital and operational capabilities evolved, the company expanded into more complex engagements, including an international operation in Ecuador involving the inspection of the National Geographic Delfina."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">
              The engagement connected the digital product work to a real-world inspection context beyond Brazil, involving a luxury expedition catamaran operating in the Galápagos.
            </p>
            <p className="case-section__copy">
              <a className="contact__secondary-link" href="https://www.expeditions.com/ships/national-geographic-delfina" target="_blank" rel="noreferrer">
                View National Geographic Delfina →
              </a>
            </p>
          </div>
        </CaseSection>

        <CaseSection
          id="outcome"
          title="A stronger digital foundation for increasingly complex operations"
          intro="The work helped establish a more structured digital foundation around Subiter’s inspection operations — connecting product experience, reporting, traceability and AI in a production environment."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">
              The contribution was also formally recognized by the company for organization, attention to detail, collaboration and support for product continuity.
            </p>
          </div>
        </CaseSection>

        <CaseSection
          id="published-perspective"
          title="Writing about the product"
          intro="An article I wrote for Subiter presenting the product vision behind the Web Portal and how inspection data, traceability, user experience and AI come together within the platform."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">Portal Web da Subiter: Rastreabilidade e inteligência na indústria 4.0</p>
            <p className="case-section__copy">
              <a
                className="contact__secondary-link"
                href="https://www.subiter.com/post/portal-web-da-subiter-rastreabilidade-e-intelig%C3%AAncia-na-ind%C3%BAstria-4-0"
                target="_blank"
                rel="noreferrer"
              >
                Read the article on Subiter →
              </a>
            </p>
          </div>
        </CaseSection>

        <CaseSection
          id="learning"
          title="Designing where digital products meet physical operations"
          intro="Working on Subiter reinforced that designing complex B2B products requires more than simplifying interfaces. It requires understanding the operation behind them — its people, rules, data and physical-world constraints — and translating that complexity into a system people can actually use."
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">Author reflection, not a performance metric claim.</p>
          </div>
        </CaseSection>

        <CaseNavigation label="← Back to projects" />
      </main>
    </>
  );
}