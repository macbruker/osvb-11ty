---
title: Ukeplan
description: 'Oversikt over faste aktiviteter gjennom uka.'
permalink: '/ukeplan/'
layout: default.njk
eleventyNavigation:
  key: Ukeplan
---

Kommende turneringer og andre arrangementer finner du i [kalenderen](/kalender/).

<div class="schedule">
  {%- for day in schedule -%}
    <details{{ ' open' if (day.day | lower) === site.weekday }}>
      <summary>{{ day.day }}</summary>
      {%- if day.events -%}       
      <dl>
        {%- for event in day.events -%}
          <div>
          <dt>{{ event.timeslot }}</dt>
          {%- for group in event.groups -%}
            <dd>
              <span class="">{{ group.name }}</span><span class="sr-only">,</span> <span>Bane {{ group.court }}</span>
              {%- if group.info -%}
              <p><small>{{ group.info | markdownInline | safe }}</small></p>
              {%- endif -%}
            </dd>
          {%- endfor -%} 
         </div>
        {%- endfor -%}
      </dl>
      {%- endif -%}
      {%- if day.info -%}
      <p>{{ day.info | markdownInline | safe }}</p>
      {%- endif -%}
    </details>
  {%- endfor -%}
</div> 
