<template>
  <v-container>
    <div style="min-width:296px; max-width:744px; margin:0 auto;">
      <v-card flat tile class="transparent" v-if="upcoming_events.length !== 0">
        <v-card-title class="py-0 pb-2">Upcoming Events</v-card-title>
      </v-card>
      <v-card
        v-for="(event, i) in upcoming_events"
        :key="i"
        :class="i + 1 !== upcoming_events.length && 'mb-3'"
        elevation="12"
      >
        <v-card-title class="pt-2">
          <router-link style="text-decoration:none" :to="event.to">{{ event.title }}</router-link>
        </v-card-title>
        <v-card-subtitle class="text-truncate">
          <v-icon x-small>mdi-calendar-range</v-icon>&nbsp;
          <span v-html="event.subtitle"></span>
        </v-card-subtitle>
        <v-card-text v-html="event.description" />
      </v-card>
      <v-card flat tile class="transparent" v-if="past_events.length !== 0">
        <v-card-title class="py-0 pb-2">Past Events</v-card-title>
      </v-card>
      <v-card
        v-for="(event, j) in past_events"
        :key="event.title"
        :class="j + 1 !== past_events.length && 'mb-3'"
        elevation="12"
      >
        <v-card-title v-text="event.title" class="pt-2">
          <router-link to="/">{{ event.title }}</router-link>
        </v-card-title>
        <v-card-subtitle class="text-truncate">
          <v-icon x-small>mdi-calendar-range</v-icon>
          <span v-html="event.subtitle"></span>
        </v-card-subtitle>
        <v-card-text v-html="event.description" />
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    upcoming_events: [
      {
        title: "On Golden Pond",
        to: "/on-golden-pond",
        subtitle: "April 3, 2020 &mdash; April 25, 2020",
        description: `
					Come and enjoy dinner and a show at <a target="_blank" href="https://alcoverestaurant.com/index.php/en/">The Alcove</a> where I will be featured as Bill in a <a target="_blank" href="https://www.mtvarts.com/">MTVarts</a> theatrical production of <a target="_blank" href="https://en.wikipedia.org/wiki/On_Golden_Pond_(play)">On Golden Pond</a>. Follow the <a target="_blank" href="https://alcoverestaurant.com/index.php/en/tickets/on-golden-pond">link</a> for showtimes and to purchase your tickets.`
      },
      {
        title: "It's Always the Quiet Ones",
        to: "/"
      }
    ],
    past_events: [
      // {
      //   title: "The Rehab Habit",
      //   to: "/"
      // },
      // {
      //   title: "Meaning",
      //   to: "/"
      // },
      // {
      //   title: "A Raisin in the Sun",
      //   to: "/"
      // }
    ]
  })
};
</script>
