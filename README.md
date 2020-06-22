## Slack React Clone

This is a Slack clone built entirely with React, HTML and CSS. (data is not saved on the server, is browser only)<br>

Each conversation is preloaded with generated messages with random timestamps. New messages can be added, and are kept of course when navigating between conversations

It features:

- UseState hook to keep state (each conversation keeps its own state, and is "told" to display or hide by the app component)
- UseEffect hook for side effect to scroll to the bottom of the window.
- CSS only rules for all the layout (try resizing your window, you won't see any flickers or positioning after the fact). This includes full height layout, positioning the input below, and having the main window occupy the rest of the available space.
- The effects of hover and click on the sidebar are also CSS only.
