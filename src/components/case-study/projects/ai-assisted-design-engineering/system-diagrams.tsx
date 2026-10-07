import type { AiAssistedDesignEngineeringCaseLocalizedContent } from '@/content/i18n/projects/ai-assisted-design-engineering';
import styles from './case.module.css';

type Labels = AiAssistedDesignEngineeringCaseLocalizedContent['diagramLabels'];

export function WorkflowDiagram({ steps, phases }: { steps: readonly string[]; phases: Labels['workflowPhases'] }) {
  return (
    <div className={styles.workflow}>
      {phases.map((phase, phaseIndex) => (
        <div key={phase} className={styles.phase}>
          <p className={styles.label}>{phase}</p>
          <ol start={phaseIndex * 3 + 1} className={styles.phaseSteps} aria-label={phase}>
            {steps.slice(phaseIndex * 3, phaseIndex * 3 + 3).map((step) => <li key={step}>{step}</li>)}
          </ol>
          {phaseIndex < phases.length - 1 ? <span className={styles.phaseConnector} aria-hidden="true">↓</span> : null}
        </div>
      ))}
    </div>
  );
}

export function EvidenceLadder({ states, distinctions }: { states: Labels['evidenceStates']; distinctions: readonly string[] }) {
  return (
    <ol className={styles.ladder}>
      {states.map((state, index) => (
        <li key={state} className={styles.rung}>
          <span className={styles.state}>{state}</span>
          {distinctions[index] ? (
            <div className={styles.transition}>
              <span aria-hidden="true" className={styles.connector}>↓</span>
              <p>{distinctions[index]}</p>
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function ArtifactLoop({ steps, returnLabel }: { steps: readonly string[]; returnLabel: string }) {
  return (
    <div className={styles.artifact}>
      <ol className={styles.loopSteps}>
        {steps.map((step, index) => (
          <li key={step}>
            <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <span>{step}</span>
            {index < steps.length - 1 ? <span className={styles.stepConnector} aria-hidden="true">↓</span> : null}
          </li>
        ))}
      </ol>
      <p className={styles.loopReturn}><span aria-hidden="true">↶</span> {returnLabel}</p>
    </div>
  );
}

export function TrustArchitecture({ layers, labels }: { layers: AiAssistedDesignEngineeringCaseLocalizedContent['sections']['trustBoundaries']['layers']; labels: Labels['trustLayers'] }) {
  return (
    <dl className={styles.trust}>
      {layers.map((layer, index) => (
        <div key={layer.id} className={styles.trustLayer}>
          {index > 0 ? <span className={styles.trustConnector} aria-hidden="true">↕</span> : null}
          <dt className={styles.label}>{labels[index]}</dt>
          <dd>{layer.description}</dd>
        </div>
      ))}
    </dl>
  );
}
