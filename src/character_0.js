const Character_0 = {
  player: 'me',
  characterSheet: {
    name: 'garfinkle',
    description: 'a cool guy with a disposition',
    refresh: 3,
    aspectList: ['aspect 1', 'aspect 2','aspect 3','aspect 4','aspect 5'],
    skillList: [
      'athletics',
      'burglary',
      'contacts',
      'crafts',
      'deceive',
      'drive',
      'empathy',
      'fight',
      'investigate',
      'lore',
      'notice',
      'physique',
      'provoke',
      'rapport',
      'resources',
      'shoot',
      'stealth',
      'will'
    ],
    stuntList: [
      'fast reload - when behind cover, you can reload and shoot using only 1 action',
      'dangerous roads ahead - when driving or riding in a vehicle on dangerous terrian, add +1 to rolls'
    ],
    stressList: {
      physical: ['X','X'],
      mental: ['X','X']
    },
    consequenceList: {
      mild: 'scrapes',
      moderate: 'hairline fracture - leg',
      severe: 'open leg wound'
    }
  }
}

export default Character_0;
