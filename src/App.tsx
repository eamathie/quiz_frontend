import { useState, useEffect } from 'react'
import './App.css'
import { fetchCategories } from './services/api/fetchCategories'
import { type Category } from './services/api/fetchCategories'
import { CategoryCard } from './components/CategoryCard'




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
          ? categories.map(q => <CategoryCard key={q.id} id={q.id} name={q.name} />)
          : <h2>Loading...</h2>
        }
      </div>
    </>
  )
}

export default App
