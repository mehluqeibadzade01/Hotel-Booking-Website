import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configureStore';
import { addBlog } from './actions/blogAction';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import '../src/assets/sass/style.css'
const store = configureStore();


store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch(addBlog({img:"https://duruthemes.com/demo/html/cappa/demo6-light/img/news/1.jpg",title:"Historic Restaruant  renovated",desc:"Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus dictum hendrerit quis vitae mi. Fusce eu nulla ac nisi cursus tincidun. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tristique sem eget leo faucibus porttitor."}));
store.dispatch(addBlog({img:"https://duruthemes.com/demo/html/cappa/demo6-light/img/news/2.jpg",title:"Spa Benefits",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam et dolorem, corporis consequatur nemo labore provident ratione reprehenderit ad maxime perspiciatis, veritatis tenetur saepe ipsa architecto optio molestias sed tempore, aspernatur harum quae voluptatem? Consectetur commodi nulla nostrum dignissimos!"}));
store.dispatch(addBlog({img:"https://duruthemes.com/demo/html/cappa/demo6-light/img/news/3.jpg",title:"Hotel Bathrooms Collections",desc:"Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus dictum hendrerit quis vitae mi. Fusce eu nulla ac nisi cursus tincidun. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tristique sem eget leo faucibus porttitor."}));
store.dispatch(addBlog({img:"https://duruthemes.com/demo/html/cappa/demo6-light/img/news/4.jpg",title:"Lose Weight With Fitness",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam et dolorem, corporis consequatur nemo labore provident ratione reprehenderit ad maxime perspiciatis, veritatis tenetur saepe ipsa architecto optio molestias sed tempore, aspernatur harum quae voluptatem? Consectetur commodi nulla nostrum dignissimos!"}));
store.dispatch(addBlog({img:"https://duruthemes.com/demo/html/cappa/demo6-light/img/news/6.jpg",title:"Retro Design",desc:"Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus dictum hendrerit quis vitae mi. Fusce eu nulla ac nisi cursus tincidun. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tristique sem eget leo faucibus porttitor."}));
store.dispatch(addBlog({img:"https://duruthemes.com/demo/html/cappa/demo6-light/img/news/5.jpg",title:"Benefit of Swimming for your Healthy",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam et dolorem, corporis consequatur nemo labore provident ratione reprehenderit ad maxime perspiciatis, veritatis tenetur saepe ipsa architecto optio molestias sed tempore, aspernatur harum quae voluptatem? Consectetur commodi nulla nostrum dignissimos!"}));
// const data = ['table','pen','copybook']
// console.log(...data);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <AppRouter/>

  </Provider>
  </React.StrictMode>
);

