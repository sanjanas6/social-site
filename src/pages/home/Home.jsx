import React from 'react'
import "./home.scss"
import Stories from '../../components/stories/stories'
import Posts from "../../components/posts/posts"

export default function Home() {
  return (
    <div className='home'>
      <Stories />
      <Posts />
      {/* <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1> */}
    </div>
  )
}