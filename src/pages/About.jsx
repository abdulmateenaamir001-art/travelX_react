import React from 'react';

import './About.css';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import StoryMissionVision from '../components/StoryMissionVision';
import TeamMember from '../components/TeamMember';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import { teamMembers, testimonials } from '../../dataaboutme';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <HeroSection />

      <div className="container mt-5">
        <StoryMissionVision />

        {/* Meet Our Team */}
        <section className="mb-5">
          <h3 className="text-center section-title">Meet Our Team</h3>
          <div className="row text-center">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials reviews={testimonials} />

        {/* CTA */}
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}

export default About;