import React, { Component, Fragment } from 'react';

// GraphQL/Apollo imports
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

// Create Query:
const LAUNCHES_QUERY = gql`
query LaunchesQuery {
    launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
    }
}
`;

/*
 * Execute the query and store it in data variable
 */
export default class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <MissionKey />
        <Query query={LAUNCHES_QUERY}>
            {
                ({loading, error, data}) => {
                    if (loading) return <h4>Loading...</h4>
                    if (error) console.log(error)
                    console.log('data', data);
                    return <Fragment>
                      {
                        data.launches.map((launch) => {
                          return <LaunchItem key={launch.flight_number} launch={launch} />
                        })
                      }
                    </Fragment>
                }
            }
        </Query>
      </Fragment>
    )
  }
}
