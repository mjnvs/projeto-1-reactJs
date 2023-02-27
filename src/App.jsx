import { Header } from './components/Header';
import { Post } from './Post';
import styles from './App.module.css';

import './global.css'
import { Sidebar } from './components/Sidebar';

export function App() {
  
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Post
        author="Marcelo Neves"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dolorum soluta omnis fuga vero ipsum iusto magni. Eum modi molestiae optio ducimus dolores, sequi a explicabo voluptatibus enim quas odit." 
      />

      <Post
        author="Marcelo Neves"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dolorum soluta omnis fuga vero ipsum iusto magni. Eum modi molestiae optio ducimus dolores, sequi a explicabo voluptatibus enim quas odit." 
      />
        </main>
      </div>
    </div>
  )
}


