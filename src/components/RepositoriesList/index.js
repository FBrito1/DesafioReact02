import React from 'react';
import PropTypes from 'prop-types';

const RepositoriesList = ({ repositories }) => (
  <div>
    { repositories.map(repository => (
      <div key={repository.id}>
        <h1>{repository.name}</h1>
      </div>
     )) }
  </div>
);

RepositoriesList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};

export default RepositoriesList;
