---
title: Om klubben
description: 'Oslo Sandvolleyballklubb organiserer turneringer og treninger for nybegynnere, etablerte og proffe spillere som vil ha et morsomt og sosialt forhold til sandvolleyball.'
media: '/assets/images/wilson.webp'
permalink: '/om-klubben/'
layout: default.njk
eleventyNavigation:
  key: Om klubben
---

Vi har som mål å legge til rette for et voksende sandvolleyballmiljø i Oslo. Vi brenner for å organisere [turneringer](#) og [treninger](#) for både etablerte spillere og nybegynnere, som vil ha et morsomt og sosialt forhold til en flott idrett!

{% set subpages = collections.all | eleventyNavigation("Om klubben")| sort(false, false, "data.order") %}

<ul class="panellist">
{% for entry in subpages %}
  <li class="panel">
    <a href="{{ entry.url }}">{{ entry.title }}</a>
  </li>
{% endfor %}
</ul>

<!-- <article class="teaser">
  <div>
    <h2><a href="#">Klubben søker fler som vil bidra</a></h2>
    <p>Hvor mange OSVB-ere trenger du for å organisere et stadig bedre tilbud til en stadig større klubb? Ikke vet vi, men vi vet at vi aldri kan få for mange flinke folk!</p>
  </div>
  <img src="/assets/images/good-boy.webp" alt=""> 
</article> -->

Ris, ros, spørsmål, gode og dårlige forslag kan rettes til [post@osvb.no](#). Vi kan også kontaktes på [Facebook](#).
