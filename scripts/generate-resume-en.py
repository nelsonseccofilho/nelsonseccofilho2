"""Build the faithful English translation of the owner-supplied 2026 Portuguese CV.
Requires ReportLab. Run from any directory; writes only the English public PDF.
The Portuguese source is authoritative; do not add claims or infer qualifications.
"""
from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.colors import HexColor

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public/assets/resume/N3LX_EN.pdf"
styles = {
    "name": ParagraphStyle("Name", fontName="Helvetica-Bold", fontSize=18, leading=21, alignment=TA_CENTER, spaceAfter=2),
    "tagline": ParagraphStyle("Tagline", fontName="Helvetica-BoldOblique", fontSize=7.8, leading=10, alignment=TA_CENTER, spaceAfter=2),
    "contact": ParagraphStyle("Contact", fontName="Helvetica", fontSize=7.4, leading=9, alignment=TA_CENTER, spaceAfter=5),
    "section": ParagraphStyle("Section", fontName="Helvetica-Bold", fontSize=10, leading=12, textColor=HexColor("#225780"), spaceBefore=5, spaceAfter=2, keepWithNext=True),
    "job": ParagraphStyle("Job", fontName="Helvetica-Bold", fontSize=9.3, leading=11, spaceBefore=3, spaceAfter=0, keepWithNext=True),
    "meta": ParagraphStyle("Meta", fontName="Helvetica-Oblique", fontSize=8, leading=9.5, textColor=HexColor("#555555"), keepWithNext=True),
    "body": ParagraphStyle("Body", fontName="Helvetica", fontSize=8.3, leading=9.8, spaceAfter=1),
    "bullet": ParagraphStyle("Bullet", fontName="Helvetica", fontSize=8.3, leading=9.8, leftIndent=8, firstLineIndent=-6, spaceAfter=1),
}
story = []
def add(text, style="body"):
    story.append(Paragraph(text, styles[style]))
def section(text):
    add(text, "section")
def job(title, meta, bullets):
    add(title, "job")
    add(meta, "meta")
    for text in bullets:
        add("&#8226; " + text, "bullet")
def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(HexColor("#666666"))
    canvas.drawCentredString(306, 16, f"Nelson Secco Filho | Senior Product Designer | {doc.page}")
    canvas.restoreState()

add("Nelson Secco Filho", "name")
add("Senior Product Designer | Complex Systems | Product Discovery | Design Systems | Design × Engineering | AI-assisted Product Design", "tagline")
add('R. Canápolis, 552 - Vila Medeiros, São Paulo - SP, 02220-070 | +55 (12) 98124-1764 | nelsonseccofilho@gmail.com | <link href="https://www.linkedin.com/in/nelsonseccofilho/">LinkedIn</link> | <link href="https://nelsonsecco.netlify.app/en">Portfolio</link>', "contact")
section("PROFESSIONAL SUMMARY")
add("Senior Product Designer with over 8 years in UX and Product Design and a digital-product career that began in Front-end development. I work especially in contexts where the interface is only the visible part of the complexity: hospital operations, payment rules, industrial inspection, risk and credit, multiple systems, and different user profiles. My work starts with understanding the domain, people, and rules, turning that knowledge into journeys, flows, interfaces, and implementable product decisions. My technical background deepens collaboration with Engineering; today I also incorporate AI into analysis, critique, documentation, prototyping, and assisted implementation, keeping product decisions and quality criteria under human responsibility.")
section("SELECTED RESULTS")
add("<b>HORIZON HIS | Salux</b> - Led the design of a new hospital system from Discovery to executive validation in approximately three months; the experience was approved by leadership and presented at Hospitalar 2025.")
add("<b>DASA | Canal do Consultor</b> - Discovery with 37 interviewees, three NACs, four systems, and 290 research excerpts, consolidated into journeys and 57 rules/features for Product and Engineering.")
add("<b>REDE | Payments</b> - Designed the Dynamic Currency Conversion journey, subsequently implemented in the product, and contributed to the evolution of Maquininha 1.0, associated with an approximately 5% reduction in replacement logistics costs.")
section("SKILLS")
add("<b>Product &amp; Discovery:</b> Product Design | Product Discovery | UX Strategy | UX Research | Information Architecture | Journeys | User Flows | Usability Testing | Facilitation | Stakeholder Management")
add("<b>Systems &amp; Delivery:</b> Interaction Design | UI Design | Design Systems | Figma | Wireframes | Prototyping | Accessibility | Design Handoff | Agile / Scrum / Kanban")
add("<b>Design × Engineering &amp; AI:</b> AI-assisted Product Design | Functional prototyping | React | TypeScript | JavaScript | HTML/CSS | Git | Python and automation")
section("PROFESSIONAL EXPERIENCE")
job("N3LX Digital Business | Senior Product Designer &amp; UX Consultant", "Jan 2012 - Present | Independent work alongside formal positions | Caçapava, SP", [
"Work on B2B products, web platforms, and complex systems, connecting user needs, business goals, product rules, and technical feasibility from Discovery to handoff.",
"Use AI, assisted development, and automation to support analysis, critique, documentation, and prototyping, with human review of rules, states, and experience quality."])
job("Subiter | UX Lead / Senior Product Designer", "Sep 2025 - Jun 2026 | São José dos Campos, SP", [
"Evolved the Subiter Web Portal, a production platform connecting inspections, traceability, reports, and operational management, structuring architecture, flows, interfaces, components, and Design System practices.",
"Worked closely with Engineering, inspection specialists, and leadership; also contributed to AI experiences in the product, including conversational support and assisted use in reports and operational flows.",
"The digital foundation began supporting more complex operations, including an international operation in Ecuador, and my contribution received formal company recognition."])
job("Salux Technology | UX Lead", "Feb 2025 - Sep 2025 | São Paulo, SP", [
"Translated clinical specialists' knowledge into HORIZON HIS, structuring journeys, information architecture, flows, wireframes, interfaces, and a high-fidelity navigable prototype.",
"Created a UI Kit, components, accessibility patterns, and Figma documentation; the solution was validated by leadership and presented to the public at Hospitalar 2025.",
"Also contributed to process organization, supported Discovery for new products, and helped evolve UX practice and the Design System."])
job("Iterative | Senior Product Designer", "Mar 2024 - Dec 2024 | Remote | ConnectCar and Jive Mauá", [
"At ConnectCar, worked on the debit-payment experience in the app and web checkout, on a plan in partnership with iFood, and on the evolution of the FreeFlow Portal and administrative interfaces.",
"At Jive Mauá, conducted interviews, structured flows, and evolved interfaces for Intranet, Indie Asset Pro, and Jive Mauá Pay, as well as creating and evolving a UI Kit."])
story.append(PageBreak())
job("Môre Talent Tech | Senior Product Designer", "May 2021 - Aug 2023 | REDE and DASA | São Paulo, SP", [
"At REDE, designed the DCC journey for international Mastercard and Visa cards and contributed to the Maquininha 1.0 facelift, modernizing the interface and components while preserving the existing journey.",
"At DASA, worked on Discovery for a hospital operation distributed across people, processes, and four systems; 290 research excerpts were translated into journeys, interfaces, a backlog, and 57 rules/features."])
job("Bradesco and Bradesco Seguros | Senior Product Designer", "Oct 2020 - Mar 2022 | MJV Technology &amp; Innovation / Digital Business | São Paulo, SP", [
"Restructured the Meu Lar Mais Seguro experience and worked on products such as Vila PJ, Vila BIA, and Vila Brain, including journeys, conversational flows, and digital interfaces.",
"After the first consultancy's contract ended, Bradesco invited me to remain on the projects during the transition between vendors."])
job("Zappts | Product Designer", "Sep 2020 - May 2021 | Santander / Getnet / Auttar | São José dos Campos, SP", [
"Contributed to migrating Santander's FLAME Design System from Sketch to Figma, in partnership with The Cocktail, structuring and standardizing components and libraries.",
"At Auttar, contributed to a FLAME-based UI Kit and to structuring the Design Flow used to evolve products."])
job("TerraMagna | Product Designer", "Sep 2019 - Apr 2020 | São José dos Campos, SP", [
"Introduced UX practices in the evolution of the FIDES platform, incorporating interviews, journeys, flows, architecture, prototyping, and validation in the risk, credit, and agribusiness domain.",
"TerraMagna was subsequently recognized among the 100 Startups to Watch."])
job("NOALVO | UX Designer / UI Hacker", "Jan 2019 - Aug 2019 | São Paulo, SP", [
"Consolidated my transition from Front-end to UX/Product Design on an OOH media-buying platform, combining research, information architecture, maps, filters, and interaction patterns; NOALVO was subsequently recognized among the 100 Startups to Watch."])
job("Tinnova / Embraer | Full Stack Designer", "Feb 2017 - Dec 2018 | São José dos Campos, SP", [
"Worked across UX/UI and Front-end on digital products in the aerospace sector, from experience structure to implementation, bringing Design decisions closer to actual product behavior."])
job("Earlier Front-end experience", "2009 - 2017 | Youse Seguros, Slikland, Gráficos Burti, Dennova, Brasilis Marketing, and NetBiis", [
"Developed interfaces and web applications with HTML, CSS, JavaScript, and other web technologies - the technical foundation that now supports my collaboration across Product Design and Engineering."])
section("COMMUNITY")
add("<b>IxDA São José dos Campos | Volunteer | 2019-2023</b> - In-person participation in the local UX and Interaction Design community, supporting knowledge exchange and strengthening the Design ecosystem in São José dos Campos/SP.")
add("<b>GDG São José dos Campos | Co-organizer | 2018-2019</b> - Organized in-person meetups, invited speakers, and shared knowledge with the local technology community in São José dos Campos/SP.")
section("EDUCATION")
add("<b>Universidade Nove de Julho</b> - Information Systems | 2011-2014")
add("<b>Colégio Poeta Mario Quintana</b> - Technical qualification in Data Processing | 2001-2003")
section("LANGUAGES")
add("Native Portuguese | English - Professional Working | Basic Spanish")

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
doc = SimpleDocTemplate(str(OUTPUT), pagesize=(612, 792), rightMargin=36, leftMargin=36, topMargin=25, bottomMargin=32, title="Nelson Secco Filho - Senior Product Designer", author="Nelson Secco Filho", lang="en", pageCompression=1)
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
