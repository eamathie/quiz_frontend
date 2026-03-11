import { useState, useEffect } from 'react'
import './App.css'
import { fetchQuestions } from './services/api/fetchQuestions'
import { fetchCategories } from './services/api/fetchCategories'
import { type Question} from './services/api/fetchQuestions'
import { type Category } from './services/api/fetchCategories'




function App() {
/*   const [questions, setQuestions] = useState<Question[]>([]);

  function handleClick() {
    fetchQuestions().then(data => {
      setQuestions(data.results);
      console.log(questions);
    })
  }
 */

  const [categories, setCategories] = useState<Category[]>([]);

  // fetch categories on start
  useEffect(() => {
    fetchCategories().then(data => {
      setCategories(data.trivia_categories);
      console.log(categories);
    })
  }, [])

  return (
    <>
      <div>
        <h1>Categories</h1>
      </div>

      <div>
        {categories.length > 0
          ? categories.map(q => <h3 key={q.name}>{q.name}</h3>)
          : <h2>Loading...</h2>
        }
      </div>
    </>
  )
}

export default App
