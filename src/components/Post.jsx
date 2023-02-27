import {format } from 'date-fns';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, publisheadAt}){
    const publishedDateFormatted = format( publisheadAt, "d 'de' LLLL 'às' HH:mm'h'")
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="" dateTime= "2022-05-11 08:13:30">
                    {publishedDateFormatted}
                </time>
            </header>

            <div className={styles.content}>
            
            

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>

                <textarea 
                    placeholder='Deixe seu comentario'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

        </article>    
    )
}