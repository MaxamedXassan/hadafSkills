'use client';

import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Award,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Coffee,
  GraduationCap,
  Laptop,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Send,
  ShieldCheck,
  Smartphone,
  Snowflake,
  Star,
  Sun,
  Tag,
  Users,
  Video,
  X,
} from 'lucide-react';

// Lambarka WhatsApp-ka ee maamulka
const ADMIN_NUMBER = '252615940572';

// 7-da Koorso ee wata qiimaha (Prices)
const courses = [
  {
    id: 'mobile-repairing',
    name: 'Mobile Repairing',
    somaliName: 'Dayactirka Moobilada',
    category: 'Farsamo',
    duration: '2 bilood',
    price: '$60',
    icon: Smartphone,
    description: 'Baro cilad-bixinta hardware-ka iyo software-ka noocyada kala duwan ee taleefannada gacanta.',
    image: 'photo-1597740985671-2a8a3b80532e',
    imageAlt: 'Arday baranaya dayactirka mobile-ka',
    level: 'Bilow ilaa xirfadle',
  },
  {
    id: 'computer-skills',
    name: 'Computer Skills',
    somaliName: 'Xirfadaha Kumbuyuutarka',
    category: 'Digital & IT',
    duration: '2 bilood',
    price: '$40',
    icon: Laptop,
    description: 'Baro isticmaalka aasaasiga iyo sare ee kombayutarka, Office (Word, Excel, PPT), iyo maaraynta faylasha.',
    image: 'photo-1516321318423-f06f85e504b3',
    imageAlt: 'Barashada xirfadaha kombayutarka',
    level: 'Aasaas ilaa dhexe',
  },
  {
    id: 'cooling-system',
    name: 'Cooling System (AC & Ref)',
    somaliName: 'Nidaamka Qaboojiyeyaasha',
    category: 'Farsamo',
    duration: '3 bilood',
    price: '$70',
    icon: Snowflake,
    description: 'Ku tababar rakibidda, gaas-gelinta iyo cilad-bixinta AC-yada iyo qaboojiyeyaasha casriga ah.',
    image: 'photo-1621905251918-48416bd8575a',
    imageAlt: 'Qalabka qaboojiyaha iyo AC-ga',
    level: 'Tababar gacanta ah (Practical)',
  },
  {
    id: 'electrical-solar',
    name: 'Electrical & Solar System',
    somaliName: 'Korontada & Cadceedda',
    category: 'Farsamo',
    duration: '3 bilood',
    price: '$75',
    icon: Sun,
    description: 'Baro rakibidda korontada guryaha, nidaamyada tamar-cadceedda (Solar panels & inverters) iyo badbaadada.',
    image: 'photo-1509391365360-2e959784a276',
    imageAlt: 'Rakibidda Solar-ka iyo Korontada',
    level: 'Shaqo ku diyaar ah',
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    somaliName: 'Naqshadeynta Sawirrada',
    category: 'Digital & IT',
    duration: '2 bilood',
    price: '$50',
    icon: Palette,
    description: 'Baro Photoshop, Illustrator & Canva. Naqshadee boorar, logos, xayaysiisyada baraha bulshada iyo branding.',
    image: 'photo-1626785774573-4b799315345d',
    imageAlt: 'Naqshadeynta Graphic Design',
    level: 'Hal-abuur & Suuqgeyn',
  },
  {
    id: 'video-editing',
    name: 'Video Editing',
    somaliName: 'Habeynta Muuqaalka',
    category: 'Digital & IT',
    duration: '2 bilood',
    price: '$50',
    icon: Video,
    description: 'Baro Premiere Pro & CapCut. Samee muuqaallo tayo sare leh, goynta, color grading, iyo animations.',
    image: 'photo-1574717024653-61fd2cf4d44d',
    imageAlt: 'Habeynta iyo tafatirka video-ga',
    level: 'Casri & Xirfadeed',
  },
  {
    id: 'barista-course',
    name: 'Barista Course',
    somaliName: 'Xirfadda Diyaargarowga Qaxwada',
    category: 'Farsamo',
    duration: '1 bilood',
    price: '$65',
    icon: Coffee,
    description: 'Baro mishiinnada Espresso-ga, caanaha xumbaynta (latte art), noocyada bunka iyo maaraynta coffee shop-ka.',
    image: 'photo-1501339847302-ac426a4a7cbb',
    imageAlt: 'Xirfadda Barista iyo qaxwada',
    level: 'Shahaado & Shaqo toos ah',
  },
];

const benefits = [
  { icon: Award, title: '80% Tababar Gacanta Ah', text: 'Xirfadda ku baro tababar toos ah iyo qalabka casriga ah ee suuqa.' },
  { icon: CalendarDays, title: 'Jadwal Dabacsan', text: 'Waxaa jira waqtiyo kala duwan: Subax, Galab, iyo Habeen kuu habboon.' },
  { icon: ShieldCheck, title: 'Shahaado La Aqoonsan Yahay', text: 'Hel shahaado caddaynaysa heerkaaga xirfadeed markaad dhamaysato.' },
  { icon: Users, title: 'Taageero Shaqo', text: 'Waxaan ardaydeena ka caawinaa sidii ay shaqo u heli lahaayeen ama ganacsi u furan lahaayeen.' },
];

const moments = [
  { image: 'photo-1581092160562-40aa08e78837', alt: 'Arday wada shaqaynaya', label: 'Barasho Toos Ah', span: 'md:col-span-2 md:row-span-2' },
  { image: 'photo-1581091226825-a6a2a5aee158', alt: 'Tababar farsamo', label: 'Xirfad Dhab Ah', span: '' },
  { image: 'photo-1581092580497-e0d23cbdf1dc', alt: 'Qalabka casriga ah', label: 'Qalab Casri Ah', span: '' },
];

function photoUrl(id, width = 1000) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filteredCourses = courses.filter((course) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Farsamo') return course.category === 'Farsamo';
    if (activeFilter === 'Digital & IT') return course.category === 'Digital & IT';
    return true;
  });

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormError('');
    setSubmitted(false);

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get('fullName') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const courseId = String(formData.get('course') || '');
    const schedule = String(formData.get('schedule') || '');
    const notes = String(formData.get('notes') || '').trim();
    const selectedCourse = courses.find((course) => course.id === courseId);
    const cleanPhone = phone.replace(/[\s()-]/g, '');

    if (fullName.length < 2) {
      setFormError('Fadlan geli magacaaga oo buuxa.');
      return;
    }
    if (!/^\+?[0-9]{8,15}$/.test(cleanPhone)) {
      setFormError('Fadlan geli lambar WhatsApp oo sax ah (8–15 lambar).');
      return;
    }
    if (!selectedCourse || !schedule) {
      setFormError('Fadlan dooro koorsada iyo wakhtiga aad doorbidayso.');
      return;
    }

    const message = [
      'Salaan HadafSkills! Waxaan rabaa inaan iska diiwaangeliyo koorso.',
      '',
      `👤 Magaca: ${fullName}`,
      `📱 WhatsApp: ${phone}`,
      `📚 Koorsada: ${selectedCourse.name} (${selectedCourse.price})`,
      `⏰ Jadwalka: ${schedule}`,
      ...(notes ? [`📝 Faahfaahin dheeraad ah: ${notes}`] : []),
    ].join('\n');

    const whatsappUrl = `https://wa.me/${ADMIN_NUMBER}?text=${encodeURIComponent(message)}`;
    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow) {
      setFormError('Fadlan oggolow in browser-ku furo tab cusub si aad WhatsApp ugu dirto.');
      return;
    }
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#ffffff] text-[#0a2e19] selection:bg-[rgb(22,172,74)] selection:text-white">
      {/* ======================================================== */}
      {/* HEADER / NAVIGATION                                      */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#082a17]/95 backdrop-blur-md text-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* ======================================================== */}
          {/* 🌟 LOGO SECTION / ICON EE LOGADA:                        */}
          {/* Halkan waxaad ku beddeli kartaa icon-kaaga ama sawirka   */}
          {/* Tusaale: <img src="/logo.png" alt="Logo" className="h-10" /> */}
          {/* ======================================================== */}
          <a href="#home" onClick={closeMenu} className="group flex items-center gap-3" aria-label="HadafSkills Home">
            {/* LOGO IMAGE */}
            <img
              src="/logo.jpeg"
              alt="HadafSkills Logo"
              className="h-11 w-11 rounded-2xl object-cover shadow-md transition group-hover:scale-105"
            />

            <span className="leading-tight">
              <strong className="block text-xl font-extrabold tracking-tight text-white">
                Hadaf<span className="text-[rgb(22,172,74)]">Skills</span>
              </strong>
              <span className="text-[10px] font-semibold uppercase tracking-[.25em] text-white/70">
                Skills & Careers
              </span>
            </span>
          </a>

          {/* ENGLISH NAVIGATION MENU (DESKTOP) */}
          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/85 md:flex" aria-label="Main Navigation">
            <a className="transition hover:text-[rgb(22,172,74)]" href="#courses">Courses</a>
            <a className="transition hover:text-[rgb(22,172,74)]" href="#why-us">Why Us</a>
            <a className="transition hover:text-[rgb(22,172,74)]" href="#students">Students</a>
            <a className="transition hover:text-[rgb(22,172,74)]" href="#enroll">Contact</a>
          </nav>

          {/* ACTION BUTTON (ENGLISH) */}
          <a
            href="#enroll"
            className="hidden items-center gap-2 rounded-full bg-[rgb(22,172,74)] px-6 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#139640] hover:shadow-lg md:inline-flex"
          >
            Enroll Now <ArrowRight size={16} />
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/20 text-white md:hidden hover:bg-white/10"
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* MOBILE MENU (ENGLISH) */}
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#082a17] px-5 py-5 md:hidden" aria-label="Mobile Navigation">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              <a href="#courses" onClick={closeMenu} className="rounded-xl px-4 py-3 font-semibold text-white hover:bg-white/10">Courses</a>
              <a href="#why-us" onClick={closeMenu} className="rounded-xl px-4 py-3 font-semibold text-white hover:bg-white/10">Why Us</a>
              <a href="#students" onClick={closeMenu} className="rounded-xl px-4 py-3 font-semibold text-white hover:bg-white/10">Students</a>
              <a href="#enroll" onClick={closeMenu} className="rounded-xl bg-[rgb(22,172,74)] px-4 py-3 text-center font-bold text-white">Enroll Now</a>
            </div>
          </nav>
        )}
      </header>

      {/* ======================================================== */}
      {/* HERO SECTION                                             */}
      {/* ======================================================== */}
      <section id="home" className="relative isolate min-h-[720px] overflow-hidden bg-[#082a17] pt-16 text-white lg:min-h-[760px]">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_80%_30%,rgba(22,172,74,0.25),transparent_55%),linear-gradient(135deg,#051c0f_0%,#082a17_60%,#0c3b20_100%)]" />
        <div className="absolute -right-32 -top-40 -z-10 h-[550px] w-[550px] rounded-full border border-white/10 opacity-30" />
        <div className="absolute -right-16 -top-20 -z-10 h-[420px] w-[420px] rounded-full border border-white/10 opacity-20" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-12 lg:pb-24 lg:pt-14">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgb(22,172,74)]/40 bg-[rgb(22,172,74)]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[.15em] text-[#5ee58e]">
              <span className="h-2 w-2 rounded-full bg-[rgb(22,172,74)] animate-pulse" /> Xarunta Tababarka Xirfadaha Casriga ah
            </div>

            <h1 className="text-[clamp(2.9rem,6.5vw,5.5rem)] font-extrabold leading-[1.02] tracking-tight">
              Baro Xirfad.<br />
              <span className="text-white">Dhiso </span>
              <span className="text-[rgb(22,172,74)] underline decoration-white/20 underline-offset-8">
                Mustaqbalkaaga.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              Ku biir HadafSkills si aad u barato xirfadaha loogu baahida badan yahay suuqa sida Mobile Repairing, Solar, Graphic Design, iyo Barista.
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[rgb(22,172,74)] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#139640]"
              >
                Explore Courses <ArrowRight size={18} />
              </a>
              <a
                href="#enroll"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/15"
              >
                <MessageCircle size={18} /> Nala Soo Xiriir
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              <div className="flex -space-x-2.5" aria-label="Students">
                <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#082a17] bg-white text-xs font-extrabold text-[#082a17]">H</span>
                <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#082a17] bg-[#d9f5e3] text-xs font-extrabold text-[#082a17]">A</span>
                <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#082a17] bg-[#b1eec5] text-xs font-extrabold text-[#082a17]">D</span>
                <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#082a17] bg-[rgb(22,172,74)] text-xs font-extrabold text-white">+</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-300" aria-label="Rating">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <p className="mt-1 text-xs text-white/70">Arday badan oo shaqo helay ama ganacsi abuuray</p>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
            <div className="overflow-hidden rounded-[2rem] border-4 border-white/15 bg-white shadow-2xl">
              <div className="relative aspect-[1.05] overflow-hidden">
                <img
                  src={photoUrl('photo-1581092160607-ee22621dd758', 1100)}
                  alt="Tababarka HadafSkills"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082a17]/90 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold text-[#082a17] shadow">
                  <CheckCircle2 size={16} className="text-[rgb(22,172,74)]" /> 80% Practical Hands-on
                </div>
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[rgb(22,172,74)]">Tababar Toos Ah</p>
                  <p className="mt-1 text-2xl font-bold sm:text-3xl">Baro xirfadda aad ku shaqaysan karto.</p>
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-[rgb(22,172,74)]/20 bg-white p-4 shadow-xl sm:-left-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#e9f8ee] text-[rgb(22,172,74)]">
                <GraduationCap size={24} />
              </span>
              <div>
                <p className="text-sm font-extrabold text-[#082a17]">Shahaado Rasmi Ah</p>
                <p className="text-xs text-gray-500">Aqoon suuqa ku xiran</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1.5 w-full bg-[rgb(22,172,74)]" />
      </section>

      {/* ======================================================== */}
      {/* COURSES SECTION                                          */}
      {/* ======================================================== */}
      <section id="courses" className="scroll-mt-16 bg-[#fafcfa] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="inline-block rounded-full bg-[#e9f8ee] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[rgb(22,172,74)]">
                Our Courses & Pricing
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#082a17] sm:text-4xl lg:text-5xl">
                Dooro Koorsadaada
              </h2>
              <p className="mt-3 max-w-xl text-base text-gray-600">
                Dhammaan koorsooyinkayagu waxay wataan qiime cad, shahaado rasmi ah, iyo tababar toos ah oo gacanta ah.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Course Filters">
              {['All', 'Farsamo', 'Digital & IT'].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${activeFilter === filter
                    ? 'bg-[rgb(22,172,74)] text-white shadow-md'
                    : 'border border-gray-200 bg-white text-gray-700 hover:border-[rgb(22,172,74)] hover:text-[rgb(22,172,74)]'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCourses.map((course) => {
              const CourseIcon = course.icon;
              return (
                <article
                  key={course.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgb(22,172,74)] hover:shadow-xl"
                >
                  <div>
                    {/* Course Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={photoUrl(course.image, 700)}
                        alt={course.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      {/* Category Badge */}
                      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#082a17] shadow-sm backdrop-blur">
                        {course.category}
                      </span>
                      {/* Price Badge on Image */}
                      <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-[rgb(22,172,74)] px-3.5 py-1 text-xs font-extrabold text-white shadow-md">
                        <Tag size={13} />
                        {course.price}
                      </span>
                    </div>

                    {/* Course Details */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-extrabold text-[#082a17] group-hover:text-[rgb(22,172,74)] transition-colors">
                            {course.name}
                          </h3>
                          <p className="text-xs font-semibold text-[rgb(22,172,74)]">{course.somaliName}</p>
                        </div>
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e9f8ee] text-[rgb(22,172,74)]">
                          <CourseIcon size={20} />
                        </span>
                      </div>

                      <p className="mt-3 text-xs leading-relaxed text-gray-600">
                        {course.description}
                      </p>

                      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-3 text-[11px] font-semibold text-gray-500">
                        <span className="flex items-center gap-1 text-gray-700">
                          <Clock3 size={13} className="text-[rgb(22,172,74)]" /> {course.duration}
                        </span>
                        <span className="rounded bg-[#e9f8ee] px-2 py-0.5 text-[rgb(22,172,74)] font-bold">
                          {course.level}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer / Action */}
                  <div className="border-t border-gray-100 bg-[#fbfdfb] p-4">
                    <a
                      href="#enroll"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[rgb(22,172,74)] py-2.5 text-xs font-bold text-white transition hover:bg-[#139640]"
                    >
                      Isdiiwaangeli ({course.price}) <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* WHY US SECTION                                           */}
      {/* ======================================================== */}
      <section id="why-us" className="scroll-mt-16 bg-[#ffffff] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <span className="rounded-full bg-[#e9f8ee] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[rgb(22,172,74)]">
              Why HadafSkills
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#082a17] sm:text-4xl lg:text-5xl">
              Waxbarasho U Dhaw Shaqada Dhabta Ah.
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-600">
              Waxaan kugu diyaarinaynaa aqoon casri ah, tababar toos ah oo gacanta ah, iyo la-talin xirfadeed si aad kalsooni ugu qaaddo jidkaaga shaqo ama ganacsi.
            </p>
            <a
              href="#enroll"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[rgb(22,172,74)] hover:text-[#139640] transition"
            >
              Nagu soo biir maanta <ArrowRight size={17} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={benefit.title} className="rounded-2xl border border-gray-200/70 bg-[#fafcfa] p-6 shadow-sm hover:border-[rgb(22,172,74)]/50 hover:shadow-md transition">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e9f8ee] text-[rgb(22,172,74)]">
                    <BenefitIcon size={24} />
                  </span>
                  <p className="mt-4 text-xs font-extrabold text-[rgb(22,172,74)]">0{index + 1}</p>
                  <h3 className="mt-1 text-base font-extrabold text-[#082a17]">{benefit.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* STUDENTS SECTION                                         */}
      {/* ======================================================== */}
      <section id="students" className="scroll-mt-16 bg-[#fafcfa] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="rounded-full bg-[#e9f8ee] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[rgb(22,172,74)]">
                Student Experience
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#082a17] sm:text-4xl">
                Sawirrada Tababarka Ardayda
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray-600">
              Tababarka dhabta ah wuxuu ka dhacaa xarumahayaga tababarka halkaas oo aad gacmahaaga ku baranayso shaqada.
            </p>
          </div>

          <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-3 md:auto-rows-[240px]">
            {moments.map((moment) => (
              <div
                key={moment.label}
                className={`group relative overflow-hidden rounded-2xl bg-gray-200 shadow-sm ${moment.span}`}
              >
                <img
                  src={photoUrl(moment.image, 1000)}
                  alt={moment.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082a17]/90 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 text-base font-bold text-white">{moment.label}</p>
              </div>
            ))}
          </div>

          {/* Banner */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#082a17] px-8 py-8 text-white sm:flex-row sm:px-10">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[rgb(22,172,74)] text-white">
                <ShieldCheck size={26} />
              </span>
              <div>
                <p className="font-extrabold text-lg">Hadda Bilow Barashada Xirfaddaada</p>
                <p className="text-xs text-white/70">Koorso kasta waxay kugu diyaarinaysaa shaqo dhab ah.</p>
              </div>
            </div>
            <a
              href="#enroll"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[rgb(22,172,74)] px-7 py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-[#139640]"
            >
              Enroll Now <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* ENROLLMENT & CONTACT FORM                                */}
      {/* ======================================================== */}
      <section id="enroll" className="scroll-mt-12 bg-[#082a17] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div className="pt-2">
            <span className="rounded-full bg-[rgb(22,172,74)]/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[rgb(22,172,74)]">
              Registration & Contact
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Diyaar ma u tahay inaad isdiiwaangeliso?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
              Buuxi foomka hoose si toos ah ayaad WhatsApp ugula xiriiri doontaa maamulka oo ku siin doona faahfaahin buuxda.
            </p>

            <div className="mt-8 space-y-3.5 text-xs text-white/90">
              <p className="flex items-center gap-2.5">
                <Check className="text-[rgb(22,172,74)]" size={16} /> Jawaab degdeg ah oo toos ah
              </p>
              <p className="flex items-center gap-2.5">
                <Check className="text-[rgb(22,172,74)]" size={16} /> Diwaangelin bilaash ah (Foomka lacag maaha)
              </p>
              <p className="flex items-center gap-2.5">
                <Check className="text-[rgb(22,172,74)]" size={16} /> Macluumaadkaagu waxay toos ugu furmayaan WhatsApp
              </p>
            </div>

            <a
              href={`https://wa.me/${ADMIN_NUMBER}?text=${encodeURIComponent('Salaan HadafSkills! Waxaan xiisaynayaa koorsooyinka tababarka.')}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 text-sm font-bold text-white hover:text-[rgb(22,172,74)] transition"
            >
              <Phone size={16} className="text-[rgb(22,172,74)]" /> +252 61 594 0572
            </a>
          </div>

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[1.75rem] bg-white p-6 text-[#082a17] shadow-2xl sm:p-9"
            noValidate
          >
            <h3 className="text-2xl font-extrabold tracking-tight">Foomka Isdiiwaangelinta</h3>
            <p className="mt-1 text-xs text-gray-500">Geli xogtaada saxda ah si aan xiriir kuu lasoo samayno.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-xs font-bold sm:col-span-2">
                Magacaaga oo buuxa <span className="text-red-500">*</span>
                <input
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Tusaale: Axmed Cali"
                  required
                  minLength={2}
                  className="mt-1.5 w-full rounded-xl border border-gray-200 bg-[#fcfdfc] px-4 py-3 text-sm font-normal text-gray-800 outline-none transition focus:border-[rgb(22,172,74)] focus:ring-2 focus:ring-[rgb(22,172,74)]/20"
                />
              </label>

              <label className="text-xs font-bold sm:col-span-2">
                Lambarka WhatsApp-ka <span className="text-red-500">*</span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Tusaale: +252 61 594 0572"
                  required
                  className="mt-1.5 w-full rounded-xl border border-gray-200 bg-[#fcfdfc] px-4 py-3 text-sm font-normal text-gray-800 outline-none transition focus:border-[rgb(22,172,74)] focus:ring-2 focus:ring-[rgb(22,172,74)]/20"
                />
              </label>

              <label className="text-xs font-bold">
                Koorsada aad rabto <span className="text-red-500">*</span>
                <span className="relative mt-1.5 block">
                  <select
                    name="course"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-gray-200 bg-[#fcfdfc] px-4 py-3 pr-10 text-xs font-semibold text-gray-800 outline-none transition focus:border-[rgb(22,172,74)] focus:ring-2 focus:ring-[rgb(22,172,74)]/20"
                  >
                    <option value="" disabled>Dooro koorso</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name} — {course.price}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                </span>
              </label>

              <label className="text-xs font-bold">
                Jadwalka aad doorbidayso <span className="text-red-500">*</span>
                <span className="relative mt-1.5 block">
                  <select
                    name="schedule"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-gray-200 bg-[#fcfdfc] px-4 py-3 pr-10 text-xs font-semibold text-gray-800 outline-none transition focus:border-[rgb(22,172,74)] focus:ring-2 focus:ring-[rgb(22,172,74)]/20"
                  >
                    <option value="" disabled>Dooro waqti</option>
                    <option value="Subax (Morning)">Subax (Morning)</option>
                    <option value="Duhur/Galab (Afternoon)">Duhur / Galab (Afternoon)</option>
                    <option value="Habeen (Night)">Habeen (Night)</option>
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                </span>
              </label>

              <label className="text-xs font-bold sm:col-span-2">
                Faahfaahin dheeraad ah <span className="font-normal text-gray-500">(ikhtiyaari)</span>
                <textarea
                  name="notes"
                  rows={2}
                  placeholder="Haddii aad su'aal qabto ama faahfaahin rabto..."
                  className="mt-1.5 w-full resize-y rounded-xl border border-gray-200 bg-[#fcfdfc] px-4 py-3 text-sm font-normal text-gray-800 outline-none transition focus:border-[rgb(22,172,74)] focus:ring-2 focus:ring-[rgb(22,172,74)]/20"
                />
              </label>
            </div>

            {formError && (
              <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-2.5 text-xs font-bold text-red-600">
                {formError}
              </p>
            )}

            {submitted && (
              <p role="status" className="mt-4 flex items-center gap-2 rounded-xl bg-[#e9f8ee] px-4 py-2.5 text-xs font-bold text-[rgb(22,172,74)]">
                <CheckCircle2 size={16} /> Fariinta waa la diyaariyey, fadlan ku dhammee WhatsApp-kaaga!
              </p>
            )}

            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[rgb(22,172,74)] px-6 py-3.5 font-bold text-white transition hover:bg-[#139640] shadow-md hover:shadow-lg"
            >
              Ku Dir WhatsApp <Send size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* ======================================================== */}
      {/* FOOTER                                                   */}
      {/* ======================================================== */}
      <footer className="bg-[#04160c] px-5 py-8 text-white/60 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          {/* Footer Logo */}
          <a href="#home" className="flex items-center gap-2.5 font-extrabold text-white">
            <img
              src="/logo.jpeg"
              alt="HadafSkills Logo"
              className="h-9 w-9 rounded-xl object-cover shadow-sm"
            />
            <span>Hadaf<span className="text-[rgb(22,172,74)]">Skills</span></span>
          </a>

          <p className="text-xs">
            © {new Date().getFullYear()} HadafSkills. All rights reserved.
          </p>

          <a
            href={`https://wa.me/${ADMIN_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-[rgb(22,172,74)] transition"
          >
            <MessageCircle size={15} /> WhatsApp Support
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${ADMIN_NUMBER}?text=${encodeURIComponent('Salaan HadafSkills! Waxaan rabaa inaan wax badan ka ogaado koorsooyinka.')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[rgb(22,172,74)] text-white shadow-xl shadow-black/25 transition hover:scale-110 active:scale-95"
      >
        <MessageCircle size={28} fill="currentColor" strokeWidth={1.5} />
      </a>
    </main>
  );
}
