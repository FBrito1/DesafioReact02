import React, { Component } from 'react';

import api from '../../services/api';
import { Container, SidePanel, Form } from './styles';
import RepositoriesList from '../../components/RepositoriesList';
import IssuesList from '../../components/IssuesList';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryInput: '',
    repositoryError: false,
    currentRepository: null,
    repositories: [],
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: '',
        currentRepository: repository,
        repositoryError: false,
        repositories: [...this.state.repositories, repository],
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <SidePanel>
          <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository} >
            <input
              type="text"
              value={this.state.repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
              placeholder="Novo Repositório"
            />
            <button type="submit">
              {this.state.loading ? <i className="fa fa-spinner fa fa-pulse" /> : '+'}
            </button>
          </Form>
          <hr />

          <RepositoriesList repositories={this.state.repositories} />
        </SidePanel>

        <IssuesList currentRepository={this.state.currentRepository} />

      </Container>
    );
  }
}

