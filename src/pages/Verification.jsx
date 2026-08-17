import { useState } from 'react';
import { verificationSteps } from '../data/verificationSteps';
import './Verification.css';

function Verification() {
  const [steps, setSteps] = useState(verificationSteps);
  const [activeIndex, setActiveIndex] = useState(steps.findIndex((step) => !step.done));

  const currentStepIndex = activeIndex === -1 ? 0 : activeIndex;
  const currentStep = steps[currentStepIndex];
  const completedCount = steps.filter((step) => step.done).length;
  const allDone = completedCount === steps.length;

  const handleComplete = () => {
    setSteps((prev) =>
      prev.map((step, index) => (index === currentStepIndex ? { ...step, done: true } : step))
    );
    const nextPending = steps.findIndex((step, index) => index > currentStepIndex && !step.done);
    if (nextPending !== -1) {
      setActiveIndex(nextPending);
    }
  };

  return (
    <div className="verification-page">
      <div className="container verification-content">
        <div className="verification-heading">
          <h1>Verification</h1>
          <p className="verification-tagline">
            Complete each step to earn your verified badge. This is a frontend demonstration —
            no documents are uploaded to a server.
          </p>
        </div>

        <div className="verification-progress">
          <div className="verification-progress-bar">
            <div
              className="verification-progress-fill"
              style={{ width: `${(completedCount / steps.length) * 100}%` }}
            />
          </div>
          <span className="verification-progress-label">
            {completedCount} of {steps.length} steps complete
          </span>
        </div>

        <div className="verification-grid">
          <div className="verification-steps">
            {steps.map((step, index) => (
              <button
                key={step.id}
                type="button"
                className={`verification-step-item ${
                  index === currentStepIndex ? 'verification-step-active' : ''
                } ${step.done ? 'verification-step-done' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="verification-step-icon">{step.done ? '✓' : index + 1}</span>
                <span>{step.title}</span>
              </button>
            ))}
          </div>

          <div className="card verification-detail">
            {allDone ? (
              <div className="verification-complete">
                <div className="verification-complete-icon">✓</div>
                <h2>You're fully verified.</h2>
                <p>All verification steps are complete. Your profile now shows the verified badge.</p>
              </div>
            ) : (
              <>
                <span className="badge badge-blue verification-detail-badge">
                  Step {currentStepIndex + 1} of {steps.length}
                </span>
                <h2>{currentStep.title}</h2>
                <p className="verification-detail-description">{currentStep.description}</p>
                <div className="verification-upload-placeholder">
                  {currentStep.done ? 'Uploaded' : 'No file uploaded yet'}
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleComplete}
                  disabled={currentStep.done}
                >
                  {currentStep.done ? 'Step Complete' : `Mark ${currentStep.title} Complete`}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verification;
