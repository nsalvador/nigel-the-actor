<template>
  <v-content class="blue-grey lighten-3">
    <v-container>
      <div style="min-width:296px; max-width:744px; margin:0 auto;">
        <v-card flat tile class="transparent">
          <v-card-title>Upcoming Events</v-card-title>
        </v-card>
        <v-card
          v-for="(event, i) in upcoming_events"
          :key="event.title"
          :class="i + 1 !== upcoming_events.length && 'mb-3'"
          elevation="12"
        >
          <v-card-title v-text="event.title" />
          <v-card-subtitle v-html="event.subtitle" class="text-truncate" />
          <v-card-text v-html="event.description" />
        </v-card>
        <v-card flat tile class="transparent" v-if="past_events.length !== 0">
          <v-card-title class="px-0">Past Events</v-card-title>
        </v-card>
        <v-card
          v-for="(event, j) in past_events"
          :key="event.title"
          :class="j + 1 !== past_events.length && 'mb-3'"
        >
          <v-card-title v-text="event.title"></v-card-title>
          <v-card-subtitle v-html="event.subtitle" class="text-truncate" />
          <v-card-text v-html="event.description" />
        </v-card>
      </div>
    </v-container>
  </v-content>
</template>

<script>
// import $clamp from 'clamp-js';

export default {
  // mounted() {
  // 	this.setLineClamp();
  // },
  // methods: {
  // 	setLineClamp() {
  // 		document.getElementsByClassName('v-card__text').forEach(card => {
  // 			$clamp(card, {
  // 				clamp: 4,
  // 				useNativeClamp: false,
  // 				truncationChar: '   ...   '
  // 			});
  // 		});
  // 	}
  // },
  data: () => ({
    upcoming_events: [
      {
        title: "On Golden Pond",
        subtitle:
          '<span class="font-weight-bold">Date:</span> April 3, 2020 &mdash; April 25, 2020',
        description: `
					Come and enjoy dinner and a show at <a target="_blank" href="https://alcoverestaurant.com/index.php/en/">The Alcove</a> where I will be featured as Bill in a <a target="_blank" href="https://www.mtvarts.com/">MTVarts</a> theatrical production of On Golden Pond. Follow the <a target="_blank" href="https://alcoverestaurant.com/index.php/en/tickets/on-golden-pond">link</a> for showtimes and to purchase your tickets.`
      }
      // {
      // 	title: 'When Your Soul Cries',
      // 	subtitle: 'Date: January 31, 2020 &mdash; February 2, 2020',
      // 	description:
      // 		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita alias fugiat cupiditate ad possimus quas veritatis enim voluptatem inventore culpa nihil voluptatum eligendi officiis vitae totam harum aliquam, dignissimos nemo!'
      // },
      // {
      // 	title: "It's Always the Quiet Ones",
      // 	subtitle: 'Date: January 31, 2020 &mdash; February 2, 2020',
      // 	description:
      // 		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis doloremque esse nam labore in, magnam deserunt repudiandae ab temporibus nulla neque placeat consequatur provident eveniet! Maxime ratione aperiam est inventore! Dolores distinctio ratione facilis adipisci nam, perspiciatis minima aperiam, assumenda enim quae, recusandae totam consectetur repudiandae fuga asperiores nisi deserunt.'
      // }
    ],
    past_events: [
      // 	{
      // 		title: 'The Rehab Habit',
      // 		subtitle: 'Date: January 31, 2020 &mdash; February 2, 2020',
      // 		description:
      // 			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi et fugiat! Eius asperiores nostrum modi nobis facilis magni, eveniet tempora aspernatur fugit quisquam, quis explicabo deserunt consectetur, exercitationem aut?'
      // 	},
      // 	{
      // 		title: 'Meaning',
      // 		subtitle: 'Date: January 31, 2020 &mdash; February 2, 2020',
      // 		description:
      // 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, numquam tempore impedit voluptatum sed pariatur exercitationem? Soluta animi eveniet vitae error velit dignissimos sunt repellat aliquam, doloribus praesentium quam. Harum ea ad sapiente dolorum sed accusamus laudantium reiciendis itaque fugiat molestiae? Libero, architecto, consequatur vero inventore saepe exercitationem quaerat quibusdam laborum officia qui fugit dolores obcaecati quam sunt commodi magnam perferendis? Eum delectus ea expedita qui optio tempore repellat deleniti, soluta quia aperiam voluptas totam minima vero nam exercitationem eligendi eaque impedit? Deleniti laborum voluptas, nulla unde quod itaque veniam eos, harum est ex magni rerum debitis aspernatur, reiciendis aliquam.'
      // 	},
      // 	{
      // 		title: 'A Raisin In The Sun	',
      // 		subtitle: 'Date: January 31, 2020 &mdash; February 2, 2020',
      // 		description:
      // 			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi et fugiat! Eius asperiores nostrum modi nobis facilis magni, eveniet tempora aspernatur fugit quisquam, quis explicabo deserunt consectetur, exercitationem aut?'
      // 	}
    ]
  })
};
</script>
