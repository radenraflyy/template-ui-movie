import { useState } from "react"
import LogoC from "./components/Logo"
import Input from "./components/Input"
import Info from "./components/Info"
import LayoutMovie from "./components/LayoutMovie"
import MovieList from "./components/MovieList"
import WatchedSummary from "./components/WatchedSummary"
import WatchedList from "./components/WatchedList"

// Data
import tempMovieData from "./utilities/datas/movieData"
import tempWatchedData from "./utilities/datas/watchedData"

export default function App() {
  const [query, setQuery] = useState("")
  const [movies] = useState(tempMovieData)
  const [watched] = useState(tempWatchedData)

  const handleSearchInput = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <nav className="nav-bar">
        <LogoC />
        <Input
          values={query}
          handleChange={handleSearchInput}
          typeInput={"text"}
          placeholder={"Search for a movie"}
        />
        <Info movies={movies} />
      </nav>

      <main className="main">
        <LayoutMovie element={<MovieList movies={movies} />} />
        <LayoutMovie
          element={
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} />
            </>
          }
        />
      </main>
    </>
  )
}
