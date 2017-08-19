export const skills = ['JavaScript', 'ES6', 'React', 'Redux',
'jQuery', 'HTML5', 'CSS3', 'SCSS', 'Webpack'];

export const projects = [
  {
    id: 12,
    title: 'Recipe Box',
    description: 'Free Code Camp React Project',
    goal: `User can create recipes that have names and ingredients.
    User can see an index view where the names of all the recipes are visible.
    User can click into any of those recipes to view it.
    User can edit these recipes. User can delete these recipes.
    All new recipes user adds are saved in browser's local storage. If user refreshes the page, these recipes will still be there.`,
    technologies: ['ES6', 'React', 'Redux', 'Material-UI'],
    href: 'https://gurugumawaru.github.io/FCC_recipe_box/',
    screenshotLink: 'https://res.cloudinary.com/gurugumawaru/image/upload/v1503127487/FCC_RecipeBox_resized_laqlnu.png',
    screenshotLabel: 'Recipe Box'
  },
  {
    id: 11,
    title: 'Camper Leaderboard',
    description: 'Free Code Camp React Project',
    goal: `User can see a table of the freeCodeCamp campers who've earned the most brownie points in the past 30 days.
    User can see how many brownie points they've earned in the past 30 days, and how many they've earned total.
    User can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total.`,
    technologies: ['ES6', 'React', 'Redux', 'SCSS'],
    href: 'https://gurugumawaru.github.io/FCC_camper_leaderboard/',
    screenshotLink: 'https://res.cloudinary.com/gurugumawaru/image/upload/v1501691208/FCC_Camper_Leaderboard_resized_of8hrf.jpg',
    screenshotLabel: 'Camper Leaderboard'
  },
  {
    id: 10,
    title: 'Markdown Previewer',
    description: 'Free Code Camp React Project',
    goal: `User can type GitHub-flavored Markdown into a text area.
    User can see a preview of the output of his or her markdown that is updated as he or she types`,
    technologies: ['ES6', 'React', 'Redux', 'SCSS'],
    href: 'https://gurugumawaru.github.io/FCC_markdown_previewer/',
    screenshotLink: 'https://res.cloudinary.com/gurugumawaru/image/upload/v1500576485/FCC_Markdown_Previewer_resized_og4gon.jpg',
    screenshotLabel: 'Markdown Previewer'
  },
  {
    id: 9,
    title: 'Simon Game',
    description: 'Free Code Camp Advanced Front-End Development Project',
    goal: `User is presented with a random series of button presses.
      Each time user inputs a series of button presses correctly,
      he/she sees the same series of button presses but with an additional step.
      User hears a sound that corresponds to each button both when
      the series of button presses plays, and when he/she personally
      presses a button. If user presses the wrong button,
      he/she is notified that he/she has done so, and that series of
      button presses starts again to remind user of the pattern so he/she
      can try again. User can see how many steps are in the current series
      of button presses. If user wants to restart, he/she can hit a button
      to do so, and the game will return to a single step. User can play
      in strict mode where if he/she gets a button press wrong, it notifies
      user that he/she has done so, and the game restarts at a new
      random series of button presses. User can win the game by getting
      a series of 20 steps correct. User is notified of his/her victory,
      then the game starts over.`,
    technologies: ['ES6', 'React', 'Redux'],
    href: 'https://gurugumawaru.github.io/FCC_Simon_Game/',
    screenshotLink: 'https://res.cloudinary.com/gurugumawaru/image/upload/v1499783455/FCC_Simon_Game_resized_gezwj9.jpg',
    screenshotLabel: 'Simon Game'
  },
  {
    id: 8,
    title: 'TicTacToe Game',
    description: 'Free Code Camp Advanced Front-End Development Project',
    goal: `Build a Tic Tac Toe Game. A user can play a game of Tic Tac
      Toe with the computer. User game will reset as soon as it's over so
      he/she can play again. User can choose whether to play as X or O.`,
    technologies: ['ES6', 'React', 'Redux'],
    href: 'https://gurugumawaru.github.io/FCC_ticTacToe/',
    screenshotLink: 'https://res.cloudinary.com/gurugumawaru/image/upload/v1498579433/FCC_TicTacToe_resized_kux8jv.png',
    screenshotLabel: 'TicTacToe Game'
  },
  {
    id: 7,
    title: 'Pomodoro App',
    description: 'Free Code Camp Advanced Front-End Development Project',
    goal: `Build a Pomodoro Clock. A user can start a 25 minute pomodoro,
      and the timer will go off once 25 minutes has elapsed.
      A user can reset the clock for his/her next pomodoro. A user can
      customize the length of each pomodoro.`,
    technologies: ['ES6', 'React', 'Redux'],
    href: 'https://gurugumawaru.github.io/FCC_pomodoro/',
    screenshotLink: 'https://res.cloudinary.com/gurugumawaru/image/upload/v1495016958/FCC_Pomodoro_Clock_resized_v7eext.png',
    screenshotLabel: 'Pomodoro App'
  },
  {
    id: 6,
    title: 'JavaScript Calculator',
    description: 'Free Code Camp Advanced Front-End Development Project',
    goal: `Build a JavaScript Calculator. A user can add, subtract,
      multiply and divide two numbers. A user can clear the input field
      with a clear button. A user can keep chaining mathematical operations
      together until he/she hits the equal button, and the calculator
      will tell him/her the correct output.`,
    technologies: ['ES6', 'React', 'Redux'],
    href: 'https://gurugumawaru.github.io/FCC_calculator/',
    screenshotLink: 'https://res.cloudinary.com/gurugumawaru/image/upload/v1493117490/FCC_Calculator_resized_olupov.png',
    screenshotLabel: 'JavaScript Calculator'
  },
  {
    id: 5,
    title: 'Twitchtv Viewer',
    description: 'Free Code Camp Intermediate Front-End Development Project',
    goal: `Use a Twitchtv JSON API to build an app. A user should see whether
      Free Code Camp is currently streaming. If a Twitch user is streaming,
      there should be additional details about what they are streaming.
      A placeholder notifiction should be displayed If a streamer has closed
      their Twitch account (or the account never existed).`,
    technologies: ['ES6', 'jQuery', 'React', 'SCSS'],
    href: 'https://gurugumawaru.github.io/FCC_twitch_tv/',
    screenshotLink: 'https://res.cloudinary.com/gurugumawaru/image/upload/v1493116898/FCC_Twitchtv_resized_o8ghsw.jpg',
    screenshotLabel: 'Twitchtv Viewer'
  },
  {
    id: 4,
    title: 'Wikipedia Viewer',
    description: 'Free Code Camp Intermediate Front-End Development Project',
    goal: `Build a Wikipedia Viewer. It should allow to search Wikipedia
      entries in a search box and see the resulting Wikipedia entries.
      There should be a button that can be clicked to get a random
      Wikipedia article.`,
    technologies: ['ES6', 'jQuery', 'React', 'SCSS'],
    href: 'https://gurugumawaru.github.io/FCC_wiki_viewer/',
    screenshotLink: 'https://res.cloudinary.com/gurugumawaru/image/upload/v1493112694/FCC_Wiki_Viewer_resized_r0fcmb.png',
    screenshotLabel: 'Wikipedia Viewer'
  },
  {
    id: 3,
    title: 'Local Weather App',
    description: 'Free Code Camp Intermediate Front-End Development Project',
    goal: `Build a Local Weather app. It should show weather at current location.
      There should be a different icon or background image depending on the
      weather. There must be a button to toggle between Fahrenheit and Celcius.`,
    technologies: ['ES6', 'jQuery', 'React', 'SCSS'],
    href: 'https://gurugumawaru.github.io/FCC_weather/',
    screenshotLink: 'https://res.cloudinary.com/gurugumawaru/image/upload/v1493111811/FCC_Weather-App_resized_2_x87yny.png',
    screenshotLabel: 'Local Weather App'
  },
  {
    id: 2,
    title: 'Random Quote Machine',
    description: 'Free Code Camp Basic Front-End Development Project',
    goal: `Build a Random Quote Machine. A user can click a button
      to show a new random quote. There is also a button that allows to tweet
      out a quote.`,
    technologies: ['JavaScript', 'jQuery', 'SCSS'],
    href: 'https://gurugumawaru.github.io/FCC_random_quotes/',
    screenshotLink: 'https://res.cloudinary.com/gurugumawaru/image/upload/v1493112050/FCC_Random-Quote_resized_2_gkowtc.png',
    screenshotLabel: 'Random Quote Machine'
  },
  {
    id: 1,
    title: 'Tribute Page',
    description: 'freeCodeCamp Basic Front-End Development Project',
    goal: `Build a Tribute Page with an image and text. It should also contain
      a link that takes user to an external website with further information on
      the topic.`,
    technologies: ['JavaScript', 'CSS', 'Bootstrap'],
    href: 'https://gurugumawaru.github.io/FCC_StephenKingTribute/',
    screenshotLink: 'https://res.cloudinary.com/gurugumawaru/image/upload/v1492425629/FCC_Stephen-King_resized_mgnfei.jpg',
    screenshotLabel: 'Tribute Page'
  },
];
