# Traffic Light Application

Find the finished product at [http://lauren-transportation.surge.sh/](http://lauren-transportation.surge.sh/).

### Get Started

- `git clone https://github.com/laurenmbeatty/Transportation.git` - Clone the repository to your machine.
- `npm install` - Install the necessary dependencies.
- `npm run dev` - Start a local development server at [locahost:1234](http://localhost:1234).

### Other Useful npm scripts (see package.json for all npm scripts)

- `npm run lint` - Linting with eslint
- `npm run format` - Format with prettier 💄
- `npm run build` - Build the application for production 🏗️
- `npm run deploy` - Runs the build script and deploys to surge. Application is running at [http://lauren-transportation.surge.sh/](http://lauren-transportation.surge.sh/). Ship it! 🛳️

### Tech Stack

- [Parcel](https://parceljs.org/) as the bundler/build tool. 📦
- [React](https://reactjs.org/) as the frontend library. Note, this project was scaffolded/configured with a custom configuration, rather than using an out-of-the-box system like create-react-app.
- [styled-components](https://www.styled-components.com/) for modular CSS. 💅

### Tech Design/Process

- I've been inspired by David Khourshid's [recent work](https://medium.com/@DavidKPiano/xstate-version-4-released-665b59409f99) on defining UI's via state charts/state machines lately, and thought that would be a good approach here. It's thinking about the UI in an Elm-like way: given a certain action, the state of a component can transition from one state to another state.

- Step one was to get a traffic light up and running and changing it's state appropriately (left turn OK, left turn when able/traffic light green, traffic light yellow, traffic light red). This was straightforward.

- Step two was to figure out how to get the traffic lights to work in tandem. I realized I needed to think of my "machine" as focused on the intersection as a whole, rather than on the individual traffic light. I investigated "how a traffic light works" and found this [interesting/very complicated article](https://pdfs.semanticscholar.org/3490/85f6bb033d343436087723659e85b469a830.pdf) which had great images of the different "states" of an intersection. I "borrowed" those images for this application, and, most importantly, used that logic as the basis for the state transitions. The code ends up pretty verbose, but, I like that it is very explicit.

- I time-boxed myself to one day of work, as I didn't want to obsess over the challenge for days on end, as it is a very fun problem.

- The next step would be to implement a smarter intersection, where the main thoroughfare would be basically always on, and a pressure censor would detect cars arriving from the opposite direction, and trigger a change in the intersection state. Tricky! Instead of being able to just have one setInterval as the timer, it would require a different approach. Maybe when a car arrives, that triggers a different kind of message to be sent, which would allow the current cycle to finish, and then start a new cycle with the other traffic light. I'm thinking this would involve more than one state machine, probably a different one for each direction, and the "car arriving" message would switch between the two machines.

- A pedestrian arriving and clicking on a button would trigger a similar state change.

- Finally, this was a very fun challenge, so thank you! Please admire my cute pedestrian animation. 😀
