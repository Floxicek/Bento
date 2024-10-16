// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Floxicek",
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "38a41f7456f20b7d732d2fe082e6309d", // Write here your API Key
  weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "50.075539",
  defaultLongitude: "14.437800",

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "2",
      name: "Mail",
      icon: "mail",
      link: "https://outlook.live.com/",
    },
    {
      id: "3",
      name: "Keep",
      icon: "sticky-note",
      link: "obsidian://open?vault=Vejška",
    },
    {
      id: "4",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "5",
      name: "Reddit",
      icon: "users-round",
      link: "https://reddit.com",
    },
    {
      id: "6",
      name: "Youtube",
      icon: "youtube",
      link: "https://youtube.com/",
    },
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Music",
      icon: "headphones",
      link: "https://open.spotify.com",
    },
    {
      id: "2",
      name: "twitter",
      icon: "twitter",
      link: "https://twitter.com/",
    },
    {
      id: "3",
      name: "bot",
      icon: "bot",
      link: "https://discord.com/app",
    },
    {
      id: "4",
      name: "Amazon",
      icon: "shopping-bag",
      link: "https://amazon.com/",
    },
    {
      id: "5",
      name: "Hashnode",
      icon: "pen-tool",
      link: "https://hashnode.com/",
    },
    {
      id: "6",
      name: "Figma",
      icon: "figma",
      link: "https://figma.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "music",
      id: "1",
      links: [
        {
          name: "Study",
          link: "https://open.spotify.com/playlist/5DsDRtXyXpyL3czRTbsq1k?si=6caef805a315464b",
        },
        {
          name: "Vibe",
          link: "https://open.spotify.com/playlist/6BtWiubOnNULhEybIgCs48?si=88f48e6939b5446e",
        },
        {
          name: "-",
          link: "https://open.spotify.com/playlist/5DsDRtXyXpyL3czRTbsq1k?si=6caef805a315464b",
        },
        {
          name: "-",
          link: "https://open.spotify.com/playlist/6BtWiubOnNULhEybIgCs48?si=88f48e6939b5446e",
        },
      ],
    },
    {
      icon: "coffee",
      id: "2",
      links: [
        {
          name: "Linkedin",
          link: "https://www.linkedin.com",
        },
        {
          name: "Dribbble",
          link: "https://www.dribbble.com",
        },
        {
          name: "Trello",
          link: "https://www.trello.com",
        },
        {
          name: "Slack",
          link: "https://www.slack.com",
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "binary",
      id: "1",
      links: [
        {
          name: "Spotify",
          link: "https://www.spotify.com",
        },
        {
          name: "Reddit",
          link: "https://www.reddit.com",
        },
        {
          name: "-",
          link: "https://www.spotify.com",
        },
        {
          name: "-",
          link: "https://www.reddit.com",
        },
      ],
    },
    {
      icon: "github",
      id: "2",
      links: [
        {
          name: "Front",
          link: "https://www.reddit.com/r/Frontend/",
        },
        {
          name: "Rust",
          link: "https://www.reddit.com/r/rust/",
        },
        {
          name: "Go",
          link: "https://www.reddit.com/r/golang/",
        },
        {
          name: "Repos",
          link: "https://github.com/migueravila",
        },
      ],
    },
  ],
};
