import React, { useState } from 'react';
import { UserCog, Mail, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { PanelHeader } from './UI';

export function InstructorList({ instructors, courses }) {
  const [expandedInstructor, setExpandedInstructor] = useState(null);

  const openGmail = (email) => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  };

  const toggleInstructor = (id) => {
    setExpandedInstructor(expandedInstructor === id ? null : id);
  };

  const getInstructorCourses = (instructorId) => {
    const instructor = instructors.find(i => i.id === instructorId);
    return courses.filter(c => c.status === 'Approved' && (c.instructorId === instructorId || c.instructor === instructor?.name));
  };

  return (
    <section className="view-stack">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Our Experts</p>
          <h2>Meet our highly qualified instructors</h2>
        </div>
        <span className="result-count">{instructors.length} Instructors</span>
      </div>
      
      <div className="content-grid" style={{ gridTemplateColumns: '1fr' }}>
        <section className="panel">
          <PanelHeader icon={UserCog} title="All Instructors" />
          <div className="status-list">
            {instructors.map((item) => (
              <div key={item.id} style={{ display: 'grid', gap: '8px' }}>
                <div 
                  className="status-row" 
                  style={{ gridTemplateColumns: 'auto 1fr auto auto', cursor: 'pointer' }}
                  onClick={() => toggleInstructor(item.id)}
                >
                  <span className="status-dot published" />
                  <div>
                    <span style={{ display: 'block', fontWeight: 'bold' }}>{item.name}</span>
                    <span 
                      onClick={(e) => { e.stopPropagation(); openGmail(item.email); }} 
                      style={{ cursor: 'pointer', color: 'var(--primary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      <Mail size={12} />
                      {item.email}
                    </span>
                  </div>
                  <div style={{ textAlign: 'right', marginRight: '10px' }}>
                    <small style={{ display: 'block', fontSize: '0.75rem', color: 'var(--muted)' }}>Member since {item.joined}</small>
                  </div>
                  {expandedInstructor === item.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                
                {expandedInstructor === item.id && (
                  <div style={{ padding: '0 10px 10px 30px', borderLeft: '2px solid var(--line)', marginLeft: '4px' }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '8px', color: 'var(--muted)' }}>Courses Teaching:</p>
                    {getInstructorCourses(item.id).length > 0 ? (
                      <div style={{ display: 'grid', gap: '8px', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
                        {getInstructorCourses(item.id).map(course => (
                          <div key={course.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', background: 'var(--soft)', borderRadius: '6px' }}>
                            <BookOpen size={14} style={{ color: 'var(--primary)' }} />
                            <div>
                                <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600' }}>{course.title}</span>
                                <small style={{ color: 'var(--muted)' }}>{course.category} • {course.level}</small>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>No courses assigned yet.</p>
                    )}
                  </div>
                )}
              </div>
            ))}
            {!instructors.length && <p className="muted">No instructors found.</p>}
          </div>
        </section>
      </div>
    </section>
  );
}

export default InstructorList;
