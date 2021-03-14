import React from 'react';
import sidebar from '../../../data/sidebar.json';
import './resume.css';

function Resume() {
  return (
    <div className='art-links-frame p-15-15'>
      <a href={sidebar.resume.url} className='art-link' download>
        {sidebar.resume.text} <i className='fas fa-download'></i>
      </a>
    </div>
  );
}

export default Resume;
