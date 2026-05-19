import React from 'react';
import { Plus, UserCog, Filter, Users, ClipboardCheck, LibraryBig, Edit3 } from 'lucide-react';
import { PanelHeader } from './UI';
import UserForm from './UserForm';

export function AdminPanel({ users, courses, instructors, pendingEnrollments, createInstructor, cycleUserStatus, onDecision, onEnrollmentDecision, onNewCourse, onEdit, Field }) {
  const pending = courses.filter((course) => course.status === 'Pending');
  return (
    <section className="view-stack">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Admin panel</p>
          <h2>Users, instructors, courses, and approvals</h2>
        </div>
        <button className="primary-btn" onClick={onNewCourse}>
          <Plus size={18} />
          Add course
        </button>
      </div>
      <div className="admin-grid">
        <section className="panel">
          <PanelHeader icon={UserCog} title="Add Instructor" />
          <UserForm onSubmit={createInstructor} Field={Field} />
        </section>
        <section className="panel">
          <PanelHeader icon={Filter} title="Payment Approvals" />
          <div className="status-list">
            {pendingEnrollments.map((enrollment) => (
              <div key={enrollment.enrollment_id} className="moderation-item">
                <div>
                  <strong>{enrollment.student_name}</strong>
                  <span>{enrollment.course_title}</span>
                </div>
                <div className="hero-actions">
                  <button className="primary-btn compact" onClick={() => onEnrollmentDecision(enrollment.enrollment_id, 'Approved')}>Approve</button>
                  <button className="secondary-btn compact" onClick={() => onEnrollmentDecision(enrollment.enrollment_id, 'Denied')}>Deny</button>
                </div>
              </div>
            ))}
            {!pendingEnrollments.length && <p className="muted">No pending payments.</p>}
          </div>
        </section>
        <section className="panel">
          <PanelHeader icon={Filter} title="Course Requests" />
          <div className="status-list">
            {pending.map((course) => (
              <div key={course.id} className="moderation-item">
                <div>
                  <strong>{course.title}</strong>
                  <span>{course.instructor}</span>
                </div>
                <div className="hero-actions">
                  <button className="primary-btn compact" onClick={() => onDecision(course.id, 'Approved')}>Approve</button>
                  <button className="secondary-btn compact" onClick={() => onDecision(course.id, 'Denied')}>Deny</button>
                </div>
              </div>
            ))}
            {!pending.length && <p className="muted">No pending course requests.</p>}
          </div>
        </section>
        <section className="panel wide">
          <PanelHeader icon={Users} title="User Management" />
          <div className="table">
            <div className="table-row table-head">
              <span>Name</span>
              <span>Email</span>
              <span>Role</span>
              <span>Status</span>
              <span>Action</span>
            </div>
            {users.map((item) => (
              <div key={item.id} className="table-row">
                <span>{item.name}</span>
                <span>{item.email}</span>
                <span className="capitalize">{item.role}</span>
                <span className={`pill ${item.status.toLowerCase()}`}>{item.status}</span>
                <button className="text-btn" onClick={() => cycleUserStatus(item.id)}>Change</button>
              </div>
            ))}
          </div>
        </section>
        <section className="panel">
          <PanelHeader icon={ClipboardCheck} title="Instructors" />
          <div className="status-list">
            {instructors.map((item) => (
              <div key={item.id} className="status-row">
                <span className="status-dot published" />
                <span>{item.name}</span>
                <strong>{item.status}</strong>
              </div>
            ))}
          </div>
        </section>
        <section className="panel">
          <PanelHeader icon={LibraryBig} title="All Courses" />
          <div className="status-list">
            {courses.slice(0, 8).map((course) => (
              <div key={course.id} className="moderation-item">
                <div>
                  <strong>{course.title}</strong>
                  <span>{course.status}</span>
                </div>
                <button className="icon-btn" onClick={() => onEdit(course)} title="Edit course">
                  <Edit3 size={17} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default AdminPanel;
