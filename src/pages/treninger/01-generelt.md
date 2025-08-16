---
title: Treninger
description: 'Det du trenger å vite om treninger på Voldsløkka.'
permalink: '/treninger/'
layout: default.njk
eleventyNavigation:
  key: Treninger
---

{% set subpages = collections.all | eleventyNavigation("Treninger")| sort(false, false, "data.order") %}

Treningstilbudet vårt er delt inn i følgende målgrupper:

<ul class="panellist">
{% for entry in subpages %}
  <li class="panel">
    <a href="{{ entry.url }}">{{ entry.title }}</a>
    <span>{{ entry.excerpt }}</span>
  </li>
{% endfor %}
</ul>

## Påmelding
Spond benyttes for påmelding og administrasjon. Alle som ønsker treninger gjennom OSVB er nødt til å skaffe seg Spond-appen, opprette profil og bli med i riktig gruppe før sesongstart.

Alle MÅ være meldt inn i klubben og ha [betalt medlemskontingent i Spond](https://club.spond.com/landing/signup/osvb) før treningene starter.


### Spond-gruppe for trening
* Gutter: ZNHCD
* Jenter: ECPZE


## Trenere

Også i år er vi heldige og har fått med svært dyktige trenere. 

### Kristian Trydal 
<!-- Kristian er hovedtrener. Med sin erfaring fra tidligere år er vi overbevist om at han vil gjøre en veldig god jobb i år igjen! Han kan kontaktes på tlf: 466 94 075 eller e-post til trydal.kf@gmail.com. -->

### Bendik Huus

### Espen Sørum

### Vegard Høidalen



