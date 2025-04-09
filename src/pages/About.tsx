
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-[#0f4d92] text-white">
          <div className="yale-container py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About the School</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              The Yale School of Art provides students with intellectually informed, hands-on instruction in the practice of an array of visual arts media.
            </p>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="yale-container">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="departments">Departments</TabsTrigger>
                <TabsTrigger value="facilities">Facilities</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <p className="text-lg text-gray-700 mb-4 text-balance">
                    The Yale School of Art is a graduate professional school of Yale University. Founded in 1869 as the first professional fine arts school in the United States, it grants Master of Fine Arts degrees to students completing a two-year course in graphic design, painting/printmaking, photography, or sculpture.
                  </p>
                  <p className="text-lg text-gray-700 mb-4 text-balance">
                    The School of Art is deeply committed to educating the next generation of leading artists in their respective fields through an immersive experience that encourages experimentation, risk-taking, and the development of a unique artistic voice.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Mission</h3>
                  <p className="text-gray-700 mb-4 text-balance">
                    The mission of the Yale School of Art is to provide students with intellectually informed, hands-on instruction in the practice of an array of visual arts media within the context of a liberal arts university. As an educational institution that nurtures and values the diversity of our student body and faculty, we recognize the contribution of tradition to the development of personal creative expression in the fine arts. We seek to provide students with the intellectual tool s and physical resources enabling them to use the full spectrum of available media to contemporize and extend traditional forms of self-expression and to continue the discovery of emergent new forms and methods of artistic expression.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Community</h3>
                  <p className="text-gray-700 mb-4 text-balance">
                    The Yale School of Art community fosters a rigorous and collaborative environment where all students are supported in the development of their work. Students benefit from studying in Yale's diverse university setting while also being part of a close-knit community of artists, critics, and scholars.
                  </p>
                  <p className="text-gray-700 text-balance">
                    The School maintains a faculty of internationally recognized artists who are committed to progressive approaches to art education while being firmly grounded in an understanding of historical and traditional methodologies.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="history" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">History</h2>
                  <p className="text-lg text-gray-700 mb-4 text-balance">
                    The study of the visual arts at Yale began with the opening of the Trumbull Gallery in 1832. The Gallery was founded by portrait painter Colonel John Trumbull with the help of Professor Benjamin Silliman, a prominent chemist.
                  </p>
                  <p className="text-lg text-gray-700 mb-4 text-balance">
                    In 1864, Augustus Russell Street donated funds for the establishment of a School of Fine Arts at Yale. Through the combined efforts of the University and Augustus Street, the Yale School of Fine Arts opened in 1869 as the first professional fine arts school in the United States.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Development</h3>
                  <p className="text-gray-700 mb-4 text-balance">
                    Originally located on the Old Campus, the School was moved in 1900 to Street Hall, which was designed as the School's home by Egerton Swartwout (B.A. 1891). In 1950, Josef Albers became the first chairman of the Department of Design. In 1958, the School of Art and Architecture was designated as a separate professional school with the two departments becoming the School of Art in 1972.
                  </p>
                  <p className="text-gray-700 mb-4 text-balance">
                    The School of Art moved into its own building in 1964. It was designed by Paul Rudolph, then the chairman of the Yale School of Architecture. In 2000, the School's facilities underwent extensive renovation and expansion with the completion of Holcombe T. Green Jr. Hall.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Notable Alumni</h3>
                  <p className="text-gray-700 mb-4 text-balance">
                    The Yale School of Art counts among its notable alumni Matthew Barney, Chuck Close, Eva Hesse, Brice Marden, Sarah Sze, and Kehinde Wiley, among many others who have made significant contributions to the field of art.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="departments" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Departments</h2>
                  <p className="text-lg text-gray-700 mb-6 text-balance">
                    The Yale School of Art offers graduate programs in four departments. Each department has a unique curriculum and focus while sharing the school's commitment to developing artists of the highest caliber.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Graphic Design</h3>
                    <p className="text-gray-700 mb-4 text-balance">
                      The graduate program in graphic design focuses on the development of a cohesive, investigative body of work, also known as the student's "thesis." The thesis is an intensive, independent project of research and visual experimentation that engages with the social, cultural, and political aspects of visual communication.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Painting/Printmaking</h3>
                    <p className="text-gray-700 mb-4 text-balance">
                      The painting and printmaking program provides an opportunity for the student to develop an individual professional practice. Students work closely with an exceptional faculty of accomplished artists to explore the diverse intellectual, technical, and artistic possibilities of various media.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Photography</h3>
                    <p className="text-gray-700 mb-4 text-balance">
                      The photography program offers an intensive graduate education in both the creation and study of photography as a fine art. Through a combination of technical workshops, critical seminars, and academic courses, students are encouraged to develop their individual artistic voices and to situate their practices within broader historical and contemporary contexts.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Sculpture</h3>
                    <p className="text-gray-700 mb-4 text-balance">
                      The sculpture program provides a foundation for students to develop their work in a context of vigorous critical discussion. The program encourages both interdisciplinary and collaborative approaches to sculpture, recognizing that the field extends beyond traditional boundaries to include installation, time-based work, and performance.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="facilities" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Facilities</h2>
                  <p className="text-lg text-gray-700 mb-6 text-balance">
                    The Yale School of Art is housed primarily in Holcombe T. Green Jr. Hall at 1156 Chapel Street. Green Hall houses the School's administrative offices, the Haas Family Arts Library, classrooms, faculty offices, and student studio spaces.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Robert B. Haas Family Arts Library</h3>
                    <p className="text-gray-700 text-balance">
                      The Haas Family Arts Library serves as the primary collection for the study of art, architecture, and drama at Yale. The collection includes approximately 125,000 volumes on art, architecture, painting, sculpture, graphic design, urban planning, and photography, as well as an array of periodicals, artists' books, and exhibition catalogs.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Digital Media Center for the Arts</h3>
                    <p className="text-gray-700 text-balance">
                      The Digital Media Center for the Arts (DMCA) provides specialized facilities and technical support for creating and working with digital media across all artistic disciplines. The DMCA includes video and audio editing suites, advanced computing workstations, and equipment for 3D scanning and printing.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Department Facilities</h3>
                    <p className="text-gray-700 mb-4 text-balance">
                      Each department maintains studios, workshops, and specialized equipment for student use. These include painting studios, printmaking workshops, photography darkrooms, digital labs, woodworking and metal shops, and sculpture foundry facilities.
                    </p>
                    <p className="text-gray-700 text-balance">
                      The School's facilities are designed to support a wide range of artistic practices and to encourage interdisciplinary exploration and collaboration.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
