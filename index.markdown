---
layout: page
title: Home
---

# Recent Posts

<div class="post-cards-container">
  {% for post in site.posts %}
    {% include post-card.html post=post %}
  {% endfor %}
</div>
