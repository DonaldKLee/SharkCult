# SharkHacks3

## By Donald Lee, Henry Zhou and Matthew Quock

## Inspiration
The inspiration behind the game comes from the shark theme given by the Hackathon. The gameplay is inspired by popular games such as Fruit Slash, and the idea of collecting sharks was inspired from popular Gacha games. We also decided to include Blahaj in the game because it’s a huge meme within MLH.

## What it does
When playing the game, wild sharks will jump out of the water, and you can tame them by clicking on them before they run away. You don’t need to tame every shark you see, but if you attempt to tame a shark and fail 10 times, the game will end! The faster the shark, the more points you will earn. When you click a shark, it shrinks, becoming smaller to give off cute vibes and goes back into the water and swims back and forth. The more sharks you tame, the more sharks you will have at the end, and the higher your score will be!
Additionally, a good reaction time and careful aim is essential to catch fast sharks. Don’t have that yet? Play more!

## How we built it
We used HTML, CSS and JavaScript to develop the front-end portion of the game. Javascript was used to dynamically create elements (spawn the sharks), make them move in a random direction, detect when the shark is clicked, remove non-clicked sharks, and detect when the user attempts to tame a shark but fails. CSS was heavily used to animate the sharks and ocean waves, but at the same time, to position elements and design the website. When the game ends, the user receives the option to add themselves and their score to the leaderboard. When the user adds themselves to the leaderboard, the data is processed through Python and then sent to our MongoDB database, hosted on Google Cloud.

As for our graphics, the sharks, clouds, and water were hand-drawn with ArtRage Lite. With the help of CSS animations, we were able to animate the water to look like there was a lot of water. The sharks were drawn to look cute and funny, and Figma was used to design the UI/UX design of Shark Cult. 

## Challenges we ran into
While we were developing the front-end, we had some trouble moving/formatting objects and texts around. This includes the animation of the waves and sharks. 

Additionally, since we weren’t familiar with JavaScript and don’t use it a lot for our own personal side projects, we found it difficult using it to dynamically create elements such as sharks; this includes applying event listeners such as “onclick” and “animationend.” Since we were more familiar with Python, we also found it difficult switching to Javascript, as the syntax was really different, and choosing a random item in a list with Python is a lot simpler than doing that with JavaScript; as a result, a lot of Googling and research was done to complete this project.

We also had a significant problem with developing the leaderboard because it was not displaying the data in the correct order. After hours of googling, we decided to reach out to a MLH mentor for help, who then guided us to solve this issue within minutes!

## Accomplishments that we’re proud of
 1. We created our first web-based game
 2. Hand drawing the sharks instead of taking them from the internet, as it was more fun to draw
 3. Our graphic designer’s first time adding his own drawings to a game, and also using CSS for the first time
 4. We used JavaScript extensively, a language we do not often use
 5. Although we had our challenges, we were able to pull through before the deadline with a fun project that we are proud of

## What we learned
 1. We learned group cooperation and time management
 2. We furthered our understanding of programming and web design
 3. We learned how to dynamically create elements alongside animations using JavaScript


## What’s next for Shark Cult
We plan to keep it up for a bit, asking our friends to try it out and give us their opinion. If we get positive reviews, we may start to improve upon the game by adding new features. Right now, we enjoy playing the game. We also have the one-year coupon, which gives us time to decide.
