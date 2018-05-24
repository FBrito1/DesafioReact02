import React, { Component } from 'react';

import api from '../../services/api';

export default class IssuesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'all',
      loading: false,
      issues: []
    };
  }

  handleOptions = (event) => {
    this.setState({ selected: event.target.value }, async () => {

      const { name, organization } = this.props.currentRepository;

      try {
        const response = await api.get(`repos/${organization.login}/${name}/issues?state=${this.state.selected}`);
        console.log(response);
      } catch(err) {
        console.log(err);
      }  finally {
        this.setState({ loading: false })
      }
    });
  }

  render() {

    if(!this.props.currentRepository) {
      return null;
    }

    const { name, organization } = this.props.currentRepository;

    console.log(this.state.selected);

    return(
      <div>
      <header>
        <strong>{name}</strong>
        <small>{organization.login}</small>
        <select value={this.state.selected} onChange={this.handleOptions}>
          <option value="all">Todas</option>
          <option value="open">Abertas</option>
          <option value="closed">Fechadas</option>
        </select>
      </header>
      <ul>
        <li>oi</li>
      </ul>
    </div>
    );
  }
}



