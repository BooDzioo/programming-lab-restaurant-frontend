import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers } from '../../../../store/panel/actions';
import ErrorMessage from '../../../../components/ErrorMessage';
import './styles.css';
import styles from '../../styles';

const ListOfUsers = (props) => {
  useEffect(() => {
    props.getAllUsers();
  }, []);

  const showErrorMessage = () => {
    return (
      props.getAllUsersErrorMessage && <ErrorMessage message={props.getAllUsersErrorMessage} />
    );
  };

  const showTable = () => {
    if (props.usersList.length) {
      const keys = Object.keys(props.usersList[0]);
      const headers = (
        <tr>
          {keys.map((item, index) => {
            return <th key={index}>{item}</th>;
          })}
        </tr>
      );
      const content = props.usersList.map((user, index) => {
        return (
          <tr key={index}>
            {keys.map((item, index) => {
              return <td key={index}>{user[item]}</td>;
            })}
          </tr>
        );
      });
      return (
        <table>
          {headers}
          {content}
        </table>
      );
    }
  };

  console.log('getAllUsers', props.usersList, props.getAllUsersErrorMessage);
  return (
    <>
      <h1 style={styles.title}>LIST OF USERS</h1>
      {showTable()}
      {showErrorMessage()}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    usersList: state.panel.usersList,
    getAllUsersErrorMessage: state.panel.getAllUsersErrorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllUsers,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfUsers);
