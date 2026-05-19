import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export function CourseViewer({ course, updateProgress, onBack }) {
  const [localCompleted, setLocalCompleted] = useState(course.completedLessons || []);

  useEffect(() => {
    setLocalCompleted(course.completedLessons || []);
  }, [course.completedLessons]);

  const completedSet = new Set(localCompleted);
  const localProgress = course.lessons > 0 
    ? Math.round((localCompleted.length / course.lessons) * 100) 
    : 0;

  const toggleLesson = (lessonIndex) => {
    const newCompletedSet = new Set(completedSet);
    if (newCompletedSet.has(lessonIndex)) {
      newCompletedSet.delete(lessonIndex);
    } else {
      newCompletedSet.add(lessonIndex);
    }
    const newCompletedArray = Array.from(newCompletedSet);
    setLocalCompleted(newCompletedArray);
    updateProgress(course.id, newCompletedArray);
  };

  const lessons = Array.from({ length: course.lessons }, (_, i) => i + 1);

  return (
    <section className="view-stack">
      <div className="section-heading" style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'flex-start' }}>
        <button className="icon-btn" onClick={onBack} title="Back">
          <ArrowLeft size={18} />
        </button>
        <div>
          <p className="eyebrow">Course Viewer</p>
          <h2>{course.title}</h2>
        </div>
      </div>
      <div className="learning-layout" style={{ gridTemplateColumns: '1fr' }}>
        <section className="panel">
          <div className="progress-wrap large" style={{ marginBottom: '24px' }}>
            <div className="progress-label">
              <span>Course Progress</span>
              <strong>{localProgress}%</strong>
            </div>
            <div className="progress-track">
              <span style={{ width: `${localProgress}%` }} />
            </div>
          </div>
          
          <h3>Lessons</h3>
          <div className="lesson-list">
            {lessons.map((lesson) => (
              <label key={lesson} className={`lesson-item ${completedSet.has(lesson) ? 'completed' : ''}`}>
                <input 
                  type="checkbox" 
                  checked={completedSet.has(lesson)}
                  onChange={() => toggleLesson(lesson)}
                />
                <span>Lesson {lesson}</span>
              </label>
            ))}
            {lessons.length === 0 && <p className="muted">This course currently has no lessons.</p>}
          </div>
        </section>
      </div>
    </section>
  );
}

export default CourseViewer;
