---
locale: "en"
translationKey: "separate-request-from-outcome"
title: "Before Saying “It Can't Be Done,” Separate the Request into Four Parts"
description: "A request and its real goal may be different. This four-part framework helps developers and BAs find a smaller, safer solution that still delivers the business outcome."
publishedAt: 2026-09-23
category: "Business x Tech"
public: true
featured: false
readingTime: "5 min read"
---

I want to share a situation that almost every developer encounters when working with the business side.

Many of us have had a BA or PM ask for a change to a system or feature that is already complete. That can be painful because even a small request may affect several features that are already working and have passed testing.

But before saying, “It can't be done,” try separating the request into four parts.

Someone once asked me to make a particular flow work so another team could test it. The environment did not support that type of testing, which made the request much harder to carry out.

At first, I tried to find a direct way to do exactly what they had asked. But after reviewing the constraints, I found that

- The test environment did not support it
- Production was not an appropriate place to run the test
- Bypassing the existing flow could affect other parts of the system

If I looked only at the request, the answer could easily have become, “It can't be done.”

And if I forced the requested approach, I might have had to change a flow that was already developed and tested, while creating a new risk for parts of the system that were already working.

Before reaching that conclusion, I went back and asked a different question:

**“What is the goal of this work?”**

The answer was that the other team did not need to test the entire flow.

They only needed data in a particular status so they could test how their system retrieved and displayed it.

What looked like a large flow change became a small set of mock data. The other team could continue testing without putting the core system at risk.

That experience showed me that a request and its real goal may be two different things.

Before estimating or implementing the work, separate the request into four parts:

1. **What they asked**  
   What did they say they wanted us to do?
2. **Desired outcome**  
   What final result do they actually need?
3. **Constraints / risks**  
   Is the requested method constrained, time-consuming, or risky for the system?
4. **Smallest useful solution**  
   Is there a smaller and safer way to deliver the same result?

A requirement does not always need to become the exact implementation described in the first request.

The role of a developer or BA is not only to receive a request and quickly answer whether it can or cannot be done.

It is also to uncover the result the business truly needs and identify the solution that serves that goal best.

Before starting the next piece of work, ask one more question:

**“If we do not follow the requested method, can we still deliver the same outcome?”**

Sometimes that question can reduce time, risk, and rework while helping every team move forward faster.
