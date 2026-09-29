---
locale: "en"
translationKey: "ai-open-questions-not-assumptions"
title: "Don’t Let AI Fill Requirement Gaps—Make It Ask Open Questions"
description: "AI should not invent business rules to make a requirement look complete. It should generate tests from known facts and turn missing decisions into open questions before development begins."
publishedAt: 2026-09-29
category: "Business x Tech"
public: true
featured: false
readingTime: "5 min read"
---

An AI that can assemble any flow or requirement may be leading us in the wrong direction.

This becomes dangerous—a developer’s nightmare, honestly—when we use AI across the entire process from requirements to test cases.

Imagine a user story that says:

> As a customer, I want to cancel my booking so I can change my plans when needed.

Its acceptance criteria only says:

> The customer can cancel a booking before the service date.

If we simply prompt AI with:

> Create a complete set of test cases from this acceptance criterion.

It may immediately produce a flow that looks reasonable:

Click Cancel → Confirm → Status changes to Cancelled

The requirement now appears ready for implementation, but many important questions still have no answer:

- How many hours in advance must the customer cancel?
- What happens to the payment for a paid booking?
- Which booking statuses can be cancelled?
- Who has permission to cancel?

If AI invents those answers, the team may turn its assumptions into code and tests. That is where the developer nightmare begins.

The problem rarely appears while AI is producing its confident answer. It usually surfaces when QA tests the feature, when the business reviews it, or—worse—after people start using the system.

And then developers become the people who have to fix it.

That is why I prefer changing the prompt from:

> Create a complete set of test cases.

To:

> Create test cases using only the available information. If the information is insufficient, create an open question. Do not invent business rules.

Then ask AI to map the work like this:

**Acceptance Criteria → Test Case → Open Question**

A useful open question should say more than “information is missing.”

## 1. What rule is missing?

For example, the requirement does not define the latest time a customer may cancel.

## 2. What could happen if the team interprets it incorrectly?

The customer might cancel after the business has already prepared the service, or the system might refund the wrong amount under the wrong conditions.

## 3. What options could the business choose from?

For example, cancellation might be allowed up to 24 hours before the booking, until the service date begins, or only by an administrator after the deadline.

## 4. Who owns the business answer?

Questions about business rules should go back to the Product Owner or process owner. A developer or AI should not make that decision on their behalf.

Once the owner answers, record the answer as a decision, update the requirement, and then create test cases that verify the actual rule.

The flow becomes:

**Requirement → Acceptance Criteria → Test Case → Open Question → Decision**

What I like about this approach is that AI does not pretend to know everything.

AI handles what it can know, while people handle what it cannot know: the business rules and the decisions behind them.

It helps the team see what is still unknown before that ambiguity becomes code.

AI should help detect gaps in requirements, but the people responsible for the business must still make the decisions.

A polished answer built on a wrong assumption can waste time across development, testing, and rework.

Does your team’s prompt tell AI to “complete the answer,” or does it give AI permission to say, “There is not enough information yet”? Share how your team handles it.
