import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository, Heading } from './styles';

const RepositoriesList = ({ repositories }) => (
  <Container>
    { repositories.map(repository => (
      <Repository key={repository.id}>
        <img src={repository.organization.avatar_url} alt="company-logo" />
        <Heading>
          <strong>{repository.name}</strong>
          <small>{repository.organization.login}</small>
        </Heading>
      </Repository>
     )) }
  </Container>
);

RepositoriesList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    organization: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }).isRequired,
  })).isRequired,
};

export default RepositoriesList;
