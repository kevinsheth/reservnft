import { gql } from "@apollo/client"

const GET_MY_RESTAURANTS = gql`
    query MyRestaurants($ownerAddress: Bytes!) {
        restaurants(where: { owner: $ownerAddress }) {
            name
            businessAddress
            isActive
            id
        }
    }
`

const GET_ACTIVE_RESTAURANTS = gql`
    query ActiveRestaurants {
        restaurants(where: { isActive: true }) {
            name
            businessAddress
            isActive
            id
        }
    }
`

export default { GET_MY_RESTAURANTS, GET_ACTIVE_RESTAURANTS }
