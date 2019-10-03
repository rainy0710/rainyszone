// 桌面端路由映射
import home from '../components/web/content/home.vue';
import note from '../components/web/content/note.vue';
import music from '../components/web/content/music.vue';
import movie from '../components/web/content/movie.vue';
import essay from '../components/web/content/essay.vue';

export default {
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/note',
      component: note
    },
    {
      path: '/music',
      component: music
    },
    {
      path: '/movie',
      component: movie
    },
    {
      path: '/essay',
      component: essay
    }
  ]
}

