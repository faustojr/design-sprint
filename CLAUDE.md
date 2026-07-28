# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the **Design Sprint** guide—a collection of Markdown documents intended to help teams conduct design sprints based on Google Ventures' methodology. The repository is **DEPRECATED** and no longer maintained; users are directed to [The Sprint Book](https://www.thesprintbook.com/) for current best practices.

Despite its deprecated status, this repository remains a valuable historical reference and teaching resource for design sprint methodology. Contributions focus on:
- Adding case studies and real-world examples to `Previous-Sprints/`
- Fixing documentation issues (typos, broken links, clarity)
- Adding or improving exercises in the `Exercises/` folder
- No code changes—this is pure documentation

## Repository Structure

### Core Phase Documentation

The repository is organized around **five sequential design sprint phases**, each living in its own numbered directory:

- **`0-Pre-Sprint/`** — Preparation and setup before the sprint begins. Includes templates for client worksheets, role definitions, and resource gathering.
- **`1-Understand/`** — Day 1. Gather existing knowledge about the business, customer, and problem. Identify assumptions and knowledge gaps.
- **`2-Diverge/`** — Day 2. Generate as many solution ideas as possible, regardless of feasibility, to surface insights and alternatives.
- **`3-Converge/`** — Day 3. Narrow the possibilities to a single solution to prototype and test.
- **`4-Prototype/`** — Day 4. Build a prototype (paper, Keynote, HTML, etc.) to test riskiest assumptions.
- **`5-Test/`** — Day 5. Validate or invalidate assumptions through user testing.

Each phase directory contains:
- **`README.md`** — Overview of the phase, key concepts, and recommended activities
- **`Schedule.md`** — Example day-by-day timeline
- **`Materials/`** — Templates, worksheets, and reference documents

### Exercises

The **`Exercises/`** folder contains standalone guides for individual activities used across phases:
- `assumptions.md`, `back-burner.md`, `critical-path.md` — Understand phase exercises
- `crazy-eights.md`, `mind-mapping.md`, `storyboards.md` — Diverge phase exercises
- `silent-critique.md`, `group-critique.md` — Critique and convergence exercises
- `card-sorting.md`, `needs-wants-desires.md`, `five-whys.md`, etc. — Cross-phase tools

Each exercise file follows a consistent template: title, duration/timing, objective, step-by-step instructions, and tips.

### Previous Sprints

The **`Previous-Sprints/`** directory houses real-world case studies and examples. Each sprint example is a copy of the `Example-Month-Day-Year/` folder structure containing:
- `README.md` with sprint overview and outcomes
- Supporting assets (photos, artifacts, prototypes, documents)
- References linking back to relevant phases and exercises

## Content Patterns & Conventions

### Markdown Style

- Use **ATX headings** (`#`, `##`, `###`) for hierarchy
- Link to other phases and exercises using relative paths: `[Understand](../1-Understand)`, `[Five Whys](../Exercises/five-whys.md)`
- Use blockquotes (`>`) for tips, quotes, or callouts
- Keep paragraphs short and scannable
- Use bullet lists for steps and parallel ideas

### Exercise Documentation Template

When adding a new exercise, follow this structure:
```
# Exercise Name

**Duration:** X minutes  
**Best used in:** [Phase(s)]  
**Goal/Objective:** What teams learn or produce

## Instructions

1. Step one
2. Step two
3. Step three

## Tips

- Helpful hint
- Another tip

## Related Exercises

- [Related Exercise](path)
```

### Phase Documentation Template

Each phase README should cover:
- Opening statement (what this phase accomplishes)
- Key mindsets or principles for the phase
- List of recommended activities with brief descriptions
- Link to the example schedule
- When appropriate, link to pre-sprint or follow-up guidance

## Key Design Sprint Concepts

**Job to be Done** — The core problem or need the sprint is meant to solve. Should be defined before the sprint starts.

**Critical Path** — The main user story or flow that matters most to validate. Mapped collaboratively during Understand.

**Assumptions Board** — Running collection of unknowns and assumptions throughout the sprint, used to identify risks.

**Back-burner Board** — Ideas that are interesting but not immediately relevant to the current sprint; captured separately to avoid distraction.

**Mindsets:**
- **Diverge phase:** "Yes and" thinking; explore radically different approaches
- **Converge phase:** Ruthless elimination; move forward with confidence in fewer options
- **Understand phase:** Beginner's mind (Shoshin); ask obvious questions without preconceptions

## Contributing Guidelines

### Reporting Issues

Issues and improvements are tracked on [GitHub Issues](https://github.com/thoughtbot/design-sprint/issues/). Before opening an issue, search for existing ones to avoid duplicates.

**Types of contributions:**
- **Bug/Clarity fixes:** Typos, broken links, unclear instructions (label: `bug`)
- **New exercises:** Contribute to Understand, Diverge, or Converge phases
- **Case studies:** Add real-world examples to `Previous-Sprints/`
- **Major improvements:** Start with an issue for discussion before submitting a PR

### Pull Request Workflow

1. Create a topic branch for your changes
2. Make changes in the appropriate phase or Exercises folder
3. Squash commits into a single logical commit
4. Rebase against `origin/main` (or `origin/master` in older PRs)
5. Push to your fork and open a PR

For case studies: duplicate the `Previous-Sprints/Example-Month-Day-Year/` folder, update the README with sprint details and outcomes, add supporting materials, then reference the example from relevant phase READMEs.

## Important Notes

### Deprecation Status

This guide is **no longer maintained by thoughtbot**. The primary recommendation is to read [The Sprint Book](https://www.thesprintbook.com/) for current best practices. However, this repository remains valuable as:
- A historical reference showing how thoughtbot ran sprints
- A teaching tool for design sprint fundamentals
- A template for teams wanting to adapt the methodology

When suggesting improvements or adding content, acknowledge that foundational methodology is stable but best practices and advice should reference current sources.

### Related Resources

- [Google Ventures Sprint methodology](http://www.gv.com/sprint/)
- [thoughtbot Design Sprint blog post](http://robots.thoughtbot.com/the-product-design-sprint)
- [thoughtbot Playbook section](https://thoughtbot.com/playbook/product-design-sprint/introduction)
- [The Sprint Book](https://www.thesprintbook.com/) — **Primary recommended resource**
- [Gamestorming](http://gamestorming.com/) — Source of many exercises
- [IDEO Human-Centered Design Toolkit](http://www.ideo.com/work/human-centered-design-toolkit/)

### Design Sprint Trello Template

A companion [Trello template](https://trello.com/b/lMmuSlkP/public-design-sprint-template) exists for tracking sprint progress. It's referenced in the main README as a helpful tool for recording activities.

## Common Tasks for AI Assistants

**Fixing documentation:** Update READMEs with better explanations, fix broken links to external resources, correct typos and grammar.

**Adding exercises:** Create new exercise files in `Exercises/` following the template above, then reference them from relevant phase READMEs.

**Improving phase guidance:** Enhance phase README descriptions, add missing activity references, clarify timing and outcomes.

**Adding case studies:** Create a new folder in `Previous-Sprints/` with sprint documentation and outcomes, then link from relevant sections.

**Maintaining links:** Fix broken GitHub links (thoughtbot URLs, external resources) to keep the guide current.

All changes should preserve the structure, voice, and methodology outlined above. This is a living historical document, not a specification that needs modernizing.
