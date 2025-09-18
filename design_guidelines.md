# Design Guidelines for Jathukulan's Portfolio Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer portfolio leaders like Linear, Vercel, and premium design studios, focusing on sophisticated dark minimalism with strategic interactive elements.

## Core Design Elements

### Color Palette
**Dark Mode Primary**:
- Background: 12 8% 6% (Deep charcoal)
- Surface: 15 6% 12% (Elevated surfaces)
- Text Primary: 0 0% 98% (Near white)
- Text Secondary: 0 0% 65% (Muted text)
- Accent: 220 100% 60% (Professional blue)
- Border: 240 4% 16% (Subtle borders)

### Typography
- **Primary**: Inter (Google Fonts) - Clean, professional readability
- **Accent**: Poppins (Google Fonts) - Hero headings and emphasis
- **Hierarchy**: text-5xl/4xl (hero), text-2xl/xl (sections), text-base (body)

### Layout System
**Tailwind Spacing**: Focus on units 4, 8, 16, 24 for consistent rhythm
- Containers: max-w-6xl with px-8 for comfortable reading widths
- Sections: py-24 for generous vertical breathing room
- Components: p-8, gap-8 for internal spacing

### Component Library

**Navigation**: Fixed header with blur backdrop, minimal logo + hamburger menu
**Hero Section**: Large typography with typing animation, minimal supporting text
**Project Grid**: 2-column layout with hover-reveal overlays showing tech stack
**Magnetic Buttons**: Elastic pull effect on hover, rounded-lg styling
**Custom Cursor**: Subtle trail effect, scales on interactive elements
**Case Study Layout**: Hero → Problem → Process → Solution → Impact structure

### Interactive Elements
- **Preloader**: Animated "JK" initials with smooth fade-out
- **Scroll Animations**: Parallax hero elements, staggered card reveals
- **Magnetic Effects**: Buttons and key CTAs with elastic attraction
- **Hover States**: Subtle scale transforms, opacity shifts

### Content Strategy
**Sections** (5 maximum):
1. Hero with animated introduction
2. Featured projects grid (3-4 key projects)
3. About/Skills overview
4. Contact/CTA section
5. Footer with social links

**Projects Focus**: Quality over quantity - showcase 3-4 premium projects with detailed case studies rather than extensive galleries.

### Images
- **Hero**: No large hero image - focus on typography and animation
- **Project Thumbnails**: High-quality mockups/screenshots in project grid
- **Case Studies**: Process diagrams, before/after comparisons, user journey visuals
- **About Section**: Professional headshot (optional)

### Accessibility
- Reduced motion preferences respected
- High contrast ratios maintained
- Keyboard navigation support
- Screen reader optimization

**Key Principle**: Sophisticated minimalism - every element serves a purpose, animations enhance rather than distract, and the dark aesthetic creates premium feel while maintaining excellent readability.