import React from 'react';
import { Mail } from 'lucide-react';

export function UserList({ enrollments }) {
  const openGmail = (email) => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  };

  return (
    <section className="view-stack">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Students</p>
          <h2>Students enrolled in instructor courses</h2>
        </div>
        <span className="result-count">{enrollments.length} enrollments</span>
      </div>
      <section className="panel wide">
        <div className="table">
          <div className="table-row table-head roster-row">
            <span>Student</span>
            <span>Email</span>
            <span>Course</span>
            <span>Progress</span>
            <span>Enrolled</span>
          </div>
          {enrollments.map((item) => (
            <div key={`${item.courseId}-${item.studentId}`} className="table-row roster-row">
              <span>{item.studentName}</span>
              <span 
                onClick={() => openGmail(item.studentEmail)} 
                style={{ cursor: 'pointer', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '4px' }}
                title="Send email via Gmail"
              >
                <Mail size={14} />
                {item.studentEmail}
              </span>
              <span>{item.courseTitle}</span>
              <span>{item.progress}%</span>
              <span>{item.enrolled}</span>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default UserList;
