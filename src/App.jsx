import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  MapPin, 
  Users, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle, 
  GraduationCap, 
  Briefcase, 
  PlaneTakeoff,
  Languages,
  ArrowRight,
  Building2,
  Search,
  User,
  Award,
  Download,
  Eye,
  FileText,
  DollarSign
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('belajar');
  const [currentView, setCurrentView] = useState('home'); // 'home', 'kandidat', 'loker'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    { 
      title: "Kelas Intensif JLPT N4 - N5", 
      type: "Persiapan Dasar", 
      rating: 4.9, 
      students: "1.2k", 
      price: "Rp 1.500.000", 
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=500" 
    },
    { 
      title: "Tokutei Ginou (SSW) Kaigo", 
      type: "Program Kerja", 
      rating: 4.8, 
      students: "850", 
      price: "Rp 2.500.000", 
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=500" 
    },
    { 
      title: "Bahasa Jepang Bisnis & Budaya", 
      type: "Profesional", 
      rating: 4.9, 
      students: "500", 
      price: "Rp 1.800.000", 
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=500" 
    },
  ];

  const jobs = [
    { 
      title: "Perawat Lansia (Kaigo)", 
      location: "Chiba, Japan", 
      salary: "¥180.000 - ¥220.000", 
      company: "Social Welfare Corp", 
      tags: ["SSW", "Asrama Free"],
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400"
    },
    { 
      title: "Pengolahan Makanan", 
      location: "Osaka, Japan", 
      salary: "¥175.000 - ¥200.000", 
      company: "Japan Food Industry", 
      tags: ["SSW", "Lembur Tersedia"],
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=400"
    },
    { 
      title: "Konstruksi (Pemasangan Scaffolding)", 
      location: "Tokyo, Japan", 
      salary: "¥210.000 - ¥250.000", 
      company: "BuildTech Co., Ltd", 
      tags: ["SSW", "Tiket Pesawat"],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=400"
    },
    { 
      title: "Pertanian & Perkebunan", 
      location: "Nagano, Japan", 
      salary: "¥170.000 - ¥190.000", 
      company: "Green Field Agriculture", 
      tags: ["SSW", "Pedesaan"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400"
    },
  ];

  const candidates = [
    {
      id: "RJ-2024-001",
      name: "Andi Pratama",
      age: 23,
      gender: "Laki-laki",
      jlpt: "N4",
      ssw: "Kaigo (Nursing Care)",
      status: "Siap Kerja",
      photo: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: "RJ-2024-002",
      name: "Siti Rahayu",
      age: 21,
      gender: "Perempuan",
      jlpt: "N3",
      ssw: "Food Service",
      status: "Proses COE",
      photo: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || currentView !== 'home' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('home')}>
              <div className="bg-red-600 p-2 rounded-lg">
                <Languages className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight text-blue-900">
                RJ<span className="text-red-600">ACADEMY</span>
              </span>
            </div>
            
            <div className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
              <button onClick={() => setCurrentView('home')} className={`hover:text-red-600 transition-colors ${currentView === 'home' ? 'text-red-600' : 'text-slate-700'}`}>Beranda</button>
              <button onClick={() => {setCurrentView('home'); setTimeout(() => {document.getElementById('program')?.scrollIntoView({behavior:'smooth'})}, 100)}} className="text-slate-700 hover:text-red-600 transition-colors">Program Belajar</button>
              <button onClick={() => setCurrentView('kandidat')} className={`hover:text-red-600 transition-colors ${currentView === 'kandidat' ? 'text-red-600' : 'text-slate-700'}`}>Calon Pekerja</button>
              <button onClick={() => setCurrentView('loker')} className={`hover:text-red-600 transition-colors ${currentView === 'loker' ? 'text-red-600' : 'text-slate-700'}`}>Loker Jepang</button>
              <button className="bg-blue-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-black transition-all shadow-lg active:scale-95">
                Portal Siswa
              </button>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-800">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t p-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
            <button onClick={() => {setCurrentView('home'); setIsMenuOpen(false);}} className="block w-full text-left font-bold py-2 border-b">Beranda</button>
            <button onClick={() => {setCurrentView('kandidat'); setIsMenuOpen(false);}} className="block w-full text-left font-bold py-2 border-b">Calon Pekerja</button>
            <button onClick={() => {setCurrentView('loker'); setIsMenuOpen(false);}} className="block w-full text-left font-bold py-2 border-b">Loker Jepang</button>
            <button className="block w-full text-center bg-blue-900 text-white py-3 rounded-xl font-bold mt-4">Portal Siswa</button>
          </div>
        )}
      </nav>

      {/* Main View Logic */}
      {currentView === 'home' && (
        <>
          {/* Hero Section */}
          <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-red-50/30 skew-x-12 translate-x-1/4 -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
                  <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                    <PlaneTakeoff size={16} />
                    <span>Jembatan Karir Anda ke Jepang</span>
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">
                    Kuasai Bahasanya, <br />
                    <span className="text-red-600">Raih Karirnya.</span>
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                    Lembaga pelatihan Bahasa Jepang terpercaya dengan program penyaluran kerja (SSW/Gingin) resmi ke perusahaan-perusahaan di Jepang.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button onClick={() => setCurrentView('loker')} className="bg-red-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-red-200 hover:bg-red-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                      Cek Loker Jepang <ArrowRight size={20} />
                    </button>
                    <button onClick={() => setCurrentView('kandidat')} className="bg-blue-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all flex items-center justify-center gap-2">
                      Profil Calon Pekerja
                    </button>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[4/5] lg:aspect-square">
                    <img 
                      src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt="Belajar Bahasa Jepang"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 text-white">
                      <p className="text-5xl font-black">100%</p>
                      <p className="font-bold opacity-80 uppercase tracking-widest text-sm">Tingkat Keberangkatan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Program Belajar Section */}
          <section id="program" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4 uppercase">Program Pelatihan</h2>
                <div className="h-1.5 w-24 bg-red-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {courses.map((course, idx) => (
                  <CourseCard key={idx} {...course} />
                ))}
              </div>
            </div>
          </section>

          {/* Steps Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-red-600 font-black uppercase tracking-widest mb-4 italic underline">Step-by-Step</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-16">Proses Keberangkatan</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Step number="01" title="Pendaftaran" desc="Konsultasi bakat dan pemilihan jalur kerja." />
                <Step number="02" title="Pelatihan" desc="Belajar Bahasa & Skill teknis di RJ Academy." />
                <Step number="03" title="Interview" desc="Wawancara langsung dengan User Jepang." />
                <Step number="04" title="Berangkat" desc="Pengurusan Visa & terbang ke Negeri Sakura." />
              </div>
            </div>
          </section>
        </>
      )}

      {currentView === 'loker' && (
        /* Loker Jepang Section */
        <section className="pt-32 pb-24 bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-2 italic uppercase">Lowongan Kerja Jepang</h2>
                <p className="text-slate-500 text-lg">Pekerjaan impian dengan fasilitas lengkap dan gaji standar Jepang.</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <div className="bg-slate-100 px-4 py-3 rounded-xl flex items-center gap-2 flex-1 md:w-64">
                  <Search className="text-slate-400" size={20} />
                  <input type="text" placeholder="Cari posisi pekerjaan..." className="bg-transparent outline-none w-full text-sm font-bold" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job, idx) => (
                <JobCard key={idx} {...job} />
              ))}
            </div>
          </div>
        </section>
      )}

      {currentView === 'kandidat' && (
        /* Calon Pekerja Section */
        <section className="pt-32 pb-24 bg-slate-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-4xl font-black text-slate-900 mb-2 italic uppercase">Database Calon Pekerja</h2>
              <p className="text-slate-500 text-lg">Kandidat terbaik RJ Academy yang siap interview dan berangkat ke Jepang.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {candidates.map((candidate, idx) => (
                <div key={idx} className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-40 h-52 md:h-auto shrink-0 relative">
                    <img src={candidate.photo} className="w-full h-full object-cover rounded-2xl shadow-md" alt={candidate.name} />
                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-black px-2 py-1 rounded-lg uppercase">
                      ID: {candidate.id}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-2xl font-black text-slate-900">{candidate.name}</h4>
                        <p className="text-slate-500 font-bold">{candidate.age} Tahun • {candidate.gender}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${candidate.status === 'Siap Kerja' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        {candidate.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                          <Languages size={14} />
                          <span className="text-[10px] font-black uppercase tracking-tighter text-blue-400">Level Bahasa</span>
                        </div>
                        <p className="font-black text-slate-800">JLPT {candidate.jlpt}</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-1.5 text-red-600 mb-1">
                          <Award size={14} />
                          <span className="text-[10px] font-black uppercase tracking-tighter text-red-400">Sertifikat SSW</span>
                        </div>
                        <p className="font-black text-slate-800 line-clamp-1">{candidate.ssw}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-colors">
                        <Eye size={18} /> Detail Profil
                      </button>
                      <button className="w-12 h-12 border-2 border-slate-100 flex items-center justify-center rounded-xl text-slate-600 hover:bg-slate-50 transition-colors">
                        <FileText size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-600 p-1 rounded">
                <Languages className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white">RJ ACADEMY</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 italic mb-6">
              "Jembatan Kesuksesan Karir di Negeri Sakura"
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold hover:bg-red-600 transition-colors cursor-pointer">IG</div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold hover:bg-red-600 transition-colors cursor-pointer">FB</div>
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Peta Situs</h5>
            <ul className="space-y-4 text-sm font-semibold">
              <li><button onClick={() => setCurrentView('home')} className="hover:text-white transition-colors">Beranda</button></li>
              <li><button onClick={() => setCurrentView('kandidat')} className="hover:text-white transition-colors">Calon Pekerja</button></li>
              <li><button onClick={() => setCurrentView('loker')} className="hover:text-white transition-colors">Loker Jepang</button></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Kantor Kami</h5>
            <ul className="space-y-4 text-sm font-semibold">
              <li className="flex items-center gap-2 italic">Jakarta Selatan, Indonesia</li>
              <li className="flex items-center gap-2 italic">Nagoya-shi, Japan</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Bantuan</h5>
            <button className="bg-green-600 text-white w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all mb-4">
              WhatsApp Kami
            </button>
            <p className="text-[10px] text-center opacity-50 uppercase tracking-widest">Respon Cepat 24/7</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-xs opacity-50">
          © 2024 RJ Academy Indonesia. Hak Cipta Dilindungi.
        </div>
      </footer>
    </div>
  );
};

// --- Sub Components ---

const CourseCard = ({ title, type, rating, students, price, image }) => (
  <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group">
    <div className="relative h-48 overflow-hidden">
      <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={title} />
      <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">
        {type}
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-1 text-amber-500 mb-2 font-bold text-sm">
        <Star size={16} fill="currentColor" />
        <span className="text-slate-700">{rating}</span>
        <span className="text-slate-400 font-normal ml-1">({students} Alumni)</span>
      </div>
      <h4 className="text-xl font-black text-slate-900 mb-4 h-14 line-clamp-2">{title}</h4>
      <div className="flex justify-between items-center pt-4 border-t border-slate-50">
        <span className="text-lg font-black text-blue-900">{price}</span>
        <button className="bg-slate-100 p-2 rounded-lg text-slate-600 hover:bg-red-600 hover:text-white transition-colors">
          <ChevronRight />
        </button>
      </div>
    </div>
  </div>
);

const JobCard = ({ title, location, salary, company, tags, image }) => (
  <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
    <div className="h-40 overflow-hidden relative">
      <img src={image} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" alt={title} />
      <div className="absolute inset-0 bg-blue-900/10"></div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
          <Briefcase size={20} />
        </div>
        <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-1 rounded-lg uppercase tracking-wider border border-green-100">Aktif</span>
      </div>
      <h4 className="text-xl font-black text-slate-900 mb-1">{title}</h4>
      <p className="text-slate-500 text-xs font-bold mb-4 uppercase tracking-widest opacity-70">{company}</p>
      
      <div className="flex items-center gap-2 text-slate-600 text-sm mb-4">
        <MapPin size={16} className="text-red-600" />
        <span className="font-semibold">{location}</span>
      </div>
      
      <div className="bg-slate-50 p-4 rounded-2xl mb-6 flex items-center justify-between border border-slate-100">
        <div>
          <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-0.5">Estimasi Gaji</p>
          <p className="text-lg font-black text-red-600">{salary}</p>
        </div>
        <DollarSign className="text-slate-200" size={24} />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, i) => (
          <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-[10px] font-black uppercase">{tag}</span>
        ))}
      </div>

      <button className="w-full py-4 bg-blue-900 text-white rounded-xl font-black hover:bg-black transition-colors shadow-lg active:scale-95">
        Lamar Sekarang
      </button>
    </div>
  </div>
);

const Step = ({ number, title, desc }) => (
  <div className="relative p-8 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
    <span className="text-6xl font-black text-slate-100 absolute top-4 left-4 -z-0 opacity-50">{number}</span>
    <div className="relative z-10">
      <div className="bg-red-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black mb-6 shadow-lg shadow-red-200">
        {number}
      </div>
      <h5 className="text-xl font-black text-slate-900 mb-2">{title}</h5>
      <p className="text-slate-500 leading-relaxed text-sm font-medium">{desc}</p>
    </div>
  </div>
);

export default App;