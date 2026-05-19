import React from 'react';
import { BookOpen } from 'lucide-react';

export function Footer({ role, setActiveView }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="brand">
            <div className="brand-mark">
              <BookOpen size={24} color="white" />
            </div>
            <div>
              <strong style={{ color: 'white' }}>CourseFlow</strong>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Interactive learning platform</span>
            </div>
          </div>
          <p>
            Empowering learners and instructors worldwide with a seamless, 
            interactive, and professional educational marketplace.
          </p>
        </div>

        <div className="footer-links">
          <h4>Platform</h4>
          <ul>
            <li><span onClick={() => setActiveView('dashboard')}>Dashboard</span></li>
            <li><span onClick={() => setActiveView('marketplace')}>Marketplace</span></li>
            {role === 'student' && <li><span onClick={() => setActiveView('learning')}>My Learning</span></li>}
            {(role === 'instructor' || role === 'admin') && <li><span onClick={() => setActiveView('roster')}>Student Roster</span></li>}
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Partner Program</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Support</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} CourseFlow Marketplace. All rights reserved.</p>
        <div className="social-links">
          <a href="#" aria-label="Twitter">Twitter</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="GitHub">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
