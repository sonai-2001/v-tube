function getRandomLiveChatMessage() {
    const phrases = [
      'That was amazing!', 'Can’t believe that just happened!', 'Wow, what a moment!',
      'Who else is watching this live?', 'This stream is lit!', 'Let’s go!!!', 
      'I’ve been waiting for this!', 'Is anyone else excited?', 'What do you think about this?', 
      'Can’t wait for the next part!', 'This is my favorite channel!', 'Don’t forget to like and subscribe!',
      'Who’s here from the beginning?', 'This chat is crazy!', 'I love this community!', 
      'Shoutout to everyone watching!', 'This is the best stream ever!', 'Let’s get the hype going!',
      'Anyone else watching this at 3 AM?', 'This is so intense!', 'What a plot twist!',
      'Best stream ever!', 'I didn’t see that coming!', 'What a great performance!',
      'Loving the energy here!', 'This is why I love live streams!', 'The chat is on fire!',
      'Let’s keep the energy up!', 'This is epic!', 'I’m totally hooked!', 
      'I’m so glad I didn’t miss this!', 'This is going viral!', 'The content is so good!',
      'Can’t wait for more!', 'Who’s enjoying the stream?', 'The comments are hilarious!',
      'This is trending for sure!', 'Everyone needs to see this!', 'Just shared this with my friends!',
      'This is legendary!', 'Can’t get enough of this!', 'I’m coming back for more!',
      'This is blowing my mind!', 'So glad I’m here live!', 'This is what we’ve been waiting for!',
      'The host is killing it!', 'This is everything I needed today!', 'The quality is top-notch!',
      'Such a great vibe here!', 'This stream just made my day!', 'This deserves a million views!',
      'Can’t wait to see what’s next!', 'Who else is loving this?', 'This is so much fun!',
      'I’m here for this!', 'This is next level!', 'The chat is going wild!', 
      'I’m here every time they go live!', 'This content is gold!', 'The anticipation is real!',
      'This is pure entertainment!', 'The wait was worth it!', 'I’m all in!', 
      'Who’s hyped right now?', 'This is incredible!', 'Just dropped a like!', 'This is a masterpiece!',
      'Who’s with me on this?', 'The best part is coming up!', 'The production value is insane!',
      'I’m so happy right now!', 'The chat is the best part!', 'This is a banger!',
      'I’ve been waiting all day for this!', 'Can’t believe I’m watching this live!', 'The reaction is priceless!',
      'So much respect for the creator!', 'This is the content we need!', 'Let’s keep the chat positive!',
      'This is going to be talked about for a while!', 'Everyone’s reaction is awesome!', 
      'This is why I’m subscribed!', 'The excitement is real!', 'I’m living for this!',
      'So many great moments!', 'This is breaking the internet!', 'I’m having so much fun!',
      'I’m here till the end!', 'The energy is unmatched!', 'Who else is loving the music?',
      'This is too good to miss!', 'I’m hyped!', 'This is exactly what I needed!',
      'Everyone’s in such a good mood!', 'The chat is the best community!', 'I can’t stop watching!',
      'This deserves all the likes!', 'This is blowing up!', 'So glad I tuned in!',
      'The creator is on fire!', 'This is a game changer!', 'Loving every second!',
      'This is what live streaming is all about!', 'Everyone’s so engaged!', 'The chat is moving so fast!',
      'This is pure gold!', 'The energy is contagious!', 'This is iconic!',
      'This is why I love this channel!', 'The vibe here is amazing!', 'So much love for this!',
      'This is the best stream I’ve seen in a while!', 'The excitement is infectious!',
      'This is what I call entertainment!', 'The chat is hilarious!', 'I’m glued to the screen!',
      'The content is top-tier!', 'This is a must-watch!', 'Can’t wait for the next stream!',
      'This is the highlight of my day!', 'So many epic moments!', 'The chat is going crazy!',
      'I’m loving every minute!', 'This is a classic in the making!', 'This is too good!',
      'The hype is real!', 'I’m so glad I’m here!', 'This is amazing content!',
      'The chat is electric!', 'I’m obsessed with this stream!', 'This is the best thing I’ve watched all week!'
    ];
  
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return randomPhrase;
  }
  
  // Example usage:
  export default getRandomLiveChatMessage  