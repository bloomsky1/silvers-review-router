// =====================================================================
//  REVIEW ROUTER SETTINGS  -  the only file you ever need to edit.
//  Edit in GitHub, commit, and Vercel redeploys in ~30 seconds.
// =====================================================================
window.REVIEW_CONFIG = {

  // ---- Percentage split across the 5 Google profiles -------------------
  // THIS decides which profile a customer is sent to.
  // They're weights, so they don't have to add to 100. Set one to 0 to pause it.
  split: {
    fishers:    35,   // Fishers           - 14 reviews  - biggest revenue market
    east:       30,   // E Raymond St      - 0 reviews   - new profile, needs the most help
    whitestown: 15,   // Whitestown        - 11 reviews
    north:      10,   // W 96th St (main)  - 254 reviews - already strong
    west:       10    // W Minnesota St    - 82 reviews  - a review or two
  },

  // ---- "What did we do for you?" question -------------------------------
  // Shown first. The answer does NOT pick the profile (the split above does).
  // It only changes the wording on the thank-you screen.
  // Optional: add  split: { fishers: 50, east: 50 }  to one option to give
  // that service its own percentages.
  askService: true,
  serviceOptions: [
    { label: "Driveway",                mention: "your new driveway" },
    { label: "Patio or porch",          mention: "your new patio" },
    { label: "Stamped concrete",        mention: "your stamped concrete" },
    { label: "Asphalt or sealcoating",  mention: "your asphalt work" },
    { label: "Sport court",             mention: "your new court" },
    { label: "Something else",          mention: "" }
  ],

  // This many stars or more = "Thank you" screen. Fewer = "We're sorry" screen.
  // Both screens offer the Google review link.
  happyMinStars: 4,

  // ---- Google profiles (place IDs from Google Maps, Nov 18 2026) --------
  profiles: {
    north:      { name: "Silvers Concrete and Paving, LLC (W 96th St)",      reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJDdCAU0WrFIgRuQgJueE0p3g" },
    west:       { name: "Silvers Concrete and Paving (W Minnesota St)",      reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ4-T08TZZa4gR3PWnrwrEH80" },
    fishers:    { name: "Silvers Concrete and Paving - Fishers",             reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJyX2V4dKzFIgRv0Ict_K0VVE" },
    whitestown: { name: "Silvers Concrete and Paving - Whitestown",          reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJdyuTa1hyCWwRxxsOGWouFCo" },
    east:       { name: "Silvers Concrete and Paving (E Raymond St)",        reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ6xLY7DZFa4gRjTp7K0PHSXo" }
  },

  // A link with ?p= in it skips the split and goes straight to that profile.
  // Other words that can go in ?p= and which profile they mean.
  aliases: {
    main: "north", "96th": "north", indy: "north", indianapolis: "north", carmel: "north",
    minnesota: "west", westside: "west",
    raymond: "east", eastside: "east",
    zionsville: "whitestown", boone: "whitestown"
  },

  // Used if anything above is broken, so a link never dead-ends.
  fallbackProfile: "north",

  // Shown on the "We're sorry" screen. (Main line from the website.)
  callLabel: "Call us",
  phoneDisplay: "(317) 835-8991",
  phoneTel: "+13178358991",
  // Set showText to false if this number can't receive text messages.
  showText: true,
  textTel: "+13178358991"
};
