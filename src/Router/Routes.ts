import Login from "../components/Login";
import AudioGame from "../pages/AudioGame";
import MainPage from "../pages/main/Main";
import SprintGame from "../pages/SprintGame";
import Statistic from "../pages/Statistic";
import Textbook from "../pages/Textbook";

export const routes = [
  { path: '/', element: MainPage },
  { path: '/textbook', element: Textbook },
  { path: '/audio-game', element: AudioGame },
  { path: '/sprint-game', element: SprintGame },
  { path: '/statistic', element: Statistic },
  { path: '/login', element: Login },
]