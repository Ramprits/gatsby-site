import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link, graphql } from 'gatsby'

const UserPage = ({ data }) => (
  <Layout>
    <div className="container">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h2>Welcome Ramprit Sahani</h2>
      <ul>
        {data.allStrapiUser.edges.map(document => (
          <li key={document.node.id}>
            <h3>
              <Link to={`/${document.node.id}`}>{document.node.username}</Link>
            </h3>
            <p className="has-text-primary">{document.node.email}</p>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default UserPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiUser {
      edges {
        node {
          id
          username
          email
        }
      }
    }
  }
`
