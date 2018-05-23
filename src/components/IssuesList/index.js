import React from 'react';

const IssuesList = ({ currentRepository }) => {
  if (!currentRepository) {
    return null;
  }

  const { name, organization } = currentRepository;

  return (
    <div>
      <header>
        <strong>{name}</strong>
        <small>{organization.login}</small>
        <p>Aqui vai o dropdown</p>
      </header>
      <ul>
        <li>Here Goes de Issues List</li>
      </ul>
    </div>
  );
};

export default IssuesList;
