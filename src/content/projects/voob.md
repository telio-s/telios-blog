---
locale: "en"
translationKey: "voob"
title: "Voob"
description: "A personal language archive for saving words, expressions, quotes, and ideas discovered while reading, watching, or exploring the internet."
status: "Product project"
tags:
  - Product
  - SaaS
  - Language
  - Chrome Extension
public: true
featured: true
---

## Overview

Voob is a personal language archive for collecting words, sentences, expressions, quotes, and ideas that you discover while reading or exploring the internet.

A core part of Voob is making the experience between **reading and saving language feel seamless**. With the Voob Chrome Extension, users can highlight something directly on a webpage and save it without switching tabs, opening another application, or repeatedly copying and pasting text.

Instead of interrupting the reading experience, Voob is designed to stay close to the moment of discovery.

At the same time, Voob preserves more than just the word itself. It can keep the surrounding context what it means, where it came from, how it was used, and why it was worth saving.

The goal is to create a personal language archive that grows naturally from the things you already read, watch, and experience.

## Problem

When people discover an interesting word, expression, or sentence online, the usual workflow is fragmented.

They might search for the meaning in another tab, copy it into Notes, save a screenshot, bookmark the page, or simply assume they will remember it later.

Over time, these discoveries become scattered across different places or disappear completely.

Existing vocabulary tools often focus on memorization and repetition. But not everything we want to save needs to become a flashcard.

Sometimes we simply want to remember a phrase, understand how it was used, preserve where it came from, or keep something that expressed an idea particularly well.

## Why I Built It

Voob started from a behavior I already had: constantly discovering words, sentences, and expressions that I wanted to keep.

The problem was not finding definitions. Search engines and AI already make that easy.

The harder problem was preserving the discovery itself.

I wanted a place where language could be saved together with its context, meaning, examples, source, and personal significance, something closer to a personal language garden than a traditional vocabulary application.

## Product Approach

The product is designed around one simple behavior:

**Discover something → understand it → save it without breaking your flow.**

Reducing friction in this workflow is one of the main product priorities.

For example, the Voob Chrome Extension allows users to highlight something they discover on a webpage and save it directly without repeatedly switching between tabs or copying content into another application.

From there, Voob can gradually become a searchable archive of the language and ideas a person has collected over time.

## Key Decisions

- Position Voob as a personal language archive rather than another flashcard application.
- Preserve context around saved content instead of storing only a word and definition.
- Support more than individual words, including sentences, expressions, quotes, and phrases.
- Reduce the friction between discovering something and saving it.
- Design around natural browsing and reading behavior rather than forcing users into a separate learning workflow.
- Keep the core capture experience simple before expanding into deeper organization and learning features.

## Technical Approach

Voob is designed as a web product with a browser-extension experience that connects directly to the main application.

The Chrome Extension focuses on capturing content at the moment of discovery, while the application handles the user's saved collection, metadata, organization, and account data.

This creates an interesting technical challenge: the product needs to feel lightweight during capture while still maintaining reliable authentication, data ownership, API communication, and synchronization between different interfaces.

The architecture is therefore shaped not only by technical scalability, but also by how quickly a user can move from discovering something to saving it.

## What I Learned

Building Voob has reinforced that product problems are often hidden inside very small moments of friction.

The core problem was never that people lacked a place to type a word.

It was the number of steps between discovering something interesting and actually preserving it.

That changed how I think about product development. Instead of starting with a long feature list, I try to identify the behavior the product should make easier and design outward from that moment.

Voob is also where I continue exploring the intersection between software engineering, product thinking, user behavior, and building a product from zero.
