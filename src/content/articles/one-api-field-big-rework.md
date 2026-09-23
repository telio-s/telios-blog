---
locale: "en"
translationKey: "one-api-field-big-rework"
title: "Why Adding One API Field Can Become Major Rework"
description: "A request for one additional field can affect everything from the database to business logic and tests. The real cost depends on how deeply the change touches the existing system."
publishedAt: 2026-09-23
category: "Business x Tech"
public: true
featured: false
readingTime: "4 min read"
---

Why does a developer say that adding just one API field requires changes in so many places?

Sometimes the business asks for one more field in an API response.

It may sound like a very small task—just a few extra lines of code.

But if the system has never stored that information before, the work may reach far beyond the API layer.

The developer may need to change the

- Database schema
- Migration
- Data model
- Query
- Business logic
- API contract
- Test cases

If the new field does not fit the existing data design, the team may even have to redesign part of the flow or data structure.

At this point, someone might ask: can't AI help with that now?

Redesign is exactly where AI cannot do everything for us.

Developers may use AI to help write much of their code today, but that does not remove the work of reviewing the output and protecting code quality.

A developer still has to examine what AI writes or proposes, choose an approach, and decide which trade-offs fit the project.

That is why the cost of a requirement change is not determined by how small the request sounds. It depends on how deeply the change touches the existing system.

This does not mean we should design the system to support every possible future need. Doing too much of that becomes over-engineering.

What actually helps reduce rework is discussing the requirement and clarifying the data before development begins.

Ask these questions first:

1. What information does the business actually need?
2. When is this data created, and who owns it?
3. Should it be stored in the database or calculated when the API is called?
4. Will any other flows need this information?
5. Which parts of the system could be affected by adding it?

Good requirement refinement does not make developers type code faster.

It reduces the time they spend returning to work that was already completed.

Every time developers have to rebuild existing work, the business pays an additional cost—and the team has less time and productivity available for creating new value.
