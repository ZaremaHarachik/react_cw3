// 1 Отримати всі пости з jsonplaceholder та вивести їх. До кожного поста зробити кнопку ,при натисканні
// якої виводиться більш детальна інформація про пост в середині Posts компоненти.

// 2 Отримати всі коментарі з jsonplaceholder та вивести їх. До кожного комента зробити кнопку, при натисканні
// якої виводиться більш детальна інформація про коментар в середині Comments компоненти.

import './App.css';
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

export default function App() {
  return (
    <div>
    <Posts/>
      <Comments/>
    </div>
  );
}


