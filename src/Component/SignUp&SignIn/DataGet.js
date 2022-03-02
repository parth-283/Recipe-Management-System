import React, { useEffect, useState } from "react"

const DataGet = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch(" http://localhost:4500/list")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DataGet
 