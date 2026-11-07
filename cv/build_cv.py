"""Harvard-style (single column, serif) resume for Sebastian Chacon.
Usage: python build_cv.py <output.pdf>  (needs reportlab: pip install reportlab)"""
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Table, TableStyle, Spacer, HRFlowable, ListFlowable, ListItem
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

F = "/System/Library/Fonts/Supplemental/"
pdfmetrics.registerFont(TTFont("Times", F + "Times New Roman.ttf"))
pdfmetrics.registerFont(TTFont("Times-B", F + "Times New Roman Bold.ttf"))
pdfmetrics.registerFont(TTFont("Times-I", F + "Times New Roman Italic.ttf"))
pdfmetrics.registerFont(TTFont("Times-BI", F + "Times New Roman Bold Italic.ttf"))
from reportlab.pdfbase.pdfmetrics import registerFontFamily
registerFontFamily("Times", normal="Times", bold="Times-B", italic="Times-I", boldItalic="Times-BI")

# ---------- content ----------
NAME = "SEBASTIAN CHACON"
CONTACT = ("Bound Brook, NJ &nbsp;•&nbsp; (848) 395-4806 &nbsp;•&nbsp; "
           '<a href="mailto:chacontsebastian@gmail.com">chacontsebastian@gmail.com</a>')
LINKS = ('<a href="https://mchacon.vercel.app">mchacon.vercel.app</a> &nbsp;•&nbsp; '
         '<a href="https://www.linkedin.com/in/mateo-chacon-4a45a52b2/">linkedin.com/in/mateo-chacon-4a45a52b2</a> &nbsp;•&nbsp; '
         '<a href="https://github.com/SebastianChacon">github.com/SebastianChacon</a>')

EDUCATION = [
    dict(org="Universidad Israel", location="Quito, Ecuador", title="Bachelor's Degree in Informatics", dates="June 2026", bullets=[]),
]

EXPERIENCE = [
    dict(org="Self-Employed", location="Remote", title="Freelance Full Stack Developer", dates="Jan 2026 – Present", bullets=[
        "Designed and shipped 4 production web applications for clients in loyalty, real estate, tech media, and web services, deployed on Vercel with custom domains.",
        "Built full-stack solutions with React 18, TypeScript, Supabase, Firebase, and Tailwind CSS, implementing authentication, real-time databases, and Row Level Security.",
        "Reduced API calls by ~60% on Inmuebles Latam with React Query server-state caching; applied Schema.org structured data and SEO best practices across client sites.",
    ]),
    dict(org="Punto593", location="Ecuador (Remote)", title="Full Stack Engineer", dates="Feb 2024 – Jan 2026", bullets=[
        "Core developer of Ganafy (ganafy.com), a multi-tenant SaaS loyalty platform with Apple Wallet and Google Wallet integration serving small businesses across Ecuador.",
        "Built the application with Svelte, TypeScript, Supabase, and PostgreSQL, including real-time point tracking, QR scanning, push notifications, and an analytics dashboard.",
        "Implemented multi-tenant architecture with Row Level Security, role-based access control, and automated wallet pass generation for iOS and Android.",
        "Developed the onboarding flow and admin dashboard that let businesses launch a loyalty program in under 10 minutes, plus marketing automation tools for client retention.",
    ]),
]

PROJECTS = [
    dict(org="Inmuebles Latam", location='<a href="https://inmuebleslatam.com">inmuebleslatam.com</a>',
         title="React 18, TypeScript, Vite, React Query, Zod, Vitest", bullets=[
        "Real estate directory with 500+ listings across Ecuador, Mexico, Colombia, and Peru; 50+ components, advanced filtering, and Schema.org SEO.",
    ]),
    dict(org="ZonaTech Latam", location='<a href="https://www.zonatechlatam.com">zonatechlatam.com</a>',
         title="Astro 5, React islands, Tailwind CSS 4, Sanity CMS", bullets=[
        "Tech news blog for Latin America using Astro partial hydration and Sanity as a headless CMS so editors publish without code changes.",
    ]),
    dict(org="HazMiWeb", location='<a href="https://hazmiweb.vercel.app">hazmiweb.vercel.app</a>',
         title="React, TypeScript, Supabase (Auth, PostgreSQL, RLS)", bullets=[
        "Web services platform with PostgreSQL schema design and Row Level Security for multi-user access control.",
    ]),
]

SKILLS = [
    ("Languages", "TypeScript, JavaScript (ES6+), SQL, HTML5, CSS3, Dart"),
    ("Frontend", "React 18, Next.js, Svelte, Vue.js, Astro 5, Flutter, Tailwind CSS, shadcn/ui"),
    ("Backend &amp; Data", "Supabase (PostgreSQL, Auth, RLS), Firebase (Auth, Firestore, Storage, Rules), Convex"),
    ("State &amp; Tooling", "React Query (TanStack), Zustand, React Hook Form, Zod, Vitest, Vite, Git, ESLint, Vercel, Sanity CMS"),
    ("Spoken Languages", "Spanish (native), English (conversational, actively improving)"),
    ("Work Authorization", "U.S. Permanent Resident (Green Card), no sponsorship required"),
]

# ---------- styles ----------
BASE = 10.5
def st(**k):
    base = dict(fontName="Times", fontSize=BASE, leading=BASE * 1.22)
    base.update(k)
    return ParagraphStyle("s", **base)
S_NAME = st(alignment=TA_CENTER, fontName="Times-B", fontSize=18, leading=22, spaceAfter=2)
S_CENTER = st(alignment=TA_CENTER, linkUnderline=False)
S_HEAD = st(fontName="Times-B", fontSize=11, leading=13, spaceBefore=9, spaceAfter=1)
S_BODY = st()
S_BOLD = st(fontName="Times-B")
S_ITAL = st(fontName="Times-I")
S_RIGHT = st(alignment=2)
S_RIGHT_I = st(alignment=2, fontName="Times-I")

doc = SimpleDocTemplate(sys.argv[1], pagesize=letter, leftMargin=0.6 * inch, rightMargin=0.6 * inch,
                        topMargin=0.5 * inch, bottomMargin=0.5 * inch,
                        title="Sebastian Chacon — Resume", author="Sebastian Chacon")
W = letter[0] - 1.2 * inch

def row(left, right, ls, rs):
    t = Table([[Paragraph(left, ls), Paragraph(right, rs)]], colWidths=[W * 0.68, W * 0.32])
    t.setStyle(TableStyle([("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                           ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                           ("VALIGN", (0, 0), (-1, -1), "TOP")]))
    return t

def bullets(items):
    return ListFlowable([ListItem(Paragraph(b, S_BODY), leftIndent=12, value="•") for b in items],
                        bulletType="bullet", start="•", leftIndent=12, bulletFontName="Times", bulletFontSize=BASE)

def section(title):
    return [Paragraph(title.upper(), S_HEAD), HRFlowable(width="100%", thickness=0.7, color="#000000", spaceBefore=1, spaceAfter=4)]

def entry(e, title_right_italic=True):
    out = [row(e["org"], e["location"], S_BOLD, S_RIGHT)]
    out.append(row(e["title"], e.get("dates", ""), S_ITAL, S_RIGHT_I))
    if e["bullets"]:
        out.append(Spacer(1, 1.5))
        out.append(bullets(e["bullets"]))
    out.append(Spacer(1, 5))
    return out

story = [Paragraph(NAME, S_NAME), Paragraph(CONTACT, S_CENTER), Paragraph(LINKS, S_CENTER)]
if EDUCATION:
    story += section("Education")
    for e in EDUCATION:
        story += entry(e)
story += section("Experience")
for e in EXPERIENCE:
    story += entry(e)
story += section("Projects")
for p in PROJECTS:
    story += entry(p)
story += section("Skills &amp; Additional")
for label, text in SKILLS:
    story.append(Paragraph(f"<b>{label}:</b> {text}", S_BODY))
    story.append(Spacer(1, 1.5))

doc.build(story)
