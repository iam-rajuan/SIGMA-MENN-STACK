import React from 'react'
import { useParams } from "react-router-dom";

const User = () => {
    const user = useParams()
  return (
    <div>
      I am user {user.username}
    </div>
  )
}

export default User
