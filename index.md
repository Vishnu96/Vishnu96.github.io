---
layout: default
title: Home
---

# Welcome to My Website

<div class="tab-container">
  <div class="tabs">
    <button class="tab-button active" data-tab="research">Research</button>
    <button class="tab-button" data-tab="publications">Publications</button>
    <button class="tab-button" data-tab="projects">Projects</button>
    <button class="tab-button" data-tab="cv">CV</button>
  </div>
  
  <div class="tab-content">
    <div id="research" class="content-section active">
      {% include research-content.html %}
    </div>
    <div id="publications" class="content-section">
      {% include publications-content.html %}
    </div>
    <div id="projects" class="content-section">
      {% include projects-content.html %}
    </div>
    <div id="cv" class="content-section">
      {% include cv-content.html %}
    </div>
  </div>
</div>