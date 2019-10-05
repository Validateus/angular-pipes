import { Component } from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // e: number = Math.E
  //
  // str = 'hello world'
  //
  // date: Date = new Date()
  //
  // float = 0.42
  //
  // obj = {
  //   a: 1,
  //   b: {
  //     c: 2,
  //     d: {
  //       e: 3,
  //       f: 4
  //     }
  //   }
  // }

  // searchField = 'title'
  //
  // search = ''
  //
  // posts: Post[] = [
  //   {title: 'Beer', text: 'Самое лучшее пиво в мире'},
  //   {title: 'Bread', text: 'The best bread in the world'},
  //   {title: 'JavaScript', text: 'The best language in the world'}
  // ];
  //
  // addPost() {
  //   this.posts.unshift({
  //     title: 'Rome',
  //     text: 'Rome is greet!'
  //   })
  // }

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved')
    }, 4000)
  })

  date: Observable<Date> = new Observable(obs => {
    setInterval(() =>{
      obs.next(new Date())
    }, 1000)
  })
}
