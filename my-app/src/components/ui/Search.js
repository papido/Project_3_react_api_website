import React, { useState } from 'react'

const Search = ({ getValue }) => {
  const [text, setText] = useState('')

  const onChange = (v) => {
    setText(v)
    getValue(v)
  }

  return (
    <section className="Search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search
