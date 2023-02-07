import { useQuery,gql} from '@apollo/client'
import './App.css'
// import { useState } from 'react'
// import {Dialog} from "@reach/dialog"
import Render from "./Render"

const  GetGraphQuery = gql`
query {
  messages {
    items{
      id 
      subject
      type
      view_href
    }
    
  }
}
`

function App() {
  // const [Model, SetModel] = useState(false)
  // const open = () => SetModel(true)
  // const close = () => SetModel(false)


  const {error, loading, data} = useQuery(GetGraphQuery)

  if (error) <div>Error Message</div>
  if(loading) <div>...Loading</div>

  return (
    <>
    <h1>List</h1>
    {data &&
    data.messages.items.map(e => {
      return (
          <Render key= {e.id} msgList = {e} />
      )
    })
    
  }
  </>
  )
}

export default App
