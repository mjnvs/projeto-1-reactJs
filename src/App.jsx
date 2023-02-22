import { Header } from './components/Header';
import { Post } from './Post';
import './styles.css'

export function App() {
  
  return (
    <div>
      <Header/>
      <Post
        author="Marcelo Neves"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dolorum soluta omnis fuga vero ipsum iusto magni. Eum modi molestiae optio ducimus dolores, sequi a explicabo voluptatibus enim quas odit." 
      />
    </div>
  )
}


