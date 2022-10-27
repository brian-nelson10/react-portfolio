import React from 'react';
import Button from 'react-bootstrap/Button';
import Resume from '../../assets/resume/brian.nelson.resume.pdf'


const ResumeButton = () => {
    return (
        <>
        <a href={Resume} download="Resume" target='_blank' rel="noreferrer" >
   <Button className="fw-bold border-white text-white js-explode" 
   variant="dark" size='lg'>Download Resume</Button>
</a>
        </>
    );
}

export default ResumeButton;

