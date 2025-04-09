
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#0f4d92] text-white">
          <div className="yale-container py-20 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Yale School of Art</h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">The Yale School of Art is a graduate professional school of Yale University and is considered one of the most prestigious art schools in the United States.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link to="/apply">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Programs Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="yale-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
              <p className="text-lg text-gray-600">The Yale School of Art provides graduate level professional education in art through the following departments.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Graphic Design", description: "MFA in Graphic Design focuses on the development of a cohesive, investigative body of work." },
                { name: "Painting/Printmaking", description: "MFA in Painting/Printmaking offers students the opportunity to develop their individual art practice." },
                { name: "Photography", description: "MFA in Photography provides an intensive graduate education in the creation and study of photography." },
                { name: "Sculpture", description: "MFA in Sculpture enables students to develop their work in a context of vigorous critical discussion." }
              ].map((program, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all-300">
                  <h3 className="text-xl font-semibold mb-3">{program.name}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link to="/about" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Application Info Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="yale-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Apply to Yale School of Art</h2>
                <p className="text-lg text-gray-600 mb-6">
                  The Yale School of Art is a graduate school that confers MFAs in Graphic Design, Painting/Printmaking, Photography, and Sculpture.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Applications for programs beginning in the 2025–2026 academic year must be submitted no later than 11:59:59 PM EST on January 4, 2025.
                </p>
                <Button asChild size="lg" className="mt-2">
                  <Link to="/apply">Application Instructions</Link>
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Important Dates</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Application Opens</span>
                    <span className="font-medium">September 1, 2024</span>
                  </li>
                  <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Application Deadline</span>
                    <span className="font-medium">January 4, 2025</span>
                  </li>
                  <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Notification Date</span>
                    <span className="font-medium">March 15, 2025</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Response Deadline</span>
                    <span className="font-medium">April 15, 2025</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="yale-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-semibold italic mb-8">"The Yale School of Art is committed to the development of artistic excellence and the cultivation of a rigorous critical discourse."</h2>
              <p className="text-gray-600">Kymberly Pinder, Ph.D., The Stavros Niarchos Foundation Dean</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
