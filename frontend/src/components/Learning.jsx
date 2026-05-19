import React from 'react';
import { GraduationCap } from 'lucide-react';
import { PanelHeader } from './UI';

export function Learning({ courses, setActiveView, setActiveCourseId }) {
  return (
    <section className="view-stack">
      <div className="section-heading">
        <div>
          <p className="eyebrow">My learning</p>
          <h2>Your enrolled courses</h2>
        </div>
      </div>
      <div className="learning-layout" style={{ gridTemplateColumns: '1fr' }}>
        <section className="panel wide">
          <PanelHeader icon={GraduationCap} title="Progress Tracking" />
          <div className="course-list">
            {courses.map((course) => (
              <div key={course.id} className="learning-card">
                <div>
                  <strong>{course.title}</strong>
                  <span>{course.instructor}</span>
                </div>
                <div className="progress-wrap">
                  <div className="progress-label">
                    <span>Completion</span>
                    <strong>{course.progress}%</strong>
                  </div>
                  <div className="progress-track">
                    <span style={{ width: `${course.progress}%` }} />
                  </div>
                </div>
                {course.enrollmentStatus === 'Pending' ? (
                  <div className="hero-actions">
                    <span className="api-status">Payment Pending Approval</span>
                  </div>
                ) : (
                  <div className="hero-actions">
                    <button 
                      className="primary-btn compact" 
                      onClick={() => {
                        setActiveCourseId(course.id);
                        setActiveView('course-viewer');
                      }}
                    >
                      Open Course
                    </button>
                  </div>
                )}
              </div>
            ))}
            {!courses.length && <p className="muted">You are not enrolled in any courses yet.</p>}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Learning;
