// ============================================
//   Janhavi Gurav — MODEL CARD PORTFOLIO 2026
// ============================================

// ===== DATA =====
const data = {

    // §02 Training run — most recent first (Updated June 2026)
    experience: [
        {
            id: 'RUN-05',
            status: 'running',
            date: 'DEC 2025 — PRESENT',
            role: 'Tech Executive',
            org: 'Catalyst Tech',
            loc: 'Pune, MH',
            points: [
                'Curated high-fidelity labeled datasets for drone-based computer vision and object detection tasks.',
                'Executed preprocessing and QA workflows to eliminate bias and ensure data integrity.',
                'Aligned dataset specifications with UAV flight dynamics and hardware constraints.'
            ],
            tags: ['Data Benchmarking', 'Data Curation', 'Clinical NLP', 'Drones']
        },
        {
            id: 'RUN-02',
            status: 'complete',
            date: 'JAN 2026 — MAY 2026',
            role: 'Freelancer',
            org: 'Calm Quest',
            loc: 'Remote',
            points: [
                'Designed and deployed a fully responsive meditation and wellness website for a practicing psychologist using React.',
                'Co-ordinated with the client while designing to achieve the desired outcome, added thoughtful assets and animations.',
                'Achieved near-perfect scores for performance (96), SEO (100) and accessibility (94) on Google Lighthouse.'
            ],
            tags: ['React', 'Tailwind CSS', 'Figma']
        }
    ],

    // §03 Evaluations — featured
    featuredProjects: [
        {
            title: 'Rewind',
            subtitle: 'An AI-Powered Historical Time Machine',
            description: 'Explore any year through AI-generated insights, historical events, music trends, and interactive visualizations in a retro-inspired web experience.',
            metrics: [
                { v: '< 2s', k: 'RESPONSE LATENCY' },
                { v: '~500–1000 ms', k: 'AI GENERATION TIME' }
            ],
            tags: ['Generative AI', 'API Integration', 'Interactive Timelines', 'Vercel'],
            links: [
                { name: 'FULL DEMO ↗', url: 'https://rewind-time-machine.vercel.app/' },
                { name: 'GITHUB ↗', url: 'https://github.com/yaarrjanhavi/rewind' }
            ]
        },
        {
            title: 'Relic',
            subtitle: 'A digital time machine for exploring the internet past.',
            description: 'Relic is an AI-powered web app that lets users travel back in time to explore the internet through historical events, viral trends, iconic websites, and cultural moments from any year.',
            metrics: [
                { v: '5+', k: 'INTEGRATED APIs' },
                { v: '< 1.8s', k: 'AVG API RESPONSE TIME' },
                { v: '2000–Present', k: 'HISTORICAL DATA COVERAGE' }
            ],
            tags: ['Data Aggregation', 'Responsive Design', 'Historical Data', 'shadcn/ui'],
            links: [
                { name: 'FULL DEMO ↗', url: 'https://relic-internet-archive.vercel.app/' },
                { name: 'GITHUB ↗', url: 'https://github.com/yaarrjanhavi/relic'}
            ]
        },
        {
            title: 'StudyOS',
            subtitle: 'Your AI-Powered Study Operating System',
            description: 'A calming AI-powered study workspace that combines smart note-taking, distraction-free learning, AI tutoring, productivity tools, and personalized study analytics into one seamless platform.',
            metrics: [
                { v: '< 2s', k: 'AI RESPONSE TIME' },
                { v: '5+', k: 'AI-POWERED MODULES' },
                { v: '95%+', k: 'SEMANTIC SEARCH RELEVANCE' }
            ],
            tags: ['AI', 'LLMs', 'RAG', 'Next.js', 'FastAPI'],
            links: [
                { name: 'FULL DEMO ↗', url: 'https://study-os-env.vercel.app/' },
                { name: 'GITHUB ↗', url: 'https://github.com/yaarrjanhavi/study-os' }
            ]
        },
        {
            title: 'GitScope',
            subtitle: 'Instantly decode any GitHub repository with AI-powered insights.',
            description: 'GitScope is an AI-powered tool that analyzes GitHub repositories, explaining their purpose, tech stack, complexity, and learning path in seconds.',
            metrics: [
                { v: '~2–5s', k: 'REPO ANALYSIS TIME' },
                { v: '<500 ms', k: 'API RESPONSE LATENCY' }
            ],
            tags: ['ML', 'GitHub API', 'Gemini API', 'Repository Analysis', 'Tailwind CSS'],
            links: [
                { name: 'FULL DEMO ↗', url: 'https://git-scope-dashboard.vercel.app/' },
                { name: 'GITHUB ↗', url: 'https://github.com/yaarrjanhavi/GitScope' }
            ]
        }
    ],

    // §03 Evaluations — additional runs
    additionalProjects: [
        {
            title: 'NL2SQL',
            description: 'LLM-powered Natural Language Interface for Databases that translates English queries into executable SQLite syntax using Gemini, few-shot prompting, and structured JSON outputs.',
            metric: '98% ACCURACY',
            links: [
                { name: 'GITHUB ↗', url: 'https://github.com/yaarrjanhavi/Natural-Language-to-SQL-generator' }]
        },
        {
            title: 'VoidInk',
            description: 'Emotion-aware NLP platform that detects 12 emotions from indie horror game reviews using transformer-based sentiment analysis and interactive visualizations.',
            metric: '12 EMOTIONS',
            links: [
                { name: 'LIVE DEMO ↗', url: 'https://voidink-eight.vercel.app/' }]
        },
        {
            title: 'FaceForge CV',
            description: 'Computer vision pipeline combining Haar Cascades, YOLOv8, and U-Net super-resolution to detect faces and objects while enhancing low-resolution facial images.',
            metric: '45ms AVG LATENCY',
            links: [
                { name: 'GITHUB ↗', url: 'https://github.com/yaarrjanhavi/FaceForge-CV' }]
        },
        {
            title: 'VitAir',
            description: 'Vitair is a real-time, AI-powered environmental health risk analyzer that combines live air quality, UV, weather, and pollution data with a users personal health profile to generate personalized daily health briefings and actionable recommendations.',
            metric: 'ACCURATE ENVIRONMENTAL RISK ASSESSMENT',
            links: [{name: 'GITHUB ↗', url: 'https://github.com/yaarrjanhavi/vitair'},
                {name: 'DEMO ↗', url: 'https://vitair.netlify.app/'}
            ]
        }
    ],

    // §04 Capabilities
    skills: [
        { group: 'PROGRAMMING & SYSTEMS', items: ['Python', 'SQL', 'JavaScript / TypeScript', 'Java', 'C / C++', 'Git', 'Docker', 'FastAPI', 'REST APIs'] },
        { group: 'ML / AI', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'LLM Evaluation', 'Prompt Engineering', 'RAG', 'Multi-Agent Systems', 'LangChain', 'NLP', 'Computer Vision', 'Hyperparameter Tuning'] },
        { group: 'DATA', items: ['Pandas', 'NumPy', 'Feature Engineering', 'EDA', 'Power BI', 'Tableau'] },
        { group: 'BACKEND & DATABASES', items: ['FastAPI', 'PostgreSQL', 'Redis', 'Supabase', 'MongoDB', 'REST APIs'] },
        { group: 'CLOUD & DEVOPS', items: ['AWS', 'ECS Fargate', 'RDS · S3', 'CloudWatch', 'Secrets Manager', 'Docker', 'Terraform', 'GCP', 'Azure', 'CI/CD'] },
        { group: 'WEB', items: ['React', 'Next.js', 'Node.js', 'HTML / CSS'] },
        { group: 'GEN AI', items: ['LangChain', 'RAG', 'OpenAI API', 'Google ADK', 'Ollama', 'Prompt Engineering'] }
    ]
};

// ===== RENDERERS =====
function renderExperience() {
    const el = document.getElementById('experience-log');
    if (!el) return;
    el.innerHTML = data.experience.map(exp => `
        <li class="log-entry reveal ${exp.status === 'running' ? 'is-running' : ''}">
            <div class="log-rail">
                <span class="log-id mono">${exp.id}</span>
                <span class="log-status mono ${exp.status === 'running' ? 'status-run' : 'status-done'}">
                    ${exp.status === 'running' ? '<span class="dot" aria-hidden="true"></span>RUNNING' : 'COMPLETE'}
                </span>
            </div>
            <div class="log-body">
                <p class="log-date mono">${exp.date} · ${exp.loc}</p>
                <h3 class="log-role">${exp.role}</h3>
                <p class="log-org">${exp.org}</p>
                <ul class="log-points">
                    ${exp.points.map(p => `<li>${p}</li>`).join('')}
                </ul>
                <div class="tag-row">
                    ${exp.tags.map(t => `<span class="tag mono">${t}</span>`).join('')}
                </div>
            </div>
        </li>
    `).join('');
}

function renderFeatured() {
    const el = document.getElementById('featured-projects');
    if (!el) return;
    el.innerHTML = data.featuredProjects.map((p, i) => `
        <article class="eval-card reveal">
            <header class="eval-head">
                <span class="eval-id mono">P-${String(i + 1).padStart(2, '0')}</span>
                <div>
                    <h3 class="eval-title">${p.title}</h3>
                    <p class="eval-sub">${p.subtitle}</p>
                </div>
            </header>
            ${p.video ? `
            <div class="eval-video">
                <video controls muted playsinline preload="metadata" src="${p.video}"
                       aria-label="${p.title} demo video"></video>
                <span class="video-caption mono">PRODUCT DEMO · 3 MIN</span>
            </div>` : ''}
            <p class="eval-desc">${p.description}</p>
            <div class="metric-row">
                ${p.metrics.map(m => `
                    <div class="metric">
                        <span class="metric-v">${m.v}</span>
                        <span class="metric-k mono">${m.k}</span>
                    </div>`).join('')}
            </div>
            <footer class="eval-foot">
                <div class="tag-row">${p.tags.map(t => `<span class="tag mono">${t}</span>`).join('')}</div>
                ${p.links.length ? `<div class="link-row">${p.links.map(l =>
                    `<a class="text-link mono" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.name}</a>`).join('')}</div>` : ''}
            </footer>
        </article>
    `).join('');

    // If a demo file is missing (e.g., not yet copied into assets/),
    // remove the player — the external demo link still works.
    el.querySelectorAll('.eval-video video').forEach(v => {
        v.addEventListener('error', () => {
            const block = v.closest('.eval-video');
            if (block) block.remove();
        });
    });
}

function renderAdditional() {
    const el = document.getElementById('additional-projects');
    if (!el) return;
    el.innerHTML = data.additionalProjects.map(p => `
        <article class="mini-card reveal">
            <span class="mini-metric mono">${p.metric}</span>
            <h4 class="mini-title">${p.title}</h4>
            <p class="mini-desc">${p.description}</p>
            ${p.links.length ? `<div class="link-row">${p.links.map(l =>
                `<a class="text-link mono" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.name}</a>`).join('')}</div>` : ''}
        </article>
    `).join('');
}

function renderSkills() {
    const el = document.getElementById('skills-matrix');
    if (!el) return;
    el.innerHTML = data.skills.map(s => `
        <div class="cap-row reveal">
            <h3 class="cap-group mono">${s.group}</h3>
            <div class="tag-row">
                ${s.items.map(i => `<span class="tag tag-lg mono">${i}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// ===== INTERACTIONS =====
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setupReveals() {
    const els = document.querySelectorAll('.reveal');
    if (reducedMotion || !('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('in'));
        return;
    }
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach(el => obs.observe(el));
}

function setupSpecCard() {
    const rows = document.querySelectorAll('#spec-card .spec-row');
    if (reducedMotion) {
        rows.forEach(r => r.classList.add('in'));
        return;
    }
    rows.forEach((r, i) => setTimeout(() => r.classList.add('in'), 250 + i * 140));
}

function setupCounters() {
    const nums = document.querySelectorAll('[data-count]');
    if (reducedMotion || !('IntersectionObserver' in window)) {
        nums.forEach(n => { n.textContent = n.dataset.count; });
        return;
    }
    const animate = el => {
        const target = parseFloat(el.dataset.count);
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const dur = 900;
        const t0 = performance.now();
        const tick = now => {
            const p = Math.min((now - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = (target * eased).toFixed(decimals);
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { animate(e.target); obs.unobserve(e.target); }
        });
    }, { threshold: 0.5 });
    nums.forEach(n => obs.observe(n));
}

function setupNav() {
    const topbar = document.getElementById('topbar');
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('topbar-nav');

    window.addEventListener('scroll', () => {
        topbar.classList.toggle('scrolled', window.scrollY > 24);
    }, { passive: true });

    menuBtn.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        menuBtn.classList.toggle('open', open);
        menuBtn.setAttribute('aria-expanded', String(open));
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            menuBtn.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Active section highlighting
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    const spy = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                links.forEach(l => l.classList.toggle('active',
                    l.getAttribute('href') === `#${e.target.id}`));
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => spy.observe(s));
}

function setupForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (!form) return;

    form.addEventListener('submit', async e => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const original = btn.textContent;
        btn.textContent = 'Sending…';
        btn.disabled = true;
        status.textContent = '';

        try {
            const fd = new FormData(form);
            const payload = {
                from_name: fd.get('name'),
                from_email: fd.get('email'),
                message: fd.get('message')
            };
            const res = await emailjs.send('service_692e32d', 'template_n3h2m8o', payload);
            if (res.status === 200) {
                status.textContent = '✓ MESSAGE SENT — I\'ll get back to you soon.';
                status.className = 'form-status mono ok';
                form.reset();
            } else {
                throw new Error('send failed');
            }
        } catch (err) {
            console.error('Contact form error:', err);
            status.textContent = '✗ SEND FAILED — email me directly at JanhaviGurav951@gmail.com';
            status.className = 'form-status mono err';
        } finally {
            btn.textContent = original;
            btn.disabled = false;
        }
    });
}

// ===== AWARD LAYER =====
const finePointer = window.matchMedia('(pointer: fine)').matches;

// Boot sequence — once per session, skipped for reduced motion
function runBoot(onDone) {
    const boot = document.getElementById('boot');
    const skip = reducedMotion || sessionStorage.getItem('mc-booted');
    if (!boot || skip) {
        if (boot) boot.remove();
        document.body.classList.add('booted');
        onDone();
        return;
    }
    document.body.classList.add('booting');
    const linesEl = document.getElementById('boot-lines');
    const pctEl = document.getElementById('boot-pct');
    const fillEl = document.getElementById('boot-fill');
    const lines = [
        'Janhavi.Gurav — SYSTEM INIT',
        'LOADING WEIGHTS ............. <span class="ok">OK</span>',
        'CALIBRATING TYPE ............ <span class="ok">OK</span>',
        'MOUNTING PROJECTS ........... <span class="ok">OK</span>',
        'HUMAN VERIFIED .............. <span class="ok">OK</span>'
    ];
    lines.forEach((l, i) => setTimeout(() => {
        const div = document.createElement('div');
        div.innerHTML = l;
        linesEl.appendChild(div);
    }, 120 + i * 170));

    const dur = 1250;
    const t0 = performance.now();
    const tick = now => {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 2);
        pctEl.textContent = Math.round(eased * 100) + '%';
        fillEl.style.width = (eased * 100) + '%';
        if (p < 1) { requestAnimationFrame(tick); return; }
        sessionStorage.setItem('mc-booted', '1');
        boot.classList.add('done');
        document.body.classList.remove('booting');
        document.body.classList.add('booted');
        setTimeout(() => boot.remove(), 750);
        onDone();
    };
    requestAnimationFrame(tick);
}

// Split hero name into letters for staggered entrance + kinetic type
function splitHeroName() {
    const h1 = document.getElementById('hero-name');
    if (!h1) return;
    let idx = 0;
    h1.innerHTML = ['Janhavi', 'Gurav'].map(word =>
        `<span class="hn-line" aria-hidden="true">${[...word].map(c =>
            `<span class="ch" style="--d:${(idx++ * 0.035).toFixed(3)}s">${c}</span>`).join('')}</span>`
    ).join('');
}

// Variable-font letters respond to cursor proximity (Archivo wght/wdth axes)
function setupKineticName() {
    if (reducedMotion || !finePointer) return;
    const hero = document.querySelector('.hero');
    const chars = [...document.querySelectorAll('#hero-name .ch')];
    if (!hero || !chars.length) return;
    let raf = null, mx = 0, my = 0;
    const RADIUS = 220;
    const update = () => {
        raf = null;
        chars.forEach(ch => {
            const r = ch.getBoundingClientRect();
            const d = Math.hypot(mx - (r.left + r.width / 2), my - (r.top + r.height / 2));
            const t = Math.max(0, 1 - d / RADIUS);
            ch.style.fontVariationSettings = t > 0.01
                ? `'wght' ${(850 - 330 * t).toFixed(0)}, 'wdth' ${(125 - 45 * t).toFixed(1)}`
                : '';
        });
    };
    hero.addEventListener('pointermove', e => {
        mx = e.clientX; my = e.clientY;
        if (!raf) raf = requestAnimationFrame(update);
    });
    hero.addEventListener('pointerleave', () => {
        chars.forEach(ch => { ch.style.fontVariationSettings = ''; });
    });
}

// "EMAIL ME" pill trails the pointer over the big contact CTA
function setupCtaTip() {
    if (!finePointer) return;
    const cta = document.querySelector('.contact-big');
    const tip = document.getElementById('cta-tip');
    if (!cta || !tip) return;
    cta.addEventListener('pointermove', e => {
        tip.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }, { passive: true });
    cta.addEventListener('pointerenter', () => tip.classList.add('on'));
    cta.addEventListener('pointerleave', () => tip.classList.remove('on'));
}

// Decode/scramble effect on labels as they enter the viewport
function setupScramble() {
    const els = document.querySelectorAll('[data-scramble]');
    if (!els.length || reducedMotion || !('IntersectionObserver' in window)) return;
    const CHARS = '█▓▒░<>/[]{}=+*#01';
    const scramble = el => {
        const text = el.textContent;
        const dur = 650;
        const t0 = performance.now();
        const tick = now => {
            const p = Math.min((now - t0) / dur, 1);
            const settled = Math.floor(p * text.length);
            el.textContent = [...text].map((c, i) =>
                i < settled || c === ' ' ? c : CHARS[Math.random() * CHARS.length | 0]).join('');
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = text;
        };
        requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { scramble(e.target); obs.unobserve(e.target); }
        });
    }, { threshold: 0.6 });
    els.forEach(el => obs.observe(el));
}

// Reading progress bar (native scrolling everywhere else)
function setupScrolling() {
    const progress = document.getElementById('progress');
    if (!progress) return;
    let raf = null;
    const updateProgress = () => {
        raf = null;
        const max = document.documentElement.scrollHeight - innerHeight;
        progress.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
    };
    window.addEventListener('scroll', () => {
        if (!raf) raf = requestAnimationFrame(updateProgress);
    }, { passive: true });
    updateProgress();
}

// Duplicate marquee content for a seamless -50% loop
function setupMarquee() {
    const track = document.getElementById('marquee-track');
    if (track) track.innerHTML += track.innerHTML;
}

// Magnetic pull on buttons
function setupMagnetic() {
    if (reducedMotion || !finePointer) return;
    document.querySelectorAll('.btn, .theme-btn').forEach(el => {
        el.addEventListener('pointermove', e => {
            const r = el.getBoundingClientRect();
            const dx = e.clientX - (r.left + r.width / 2);
            const dy = e.clientY - (r.top + r.height / 2);
            el.style.transform = `translate(${dx * 0.16}px, ${dy * 0.3}px)`;
        });
        el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
}

// Subtle 3D tilt on the hero photo
function setupTilt() {
    if (reducedMotion || !finePointer) return;
    const wrap = document.querySelector('.hero-photo-wrap');
    const img = document.querySelector('.hero-photo');
    if (!wrap || !img) return;
    wrap.addEventListener('pointermove', e => {
        const r = wrap.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        img.style.transform = `perspective(700px) rotateY(${(px * 6).toFixed(2)}deg) rotateX(${(-py * 6).toFixed(2)}deg)`;
    });
    wrap.addEventListener('pointerleave', () => { img.style.transform = ''; });
}

// Dark / light toggle, persisted
function setupTheme() {
    const btn = document.getElementById('theme-btn');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!btn) return;
    const root = document.documentElement;
    const apply = (mode, animate) => {
        if (animate) {
            root.classList.add('theme-anim');
            setTimeout(() => root.classList.remove('theme-anim'), 400);
        }
        root.setAttribute('data-theme', mode);
        btn.textContent = mode === 'dark' ? 'LIGHT' : 'DARK';
        btn.setAttribute('aria-pressed', String(mode === 'dark'));
        if (meta) meta.setAttribute('content', mode === 'dark' ? '#101116' : '#F2F1EB');
    };
    apply(root.getAttribute('data-theme') || 'light', false);
    btn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem('mc-theme', next); } catch (e) { /* private mode */ }
        apply(next, true);
    });
}

// Live Denver clock in the footer
function setupClock() {
    const el = document.getElementById('local-time');
    if (!el) return;
    const fmt = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata', hour12: false,
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    const tick = () => { el.textContent = fmt.format(new Date()); };
    tick();
    setInterval(tick, 1000);
}

function consoleEgg() {
    console.log(
        '%c Janhavi.Gurav %c You opened the console — clearly we should talk.\n' +
        '%c → JanhaviGurav951@gmail.com · github.com/JanhaviGurav0709',
        'background:#1828CE;color:#F2F1EB;font-weight:bold;padding:4px 8px;',
        'color:inherit;padding:4px 0;',
        'color:#1828CE;padding:2px 0;'
    );
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderExperience();
    renderFeatured();
    renderAdditional();
    renderSkills();
    splitHeroName();

    setupTheme();
    setupNav();
    setupForm();
    setupMarquee();
    setupClock();
    setupScrolling();
    setupCtaTip();
    setupMagnetic();
    setupTilt();
    setupKineticName();
    consoleEgg();

    // Choreography that should wait for the boot screen to lift
    runBoot(() => {
        setupSpecCard();
        setupReveals();
        setupCounters();
        setupScramble();
    });
});
