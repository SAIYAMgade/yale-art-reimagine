
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Calendar, Clock, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Apply = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-[#0f4d92] text-white">
          <div className="yale-container py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Apply</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              The Yale School of Art is a graduate school that confers Master of Fine Arts (MFA) degrees in Graphic Design, Painting/Printmaking, Photography, and Sculpture.
            </p>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="yale-container">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6">Application Overview</h2>
              <p className="text-lg text-gray-700 mb-4">
                Applications for programs beginning in the 2025–2026 academic year must be submitted no later than 11:59:59 PM EST on January 4, 2025.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                All applicants are required to register with the Yale School of Art's SlideRoom portal and submit all materials online through SlideRoom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="flex items-center">
                  Apply via SlideRoom <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button variant="outline" size="lg" className="flex items-center">
                  Download Instructions <FileText className="ml-2" size={18} />
                </Button>
              </div>
            </div>
            
            {/* Key Dates */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Calendar className="h-8 w-8 text-primary" />
                  <CardTitle>Application Opens</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold">September 1, 2024</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <CardTitle>Application Deadline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold">January 4, 2025</p>
                  <p className="text-sm text-gray-500">11:59:59 PM EST</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <HelpCircle className="h-8 w-8 text-primary" />
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">Email us at:</p>
                  <a href="mailto:art.admissions@yale.edu" className="text-primary hover:underline">art.admissions@yale.edu</a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Application Requirements */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="yale-container">
            <h2 className="text-3xl font-bold mb-8">Application Requirements</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">Academic Requirements</AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>
                    Applicants must hold a bachelor's degree (or its equivalent) from an accredited college or university.
                  </p>
                  <p>
                    While many applicants hold a B.F.A. degree in art, others have degrees in related fields in the arts, humanities, or sciences.
                  </p>
                  <p>
                    International applicants should refer to the Yale Graduate School of Arts and Sciences website for information regarding international academic credentials and equivalencies.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">Application Materials</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Completed online application form</li>
                    <li>Non-refundable application fee of $100</li>
                    <li>Official transcripts from all undergraduate and graduate schools attended</li>
                    <li>Three letters of recommendation</li>
                    <li>Statement of purpose (500-1000 words)</li>
                    <li>Digital portfolio of work</li>
                    <li>TOEFL scores (for international applicants whose first language is not English)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl">Portfolio Requirements</AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>
                    The portfolio should represent your strongest and most recent work. Specific portfolio requirements vary by department:
                  </p>
                  
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold">Graphic Design</h4>
                      <p>20 images and/or videos, including 3-5 images of 3-dimensional work. Optional: link to a website or online publications.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Painting/Printmaking</h4>
                      <p>20 images and/or videos. Include examples of work in your primary medium.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Photography</h4>
                      <p>20 images and/or videos. May include examples from ongoing projects or work from multiple series.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Sculpture</h4>
                      <p>20 images and/or videos, with at least half representing 3-dimensional work.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl">International Applicants</AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>
                    International applicants are welcome to apply to the Yale School of Art. In addition to the standard application requirements, international applicants whose first language is not English are required to submit TOEFL scores.
                  </p>
                  <p>
                    A minimum TOEFL score of 100 on the internet-based test is required. The TOEFL requirement may be waived for applicants who have attended an undergraduate institution where the primary language of instruction is English for at least three years.
                  </p>
                  <p>
                    For more information regarding requirements for international students, please visit the Yale Graduate School of Arts and Sciences website.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        
        {/* Financial Aid Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="yale-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Financial Aid</h2>
              <p className="text-lg text-gray-700 mb-4">
                The School of Art is committed to providing financial assistance to students with demonstrated financial need. The School's financial aid program is extensive and includes scholarships to cover all or part of the cost of tuition, living allowances, and health insurance.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                All applicants who are U.S. citizens or permanent residents are automatically considered for financial aid at the time of admission. International applicants are eligible for scholarships based on merit and financial need.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                For more detailed information about financial aid, including how to apply, please visit the Financial Aid section of our website or contact the Office of Financial Affairs at <a href="mailto:art.finaid@yale.edu" className="text-primary hover:underline">art.finaid@yale.edu</a>.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Important Financial Aid Dates</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-700">FAFSA Filing Priority Deadline</span>
                    <span className="font-medium">February 1, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">CSS Profile Deadline</span>
                    <span className="font-medium">February 15, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Financial Aid Notification</span>
                    <span className="font-medium">With Admission Decision</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="yale-container">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>Is there a minimum GPA requirement?</AccordionTrigger>
                <AccordionContent>
                  There is no minimum GPA requirement for admission to the Yale School of Art. The admissions committee considers the entire application, including the portfolio, statement of purpose, and letters of recommendation.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-2">
                <AccordionTrigger>Does the Yale School of Art offer part-time study?</AccordionTrigger>
                <AccordionContent>
                  No, the Yale School of Art does not offer part-time study. All MFA programs are full-time, two-year programs that require students to be in residence during the academic year.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-3">
                <AccordionTrigger>Can I apply to more than one department?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can apply to more than one department, but you must submit a separate application and pay a separate application fee for each department to which you apply.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-4">
                <AccordionTrigger>Are campus visits and interviews required?</AccordionTrigger>
                <AccordionContent>
                  Campus visits are not required but are encouraged. The School hosts information sessions and tours throughout the fall. Interviews are by invitation only and are scheduled after the initial review of applications.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-5">
                <AccordionTrigger>Can I defer my admission?</AccordionTrigger>
                <AccordionContent>
                  The Yale School of Art does not offer deferred admission. If you are admitted and cannot attend, you must reapply for admission in a future year.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="yale-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-lg text-gray-700 mb-8">
                If you have questions about the application process or need assistance, please contact the Office of Academic Affairs.
              </p>
              
              <div className="flex flex-col items-center">
                <p className="text-gray-700 mb-2">Yale School of Art</p>
                <p className="text-gray-700 mb-2">Office of Academic Affairs</p>
                <p className="text-gray-700 mb-2">1156 Chapel Street</p>
                <p className="text-gray-700 mb-2">New Haven, CT 06520</p>
                <p className="text-gray-700 mb-4">T 203.432.2600</p>
                
                <a href="mailto:art.admissions@yale.edu" className="text-primary font-medium hover:underline">
                  art.admissions@yale.edu
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Apply;
