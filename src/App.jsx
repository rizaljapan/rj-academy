import React, { useState } from 'react';
import { 
  Home, BookOpen, Users, MessageSquare, User, 
  Flame, ChevronRight, Play, Star, Bell,
  Search, Heart, Share2, MoreHorizontal,
  ChevronLeft, Award, Zap
} from 'lucide-react';

// --- KOMPONEN LOGO OKAERI KUSTOM ---
const OkaeriLogo = ({ size = "md" }) => {
  const dimensions = size === "lg" ? "w-24 h-24" : "w-10 h-10";
  return (
    <div className={`relative ${dimensions} flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
        {/* Lingkaran Latar Belakang Lembut */}
        <circle cx="50" cy="50" r="45" fill="#FFE4E1" opacity="0.3" />
        
        {/* Gunung Fuji */}
        <path d="M20 75 L50 30 L80 75 Z" fill="#FADADD" />
        <path d="M42 42 L50 30 L58 42 L52 46 L50 42 L46 46 Z" fill="white" />
        
        {/* Gerbang Torii */}
        <path d="M25 35 L75 35 L75 40 L25 40 Z" fill="#FF4D4D" />
        <path d="M30 45 L70 45 L70 48 L30 48 Z" fill="#FF4D4D" />
        <rect x="35" y="38" width="6" height="40" fill="#FF4D4D" />
        <rect x="59" y="38" width="6" height="40" fill="#FF4D4D" />
        <rect x="22" y="32" width="56" height="5" rx="2" fill="#FF4D4D" />

        {/* Bunga Sakura Kecil */}
        <circle cx="20" cy="45" r="3" fill="#FFB7C5" />
        <circle cx="85" cy="55" r="4" fill="#FFB7C5" />
        <circle cx="15" cy="70" r="2.5" fill="#FFB7C5" />
      </svg>
    </div>
  );
};

// --- DATA SOURCE ---
const HIRAGANA_DATA = [
  { jp: 'あ', ro: 'a' }, { jp: 'い', ro: 'i' }, { jp: 'う', ro: 'u' }, { jp: 'え', ro: 'e' }, { jp: 'お', ro: 'o' },
  { jp: 'か', ro: 'ka' }, { jp: 'き', ro: 'ki' }, { jp: 'く', ro: 'ku' }, { jp: 'け', ro: 'ke' }, { jp: 'こ', ro: 'ko' }
];

const KATAKANA_DATA = [
  { jp: 'ア', ro: 'a' }, { jp: 'イ', ro: 'i' }, { jp: 'ウ', ro: 'u' }, { jp: 'エ', ro: 'e' }, { jp: 'オ', ro: 'o' }
];

const GRAMMAR_DATA = [
  { title: 'Partikel Wa (は)', desc: 'Menandakan subjek kalimat.', example: 'Watashi wa gakusei desu.' },
  { title: 'Desu (です)', desc: 'Akhiran sopan untuk kata benda.', example: 'Kore wa hon desu.' }
];

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedLesson, setSelectedLesson] = useState('hiragana');
  const [quizStep, setQuizStep] = useState(0);
  const [score, setScore] = useState(0);
  const [xp, setXp] = useState(320);
  const [streak, setStreak] = useState(3);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-black italic tracking-tight text-[#5C4033]">Selamat Datang!</h1>
              <button className="p-2 bg-white rounded-full shadow-sm border border-orange-100 text-orange-400">
                <Bell size={20} />
              </button>
            </div>

            <div className="bg-gradient-to-r from-[#FF8E53] to-[#FF6B6B] rounded-3xl p-4 shadow-lg shadow-red-100 flex items-center justify-between text-white">
              <div className="flex items-center gap-3 flex-1">
                <span className="font-bold text-sm">XP {xp}</span>
                <div className="w-full bg-white/30 h-3 rounded-full overflow-hidden border border-white/20">
                  <div className="bg-white h-full w-[65%] rounded-full transition-all duration-1000"></div>
                </div>
              </div>
              <div className="flex items-center gap-1 ml-4 bg-black/10 px-3 py-1 rounded-full border border-white/20">
                <Flame size={18} fill="currentColor" className="text-orange-300" />
                <span className="font-black text-sm">{streak} Daily</span>
              </div>
            </div>

            <section className="space-y-3">
              <h2 className="text-lg font-bold px-1 text-[#5C4033]">Lanjutkan Belajar</h2>
              <div 
                onClick={() => { setCurrentPage('lessons'); setSelectedLesson('hiragana'); }}
                className="bg-white p-5 rounded-[2.5rem] shadow-sm border border-orange-50 relative overflow-hidden group active:scale-95 transition-all cursor-pointer"
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-black text-[#FF6B6B]">Hiragana <span className="font-normal text-sm text-gray-400 ml-1">80% Selesai</span></h3>
                  <div className="w-full bg-gray-100 h-4 rounded-full mt-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-red-400 to-rose-400 h-full w-[80%] rounded-full shadow-inner"></div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none group-hover:scale-110 transition-transform">
                  <OkaeriLogo size="lg" />
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold px-1 text-[#5C4033]">Mulai Pelajaran</h2>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                <button onClick={() => { setCurrentPage('lessons'); setSelectedLesson('hiragana'); }} className="px-8 py-4 rounded-[2rem] font-black text-sm bg-white border-2 border-red-400 text-[#FF6B6B] shadow-sm active:scale-95 transition-all">Hiragana</button>
                <button onClick={() => { setCurrentPage('lessons'); setSelectedLesson('katakana'); }} className="px-8 py-4 rounded-[2rem] font-black text-sm bg-white border border-gray-100 text-gray-400 hover:border-orange-200 active:scale-95 transition-all">Katakana</button>
                <button onClick={() => { setCurrentPage('lessons'); setSelectedLesson('grammar'); }} className="px-8 py-4 rounded-[2rem] font-black text-sm bg-white border border-gray-100 text-gray-400 hover:border-orange-200 active:scale-95 transition-all">Grammar N5</button>
              </div>
            </section>

            <div className="bg-[#FFF5F1] p-5 rounded-[2.5rem] flex items-center justify-between border border-orange-100 shadow-sm relative overflow-hidden group">
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-orange-50 group-hover:rotate-12 transition-transform">
                  <Zap className="text-orange-400" size={28} fill="currentColor" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-[#5C4033]">Kuis Harian</h3>
                  <p className="text-xs text-gray-400 font-bold uppercase">Mulai Kuis</p>
                </div>
              </div>
              <button 
                onClick={() => { setCurrentPage('quiz'); setQuizStep(0); setScore(0); }}
                className="bg-[#FF6B6B] text-white px-6 py-3 rounded-2xl font-black text-sm shadow-md shadow-red-100 active:scale-90 transition-all z-10"
              >
                Mulai
              </button>
            </div>
          </div>
        );

      case 'lessons':
        return (
          <div className="space-y-6 animate-in slide-in-from-bottom duration-500">
            <div className="flex items-center gap-4">
               <button onClick={() => setCurrentPage('home')} className="p-2 bg-white rounded-full text-red-500 border border-orange-50"><ChevronLeft/></button>
               <h1 className="text-2xl font-black text-[#5C4033] capitalize">Belajar {selectedLesson}</h1>
            </div>
            {selectedLesson === 'grammar' ? (
               <div className="space-y-4">
                 {GRAMMAR_DATA.map((g, i) => (
                   <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-orange-50 shadow-sm">
                      <h3 className="font-black text-red-500 text-lg">{g.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{g.desc}</p>
                      <div className="mt-4 p-3 bg-red-50 rounded-xl font-medium text-red-700 italic">"{g.example}"</div>
                   </div>
                 ))}
               </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {(selectedLesson === 'hiragana' ? HIRAGANA_DATA : KATAKANA_DATA).map((item, i) => (
                  <div key={i} className="bg-white aspect-square rounded-[2rem] flex flex-col items-center justify-center border border-orange-50 shadow-sm hover:border-red-400 transition-all group cursor-pointer">
                    <span className="text-4xl font-black text-[#FF6B6B] group-hover:scale-110 transition-transform">{item.jp}</span>
                    <span className="text-xs font-bold text-gray-400 mt-1 uppercase">{item.ro}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'community':
        return (
          <div className="space-y-6 animate-in slide-in-from-right duration-500 pb-10">
            <h1 className="text-3xl font-black italic tracking-tighter text-[#5C4033]">Community</h1>
            <PostCard author="Anisa" title="Tips Menghafal Kanji" desc="Gunakan metode flashcards setiap pagi. Sangat efektif!" likes={124} comments={45} />
            <PostCard author="Budi" title="Rekomendasi Anime" desc="Anime apa yang bagus untuk melatih pendengaran bagi pemula?" likes={89} comments={67} />
          </div>
        );

      case 'quiz':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-in zoom-in duration-300">
             {quizStep < 3 ? (
               <div className="bg-white w-full max-w-sm p-8 rounded-[3rem] shadow-xl border border-orange-50">
                  <p className="text-xs font-black text-gray-400 uppercase mb-2">SOAL {quizStep + 1}/3</p>
                  <h2 className="text-8xl font-black text-red-500 mb-10">{HIRAGANA_DATA[quizStep].jp}</h2>
                  <div className="grid grid-cols-1 gap-3">
                     <button onClick={() => { setScore(score + 10); setQuizStep(quizStep + 1); }} className="w-full py-4 rounded-2xl bg-gray-50 font-black hover:bg-red-500 hover:text-white transition-all">{HIRAGANA_DATA[quizStep].ro}</button>
                     <button onClick={() => setQuizStep(quizStep + 1)} className="w-full py-4 rounded-2xl bg-gray-50 font-black hover:bg-red-500 hover:text-white transition-all">o</button>
                  </div>
               </div>
             ) : (
               <div className="bg-white w-full max-w-sm p-10 rounded-[3rem] shadow-2xl border border-orange-50">
                  <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                     <Award className="text-yellow-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-[#5C4033]">Bagus Sekali!</h3>
                  <button onClick={() => { setCurrentPage('home'); setXp(xp + score); }} className="w-full bg-[#FF6B6B] text-white py-4 rounded-2xl font-black shadow-lg shadow-red-100 active:scale-95 transition-all">Kembali</button>
               </div>
             )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#5C4033] font-sans pb-24 overflow-x-hidden">
      
      {/* NAVBAR TOP DENGAN LOGO BARU */}
      <nav className="h-20 flex items-center justify-center sticky top-0 bg-[#FFFBF0]/80 backdrop-blur-md z-40 border-b border-orange-50/50">
         <div className="flex items-center gap-1">
            <OkaeriLogo size="md" />
            <span className="text-2xl font-bold tracking-tighter text-[#5C4033]" style={{ fontFamily: 'system-ui' }}>
                Okaeri
            </span>
         </div>
      </nav>

      <div className="max-w-md mx-auto px-6">
        {renderContent()}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-orange-100 h-24 flex items-center justify-around px-6 z-50 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(255,107,107,0.1)]">
        <NavIcon active={currentPage === 'home'} onClick={() => setCurrentPage('home')} icon={<Home size={24}/>} label="Home" />
        <NavIcon active={currentPage === 'lessons'} onClick={() => setCurrentPage('lessons')} icon={<BookOpen size={24}/>} label="Belajar" />
        <div onClick={() => { setCurrentPage('quiz'); setQuizStep(0); setScore(0); }} className="bg-[#FF6B6B] p-5 rounded-[2.2rem] -mt-14 shadow-2xl shadow-red-200 border-4 border-[#FFFBF0] text-white active:scale-90 transition-all cursor-pointer">
            <Star size={28} fill="currentColor" />
        </div>
        <NavIcon active={currentPage === 'community'} onClick={() => setCurrentPage('community')} icon={<Users size={24}/>} label="Sosial" />
        <NavIcon active={currentPage === 'profile'} onClick={() => setCurrentPage('home')} icon={<User size={24}/>} label="Profil" />
      </nav>

    </div>
  );
};

const NavIcon = ({ icon, active, onClick, label }) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-[#FF6B6B]' : 'text-[#D1B3A4] opacity-70'}`}>
    {icon}
    <span className="text-[10px] font-black uppercase tracking-widest leading-none mt-1">{label}</span>
  </button>
);

const PostCard = ({ author, title, desc, likes, comments }) => (
    <div className="bg-white p-6 rounded-[2.5rem] border border-orange-50 shadow-sm hover:shadow-md transition-all mb-4">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center font-bold text-red-600 uppercase">{author[0]}</div>
            <div>
                <h4 className="font-bold text-sm text-[#5C4033]">{author}</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Baru Saja</p>
            </div>
        </div>
        <h3 className="font-black text-lg mb-2 text-[#5C4033]">{title}</h3>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed line-clamp-2">{desc}</p>
        <div className="flex items-center gap-6 border-t border-gray-50 pt-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400"><Heart size={16} /> {likes}</div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400"><MessageSquare size={16} /> {comments}</div>
        </div>
    </div>
);

const style = document.createElement('style');
style.textContent = `
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  button:active { transform: scale(0.95); }
`;
document.head.append(style);

export default App;