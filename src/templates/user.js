import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
const User = ({ data }) => {
  return (
    <React.Fragment>
      <Layout>
        <h1>{data.strapiUser.username}</h1>
        <p>{data.strapiUser.email}</p>
        <Link to="/users">Back</Link>
      </Layout>
    </React.Fragment>
  )
}

export default User

export const query = graphql`
  query UserTemplate($id: String) {
    strapiUser(id: { eq: $id }) {
      id
      username
      email
    }
  }
`
