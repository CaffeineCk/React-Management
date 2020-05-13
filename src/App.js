import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '김현식',
  'birthday' : '961322',
  'gender' : '남',
  'job' : '대학생'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '김숙식',
  'birthday' : '961232',
  'gender' : '여',
  'job' : '프로그래머'
}
]
function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer 
              key = {c.id}
              id = {c.id} 
              image = {c.image} 
              name={c.name} 
              birthday={c.birthday} 
              gender={c.gender} 
              job = {c.job} >        
            </Customer>
          )
        })
      }
      
    </div>
  );
}

export default App;
